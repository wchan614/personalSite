<?php 
session_start();
include("../model/database.php");

$sql = "SELECT score FROM `wordMemoryScores`  ORDER BY score ASC";
$avgWordPercentile = 0;
if ($avgWordScore != 0) { 
    if($stmt = $db->prepare($sql)) {

        if ($stmt->execute()) {
            $rows = $stmt->fetchAll(PDO::FETCH_COLUMN,0);
            $size = count($rows);
            $avgWordScore = round($avgWordScore);

            $i = 0;


            while ( ($i <= $size-1) && ($avgWordScore >= $rows[$i]) ){
                $i++;
            }

            $avgWordPercentile = round(($i / $size) * 100);
        }
        else {
            echo 'failed to execute';
        }
        unset($stmt);
    }
    else {
        echo "failed to prepare";
    }
}
///////////////////

$sql = "SELECT score FROM `numberMemoryScores`  ORDER BY score ASC";
$avgNumberPercentile = 0;

if ($avgNumberScore != 0) { 
    if($stmt = $db->prepare($sql)) {

        if ($stmt->execute()) {
            $rows = $stmt->fetchAll(PDO::FETCH_COLUMN,0);
            $size = count($rows);
            $avgNumberScore = round($avgNumberScore);

            $i = 0;

            

            while ( ($i <= $size-1) && ($avgNumberScore >= $rows[$i]) ){
                $i++;
            }

            $avgNumberPercentile = round(($i / $size) * 100);
        }
        else {

            echo 'failed to execute';
        }
        unset($stmt);
    }
    else {
        echo "failed to prepare";
    }
}

///////////////////

$sql = "SELECT score FROM `visualMemoryScores`  ORDER BY score ASC";
$avgVisualPercentile = 0;

if ($avgVisualScore != 0 ) {

    if($stmt = $db->prepare($sql)) {

        if ($stmt->execute()) {
            $rows = $stmt->fetchAll(PDO::FETCH_COLUMN,0);
            $size = count($rows);
            $avgVisualScore = round($avgVisualScore);

            $i = 0;

            

            while ( ($i <= $size-1) && ($avgVisualScore >= $rows[$i]) ){
                $i++;
            }

            $avgVisualPercentile = round(($i / $size) * 100);
        }
        else {

            echo 'failed to execute';
        }
        unset($stmt);
    }
    else {
        echo "failed to prepare";
    }
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