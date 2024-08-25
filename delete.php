<?php
include 'DB.php';

$response = array('status' => 'error', 'message' => 'Unknown error');

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $id = $_POST['course_id'];

    $sql = "DELETE FROM user_courses WHERE id = ?";
    $stmt = $conn->prepare($sql);
    if ($stmt === false) {
        $response['message'] = "Prepare failed: " . $conn->error;
        echo json_encode($response);
        exit;
    }

    $stmt->bind_param("i", $id);

    if ($stmt->execute()) {
        if ($stmt->affected_rows > 0) {
            $response['status'] = 'success';
            $response['message'] = 'Course deleted successfully.';
        } else {
            $response['message'] = 'No record found with that ID.';
        }
    } else {
        $response['message'] = 'Error executing query: ' . $stmt->error;
    }

    $stmt->close();
    $conn->close();

    echo json_encode($response);
}
