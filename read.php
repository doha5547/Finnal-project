<?php
session_start();
include 'DB.php';

header('Content-Type: application/json');

if (isset($_SESSION['user_id'])) {
    $user_id = $_SESSION['user_id'];

    $sql = "SELECT * FROM `user_courses` WHERE `user_id` = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("i", $user_id);
    $stmt->execute();
    $result = $stmt->get_result();

    $courses = [];

    while ($row = $result->fetch_assoc()) {
        $courses[] = $row;
    }

    echo json_encode($courses);
} else {
    echo json_encode(["error" => "User not logged in."]);
}
