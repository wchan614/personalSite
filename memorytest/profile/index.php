<?php
// Initialize the session
session_start();
include("../config.php");

// Check if Guest
if ((isset($_SESSION["guest"]) && $_SESSION["guest"] === TRUE)) {
    //pass
}
// Check if Logged In
elseif ((isset($_SESSION["logged_in"]) && $_SESSION["logged_in"] === TRUE)) {
    //pass
}
// Send back
else {
    header("location: index.php");
    exit;
}
include("./process_scores.php");
include("./process_percentile.php");
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Memory Test - Profile</title>
    <link href="https://fonts.googleapis.com/css?family=Karla:400,700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous">

    <style>
        body{ font: 14px sans-serif; }
    </style>
</head>
<body>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container">
            <a class="navbar-brand" href="../dashboard.php">Memory Test</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
                <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                </ul>

                <?php 
                    if (isset($_SESSION["guest"]) && $_SESSION["guest"] === TRUE) { 
                        echo 
                        '<form class="d-line mb-2" action="register"> 
                        <button class="btn btn-outline-secondary my-2 my-sm-0 mr-2 mb-2" type="submit">Sign Up</button> 
                        </form>';
                        echo 
                        '<form class="d-line mb-2" action="index.php"> 
                        <button class="btn btn-danger my-2 my-sm-0 mb-2" type="submit"> Login </button> 
                        </form>';
                    }
                    else {
                        echo 
                        '<form class="d-line mb-2" action="'. HOME .'/profile"> 
                        <button class="btn btn-outline-secondary my-2 my-sm-0 mr-2 " type="submit">Profile</button>
                        </form>';
                        echo 
                        '<form class="d-line mb-2" action="'. HOME . '/logout.php"> 
                        <button class="btn btn-danger my-2 my-sm-0 mb-2" type="submit"> Logout </button> 
                        </form>';
                    }
                ?>
            </div>
        </div>
    </nav>


    <div class="container mt-5"  style="height:100vh; min-height: 600px;">
        <div class="border-bottom">
            <h6>Username</h6>
            <h1><?php  echo htmlspecialchars($_SESSION["username"]);  ?></h1>
        </div>
        <br>
        <div class="border">
            <table class="table">
                <thead class="thead-dark">
                    <tr>
                    <th scope="col" >Test</th>
                    <th scope="col"  data-toggle="tooltip" data-placement="right" title="Scores are calculated from the last 5 tests">Average Score</th>
                    <th scope="col"  data-toggle="tooltip" data-placement="right" title="% better than other people. Higher the better. Calculated from last 5 tests.">Percentile</th> 
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <th scope="row">Word Memory</th>
                    <td><?php 
                            echo $avgWordScore ?></td>
                    <td><?php 
                            echo $avgWordPercentile ?></td>
                    </tr>

                    <tr>
                    <th scope="row">Number Memory</th>
                    <td><?php 
                            echo $avgNumberScore ?></td>
                    <td><?php 
                            echo $avgNumberPercentile ?></td>
                    </tr>
                    <tr>
                    <th scope="row">Visual Memory</th>
                    <td><?php 
                            echo $avgVisualScore ?></td>
                    <td><?php 
                            echo $avgVisualPercentile ?></td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div class="mt-5">
            <a href="reset_password.php" role="button" class="btn btn-secondary btn-sm">Change Password</a>
            <a href="delete_account.php" role="button" class="btn btn-danger btn-sm">Delete Account</a>
        </div>

    </div>


    
    <footer class="jumbotron jumbotron-fluid">
        <div class="container-fluid text-center">
            <p class="lead"> Memory Test - All Rights Reserved &#169 </p>
        </div>
    </footer>

</body>
<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
</html>