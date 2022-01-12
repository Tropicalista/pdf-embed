<?php
/**
 * Plugin Name: Pdf Embed
 * Plugin URI:  https://formello.net/
 * Description: PDF embedded with official Adobe API.
 * Version:     0.1.3
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
	);
}
add_action( 'init', 'pdf_embed_block_init' );
