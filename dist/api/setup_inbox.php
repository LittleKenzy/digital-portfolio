<?php
include_once 'config.php';

try {
  $sql = "CREATE TABLE IF NOT EXISTS contact_messages (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        email VARCHAR(100) NOT NULL,
        message TEXT NOT NULL,
        status ENUM('unread', 'read', 'replied') DEFAULT 'unread',
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )";
  $conn->exec($sql);
  echo "Table contact_messages created successfully.";
} catch (PDOException $e) {
  echo $sql . "<br>" . $e->getMessage();
}
