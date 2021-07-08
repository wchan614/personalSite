<?php
// Initialize the session
session_start();
include ("config.php");
// Try to grab the guest parameter URL
if (isset($_GET["guest"]) || (isset($_SESSION["guest"]) && $_SESSION["guest"] == TRUE) ) {
    $_SESSION["guest"] = TRUE;
}
else {
    $_SESSION["guest"] = FALSE;
}

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


?>
 
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Memory Test - Dashboard</title>
    <link href="https://fonts.googleapis.com/css?family=Karla:400,700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous">
    <link rel="stylesheet" href="./assets/css/dashboard.css">
    <style>
        body{ font: 14px sans-serif; text-align: center; }
    </style>
</head>
<body>
    <!-- Nav  -->
        
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container">
            <a class="navbar-brand" href="#">Memory Test</a>
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

    <div class="container-fluid text-center" style="height: 100vh; min-height: 1800px;">
        <div class="jumbotron text-center" style="user-select: none;" >
            <img src="./assets/images/mlogo.png" class="d-block img-responsive mx-auto mb-2" style="height: 350px;" alt="memory test logo">
            <h1 class="display-4 mb-5">MEMORY TEST</h1>
            <p class="lead">Train and measure your congitive memory skills.</p>
            <hr class="my-4">
            <h4 class="my-5">Hello, <b><?php echo htmlspecialchars($_SESSION["username"]); ?></b>.</h4>
            <span>
              <?php 
                echo ((isset($_SESSION["submit_score"]) && $_SESSION["submit_score"] === TRUE) ?
                '<div class="text-success">'. "Score Submitted." . '</div>' : "" );
                unset($_SESSION["submit_score"]);
              ?> 
            </span>
        </div>
        
        <!-- Tests -->
        <div class="container-fluid text-center">
            <div class="card mx-auto mb-3" style="width: 18rem;">
                <img src="./assets/images/book-half.svg" class="card-img-top mt-3" style="height:80px;" alt="Word Memory">
                <div class="card-body">
                    <h4 class="card-title">Word Memory</h4>
                    <p class="card-text">Test short-term memory by remembering words.</p>
                    <a href="./wordMemory" class="btn btn-primary">Start</a>
                </div>
            </div>

            <div class="card mx-auto mb-3" style="width: 18rem;">
                <img src="./assets/images/dice-2.svg" class="card-img-top mt-3" style="height:80px;" alt="Word Memory">
                <div class="card-body">
                    <h4 class="card-title">Number Memory</h4>
                    <p class="card-text">Test short-term memory by remembering numbers.</p>
                    <a href="./numberMemory" class="btn btn-primary">Start</a>
                </div>
            </div>

            
            <div class="card mx-auto mb-3" style="width: 18rem;">
                <img src="./assets/images/border-all.svg" class="card-img-top mt-3" style="height:80px;" alt="Word Memory">
                <div class="card-body">
                    <h4 class="card-title">Visual Memory</h4>
                    <p class="card-text">Recall highlighted tiles.</p>
                    <a href="./visualMemory" class="btn btn-primary">Start</a>
                </div>
            </div>

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