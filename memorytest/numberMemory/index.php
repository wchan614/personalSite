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

include("./process_score.php")
?>


<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Memory Test - Number Memory</title>
  <link href="https://fonts.googleapis.com/css?family=Karla:400,700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="https://cdn.materialdesignicons.com/4.8.95/css/materialdesignicons.min.css">
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css">
  <link rel="stylesheet" href="assets/css/login.css">
  <link rel="stylesheet" href="./style.css">
	<script src="numbers.js"></script>
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

	<main style="min-height: 700px;">
        <div class="jumbotron jumbotron-fluid mt-2">
            <div class="container text-center">
                <h1 class="display-4">Number Memory</h1>
            </div>
        </div>
		<div class="container-fluid text-center " style="min-height: 350px">
            <div class="mt-5">
			<div id="startDiv">
				<p>Remember the displayed number.</p>
				<button class="btn btn-primary mt-5" id="startButton" onClick="start()">Start</button>
			</div>

			<div class="d-none " id="gameDiv">
				<h2 class="" id="score">Score: 0</h2>
				<br>
				<div id="rememberDiv">
					<h2 class = "d-none" id="tryAgain">Try again!</h2>
					<h1 class="noselect" id="rememberNumber"></h1><br>
					<div class="progress" style="height: 5px; width:50%; margin:auto;">
						<div class="progress-bar" id="progress"></div>
					</div>
					<br>
				</div>
				<div class="d-none" id="inputDiv">
					<form id="inputField" onsubmit="submitNumber(event)">
						<input type="text" id="playerNumber"  onpaste="return false;" ondrop="return false;"  autofocus autocomplete="off">
						<input type="submit" value="Submit" class="btn btn-primary" onClick="submitNumber()">
					</form>
				</div>
			  <h2 class="" id="lives">Strikes: 3</h2>
			</div>

			<div class="d-none" id="gameoverDiv">
				<h1>Game over!</h1>
				<p id="gameoverScore"></p>
				<div class="form-group">
					<form action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>" class="text-center" method="post">
						<input name="gameScore" id="gameScore" type="hidden" value="">
						<input name="submitScore" id="submitScore" class="btn btn-primary mb-4" type="submit" value="Submit Test Score">
					</form>
					<button class="btn btn-primary mb-4" onClick="start()">Try again?</button>					
				</div>
			</div>
		</div>
        </div>

        <div class="jumbotron jumbotron-fluid mt-2 text-center">
                <p class="lead">This test measures your short term memory.</p>
                <p class="lead">Numbers will briefly appear and then disappear. </p>
                <p class="lead">You must type back the number shown, the more successful the longer the numbers become. </p>
                <p class="lead">Go on as long as you can, you will have 3 strikes until the test is finished.</p>
                <p class="lead">Your score for this test is determined by how many turns you lasted.</p>
        </div>
	</main>

	<footer class="jumbotron jumbotron-fluid">
        <div class="container-fluid text-center">
            <p class="lead"> Memory Test - All Rights Reserved &#169 </p>
        </div>
    </footer>
    

	<script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
	<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"></script>
	<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"></script>
</body>
</html>
