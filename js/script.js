var nome = prompt("Qual'è il tuo nome?");
while (nome.length == 0) {
    nome = prompt("Inserisci il tuo NOME!!!!");
}

var cognome = prompt("Qual'è il tuo cognome?");
while (cognome.length == 0) {
   cognome = prompt("Inserisci il tuo COGNOME!!!!");
}

var colore = prompt("Qual'è il tuo colore preferito?");

// DEFAULT - random from array //
var array = ["Blue", "Verde", "Rosso", "Magenta Chiaro"];

if (colore.length == 0) {
   console.log("hello");
   colore = array[Math.floor(Math.random() * array.length)];
}

document.getElementById("nome").innerHTML = nome;

// Remove empty spaces //
var password = nome.replace(/\s/g, "") + cognome.replace(/\s/g, "") + colore.replace(/\s/g, "") + "19";
document.getElementById("password").innerHTML = password;
