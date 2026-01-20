<?php

function add_cer_social_link_phone_service($services){
    $services['phone'] = array(
        'name'=> 'Telefono',
        'icon'=> '<svg xmlns="http://www.w3.org/2000/svg" width="800px" height="800px" viewBox="0 0 16 16" fill="none">
        <path d="M1 5V1H7V5L4.5 7.5L8.5 11.5L11 9H15V15H11C5.47715 15 1 10.5228 1 5Z" fill="#000000"/>
        </svg>'
    );
    return $services;
}
add_filter('block_core_social_link_get_services','add_cer_social_link_phone_service');




//rivedila dal repo che non sono sicuro, questo vale per il blocco telefono
function cer_social_link_render_callback($block_content, $block){
    if (isset($block['attrs']['service'])
        && 'phone'===$block['attrs']['service']){
    $svg_content =''; //inserisci svg
    $block_content=preg_replace(
        '',
        $svg_content,
        $block_content
    );
    }
    return $block_content;
}
add_filter( 'render_block_core/social-link', 'cer_social_link_phone_render_callback', 10,2);