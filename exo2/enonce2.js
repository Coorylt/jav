// Demande à l'utilisateur de saisir un nombre entier compris entre 1 et 10
let number = prompt("Saisir un nombre entier compris entre 1 et 10");

// Vérifie si le nombre saisi est valide
while (number < 1 || number > 10 || isNaN(number)) {
  // Si le nombre n'est pas valide, affiche un message d'erreur et redemande à l'utilisateur de saisir un nombre
  console.log("Erreur : veuillez saisir un nombre entier compris entre 1 et 10");
  number = prompt("Saisir un nombre entier compris entre 1 et 10");
}

// Définit une fonction qui prend en paramètre un entier et affiche sa table de multiplication de 1 à 10
function affichage(number) {
  // Utilise une boucle for pour afficher la table de multiplication du nombre
  for (let i = 1; i <= 10; i++) {
    console.log(number + " x " + i + " = " + number * i);
  }
}

// Appelle la fonction avec le nombre saisi par l'utilisateur en argument
affichage(number);


