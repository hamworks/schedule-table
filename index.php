<?php
/**
 * Plugin Name: Gutenberg Examples TypeScript.
 *
 * @package price-table-block
 */
defined( 'ABSPATH' ) || exit;


function gutenberg_examples_with_typescript_register_block() {
	// automatically load dependencies and version
	$asset_file = include( plugin_dir_path( __FILE__ ) . 'build/index.asset.php' );
	wp_register_script(
		'price-table-block',
		plugins_url( 'build/index.js', __FILE__ ),
		$asset_file['dependencies'],
		$asset_file['version']
	);
	wp_register_style( 'price-table-block', plugins_url( 'build/index.css', __FILE__ ) );
	register_block_type( 'price-table-block/price-table-block', array(
		'editor_script' => 'price-table-block',
		'editor_style'  => 'price-table-block',
	) );
}

add_action( 'init', 'gutenberg_examples_with_typescript_register_block' );
