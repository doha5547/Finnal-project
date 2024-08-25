<?php
header('Content-Type: text/html; charset=utf-8');
include('DB.php');

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $username = $_POST['username'];
    $newPassword = password_hash($_POST['password'], PASSWORD_BCRYPT); 

    $query = $conn->prepare('UPDATE `users` SET password = ? WHERE username = ?');
    $query->execute([$newPassword, $username]);

    echo "Password has been updated successfully.";

} else {
    echo "Error updating password.";
}
