<?php
/**
 * Plugin Name: Schedule Table.
 * Plugin URI:      https://github.com/team-hamworks/schedule-table
 * Description:     schedule-table.
 * Author:          hamworks
 * Author URI:      https://ham.works
 * Text Domain:     schedule-table
 * Domain Path:     /languages
 * Version: 0.0.3
 * @package         Schedule_Table
 */

namespace  HAMWORKS\Schedule_Table;

defined( 'ABSPATH' ) || exit;

function init() {
	// automatically load dependencies and version
	$asset_file = include( dirname( __FILE__ ) . '/build/index.asset.php' );
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
		'style'  => 'schedule-table',
	) );
}

add_action( 'init', function () {
	init();
} );
