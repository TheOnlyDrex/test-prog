function esercizio1(){
    var numero = window.prompt('indovina il numero');
    var caso = 5;

    while (numero!=caso){
        numero = window.prompt('sbagliato, indovina il numero');

    }
    window.alert('congratulazioni, hai indovinato il numero '+ numero);
}

function esercizio2(){
    var numero = window.prompt('indovina il numero');
    var caso =5;

    while (numero!=caso){
        numero = window.prompt('sbagliato, indovina il numero');

    }
    window.alert('congratulazioni, hai indovinato il numero '+ numero);
}

function esercizio3(){
    var numero_inserito = window.prompt('numero da fare fattoriale');
    var fattoriale = 1;
    for(let i =1; i<=numero_inserito ;i++ ){
        fattoriale *=i;
    }
    window.alert('il fattoriale è '+fattoriale);
}

/*function esercizio4(){
    var oggetto = {
        nome: window.prompt('nome'),
        cognome: window.prompt('cognome'),
        matricola: window.prompt('matricola'),
        voti: window.prompt('voti separati solo la virgola ","')
    }
    var voti_array= oggetto[voti].split(',');
    var somma = 0;
    for (value in voti_array){
        somma+=voti_array;
    }
    var media=somma/voti_array.length;
    window.alert('nome: '+oggetto[nome],'cognome: '+oggetto[cognome], 'matricola: '+oggetto[matricola], 'media: '+media);

}
non fare cosi    */

function esercizio4(){
    var studente = {
        nome: "",
        cognome: "",
        matricola: "",
        voti: []
    }
    for (chiave in studente){
        if (chiave!='voti'){
            studente[chiave] = window.prompt('inserire '+chiave);
        } else {
            let stringa_voti = window.prompt('voti separati solo la virgola ","');
            studente[chiave] = stringa_voti.split(",");
        }
    }
    let media_voti = 0;
    for (voto of studente.voti) {
        media_voti+=Math.parseFloat[voto];
    }
    studente.media_voti= media_voti/studente.voti.length;
    
    let risultato = "";
    for(chiave in studente) {
        if (chiave!=voti) {
            risultato += chiave + ": " + studente[chiave] + "</br>";
        }
    }
document.getElementById("es4-risultato").innertext = risultato;
}
 //non funziona btw