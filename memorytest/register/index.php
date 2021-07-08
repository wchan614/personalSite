<?php 


require_once "../model/database.php";

//  User provided info
$username = $password = $email = $confirm_password = "";

// System error output
$username_err = $password_err = $email_err = $confirm_password_err = "";
$global_err = "";
// Procress if we can register user
include("./process_registration.php");

?>



<!-- Remember to change this file extension back to php -->
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Memory Test - Register</title>
  <link href="https://fonts.googleapis.com/css?family=Karla:400,700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="https://cdn.materialdesignicons.com/4.8.95/css/materialdesignicons.min.css">
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css">
  <link rel="stylesheet" href="../assets/css/register.css">
</head>
<body>
  <main class="d-flex align-items-center min-vh-100 py-3 py-md-0">
    <div class="container">
      <div class="card register-card">
        <div class="row no-gutters">
          <div class="col-md-5">
            <img src="../assets/images/register_splash.gif" alt="register" class="register-card-img">
          </div>
          <div class="col-md-7">
            <div class="card-body">
              <div class="brand-wrapper">
                <img src="../assets/images/mlogo.png" alt="logo" class="logo">
              </div>
              <p class="register-card-description">Registration</p>

              <form action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>" method="POST" autocomplete="off">

                  <span class="text-danger h6"><?php echo $global_err; ?></span>

                  <div class="form-group">
                    <label for="username" >Username</label>
                    <input type="text" name="username" class="form-control <?php echo (!empty($username_err)) ? 'is-invalid' : ''; ?>" value="<?php echo $username; ?>"
                      placeholder="Username">
                    <span class="invalid-feedback"><?php echo $username_err; ?></span>
                  </div>
                  <div class="form-group">
                    <label for="email" >Email</label>
                    <input type="email" name="email" class="form-control <?php echo (!empty($email_err)) ? 'is-invalid' : ''; ?>"  value="<?php echo  $email; ?>"
                    placeholder="Email Address">
                    <span class="invalid-feedback"><?php echo $email_err; ?></span>
                  </div>

                  <div class="form-group">
                    <label for="password">Password</label>
                    <input type="password" name="password" class="form-control <?php echo (!empty($password_err)) ? 'is-invalid' : ''; ?>" value="<?php echo $password; ?>"
                      placeholder="************">
                    <span class="invalid-feedback"><?php echo $password_err; ?></span>
                  </div>

                  <div class="form-group mb-4">
                    <label for="password">Confirm Password</label>
                    <input type="password" name="confirm_password" class="form-control <?php echo (!empty($confirm_password_err)) ? 'is-invalid' : ''; ?>" value="<?php echo  $confirm_password; ?>" 
                      placeholder="************">
                    <span class="invalid-feedback"><?php echo $confirm_password_err; ?></span>
                  </div>

                  <input name="register" id="register" class="btn btn-block register-btn mb-4" type="submit" value="Register">

                </form>
                <a href="#!" class="forgot-password-link">Forgot password?</a>
                <nav class="register-card-footer-nav">
                  <a href="../index.php">Back to Login Page</a>
                  <!--                   
                  <a href="#!">Terms of use.</a>
                  <a href="#!">Privacy policy</a> -->
                </nav>
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
