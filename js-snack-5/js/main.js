let arrayVuoto = [];

for (let i = 0; i < 6; i++){
    const inserisciNumero = parseInt(prompt("Inserisci un numero"));
    if (inserisciNumero % 2 != 0){
        arrayVuoto.push(inserisciNumero);
        
    }
}

console.log(arrayVuoto);

