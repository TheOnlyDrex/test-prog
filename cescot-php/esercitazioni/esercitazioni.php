<?php
$valori=[1,3,5,2,9,6,7] ;
$max=0;
/*Devo trovare il numero più grande:
  Faccio un ciclo e verifivo il primo numero col secondo, vedo chi è più grande, mi salvo il più grande e procedo con quello dopo
*/
for ($i=0; $i<count($valori); $i++):
    if ($valori[$i]>$max):
        $max=$valori[$i];
    endif;
endfor;
//esiste una funzione apposita: max(nome_stringa)
echo "il valore massimo è " .$max;
echo "</br>";

//stampa gli elementi finchè l'elemento corrente è minore di 15
$valori=[12,13,5,12,15,3,19,4,17];
$a=0;

for($i=0; $i<count($valori);$i++):
    if ($a!=15):
        $a=$valori[$i];
        echo "$a";
        echo "\n";
    endif;
endfor;
echo"</br>";
/*
Oppure:
$valori=[12,13,5,12,15,3,19,4,17];
$output=" "; questa è una stringa vuota
for($i=0; $i<count($valori);$i++):
    if ($valori[$i]!=15):
        $output .= $valori[$i] . " "; sto concatenando dei valori ad una stringa (.= vuol dire concatena a, += aggiungi a, e cosi via )
    else:
        break;
    endif;
endfor;
*/

// Stampo tutti i nomi dei maggiorenni
$persone = [
    array(
        "nome" => "mario",
        "età" => 19
    ),
    array(
        "nome" => "lucia",
        "età" => 14
    ),
    array(
        "nome" => "alfredo",
        "età" => 7
    ),
    array(
        "nome" => "luca",
        "età" => 39
    ),
    array(
        "nome" => "giacomo",
        "età" => 22
    ),
    array(
        "nome" => "carla",
        "età" => 89
    ),
];

$output=" ";
for($i=0; $i<count($persone);$i++):
    if($persone[$i]["età"]>18):
        $output .=$persone[$i]["nome"]. " ";
        
    endif;
endfor;
echo "$output";
echo"</br>";
/*
foreach($array as $elemento_array):
    if ($elemento_array["età"]>18):
        echo "<li>.$elemento_array["nome"]."</li>;
    endif;
enforeach;

il foreach in alcuni linguaggi non segue l'ordine degli elementi, ma qua va bene.
*/



$data="Sunday 3 August 2025";
function formatta_data($data){ //primo step: spacca la stringa
    $parti=explode(" ",$data); //ora ho un array con i0 il giorno, i1 la data, i2 il mese, i3 l'anno
    $giorno_della_settimana= traduci_giorno_settimana(parti[0]);
    $giorno_del_mese = $parti[1];
    $mese = traduci_mese($parti(2));
    $anno = $parti [3];

    return $giorno_della_settimana." ".$giorno_del_mese." ".$mese." ".$anno;
}

function traduci_giorno_settimana($giorno){
    switch(strtolower($giorno)):
        case "monday":
            return"lunedi ";    
        case "tuesday":
           return"martedi ";
        case "wednesday":
            return"mercoledi ";
        case "thursday":
            return"giovedi ";
        case "friday":
            return"venerdi ";
        case "saturday":
            return"sabato ";
        case "sunday":
            return"domenica";
        endswitch;//se scrivo return non devo fare i break
}

function traduci_mese($mese){
    switch(strtolower($giorno)):
        case "january":
            return"gennaio ";    
        case "february":
           return"febbraio ";
        case "march":
            return"marzo ";
        case "april":
            return"aprile ";
        case "may":
            return"maggio ";
        case "june":
            return"giugno ";
        case "july":
            return"luglio";
        case "august":
            return"agosto ";    
        case "september":
           return"settembre ";
        case "october":
            return"ottobre ";
        case "november":
            return"novembre ";
        case "december":
            return"dicembre ";
        endswitch;
}

/*
Esercizio 1
Data l'età di una persona, ritorna se può guidare il 125cc
*/
function guida125($anni){
    if ($anni >= 16):
        return true;
    else:
        return false;
    endif;
}

/* Opuure:
function guida125($anni){
    if ($anni >= 16):
        return true;
    endif;    
    return false;
    
*/

/*
Esercizio 2
Dato un numero, verifica se è divisibile per 3
*/
function div3($numero){
    if ($numero % 3 ==0): //questa scrittura mi dice se 'il resto della divisione del numero per 3 è uguale a 0'
        return true;
    endif;
    return false; //potevo anche scrivere direttamente return condizione; invece di usare un if
}

/*
Esercizio 3 
Dato un numero, ritornalo in formato EURO (€ 10.00)
*/
function converti_euro($soldi){
    $valore_convertito="€ ".$soldi;
    return$valore_convertito;
}
