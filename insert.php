<?php
header('Content-Type: text/html; charset=utf-8');
include 'DB.php';
session_start();

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $CourseCode = $_POST['course_code'] ?? '';
    $Subject = $_POST['course_name'] ?? '';
    $Hours = $_POST['course_hours'] ?? '';
    $GPA = $_POST['GPA'] ?? '';

    if (empty($CourseCode) || empty($Subject) || empty($Hours) || empty($GPA)) {
        echo "Error: One or more fields are not set.";
        exit;
    }

    if (!isset($_SESSION['user_id'])) {
        echo "Error: User not logged in.";
        exit;
    }

    $userId = $_SESSION['user_id'];

    $sql = "INSERT INTO `user_courses`(`id`, `Code`, `Subject`, `Grade`, `Hours`, `user_id`) VALUES (NULL, ?, ?, ?, ?, ?)";
    $stmt = $conn->prepare($sql);
    if ($stmt === false) {
        echo "Error preparing statement: " . $conn->error;
        exit;
    }
    $stmt->bind_param("sssis", $CourseCode, $Subject, $GPA, $Hours, $userId);

    if ($stmt->execute()) {
        header("Location: ../Dashboard.html");
        exit();
    } else {
        echo "Error: " . $stmt->error;
    }
}

