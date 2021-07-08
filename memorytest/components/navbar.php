<?php 
define('LOGOUT', "http://triosdevelopers.com/~W.C.Y.Chan/memorytest/logout.php");
define('PROFILE', "http://triosdevelopers.com/~W.C.Y.Chan/memorytest/profile") ?>


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
                    '<form class="d-line mb-2" action="'. PROFILE .'/profile"> 
                    <button class="btn btn-outline-secondary my-2 my-sm-0 mr-2 " type="submit">Profile</button>
                    </form>';
                    echo 
                    '<form class="d-line mb-2" action="'. LOGOUT . '/logout.php"> 
                    <button class="btn btn-danger my-2 my-sm-0 mb-2" type="submit"> Logout </button> 
                    </form>';
                }
            ?>
        </div>
    </div>
</nav>
