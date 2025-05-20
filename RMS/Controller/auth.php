<?php
session_start();

$valid_email = 'admin@gmail.com';
$valid_password = '123';

$email = $_POST['email'] ?? '';
$password = $_POST['password'] ?? '';

if ($email === $valid_email && $password === $valid_password) {
    $_SESSION['email'] = $email;

    header("Location: /CareerSphere/views/profile/profile.php");
    exit;
} else {
    header("Location: /CareerSphere/views/user_authentication/login.php?error=1");
    exit;
}
?>