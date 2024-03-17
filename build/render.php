<?php
/**
 * PHP file to use when rendering the block type on the server to show on the front end.
 *
 * The following variables are exposed to the file:
 *     $attributes (array): The block attributes.
 *     $content (string): The block default content.
 *     $block (WP_Block): The block instance.
 *
 * @see https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render
 */

// Generate unique id for aria-controls.
$unique_id = wp_unique_id( 'pdf-' );

$p = new WP_HTML_Tag_Processor( $content );

if ( $p->next_tag(
	array(
		'tag_name'   => 'DIV',
		'class_name' => 'wp-block-tropicalista-pdfembed',
	)
) ) {
	$p->set_attribute( 'id', $unique_id );
	$p->set_attribute( 'data-client-id', get_option( 'pdf_embed_api_key', '' ) );
	if ( ! empty( $p->get_attribute( 'data-mediaurl' ) ) ) {
		$p->set_attribute( 'data-media-url', $p->get_attribute( 'data-mediaurl' ) );

	}
	if ( ! empty( $p->get_attribute( 'data-filename' ) ) ) {
		$p->set_attribute( 'data-file-name', $p->get_attribute( 'data-filename' ) );
	}
}

echo $p->get_updated_html();
