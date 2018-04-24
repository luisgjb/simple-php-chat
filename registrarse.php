<?php
require 'vendor/conexionDb.php';
session_start();
$conexion = ConexionDb::getConexion();
if( isset($_POST['usuario']) && isset($_POST['password'])  && isset($_POST['password2']) ){
    $usuario    = $_POST['usuario'];
    $password   = $_POST['password'];
    $password2  = $_POST['password2'];
    if( $usuario == '' && $password == '' && $password2 == '' ){
        if(!isset($_SESSION['errors'])) $_SESSION['errors'] = [];
        array_push($_SESSION['errors'], 'Información invalida');
    }
    if($password2 !== $password){
        if(!isset($_SESSION['errors'])) $_SESSION['errors'] = [];
        array_push($_SESSION['errors'], 'Las contraseñas no coinciden');
        return;
    }

    $query      = "INSERT INTO usuarios(usuario, password) VALUES('$usuario', '$password')";
    $conexion->query($query);
}else{
    if(!isset($_SESSION['errors'])) $_SESSION['errors'] = [];
    array_push($_SESSION['errors'], 'Información invalida');
}
header('Location:index.php');
/*$msg = "Las contraseñas no coinciden.";
        header("Location:http://localhost/login.php?msg=$msg");*/