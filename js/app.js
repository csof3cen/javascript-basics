// Variables
let pi = 3.14;
let isTrue = true;
let nullable = null;
let majeur = 18;
// let age = prompt("Entrez votre age : ");

// Opérateurs
console.log(--pi); // Pre décrémentation
console.log(pi++); //Post incrémentation
console.log("Un poisson" + " rouge"); // Concaténation de chaînes

// Flow d'execution
// if(age > majeur){
//   console.log("Majeur");
// } else if(age == 18){
//   console.log("Juste majeur !");
// }

// if(age < 13 && age >= 1){
//   console.log('Enfant');
// } else if(age >= 13 && age < 18){
//   console.log('Ado');
// } else if(age >= 18 && age < 25) {
//   console.log('Jeune');
// } else if(age >= 25 && age < 40) {
//   console.log('Adulte');
// } else if(age > 40){
//   console.log('Vieux');
// } else if(age  == ''){
//   console.log("Veuillez entrez votre age !");
// } else{
//   console.log("Vérifiez l'age !");
// }

// switch (pi) {
//   case 3.14:
//     console.log("C'est égale à 3.14");
//   // break;
//   case 3.15:
//     console.log("C'est égale à 3.15");
//   break;

//   default:
//     console.log("Valeur inconnue");
//   break;
// }

// for(let i = 0; i < 5; i++){
//   console.log(i);
// }

let notes = [15, 17, 20];

// while(false){
//   console.log("Hello")
// }

// do{
//   console.log("pi est < 5");
//   pi++;
// }while(pi < 5);

// console.log(notes[2]);
// console.log(notes.length)

// for (let index = 0; index < notes.length; index++) {
//   const note = notes[index];
//   console.log(`Note : ${note}`)
// }

function double(num){
  return num*2;
}

let doubleDeDeux = double(2);
console.log(doubleDeDeux);