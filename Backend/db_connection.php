<?php
$host = 'localhost';   // Your MySQL host (usually localhost)
$db   = 'data_base';   // Database name
$user = 'root';        // MySQL username (same as Workbench login)
$pass = 'Haroldhernandez1234';  // MySQL password (the password you use in Workbench)
$charset = 'utf8mb4';  // Character set (usually utf8mb4 is fine)

$dsn = "mysql:host=$host;dbname=$db;charset=$charset";
$options = [
    PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
    PDO::ATTR_EMULATE_PREPARES   => false,
];

try {
    $pdo = new PDO($dsn, $user, $pass, $options);
} catch (\PDOException $e) {
    throw new \PDOException($e->getMessage(), (int)$e->getCode());
}
?>
