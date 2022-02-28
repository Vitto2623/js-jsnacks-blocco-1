const numeroUtente = prompt("Dammi un numero di 7 cifre");

let somma = 0;

for (let i = 0; i < numeroUtente.length ; i++){
    somma = somma + parseInt(numeroUtente.charAt(i));
}

console.log(somma);