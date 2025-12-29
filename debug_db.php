<?php
include 'public/api/config.php';

echo "--- USERS ---\n";
$stmt = $conn->query("SELECT id, username, role FROM users");
while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
  echo "User: " . $row['username'] . " | Role: " . $row['role'] . "\n";
}

echo "\n--- MESSAGES ---\n";
try {
  $stmt = $conn->query("SELECT * FROM contact_messages");
  $count = 0;
  while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
    echo "Msg ID: " . $row['id'] . " | Name: " . $row['name'] . "\n";
    $count++;
  }
  if ($count == 0) echo "No messages found.\n";
} catch (Exception $e) {
  echo "Error fetching messages: " . $e->getMessage() . "\n";
}
