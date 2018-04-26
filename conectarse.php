<?php
require 'vendor/conexionDb.php';
session_start();
if( isset($_POST['usuario']) && isset($_POST['password']) ) {

    $usuario    = $_POST['usuario'];
    $password   = $_POST['password'];
    $query = "SELECT idusuario FROM usuarios WHERE usuario = '$usuario' AND password = '$password'";
    $conexion = ConexionDb::getConexion();
    $data = $conexion->query($query);
    if($data){
        $data = $data->fetch_array();
        if($data == null) {
            if(!isset($_SESSION['errors'])) $_SESSION['errors'] = [];
            array_push($_SESSION['errors'], 'Usuario o contraseña invalidos.');
        }else{
            $_SESSION['idusuario'] = $data['idusuario'];
            $_SESSION['usuario'] = $usuario;
            header('Location:chat.php');
            return;
        }
    }else{
        if(!isset($_SESSION['errors'])) $_SESSION['errors'] = [];
        array_push($_SESSION['errors'], 'Ocurrio un error.');
    }
}
header('Location:index.php');
