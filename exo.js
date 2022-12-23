// Variables

let nom = "John";
    console.log(nom)

    nom= "Jane"
        console.log(nom)

// Boucles

for (let i=1; i <= 10; i++){
    console.log(i);
}

// Console.log()

console.log("Bonjour tout le monde")
console.log(3+4)
console.log(nom)

// Concaténation de chaînes de caractères 

let firstName = "John"
let lastName = "Doe"
let fullName=firstName = firstName + " " + lastName;
console.log(fullName)

// Conditions 

const age = 19; 
    if (age >= 18){
        console.log("Vous êtes majeur")
    } else { (age<=18)
        console.log("Vous êtes mineur")
    } 

// Création et parcours d'un tableau

let couleurs = ["rouge", "vert", "bleu", "jaune", "orange"];
for (let i = 0; i < couleurs.length; i++){
    console.log(couleurs[i])
}


// Utilisation de Array.push() et Array.pop()

let numbers = [1,2,3,4,5]
numbers.push(6)
console.log(numbers)
numbers.pop()
console.log(numbers)

// Fonctions 
// . Écrivez une fonction qui prend en argument un entier et renvoie `true` si l'entier est pair,
// `false` sinon. Vous pouvez utiliser l'opérateur modulo `%` pour vérifier si un nombre est divisible par deux.


function pair(num){
    if (num % 2 == 0) {
        return true;
    } 
    else {
        return false
    }
};
console.log(pair(12))
console.log(pair(19))



function add(tab) {
    let result = 0;
    
    tab.forEach((element) => {
        result+=element;
    });

    return result;
}

let tableau = [5, 12, 4, 6, 7];
console.log(add(tableau));


function reverse(chaine) {
    result = chaine.split('')
    result = result.reverse('')
    result = result.join('')    
    return result
};

let text = "Bonjour"
console.log(reverse(text))