<?php
//commento in linea

/*commento su
  più linee
*/
    echo "<h1>hello world</h1>"; //echo mi mette un output, stampa a video

    echo "<h2>Tipo di dato:</h2>"; //se metto il carattere di escape \ (backslash) ciò che segue è considerata stringa, finchè non ne segue un altra

    /*echo true;
    echo false; //booleano, simulato e viene gestito come numero. stampare true vuol dire stampare, stampare false vuol dire stampa nulla
    */

    //Numeri
    echo 10;
    echo "\n"; //per spezzare all'interno di stringhe. Se voglio andare a capo valgono le regole dell'html
    echo 1.15;
    echo "</br>";

    //Array
    $nome_variabile;
    $nomeVariabile;
    $nomevariabile; //se usi quest'ultimo puoi tranquillamente buttarti dal balcone
    //scritto cosi non serve niente, dobbiamo dichiarare qualcosa

    $array_1 = [1,2,3,4,5];  //uguale singolo '=' vuol dire assegno dx a variabile a sx
    $array_2 = array(1,2,3,4,5); //equivalenti
    $array_3 = array(
        "nome" => "Mario", //"nome" è la chiave, mi serve di sotto
        "cognome" => "Rossi",
        "età" => 21
    );
    
    //Fatal error vs Warning: errore bloccante vs errore non bloccante. Se esegui il file, ti esce un warning prima di stampare gli array
    echo $array_3; //php non mi stampa direttamente l'array, devo rielaborarlo
    echo "</br>";
    print_r($array_3); //stampa ciò che contiene
    echo "</br>";
    var_dump($array_3); //stampa e dice come è costituito
    echo "</br>";

    //verifico se Mario Rossi è maggiorenne oppure no
    if ($array_3["età"] >= 18) { //posso chiamarlo con la chiave oppure con il numero della posizione; si parte da zero!
        echo "Utente maggiorenne";
    } else {
        echo "Utente minorenne";
    }
    echo "</br>";


    if ($array_3["età"] == 18) { //non è un solo uguale, ne metto 2 e verifico l'uguaglianza per valore.
        echo "Utente ha 18 anni";
    } else {
        echo "Utente non ha 18 anni";
    }
    echo "</br>";
    //=== serve per verificare se l'uguaglianza non è solo per valore ma anche per tipo
    //ad esempio 18 == "18" (valore e stringhe) è vero
    //mentre 18 === "18" è falso, perchè uno è un intero, l'altro è stringa
    
    

    
?>

<?php
    echo "<h2>Esercizi</h2>";
    $a=12;
    $b=24;
    echo "somma è"; //oppure chiamo le operazioni con una variabile, poi chiuso il php, apro l'html e dentro al div scrivo somma: <?php echo bla e chiudo il php
    echo "\n";
    echo $a+$b;
    echo"</br>";
    echo "diff è";
    echo "\n";
    echo $a-$b;
    echo"</br>";
    echo "prodotto è";
    echo "\n";
    echo $a*$b;
    echo"</br>";
    echo "divisione è";
    echo "\n";
    echo $a/$b;
    echo"</br>";

    $parola="albero";
    if ($parola=="casa") {
        echo "vero";
    } else {
        echo"errato";
    }
    echo"</br>";

    $c="145";
    $d=145;
    if ($c===$d){
        echo "sono uguali";
    } else {
        echo "non sono uguali"; 
    }
    echo"</br>";

    /*
    Operatori logici:
    AND -> and o &&
    OR -> or o || ,cioè doppio separatore verticale
    XOR -> xor
    NOT -> not o !, ma usa sempre il !, non scrivere not. Si può fare ma evita.
    DIVERSO -> != diverso per valore, !== diverso per tipo; il ! si sostituisce a uno degli uguali, non ti confondere
    */

    /*
    Sintassi alternative:
    if (true and false):
        echo "condizione vera";
    else:
        echo "condizione falsa";
    endif:
    Sintassi tipica di python coi due punti e un end finale, invece delle graffe. 
    */

    /*
    Caso particolare: verifica l'esistenza e verifica se c'è del contenuto

    guarda l'esempio del del docente
    
    tl;dr se concateno due o più condizioni, se php vede che la prima condizione è falsa, smette di continuare la verifica a
    condizioni successive e restituisce falso, non gli interessano le altre condizioni

    Funzione array_key_exist("nome_chiave", $array_da_verificare) restituisce true se la chiave esiste nell'array
    */

?>

<?php
    $voto=6;
    if ($voto <= 5) {
        echo"insufficiente";
    }
    if ($voto ==6) {
        echo"sufficiente";
    }
    if ($voto==7 || $voto==8) {
        echo"buono";
    }
    if ($voto==9) {
        echo"ottimo";
    } 
    if($voto==10) {
        echo"eccellente";
    }
    //guarda anche la soluzione che è interessante

/*la documentazione di wordpress dice che consiglia di non chiudere il tag php per una serie di motivi, ora sia che lo chiudo o 
meno non gli cambia, ma per non sapere ne leggere ne scrivere lascialo aperto
*/

/*
  Concatenazione di stringhe: metto il punto e mi posso risparmiare un echo ad esempio
  Se concateno stringa e numero in php succedono cose:
  -se concateno numero e stringa vuota ottengo il numero trasformato in stringa
*/
