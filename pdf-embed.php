<?php
/**
 * Plugin Name: Pdf Embed
 * Plugin URI:  https://formello.net/
 * Description: PDF embedded with official Adobe API.
 * Version:     0.3.4
 * Author:      Formello
 * Author URI:  https://formello.net
 * License:     GPL2
 * License URI: https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain: pdf-embed
 *
 * @package     Formello/PdfEmbed
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/block-editor/how-to-guides/block-tutorial/writing-your-first-block-type/
 */
function pdf_embed_block_init() {
	register_block_type_from_metadata(
		__DIR__,
	);
	$args = array(
		'type' => 'string',
		'sanitize_callback' => 'sanitize_text_field',
		'default' => '',
		'show_in_rest' => true,
	);
	register_setting( 'embed_pdf', 'pdf_embed_api_key', $args );
}
add_action( 'init', 'pdf_embed_block_init' );

/**
 * Register settings
 */
function pdf_embed_setting() {
	wp_add_inline_script(
		'tropicalista-pdfembed-editor-script',
		'const pdf_embed = ' . wp_json_encode(
			array(
				'apiKey' => get_option( 'pdf_embed_api_key', '' ),
			)
		),
		'before'
	);
	wp_add_inline_script(
		'tropicalista-pdfembed-view-script',
		'const pdf_embed = ' . wp_json_encode(
			array(
				'apiKey' => get_option( 'pdf_embed_api_key', '' ),
			)
		),
		'before'
	);
}
add_action( 'init', 'pdf_embed_setting' );

function pdf_embed_render( $block_content, $block ) {
	if ( ! empty( $block['attrs']['embedPdf'] ) ) {
		wp_enqueue_script( 'tropicalista-pdfembed-view-script' );
	}
	return $block_content;
}

add_filter( 'render_block', 'pdf_embed_render', 10, 2 );
