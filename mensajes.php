<?php
require 'vendor/conexionDb.php';
session_start();
    $query = "SELECT usuario, mensaje, fecha FROM mensajes
                LEFT JOIN usuarios USING(idusuario)";
    $conexion = ConexionDb::getConexion();
    $data = $conexion->query($query);
    if($data){
        $datos = [];
        while($row = $data->fetch_assoc()){
            array_push($datos, $row);
        }
        echo json_encode($datos);
    }