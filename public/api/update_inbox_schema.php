<?php
include_once 'config.php';

try {
  // Add columns if they don't exist
  $columns = $conn->query("DESCRIBE contact_messages")->fetchAll(PDO::FETCH_COLUMN);

  if (!in_array('reply', $columns)) {
    $conn->exec("ALTER TABLE contact_messages ADD COLUMN reply TEXT DEFAULT NULL");
    echo "Added 'reply' column.\n";
  }

  if (!in_array('replied_at', $columns)) {
    $conn->exec("ALTER TABLE contact_messages ADD COLUMN replied_at TIMESTAMP NULL DEFAULT NULL");
    echo "Added 'replied_at' column.\n";
  }

  if (!in_array('user_id', $columns)) {
    $conn->exec("ALTER TABLE contact_messages ADD COLUMN user_id INT DEFAULT NULL");
    echo "Added 'user_id' column.\n";
  }

  if (!in_array('user_read', $columns)) {
    $conn->exec("ALTER TABLE contact_messages ADD COLUMN user_read TINYINT(1) DEFAULT 0");
    echo "Added 'user_read' column.\n";
  }

  echo "Table schema updated successfully.";
} catch (PDOException $e) {
  echo "Error: " . $e->getMessage();
}
