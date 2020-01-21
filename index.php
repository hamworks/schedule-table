<?php
/**
 * Plugin Name: Schedule Table.
 *
 * @package schedule-table
 */

namespace  HAMWORKS\Schedule_Table;

defined( 'ABSPATH' ) || exit;

function init() {
	// automatically load dependencies and version
	$asset_file = include( plugin_dir_path( __FILE__ ) . 'build/index.asset.php' );
	wp_register_script(
		'schedule-table',
		plugins_url( 'build/index.js', __FILE__ ),
		$asset_file['dependencies'],
		$asset_file['version']
	);
	wp_register_style( 'schedule-table', plugins_url( 'build/index.css', __FILE__ ) );
	register_block_type( 'schedule-table/schedule-table', array(
		'editor_script' => 'schedule-table',
		'editor_style'  => 'schedule-table',
	) );
}

add_action( 'init', function () {
	init();
} );
