<?php
    $user = "root";
    $pw = "root";

    try {
        $conn = new PDO('mysql:host=localhost;dbname=tempuses', $user, $pw);
        //var_dump($conn);
    }catch (PDOException $exception) {
        echo 'connect error!' . $exception ->getMessage();
    }

?>