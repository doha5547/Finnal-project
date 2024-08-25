<?php
include('DB.php');

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $username = $_POST['username'];

    $query = $conn->prepare('SELECT * FROM `users` WHERE username = ?');
    $query->execute([$username]);
    $user = $query->fetch();

    if ($user) {
        echo json_encode([
            'status' => 'success',
            'message' => 'User exists. Please enter a new password.'
        ]);
    } else {
        echo json_encode([
            'status' => 'error',
            'message' => 'Username not found.'
        ]);
    }
}
