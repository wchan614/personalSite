<?php
session_start();

// Processing form data when form is submitted
if($_SERVER["REQUEST_METHOD"] == "POST"){
    // Set all data to guest
    
    //update wordMemoryScores
    $sql = "UPDATE wordMemoryScores SET isGuest = TRUE WHERE LOWER(username) = :username";
    if($stmt = $db->prepare($sql)){
        $stmt->bindParam(":username", $param_username, PDO::PARAM_STR);
        $param_username = trim(strtolower($_SESSION["username"]));
        if ($stmt->execute()) {
            // pass
        }
        else {
            echo "Something went wrong. Please try again later.";
        }
    }

    // update numberMemoryScores
    $sql = "UPDATE numberMemoryScores SET isGuest = TRUE WHERE LOWER(username) = :username";
    if($stmt = $db->prepare($sql)){
        $stmt->bindParam(":username", $param_username, PDO::PARAM_STR);
        $param_username = trim(strtolower($_SESSION["username"]));
        if ($stmt->execute()) {
            // pass
        }
        else {
            echo "Something went wrong. Please try again later.";
        }
    }
    // Delete account
    $sql = "DELETE FROM users WHERE id = :id";
    if($stmt = $db->prepare($sql)){
        $stmt->bindParam(":id", $param_id, PDO::PARAM_INT);
        $param_id = $_SESSION["id"];
        if ($stmt->execute()) {
            session_destroy();
            header("location: ../logout.php");
            exit();
        }
        else {
            echo "Something went wrong. Please try again later.";
        }
    }
}

?>