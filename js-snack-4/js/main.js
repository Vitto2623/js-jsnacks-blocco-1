const inserisciNome = prompt("Inserisci il tuo nome");

const nomiInvitati = ["Marco" , "Giorgio" , "Alessio" , "Stefano" ];

let presente;

for (let i = 0; i < nomiInvitati.length; i++){
    if (inserisciNome == nomiInvitati[i]){
    console.log("Il nome inserito è tra gli invitati");
    presente = true;
    } 
    
}

if (presente != true){
    console.log("Il nome non è presente nella lista");
}