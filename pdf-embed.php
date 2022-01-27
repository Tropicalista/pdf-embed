<?php
/**
 * Plugin Name: Pdf Embed
 * Plugin URI:  https://formello.net/
 * Description: PDF embedded with official Adobe API.
 * Version:     0.1.7
 * Author:      Formello
 * Author URI:  https://formello.net
 * License:     GPL2
 * License URI: https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain: formello
 * @package     Formello/PdfEmbed
 *
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
        array(
            'render_callback' => function( $attrs, $content ) {
                wp_enqueue_script(
                    'pdf-embed-frontend',
                    plugins_url( 'build/frontend.js', __FILE__ ),
                    array(),
                    '0.1.7',
                    true
                );
                return $content;
            },
        )
	);
}
add_action( 'init', 'pdf_embed_block_init' );

function pdf_embed_setting() {
	$args = array(
		'type' => 'string',
		'sanitize_callback' => 'sanitize_text_field',
		'default' => '',
		'show_in_rest' => true,
	);
	register_setting( 'embed_pdf', 'pdf_embed_api_key', $args );
}
add_action( 'init', 'pdf_embed_setting' );
