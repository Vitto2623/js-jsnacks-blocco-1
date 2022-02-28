const numero1 = parseInt(prompt("Inserisci il primo numero"));
document.getElementById("numero-1").innerHTML = numero1;
const numero2 = parseInt(prompt("Inserisci il secondo numero"));
document.getElementById("numero-2").innerHTML = numero2;

let numeriUguali = "sono uguali";

if (numero1 > numero2){
    console.log(numero1);
    document.getElementById("risultato-finale").innerHTML = numero1;
} else if (numero1 < numero2){
    console.log(numero2);
    document.getElementById("risultato-finale").innerHTML = numero2;
} else {
    document.getElementById("risultato-finale").innerHTML = "I numeri sono uguali";
}