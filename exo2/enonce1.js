// Demande à l'utilisateur de saisir un nombre de noms
let num = prompt("Saisir un nombre de noms");

// Crée un tableau pour stocker les noms saisis
let names = [];

// Utilise une boucle pour demander à l'utilisateur de saisir chaque nom
for (let i = 0; i < num; i++) {
  let name = prompt("Saisir un nom");
  names.push(name);
}

// Construit le message de confirmation en concaténant plusieurs chaînes de caractères
let message = "Vous avez enregistré " + num + " noms qui sont : " + names;

// Si le nombre de noms est supérieur à 3, ajoute une info supplémentaire au message
if (num > 3) {
  message += " C'est beaucoup de noms !";
}

// Affiche le message de confirmation dans la console
console.log(message);

// Définit une fonction qui prend en paramètre un tableau de noms et qui affiche chacun de ces noms dans la console
function affichage(names) {
  names.forEach(name => {
    console.log(name);
  });
}

// Appelle la fonction avec le tableau de noms en argument
affichage(names);
