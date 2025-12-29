<?php
include_once 'config.php';

$username = "Owner";
$email = "owner@kenzy.com";
$password = "admin123";
// Hash password
$hashed_password = password_hash($password, PASSWORD_BCRYPT);

// Check if owner exists
$query = "SELECT id FROM users WHERE email = :email";
$stmt = $conn->prepare($query);
$stmt->bindParam(":email", $email);
$stmt->execute();

if ($stmt->rowCount() > 0) {
  // Update existing to admin
  $query = "UPDATE users SET role = 'admin' WHERE email = :email";
  $stmt = $conn->prepare($query);
  $stmt->bindParam(":email", $email);
  if ($stmt->execute()) {
    echo json_encode(["message" => "Existing user updated to Admin/Owner. Login with owner@kenzy.com / admin123"]);
  }
} else {
  // Create new admin
  $query = "INSERT INTO users (username, email, password, role) VALUES (:username, :email, :password, 'admin')";
  $stmt = $conn->prepare($query);
  $stmt->bindParam(":username", $username);
  $stmt->bindParam(":email", $email);
  $stmt->bindParam(":password", $hashed_password);

  if ($stmt->execute()) {
    echo json_encode(["message" => "Admin/Owner account created. Login with owner@kenzy.com / admin123"]);
  } else {
    echo json_encode(["message" => "Failed to create admin."]);
  }
}
