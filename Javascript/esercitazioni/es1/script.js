//guarda l'esempio

//Es2
function esercizio02() {
    let giorno = window.prompt ("giorno");
    let mese = window.prompt ("mese");
    let anno = window.prompt ("anno");
    let data = new Date(giorno + "/" + mese + "/" anno);
    //giorno della settimana da 0 a 6
    data.getDay();
    //stampa mercoledi 26 novembre
    switch (giornoSettimana) {
        case 0:
            risultato +="lunedi"
            
            break;
        case 1:
            risultato +="martedi"
            break;
        case 2:
            risultato +="mercoledi"
            break;
        case 3:
            risultato +="giovedi"
            break;
        case 4:
            risultato +="venerdi"
            break;
        case 5:
            risultato +="sabato"
            break;
        case 6:
            risultato +="domenica"
            break;
    }
}