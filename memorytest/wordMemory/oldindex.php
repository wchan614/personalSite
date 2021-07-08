<?php
// Initialize the session
session_start();
include ("../config.php");


if (isset($_SESSION["guest"]) && $_SESSION["guest"] === TRUE) {
    $_SESSION["logged_in"] = FALSE;
    $_SESSION["id"] = 0;
    $_SESSION["username"] = "Guest";
}

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

require_once("../model/database.php");

//Define variables and initialize 
$submit_suc = "";

include("./process_score.php")
?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Memory Test - Word Memory</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous">
    <style>
        body{ font: 14px sans-serif; }
    </style>
</head>
<body>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container">
            <a class="navbar-brand" href="../index.php">Memory Test</a>
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

    <div class="container">
        <div class="jumbotron jumbotron-fluid mt-2">
            <div class="container text-center">
                <h1 class="display-4">Word Memory</h1>
                <p class="lead">This test measures how many words you can remember in short term memory.</p>
                <p class="lead">The numbers of words you need to remember wil increase until you can't remember anymore</p>
                <p class="lead">Go on as long as you can, you will have 3 strikes until the test is finished.</p>
                <p class="lead">Your score for this test is determined by how many turns you lasted.</p>
            </div>
        </div>


        <form action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>" class="text-center" method="post">
            <div class="form-group">
                <input name="submitScore" id="submitScore" class="btn btn-primary mb-4" type="submit" value="Submit Test Score">
            </div>
        </form>

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