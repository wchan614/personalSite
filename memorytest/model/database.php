<?php
    $dsn = 'mysql:host=localhost;dbname=wcychandb';
    $username = 'W.C.Y.Chan';
    $password = '2Mfc55Ez';

    try {
        $db = new PDO($dsn, $username, $password);
    } catch (PDOException $e) {
        $error_message = $e->getMessage();
        include('../errors/database_error.php');
        exit();
    }
?>