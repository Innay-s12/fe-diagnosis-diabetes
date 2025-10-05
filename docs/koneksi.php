<?php
$host = "localhost";        // atau 127.0.0.1
$user = "root";             // default user XAMPP
$pass = "";                 // biasanya kosong di XAMPP
$db   = "diabetes";    // Ganti dengan nama database kamu

$conn = new mysqli($host, $user, $pass, $db);

// Cek koneksi
if ($conn->connect_error) {
    die("Koneksi gagal: " . $conn->connect_error);
}
?>
