<?php
require 'vendor/conexionDb.php';
session_start();
if( isset($_SESSION['idusuario']) && isset($_POST['mensaje'])){
    $idusuario    = $_SESSION['idusuario'];
    $mensaje      = $_POST['mensaje'];

    $query      = "INSERT INTO mensajes(idusuario, mensaje) VALUES('$idusuario', '$mensaje')";
    $conexion = ConexionDb::getConexion();
    $conexion->query($query);
    echo $conexion->error;
}else{
    if(!isset($_SESSION['errors'])) $_SESSION['errors'] = [];
    array_push($_SESSION['errors'], 'Información invalida');
    header('Location:index.php');
}