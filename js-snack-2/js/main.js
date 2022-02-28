const primaParola = prompt("Inserisci la prima parola");
document.getElementById("parola-1").innerHTML = primaParola;
const secondaParola = prompt("Inserisci la seconda parola");
document.getElementById("parola-2").innerHTML = secondaParola;

if (primaParola.length > secondaParola.length){
    console.log("la prima parola è la più lunga");
    document.getElementById("finale").innerHTML = "la prima parola è la più lunga";
} else if (secondaParola.length > primaParola.length){
    document.getElementById("finale").innerHTML = "la seconda parola è la più lunga";
} else{
    document.getElementById("finale").innerHTML = "le parole sono ugualmente lunghe";
}