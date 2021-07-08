
<?php
session_start();

// Hide the variable in GET
$login_as_guest = TRUE;

// Check if is logged in as a user
if (isset($_SESSION["logged_in"]) && $_SESSION["logged_in"] === TRUE) {
  header("location: dashboard.php");
  exit;
}

// Include database file
require_once("./model/database.php");


// Define variables and initialize with empty values
$username = $password = "";
$username_err = $password_err = $login_err = "";

include("./process_login.php");
?>

<!--  Remember to change file back to .HTML -->
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Memory Test</title>
  <link href="https://fonts.googleapis.com/css?family=Karla:400,700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="https://cdn.materialdesignicons.com/4.8.95/css/materialdesignicons.min.css">
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css">
  <link rel="stylesheet" href="assets/css/login.css">
</head>
<body>
  <main>
    <div class="container-fluid">
      <div class="row">
        <div class="col-sm-6 login-section-wrapper">

          <div class="brand-wrapper">
            <img src="assets/images/mlogo.png" alt="logo" class="logo"> <span></span>
          </div>
          
          <div class="login-wrapper my-auto">

          <h1 class="login-title">Log in</h1>
          <form action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>" method="post">

            <!--  Any general error messages show up here -->
            <span>
              <?php 
                echo ((isset($_SESSION["register_success"]) && $_SESSION["register_success"] === TRUE) ?
                '<div class="text-success">'. "Account successfully created" . '</div>' : "" );
                unset($_SESSION["register_success"]);
              ?> 
              <?php echo (!empty($login_err)) ? '<div class="alert alert-danger">' . $login_err . '</div>' : ""; ?> 
            </span>

              <div class="form-group">
                <label for="username">Username</label>
                <input type="text" name="username" id= "username" class="form-control <?php echo (!empty($username_err)) ? 'is-invalid' : ''; ?>" value="<?php echo $username; ?>"  placeholder="Username"  autocomplete="off">
                <span class="invalid-feedback"><?php echo $username_err; ?>
              </div>

              <div class="form-group mb-4">
                <label for="password">Password</label>
                <input type="password" name="password" id="password" class="form-control <?php echo (!empty($password_err)) ? 'is-invalid' : ''; ?>"  placeholder="Password">
                <span class="invalid-feedback"><?php echo $password_err; ?>
              </div>

              <input name="login" id="login" class="btn btn-block login-btn" type="submit" value="Login">
            </form>
            <a href="#!" class="forgot-password-link">Forgot password?</a>
            <p class="login-wrapper-footer-text" style="font-size: 0.8em">Don't have an account? <a href="register" class="text-secondary">Register here</a></p>
            <p class="login-wrapper-footer-text" style="font-size: 0.8em">Or continue <a href="dashboard.php?guest=$login_as_guest" class="text-secondary">as a guest</a></p>
          </div>
        </div>
        <div class="col-sm-6 px-0 d-none d-sm-block">


            <div id="carouselExampleCaptions" class="carousel slide login-carousel carousel-fade" data-ride="carousel">
              <ol class="carousel-indicators">
                <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
              </ol>

              <div class="carousel-inner" role="listbox">
                <div class="carousel-item active" data-interval="14000">
                  <img class="d-block w-100 carousel-cover" src="assets/images/login_splash1.gif" alt="First slide">
                  <div class="carousel-caption d-none d-md-block">
                    <h3>Improve your Memory</h3>
                    <p>Memory test tests your short-term memory</p>
                  </div>
                </div>
                <div class="carousel-item"  data-interval="14000">
                  <img class="d-block w-100 carousel-cover" src="assets/images/login_splash2.gif" alt="Second slide">
                  <div class="carousel-caption d-none d-md-block">
                    <h3>Completely Free</h3>
                    <p>Do the tests as a guest, or register and login to save your results.</p>
                  </div>
                </div>
              </div>
              
            </div>
          </div>


      </div>
    </div>
  </main>
  <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"></script>
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"></script>
</body>
</html>
