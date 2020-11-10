function empty(s) {
   return s.replace(/\s/g, "");
}

var nome = prompt("Qual'è il tuo nome?");
while (empty(nome).length == 0) {
    nome = prompt("Inserisci il tuo NOME!!!!");
}

var cognome = prompt("Qual'è il tuo cognome?");
while (empty(cognome).length == 0) {
   cognome = prompt("Inserisci il tuo COGNOME!!!!");
}

var colore = prompt("Qual'è il tuo colore preferito?");

// DEFAULT - random from array //
var array = ["Blue", "Verde", "Rosso", "Magenta Chiaro"];

if (empty(colore).length == 0) {
   colore = array[Math.floor(Math.random() * array.length)];
}

document.getElementById("nome").innerHTML = nome;

// Remove empty spaces //
var password = nome + cognome + colore + "19";
document.getElementById("password").innerHTML = empty(password);
