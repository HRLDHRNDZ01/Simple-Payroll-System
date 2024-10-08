<?php
require __DIR__ . '/db_connection.php'; // Include your database connection

header('Content-Type: application/json'); // Set header for JSON response

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    // Get form data
    $username = $_POST['username'];
    $password = $_POST['password'];

    // Prepare and execute SQL statement to find the user by username
    $stmt = $pdo->prepare("SELECT * FROM users WHERE username = ?");
    $stmt->execute([$username]);
    $user = $stmt->fetch();

    // Check if user exists
    if ($user) {
        // Check if the password matches
        if (password_verify($password, $user['password'])) {
            echo json_encode(['status' => 'success', 'message' => "Login successful! Welcome, " . htmlspecialchars($user['username'])]);
        } else {
            echo json_encode(['status' => 'error', 'message' => "Invalid username or password."]);
        }
    } else {
        echo json_encode(['status' => 'error', 'message' => "Invalid username or password."]);
    }
}
?>
