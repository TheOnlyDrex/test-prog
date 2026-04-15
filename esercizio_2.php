// Ho scritto tutto in fondo al file functions.php del tema twentytwentyfive.

function il_mio_post(){
	register_post_type( 'prodotti',
		array(
			'labels' => array(
				'name' => 'Prodotti',
				'singular_name' => 'Prodotto',
			),
			'public' => true,
			'hierarchical' => true,
			'exclude_from_search' => false,
			'publicly_queryable' => true,
			'show_ui' => true,
			'show_in_nav_menus' => true,
			'show_in_admin_bar' => true,
			'show_in_rest' => true,
			'has_archive' => true,
			'rewrite' => array('slug' => 'prodotti'),
			'supports' => array('title', 'editor', 'thumbnail', 'excerpt', 'custom-fields'),
			'taxonomies' => array('categoria_prodotto'),
			'menu_icon' => 'dashicons-cart',
		));

	register_taxonomy('categoria_prodotto', 'prodotti', array(
	'labels' => array(
		'name' => 'Categorie',
		'singular_name' => 'Categoria'
	),
	'public' => true,
	'hierarchical' => true,
	'show_in_rest' => true,
));
}
add_action('init', 'il_mio_post');