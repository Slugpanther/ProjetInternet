<?php
// serveur.php (exemplification de l'API côté serveur)
header("Content-Type: application/json");

if ($_SERVER['REQUEST_METHOD'] === 'GET' && isset($_GET['user'])) {
  $user = $_GET['user'];

  // Simule la récupération de tweets depuis une base de données
  $tweets = [
    ["user" => $user, "text" => "Ceci est un tweet de $user"],
    ["user" => $user, "text" => "Un autre tweet de $user"],
  ];

  echo json_encode($tweets);
} elseif ($_SERVER['REQUEST_METHOD'] === 'POST') {
  // Simule l'enregistrement d'un tweet dans une base de données
  $data = json_decode(file_get_contents('php://input'), true);
  // Faites l'enregistrement réel dans votre application

  echo json_encode(["message" => "Tweet posté avec succès"]);
} else {
  http_response_code(400);
  echo json_encode(["message" => "Mauvaise requête"]);
}
