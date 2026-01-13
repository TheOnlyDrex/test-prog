<?php

function stampa_nome_utente(){
    if(is_user_logged_in()){
        $user = wp_get_current_user();
        return $user->data->user_nicename;
}
}
add_shortcode('nome_utente', 'stampa_nome_utente');


/*
    prima avevo messo
    ob_start();
    echo "Bentornato, ";
    echo user->data->user_nicename;
    return ob_get_clean();
    guarda bene il discorso del buffer!!
*/

function countdown_shortcode($attributes){

    if (!array_key_exists('date', $attributes))
        return;
    $event_date = $attributes['date'];

    $today = new DateTime();
    $event = new DateTime($event_date);

    $diff = $event -> diff($today);

    return "Mancano ". $diff -> format("%a")." giorni all'evento"; //%R davanti a %a gli mette il segno
}
add_shortcode('countdown', 'countdown_shortcode');



function wrap_in_code($attributes, $content){

    extract(shortcode_atts(array(
        'class' => ''
    ),$attributes));

    return "<code class=>".$class."'>".$content."</code>";
}
add_shortcode('wrap_code', 'wrap_in_code');