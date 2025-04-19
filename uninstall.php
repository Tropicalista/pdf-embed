<?php
/**
 * Uninstall hook
 *
 * @package popper
 */

defined( 'WP_UNINSTALL_PLUGIN' ) || exit;

$pdf_embed = get_option( 'pdf_embed_api_key', false );

if ( $pdf_embed ) {
	delete_option( 'pdf_embed' );
	delete_option( 'pdf_embed_api_key' );
}
