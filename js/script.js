function removeEmpty(string) {
  return string.replace(/\s+/g, '');
}

var nome = prompt("Qual'è il tuo nome?");
while (nome.length == 0) {
    nome = prompt("Inserisci il tuo NOME!!!!");
}

var cognome = prompt("Qual'è il tuo cognome?");
while (cognome.length == 0) {
   cognome = prompt("Inserisci il tuo COGNOME!!!!");
}

var colore = prompt("Qual'è il tuo colore preferito?");
// DEFAULT - ROSSO //
if (colore.length == 0) {
   colore = "Rosso";
}

document.getElementById("nome").innerHTML = nome;

// Remove empty spaces //


var password = removeEmpty(nome) + removeEmpty(cognome) + removeEmpty(colore) + "19";
document.getElementById("password").innerHTML = password;
