<?php
include_once 'config.php';

// DEBUG LOGGING
file_put_contents("debug_log.txt", date('Y-m-d H:i:s') . " - Request: " . $_SERVER['REQUEST_METHOD'] . " - URI: " . $_SERVER['REQUEST_URI'] . "\n", FILE_APPEND);


$method = $_SERVER['REQUEST_METHOD'];

// Helper to check admin role
function isAdmin($username, $conn)
{
  if (!$username) return false;
  $stmt = $conn->prepare("SELECT role FROM users WHERE username = :username LIMIT 1");
  $stmt->bindParam(":username", $username);
  $stmt->execute();
  $user = $stmt->fetch(PDO::FETCH_ASSOC);
  return $user && $user['role'] === 'admin';
}

if ($method === 'POST') {
  // Handle specific actions via query param or just default to create
  // If 'action' is set in body, handle update/delete? 
  // Typically POST is for creation. JSON payload.
  $data = json_decode(file_get_contents("php://input"));

  // Check if it's a specific action
  if (isset($data->action)) {
    // Actions that do NOT require Admin privileges (or have their own checks)
    if ($data->action === 'user_mark_read') {
      // Anyone can mark a message as read if they know the ID (simple for now)
      $stmt = $conn->prepare("UPDATE contact_messages SET user_read = 1 WHERE id = :id");
      $stmt->bindParam(":id", $data->id);
      $stmt->execute();
      echo json_encode(["message" => "Marked as read"]);
      exit; // Exit after handling this action
    }

    if ($data->action === 'user_reply') {
      // Append user reply to existing message thread and reset status to unread for owner
      $stmt = $conn->prepare("UPDATE contact_messages SET message = CONCAT(message, '\n\n--- Replying back ---\n', :new_message), status = 'unread' WHERE id = :id");
      $stmt->bindParam(":new_message", $data->message);
      $stmt->bindParam(":id", $data->id);
      $stmt->execute();
      echo json_encode(["message" => "Reply sent to thread"]);
      exit;
    }

    // Actions requiring Admin privileges
    if (in_array($data->action, ['mark_read', 'mark_replied', 'delete', 'reply'])) {
      if (!isAdmin($data->admin_username, $conn)) {
        http_response_code(403);
        echo json_encode(["message" => "Unauthorized"]);
        exit;
      }

      if ($data->action === 'reply') {
        $stmt = $conn->prepare("UPDATE contact_messages SET reply = :reply, replied_at = NOW(), status = 'replied', user_read = 0 WHERE id = :id");
        $stmt->bindParam(":reply", $data->reply);
        $stmt->bindParam(":id", $data->id);
        $stmt->execute();
        echo json_encode(["message" => "Reply sent"]);
      } elseif ($data->action === 'mark_read' || $data->action === 'mark_replied') {
        $status = ($data->action === 'mark_read') ? 'read' : 'replied';
        $stmt = $conn->prepare("UPDATE contact_messages SET status = :status WHERE id = :id");
        $stmt->bindParam(":status", $status);
        $stmt->bindParam(":id", $data->id);
        $stmt->execute();
        echo json_encode(["message" => "Status updated"]);
      } elseif ($data->action === 'delete') {
        $stmt = $conn->prepare("DELETE FROM contact_messages WHERE id = :id");
        $stmt->bindParam(":id", $data->id);
        $stmt->execute();
        echo json_encode(["message" => "Message deleted"]);
      }
    }
  } else {
    // Create new message
    if (!empty($data->name) && !empty($data->email) && !empty($data->message)) {
      $user_id = isset($data->user_id) ? $data->user_id : null;

      $stmt = $conn->prepare("INSERT INTO contact_messages (user_id, name, email, message) VALUES (:user_id, :name, :email, :message)");
      $stmt->bindParam(":user_id", $user_id);
      $stmt->bindParam(":name", $data->name);
      $stmt->bindParam(":email", $data->email);
      $stmt->bindParam(":message", $data->message);

      if ($stmt->execute()) {
        echo json_encode(["message" => "Message sent successfully"]);
      } else {
        http_response_code(500);
        echo json_encode(["message" => "Failed to send message"]);
      }
    } else {
      http_response_code(400);
      echo json_encode(["message" => "Incomplete data"]);
    }
  }
} elseif ($method === 'GET') {
  $username = isset($_GET['username']) ? $_GET['username'] : '';
  $user_id = isset($_GET['user_id']) ? $_GET['user_id'] : '';
  $action = isset($_GET['action']) ? $_GET['action'] : '';

  // User fetching their own messages
  if ($action === 'my_messages' && !empty($user_id)) {
    $stmt = $conn->prepare("SELECT * FROM contact_messages WHERE user_id = :user_id ORDER BY created_at DESC");
    $stmt->bindParam(":user_id", $user_id);
    $stmt->execute();
    $messages = $stmt->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode($messages);
  }
  // Admin fetching all
  elseif (isAdmin($username, $conn)) {
    $stmt = $conn->prepare("SELECT * FROM contact_messages ORDER BY created_at DESC");
    $stmt->execute();
    $messages = $stmt->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode($messages);
  } else {
    http_response_code(403);
    echo json_encode(["message" => "Unauthorized access"]);
  }
}
