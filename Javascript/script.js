//Stampa in console (ispeziona->console; ricorda di andare in locale)
console.log("Ciao, mondo!");
//Mostra un popup con un messaggio
//window.alert("Benvenuto");
//Mostra un popup che richiede un testo
//window.prompt("Inserisci un numero");

//Più altra roba che devi vedere dal repo di Andrea


//Dichiarazione di variabile
var stringa1 = "Ciao mondo"; //Variabile globale
let stringa2 = "Ciao mondo!"; //Variabile locale (variabile di appoggio che serve solo dentro una determinata funzione/struttura)
const costante = "Ciao mondo!" //Costante: il suo valore rimane immutato, serve per gestire oggetti che non dovranno mai cambiare

//Stringa
var stringa = "Insieme di caratteri";
console.log(stringa[2]); //stampa terzo carattere della stringa, inoltre una stringa è basicamente un array di caratteri un po' speciale

//Interi
var intero = 1; //se scrivo console.log(typeofNome_Variabile) mi dice che tipologia di carattere sto vedendo

//Decimali ->float
var decimale = 1.2; //per JS, interi e decimali sono entrambi numeri, per php sono int o float

//Booleani
var bool = true; //non metterlo tra virgolette altrimenti da booleano passa a stringa
console.log(typeof bool); //ti restituisce Boolean sia che metti true  o false, sono entrambe var booleane

//Array
var array = [1,2,3,4,5];

//Oggetto
var object = {
    "nome": "Mario",
    "eta": 30
};  //a differenza di un array posso dare un nome agli elementi, tuttavia js li considera entrambi come oggetti se verifico il typeof

//Operatori aritmetici
var a = 1;
var b = 2;
console.log(a + b);
console.log(a - b);
console.log(a*b);
console.log(a/b);

//Incrementi (hanno la stessa logica di php)
c=1;
console.log(c++);
console.log(++c);

//Operatori logici
console.log(a>b);
console.log(!(a>b)); //!=not, &&=and, == è uguaglianza per valore, === è uguaglianza per tipo; non c'è xor (unlucky i guess)



//Fun fact: nel console log ti evidenzia la riga di codice che ha stampato il messaggio



//Concatenazione
console.log(stringa1 + stringa2); 
/*
Come fa js a capire se deve fare una somma o una concatenazione?

"Semplice":
-> Se ho 2 numeri in formato numero avrò la somma;
-> Se uno dei 2 valori è in formato stringa, allora avrò come risultato una concatenazione in formato stringa;
-> Se ho più numeri, se almeno un valore è stringa (presupponiamo penultimo fattore) avrò la somma aritmetica dei valori
   fino alla stringa, da allora avrò una concatenazione
*/

//console.log(nome_stringa.lenght); mi restituisce la lunghezza della stringa

//Dato non definito e dato nullo
var d;
console.log(d); //non definita; posso anche scrivere d=undefined;

var e = null;
console.log(e); //nulla

var oggetto = {
    "nullo": null, //non assume ora un valore ed è falso a prescindere
    "undefined": undefined //indefinito e viene troncato
};
//occhio che tecnicamente sono diversi, hanno uguaglianza == ma non === anche se sono entrambi falsi


//Controlli di flusso
/*var numero = window.prompt("inserisci numero");
if (numero%2==0) {
    window.alert("numero pari");
} else {
    window.alert("numero dispari");
}
    */ 

//rimuovi dicitura commento per provare

/*
var mese =window.prompt("metti numero del mese"); //fatto solo per gennaio ma puoi continuare con tutti i mesi
switch (mese) {
    case "1":
        window.alert("gennaio");
    break;
}
*/

console.log(document.getElementById("elemento-1"));
console.log(document.getElementsByClassName("elementi"));
console.log(document.getElementsByTagName("p"));

console.log(document.querySelector('.elementi'));
console.log(document.querySelectorAll('.elementi'));

var lista = document.getElementById("genitore");
console.log(document.getElementsByClassName("figlio"));

//Inserisci il codice html nell'elemento
lista.innerHTML = "<li>1</li><li class='figlio'>2</li>";
console.log(lista.getElementsByClassName('figlio'));

lista.innerText = "<li>1</li><li class='figlio'>2</li>";
console.log(lista.getElementsByClassName('figlio'));

//Funzioni
//Letteralmente uguale a php

//Cicli
var voti = [4,6,7,8,6,8];

/*for (let i = 0; i < voti.length; i++) { //praticamente uguale a php, unica diff è che in php ho la funz count, qua ho una proprietà. 
                                        //Una proprietà non ha le parentesi come le funz; .lenght è proprietà dell'array, count è un calcolo da fare
    somma+=voti[i];
}
console.log('media = '+ (somma/voti.length));

*/
/*
var numero = window.prompt('inserisci un numero');
var elementi=[1,2,3,4,6,8,9];

let i = 0;
let trovato = false;

while (!trovato && i<elementi.lenght) {
    if (numero = elementi[i]){
    trovato = true;
    }
    i++;
}
*/

//Generazione di numeri casuali (tra le varie funzioni)

let casuale = Math.random()//ritorna decimali da 0-1, devo fare degli accorgimenti
//let num_non_arrotondato = Math.random() * 10;
//let num_arrotondato = Math.floor(num_non_arrotondato);
//floor arrotonda per difetto, ceiling per eccesso

//Altri cicli; ie foreach
var array = [1,2,3,4];            //è un array
var oggetto = {                   //è un oggetto
    nome: "mario",
    cognome: "rossi"
};
    //abbiamo scritto questa differenza perchè ci sono 2 cicli; 1 per ciclare le proprietà di un oggetto, l'altro per ciclare gli elementi di un array

//Ciclo per array 'for of'
for (valore of array){
    console.log(valore);
}
//Ciclo per oggetti 'for in'
for (chiave in oggetto){    // QUESTO CICLO RITORNA SOLO LA CHIAVE, sta a me poi usarlo come si deve
    console.log(oggetto[chiave]);//con questa dicitura posso prendere il valore assegnato alla chiave
}

/*
Eventi
se cerchi online eventi javascript ti esce un elenco, ovviamente ci sono quelli usati più o meno spesso


*/
var clickmebutton = document.getElementById("click-me-button");
clickmebutton.addEventListener('mouseenter', function(){//funzione che esegue se stessa, è una funzione anonima
    clickmebutton.style.left=Math.random()*100+"%";
    clickmebutton.style.top=Math.random()*100+"%";
})
