<?php
include 'DB.php';
header('Content-Type: application/json');

$response = array('status' => 'error', 'message' => 'Unknown error');

if (isset($_GET['course_id'])) {
    $courseId = $_GET['course_id'];
    $sql = "SELECT * FROM `user_courses` WHERE `id` = ?";
    $stmt = $conn->prepare($sql);
    if ($stmt === false) {
        $response['message'] = "Error preparing statement: " . $conn->error;
        echo json_encode($response);
        exit;
    }
    $stmt->bind_param("i", $courseId);
    $stmt->execute();
    $result = $stmt->get_result();
    $course = $result->fetch_assoc();

    if ($course) {
        $response['status'] = 'success';
        $response['data'] = $course;
    } else {
        $response['message'] = "No course found with ID $courseId";
    }
}

echo json_encode($response);

