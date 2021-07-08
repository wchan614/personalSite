<?php 
session_start();
include("../model/database.php");

$sql = "SELECT AVG(scores) AS 'avg score' FROM (SELECT score as 'scores' FROM wordMemoryScores WHERE LOWER(username) = :username AND isGuest = FALSE ORDER BY date DESC LIMIT 5) avgs";
if($stmt = $db->prepare($sql)) {
    $stmt->bindParam(":username", $param_username, PDO::PARAM_STR);

    $param_username =  trim(strtolower($_SESSION["username"]));

    if ($stmt->execute()) {
        if ($stmt->rowCount() == 1) {
            if ($row = $stmt->fetch()){
                $avgWordScore = round($row["avg score"]);
            }
        }
        else {
            echo "More rows than 1";
            $avgWordScore = 0;
        }
    }
    else {
        $avgWordScore = 0;
        echo 'failed to execute';
    }
    unset($stmt);
}
else {
    $avgWordScore = 0;
    echo "failed to prepare";
}

///////////////////
$sql = "SELECT AVG(scores) AS 'avg score' FROM (SELECT score as 'scores' FROM numberMemoryScores WHERE LOWER(username) = :username AND isGuest = FALSE ORDER BY date DESC LIMIT 5) avgs";
if($stmt = $db->prepare($sql)) {
    $stmt->bindParam(":username", $param_username, PDO::PARAM_STR);

    $param_username =  trim(strtolower($_SESSION["username"]));

    if ($stmt->execute()) {
        if ($stmt->rowCount() == 1) {
            if ($row = $stmt->fetch()){
                $avgNumberScore = round($row["avg score"]);
            }
        }
        else {
            echo "More rows than 1";
            $avgNumberScore = 0;
        }
    }
    else {
        $avgNumberScore = 0;
        echo 'failed to execute';
    }
    unset($stmt);
}
else {
    $avgNumberScore = 0;
    echo "failed to prepare";
}



///////////////////
$sql = "SELECT AVG(scores) AS 'avg score' FROM (SELECT score as 'scores' FROM visualMemoryScores WHERE LOWER(username) = :username AND isGuest = FALSE ORDER BY date DESC LIMIT 5) avgs";
if($stmt = $db->prepare($sql)) {
    $stmt->bindParam(":username", $param_username, PDO::PARAM_STR);

    $param_username =  trim(strtolower($_SESSION["username"]));

    if ($stmt->execute()) {
        if ($stmt->rowCount() == 1) {
            if ($row = $stmt->fetch()){
                $avgVisualScore = round($row["avg score"]);
            }
        }
        else {
            echo "More rows than 1";
            $avgVisualScore = 0;
        }
    }
    else {
        $avgVisualScore = 0;
        echo 'failed to execute';
    }
    unset($stmt);
}
else {
    $avgVisualScore = 0;
    echo "failed to prepare";
}



unset($db);

/* SELECT
	AVG(scores) 'avg score'
FROM
	(SELECT score as "scores" FROM wordMemoryScores
        WHERE LOWER(username) = "radcanine"
        ORDER BY date DESC
        LIMIT 5) avgs */
?>