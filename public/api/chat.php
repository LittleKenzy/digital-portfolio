<?php
include_once 'config.php';

$method = $_SERVER['REQUEST_METHOD'];

if ($method == 'GET') {
  // 1. Update Activity
  $activeUser = isset($_GET['active_user']) ? $_GET['active_user'] : null;
  if ($activeUser) {
    $updateStmt = $conn->prepare("UPDATE users SET last_active = NOW() WHERE username = :username");
    $updateStmt->bindParam(":username", $activeUser);
    $updateStmt->execute();
  }

  // 2. Fetch Messages with User Roles
  $query = "SELECT m.*, u.role FROM messages m LEFT JOIN users u ON m.username = u.username ORDER BY m.created_at ASC";
  $stmt = $conn->prepare($query);
  $stmt->execute();
  $allMessages = $stmt->fetchAll(PDO::FETCH_ASSOC);

  $parents = [];
  $replies = [];

  // Separate parents and replies
  foreach ($allMessages as $msg) {
    $formattedMsg = [
      'id' => $msg['id'],
      'username' => $msg['username'],
      'role' => $msg['role'], // Added role
      'avatar' => $msg['avatar'] ?? 'https://ui-avatars.com/api/?name=Guest',
      'text' => $msg['message'],
      'image' => $msg['image'],
      'userId' => 'db-' . $msg['username'],
      'timestamp' => $msg['created_at'],
      'replies' => []
    ];

    if (isset($msg['parent_id']) && $msg['parent_id']) {
      $replies[$msg['parent_id']][] = $formattedMsg;
    } else {
      $parents[] = $formattedMsg;
    }
  }

  // Attach replies to parents
  foreach ($parents as &$parent) {
    if (isset($replies[$parent['id']])) {
      $parent['replies'] = $replies[$parent['id']];
    }
  }

  // 3. Fetch Online Users (Active in last 30 seconds)
  $onlineQuery = "SELECT username FROM users WHERE last_active > DATE_SUB(NOW(), INTERVAL 30 SECOND)";
  $onlineStmt = $conn->prepare($onlineQuery);
  $onlineStmt->execute();
  $activeRows = $onlineStmt->fetchAll(PDO::FETCH_ASSOC);

  $onlineUsers = [];
  foreach ($activeRows as $row) {
    $onlineUsers[] = [
      'username' => $row['username'],
      'avatar' => "https://ui-avatars.com/api/?name=" . $row['username'] . "&background=00f2ff&color=000"
    ];
  }

  echo json_encode([
    "messages" => $parents,
    "online_users" => $onlineUsers
  ]);
}

if ($method == 'POST') {
  // Post new message
  $data = json_decode(file_get_contents("php://input"));

  // Check if we have a user AND (some text OR an image)
  // Use slightly looser check for message to allow '0' string, but require at least one of message/image
  $hasText = isset($data->message) && strlen(trim($data->message)) > 0;
  $hasImage = !empty($data->image);

  if (!empty($data->username) && ($hasText || $hasImage)) {
    $query = "INSERT INTO messages (username, avatar, message, image, parent_id) VALUES (:username, :avatar, :message, :image, :parent_id)";
    $stmt = $conn->prepare($query);

    $messageContent = isset($data->message) ? $data->message : "";
    $parentId = isset($data->parent_id) ? $data->parent_id : null;

    $stmt->bindParam(":username", $data->username);
    $stmt->bindParam(":avatar", $data->avatar);
    $stmt->bindParam(":message", $messageContent);
    $stmt->bindParam(":image", $data->image);
    $stmt->bindParam(":parent_id", $parentId);

    if ($stmt->execute()) {
      echo json_encode(["message" => "Message sent."]);
      exit();
    } else {
      http_response_code(503);
      echo json_encode(["message" => "Unable to send message."]);
      exit();
    }
  } else {
    http_response_code(400);
    echo json_encode(["message" => "Incomplete data. Messsage or Image required."]);
    exit();
  }
}

if ($method == 'DELETE') {
  $data = json_decode(file_get_contents("php://input"));

  if (!empty($data->id) && !empty($data->username)) {
    // 1. Check Role
    $roleQuery = "SELECT role FROM users WHERE username = :username LIMIT 1";
    $roleStmt = $conn->prepare($roleQuery);
    $roleStmt->bindParam(":username", $data->username);
    $roleStmt->execute();
    $userRow = $roleStmt->fetch(PDO::FETCH_ASSOC);
    $isAdmin = $userRow && $userRow['role'] === 'admin';

    // 2. Execute Delete based on role
    if ($isAdmin) {
      $query = "DELETE FROM messages WHERE id = :id";
      $stmt = $conn->prepare($query);
      $stmt->bindParam(":id", $data->id);
    } else {
      $query = "DELETE FROM messages WHERE id = :id AND username = :username";
      $stmt = $conn->prepare($query);
      $stmt->bindParam(":id", $data->id);
      $stmt->bindParam(":username", $data->username);
    }

    if ($stmt->execute()) {
      if ($stmt->rowCount() > 0) {
        echo json_encode(["message" => "Message deleted.", "isAdmin" => $isAdmin]);
        exit();
      } else {
        http_response_code(403);
        echo json_encode(["message" => "Not found or unauthorized."]);
        exit();
      }
    } else {
      http_response_code(503);
      echo json_encode(["message" => "Unable to delete message."]);
      exit();
    }
  } else {
    http_response_code(400);
    echo json_encode(["message" => "Incomplete data."]);
    exit();
  }
}
