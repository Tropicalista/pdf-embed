<?php

namespace PDF_Embed;

use WP_Error;

/**
 * Register REST API routes for the plugin.
 */
function register_routes(){
	register_rest_route(
		'custom-api/v1',
		'/test',
		array(
			'methods'             => 'GET',
			'callback'            => __NAMESPACE__ . '\custom_api_get_all_posts',
			'permission_callback' => function () {
				return current_user_can('manage_options');
			},
		)
	);
}

/**
 * Callback function for the custom API endpoint to fetch all posts.
 *
 * @param \WP_REST_Request $request The REST request object.
 * @return \WP_REST_Response|\WP_Error The REST response or an error object.
 */
function custom_api_get_all_posts(\WP_REST_Request $request){
	$response = wp_remote_request(
		'https://pdf-services-ue1.adobe.io/operation/combinepdf/{jobID}/status',
		array(),
	);
	if (is_wp_error($response)) {
		return new WP_Error('error', wp_remote_retrieve_response_code($response), array('status' => 500));
	}

	return new \WP_REST_Response(json_decode($response['body']), wp_remote_retrieve_response_code($response));
}

add_action('rest_api_init', __NAMESPACE__ . '\register_routes');
