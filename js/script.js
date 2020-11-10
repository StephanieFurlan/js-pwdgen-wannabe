var nome = prompt("Qual'è il tuo nome?");
var cognome = prompt("Qual'è il tuo cognome?");
var colore = prompt("Qual'è il tuo colore preferito?");


document.getElementById("nome").innerHTML = nome;
var password = nome + cognome + colore + "19";
document.getElementById("password").innerHTML = password;
