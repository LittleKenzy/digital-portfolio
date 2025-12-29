<?php
include_once 'config.php';

$data = json_decode(file_get_contents("php://input"));

if (!empty($data->email) && !empty($data->password)) {
  $query = "SELECT id, username, email, password, role FROM users WHERE email = :email LIMIT 1";
  $stmt = $conn->prepare($query);
  $stmt->bindParam(":email", $data->email);
  $stmt->execute();

  if ($stmt->rowCount() > 0) {
    $row = $stmt->fetch(PDO::FETCH_ASSOC);
    if (password_verify($data->password, $row['password'])) {

      // Should return a JWT token in a real app, but we'll return user info for simulation
      // Security Warning: In production, never return ID or internal fields directly without a token strategy.
      // For this portfolio, we stick to simple session emulation.

      $avatar = "https://ui-avatars.com/api/?name=" . $row['username'] . "&background=00f2ff&color=000";

      $user_data = [
        "id" => $row['id'],
        "username" => $row['username'],
        "email" => $row['email'],
        "role" => $row['role'],
        "avatar" => $avatar
      ];

      http_response_code(200);
      echo json_encode([
        "message" => "Login successful.",
        "user" => $user_data,
        "token" => "mock-jwt-" . time()
      ]);
    } else {
      http_response_code(401); // Unauthorized
      echo json_encode(["message" => "Invalid password."]);
    }
  } else {
    http_response_code(401); // Unauthorized
    echo json_encode(["message" => "Email not found."]);
  }
} else {
  http_response_code(400);
  echo json_encode(["message" => "Incomplete login data."]);
}
