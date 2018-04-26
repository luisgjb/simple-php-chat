<?php
require 'vendor/conexionDb.php';
session_start();
    $fecha = new DateTime($_POST['fecha']);
    $fecha = $fecha->format('Y-m-d H');
    if(!isset($_SESSION['idmensaje'])) $_SESSION['idmensaje'] = 1;
    $idmensaje = $_SESSION['idmensaje'];
    $query = "SELECT idmensaje, usuario, mensaje, fecha FROM mensajes
                LEFT JOIN usuarios USING(idusuario)
                  WHERE
                      fecha >= '$fecha'
                    AND
                      idmensaje > '$idmensaje';";

    $conexion = ConexionDb::getConexion();
    $data = $conexion->query($query);

    if($data){
        $datos = [];
        while($row = $data->fetch_assoc()){
            array_push($datos, $row);
        }
        $lengt = count($datos);
        if($lengt > 0) $_SESSION['idmensaje'] = $datos[$lengt-1]['idmensaje'];
        echo json_encode($datos);
    }