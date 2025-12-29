<?php
include_once 'config.php';

$data = json_decode(file_get_contents("php://input"));

if (
  !empty($data->username) &&
  !empty($data->email) &&
  !empty($data->password)
) {
  // Check if email exists
  $query = "SELECT id FROM users WHERE email = :email LIMIT 1";
  $stmt = $conn->prepare($query);
  $stmt->bindParam(":email", $data->email);
  $stmt->execute();

  if ($stmt->rowCount() > 0) {
    http_response_code(400);
    echo json_encode(["message" => "Email already registered."]);
  } else {
    // Create user
    $query = "INSERT INTO users (username, email, password, role) VALUES (:username, :email, :password, 'user')";
    $stmt = $conn->prepare($query);

    $password_hash = password_hash($data->password, PASSWORD_BCRYPT);

    $stmt->bindParam(":username", $data->username);
    $stmt->bindParam(":email", $data->email);
    $stmt->bindParam(":password", $password_hash);

    if ($stmt->execute()) {
      http_response_code(201);
      echo json_encode(["message" => "User registered successfully."]);
    } else {
      http_response_code(503);
      echo json_encode(["message" => "Unable to register user."]);
    }
  }
} else {
  http_response_code(400);
  echo json_encode(["message" => "Incomplete data."]);
}
