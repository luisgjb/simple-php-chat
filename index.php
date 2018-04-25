<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>PHP Chat</title>
    <link rel="stylesheet" href="index.css">
</head>
<body>
    <div class="login-page">
        <div class="form">
            <form class="register-form" method="post" action="registrarse.php">
                <input name="usuario" type="text" placeholder="usuario"/>
                <input name="password" type="password" placeholder="password"/>
                <input name="password2" type="password" placeholder="Re-type password"/>
                <button type="submit">registrarse</button>
                <p class="message">¿Ya te encuentras registrado? <a href="#">Entrar</a></p>
            </form>
            <form class="login-form" method="post" action="conectarse.php">
                <input name="usuario"  type="text" placeholder="usuario"/>
                <input name="password" type="password" placeholder="password"/>
                <button>Conectarse</button>

                <?php
                    session_start();
                    if(isset($_SESSION['errors'])){
                        $ERRORS = $_SESSION['errors'];
                        foreach ($ERRORS as $ERROR) {
                            echo $ERROR;
                        }
                        unset($_SESSION['errors']);
                    }
                ?>
                <p class="message">¿Aún no te registras? <a href="#">Crea una cuenta</a></p>
            </form>
        </div>
    </div>
</body>
<script src="vendor/jquery.min.js"></script>
<script src="index.js"></script>
</html>