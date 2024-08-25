<?php
include 'DB.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $id = $_POST['course_id'];
    $name = $_POST['course_name'];
    $grade = $_POST['GPA'];

    $sql = "SELECT * FROM user_courses WHERE id = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("i", $id);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows === 0) {
        die("Record with ID $id does not exist.");
    }

    $row = $result->fetch_assoc();
    $currentCode = $row['Code'];
    $currentSubject = $row['Subject'];
    $currentHours = $row['Hours'];
    $currentGrade = $row['Grade'];

    $sql = "UPDATE user_courses SET Subject = ?, Grade = ? WHERE id = ?";
    $stmt = $conn->prepare($sql);
    if ($stmt === false) {
        die("Prepare failed: " . $conn->error);
    }

    $stmt->bind_param("ssi", $name, $grade, $id);

    if ($stmt->execute()) {
        if ($stmt->affected_rows > 0) {
            header("Location: ../Dashboard.html");
            exit();
        } else {
            echo "No record updated. The record may not exist or the new values may be the same as the existing values.";
        }
    } else {
        echo "Error updating record: " . $stmt->error;
    }

    $stmt->close();
    $conn->close();
}
