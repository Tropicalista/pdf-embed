<?php
/**
 * Plugin Name:       Pdf Embed
 * Description:       PDF embedded with official Adobe API.
 * Requires at least: 5.8
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            Formello
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       adobe-pdf
 *
 * @package           Formello/PdfEmbed
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/block-editor/how-to-guides/block-tutorial/writing-your-first-block-type/
 */
function pdf_embed_block_init() {

	$script_asset_path = __DIR__ . '/build/frontend.asset.php';
	if ( ! file_exists( $script_asset_path ) ) {
		throw new \Error(
			'You need to run `npm start` or `npm run build` for the "tropicalista/pdfembed" block first.'
		);
	}

	$script_asset = require $script_asset_path;

	wp_register_script(
		'adobe-pdf-block-frontend',
		plugins_url( 'build/frontend.js', __FILE__ ),
		array(),
		$script_asset['version'],
		true
	);

	register_block_type(
		__DIR__,
		array(
			'render_callback' => function ( $attributes, $content ) {

				if ( ! is_admin() ) {
					wp_enqueue_script( 'adobe-pdf-block-frontend' );

					wp_add_inline_script( 'adobe-pdf-block-frontend', 'var embedConfig =' . wp_json_encode( $attributes ) );
				}

				return $content;
			},
		)
	);
}
add_action( 'init', 'pdf_embed_block_init' );
