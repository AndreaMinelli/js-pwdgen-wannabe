/*
 Chiedi all’utente il suo nome,
poi chiedi il suo cognome,
poi chiedi il suo colore preferito
Infine scrivi sulla pagina nomecognomecolorepreferito21 
*/

//Inserisco l'elemento target in una variabile

const password = document.getElementById('generated-password');

//Chiedo all'utente il nome

const userName = prompt('Qual è il tuo nome?');

//Chiedo all'utente il cognome

const userLastName = prompt('Qual è il tuo cognome?');

//Chiedo all'utente il colore preferito

const userColor = prompt('Qual è il tuo colore preferito?');

//Unisco i dati e stampo la password generata

password.innerText = userName + userLastName + userColor + "21";


