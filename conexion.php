<?php
include 'cn.php';
$servername = "localhost";
$username = "root"; // usuario
$password = ""; // contraseña
$dbname = " Calculadora de Conversión de Temperatura";

// Crear conexión
$conexion = new mysql($servername, $username, $password, $dbname);

// Verificar conexión

    $conexion = sql_connect($serverName, $connectionOptions);
if ($conexion === false) {
    die(print_r(sql_errors(), true));
}


// Obtener datos del POST
$valor_original = $_POST['valor_original'];
$unidad_original = $_POST['unidad_original'];
$valor_convertido = $_POST['valor_convertido'];
$unidad_convertida = $_POST['unidad_convertida'];

// Preparar y ejecutar la consulta
$sqlsrv = "INSERT INTO resultados (valor_original, unidad_original, valor_convertido, unidad_convertida) VALUES (?, ?, ?, ?)";
$stmt = $conexion->prepare($sql);
$stmt->bind_param("dssd", $valor_original, $unidad_original, $valor_convertido, $unidad_convertida);
$stmt->execute();

if ($stmt->affected_rows > 0) {
    echo "Resultado guardado con éxito.";
} else {
    echo "Error al guardar el resultado.";
}

$stmt->close();
$conexion->close();
?>

