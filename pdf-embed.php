<?php
/**
 * Plugin Name: Pdf Embed
 * Plugin URI:  https://www.francescopepe.com/
 * Description: PDF embedded with official Adobe API.
 * Version:     0.6.1
 * Author:      Tropicalista
 * Author URI:  https://www.francescopepe.com
 * License:     GPL2
 * License URI: https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain: pdf-embed
 *
 * @package     Formello/PdfEmbed
 */

require __DIR__ . '/vendor/autoload.php';

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/block-editor/how-to-guides/block-tutorial/writing-your-first-block-type/
 */
function pdf_embed_block_init() {
	register_block_type_from_metadata(
		__DIR__ . '/build'
	);

	$defaults = array(
		'apiKey'                   => '',
		'measurementId'            => '',
		'embedMode'                => 'FULL_WINDOW',
		'showZoomControl'          => true,
		'showAnnotationTools'      => true,
		'showFullScreen'           => true,
		'defaultViewMode'          => 'FIT_PAGE',
		'enableFormFilling'        => false,
		'showDownloadPDF'          => true,
		'showPrintPDF'             => true,
		'exitPDFViewerType'        => 'CLOSE',
		'showThumbnails'           => true,
		'showBookmarks'            => true,
		'enableLinearization'      => false,
		'enableAnnotationAPIs'     => false,
		'includePDFAnnotations'    => false,
		'enableSearchAPIs'         => true,
		'showDisabledSaveButton'   => true,
		'focusOnRendering'         => true,
		'showFullScreenViewButton' => true,
		'dockPageControls'         => true,
		'enableTextSelection'      => false,
	);

	$strings = array( 'apiKey', 'measurementId', 'embedMode', 'defaultViewMode', 'exitPDFViewerType' );

	$properties = array();

	foreach ( $defaults as $key => $value ) {
		if ( in_array( $key, $strings, true ) ) {
			$properties[ $key ] = array(
				'type' => 'string',
			);
		} else {
			$properties[ $key ] = array(
				'type' => 'boolean',
			);
		}
	}

	$args = array(
		'type'         => 'object',
		'default'      => $defaults,
		'show_in_rest' => array(
			'schema' => array(
				'type'                 => 'object',
				'properties'           => $properties,
				'additionalProperties' => false,
			),
		),
	);
	register_setting( 'pdf_embed', 'pdf_embed', $args );
}
add_action( 'init', 'pdf_embed_block_init' );

/**
 * Add menu item
 */
function pdf_embed_admin_menu() {
	$dashboard_hook = add_options_page(
		__( 'PDF Embed Settings', 'pdf-embed' ),
		__( 'PDF Embed', 'pdf-embed' ),
		'manage_options',
		'pdf-embed',
		'pdf_embed_admin_page'
	);
	add_action( 'load-' . $dashboard_hook, 'pdf_embed_enqueue_admin_js' );
}
add_action( 'admin_menu', 'pdf_embed_admin_menu' );

/**
 * Enqueue admin JavaScript
 *
 * @return void
 */
function pdf_embed_enqueue_admin_js() {
	$asset_file = include plugin_dir_path( __FILE__ ) . 'build/admin-script.asset.php';

	remove_action( 'admin_print_scripts', 'print_emoji_detection_script' );

	wp_enqueue_script(
		'pdf-embed-script',
		plugins_url( 'build/admin-script.js', __FILE__ ),
		$asset_file['dependencies'],
		$asset_file['version'],
		true
	);

	wp_enqueue_style(
		'pdf-embed-style',
		plugins_url( 'build/style-admin-script.css', __FILE__ ),
		array( 'wp-components', 'wp-reset-editor-styles' ),
		$asset_file['version']
	);
}

/**
 * Admin page HTML
 */
function pdf_embed_admin_page() {
	$options = get_option( 'pdf_embed', false );
	?>
	<div id="pdf-embed"></div>
	<?php
}

/**
 * Register settings
 */
function pdf_embed_setting() {
	$options = get_option( 'pdf_embed', false );

	wp_add_inline_script(
		'tropicalista-pdfembed-view-script',
		'const pdf_embed = ' . wp_json_encode( $options ),
		'before'
	);
	wp_add_inline_script(
		'tropicalista-pdfembed-editor-script',
		'const pdf_embed = ' . wp_json_encode( $options ),
		'before'
	);
}
add_action( 'init', 'pdf_embed_setting' );

/**
 * Adds pdf embed to button
 *
 * @param string $block_content The content.
 * @param array  $block The block.
 */
function pdf_embed_render( $block_content, $block ) {
	if ( ! empty( $block['attrs']['embedPdf'] ) ) {
		wp_enqueue_script( 'tropicalista-pdfembed-view-script' );
	}
	return $block_content;
}
add_filter( 'render_block', 'pdf_embed_render', 10, 2 );

/**
 * Add settings link on plugin page
 *
 * @param array  $links The links.
 * @param string $plugin_file_name The plugin file name.
 * @return array
 */
function pdf_embed_settings_link( $links, $plugin_file_name ) {
	if ( strpos( $plugin_file_name, basename( __FILE__ ) ) ) {
		array_unshift(
			$links,
			sprintf(
				'<a href="%s">%s</a>',
				add_query_arg(
					array(
						'page' => 'pdf-embed',
					),
					'admin.php'
				),
				esc_html__( 'Settings' )
			)
		);
	}

	return $links;
}
add_filter( 'plugin_action_links', 'pdf_embed_settings_link', 25, 2 );

/**
 * Initialize the plugin tracker
 *
 * @return void
 */
function pdf_embed_init_tracker() {

	if ( ! class_exists( 'Appsero\Client' ) ) {
		require_once __DIR__ . '/appsero/src/Client.php';
	}

	$client = new Appsero\Client( '48a870fe-75a1-476f-a4d6-bacc22ba54f1', 'Pdf Embed', __FILE__ );

	$client->insights()->init();
}
pdf_embed_init_tracker();

/**
 * Fires after tracking permission allowed (optin)
 *
 * @param array $data The Appsero data.
 *
 * @return void
 */
function pdf_embed_tracker_optin( $data ) {
	$data['project'] = 'pdf-embed';
	$response        = wp_remote_post(
		'https://hook.eu1.make.com/dplrdfggemll51whv3b21yjabuk8po0b',
		array(
			'headers'     => array( 'Content-Type' => 'application/json; charset=utf-8' ),
			'body'        => wp_json_encode( $data ),
			'method'      => 'POST',
			'data_format' => 'body',
		)
	);
}
add_action( 'pdf-embed_tracker_optin', 'pdf_embed_tracker_optin', 10 );

/**
 * This function runs when WordPress completes its upgrade process
 * It iterates through each plugin updated to see if ours is included
 * @param $upgrader_object Array
 * @param $options Array
 */
function pdf_embed_upgrade_completed( $upgrader_object, $options ) {
	// The path to our plugin's main file
	$our_plugin = plugin_basename( __FILE__ );
	// If an update has taken place and the updated type is plugins and the plugins element exists
	if ( 'update' === $options['action'] && 'plugin' === $options['type'] && isset( $options['plugins'] ) ) {
		// Iterate through the plugins being updated and check if ours is there
		foreach ( $options['plugins'] as $plugin ) {
			if ( $plugin === $our_plugin ) {
				// Remove old setting.
				delete_option( 'pdf_embed_api_key' );
			}
		}
	}
}
add_action( 'upgrader_process_complete', 'pdf_embed_upgrade_completed', 10, 2 );
