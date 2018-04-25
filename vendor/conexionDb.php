<?php

class ConexionDb {
    private static $DBCONNECTION = null;

    public static function getConexion(){
        if(self::$DBCONNECTION== null ){
            self::$DBCONNECTION = mysqli_connect('127.0.0.1', 'root', '', 'phpchat');
            if (!self::$DBCONNECTION) {
                echo "Error: Imposible conectarse a MySQL." . PHP_EOL;
                echo "Debugging errno: " . mysqli_connect_errno() . PHP_EOL;
                echo "Debugging error: " . mysqli_connect_error() . PHP_EOL;
                die();
            }
        }
        return self::$DBCONNECTION;
    }
}