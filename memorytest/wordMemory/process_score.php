<?php 


// CHANGE THIS LATER -- CURRENTLY GENERATES RANDOM SCORE FOR TESTING


// Processing form data when form is submitted

if($_SERVER["REQUEST_METHOD"] == "POST"){ 
    $score = 0;
    if (isset($_POST['gameScore'])) {
        $score = $_POST['gameScore'];
    }
    else {
        echo "Oops! Something went wrong.";
        header("location: ../dashboard.php");
        exit;
    }
    $sql = "INSERT INTO wordMemoryScores (username, score, isGuest) VALUES 
                (:username, :score, :isGuest)";
    if ($stmt = $db->prepare($sql)) {
            // Bind variables to the prepared statement as parameters
            $stmt->bindParam(":username", $param_username, PDO::PARAM_STR);
            $stmt->bindParam(":score", $param_score, PDO::PARAM_INT);
            $stmt->bindParam(":isGuest", $param_isGuest, PDO::PARAM_BOOL);
            
            // Set parameters if you're a guest
            if (isset($_SESSION["guest"]) && $_SESSION["guest"] === TRUE) {
                $param_username = "Guest";
                $param_score = $score;
                $param_isGuest = TRUE;
            }
            // else you're registed user
            else {
                $param_username = $_SESSION["username"];
                $param_score = $score;
                $param_isGuest = FALSE;
            }
            // Attempt to execute the prepared statement
            if($stmt->execute()){
                // Redirect to login page
                $_SESSION["submit_score"] = TRUE;
                header("location: ../dashboard.php");
            } else{
                echo "Oops! Something went wrong submitting your score. Please try again later.";
            }
            // Close statement
            unset($stmt);
        }
    unset($db);
}
?>