import { useBlockProps } from '@wordpress/block-editor';

export default function save( { attributes, className } ) {
	const { mediaUrl, apiKey, config, fileName, type, height } = attributes;

	return (
		<div
			{ ...useBlockProps.save( { className } ) }
			style={ { height: height || undefined } }
			data-api-key={ apiKey }
			data-config={
				'local' === type ? JSON.stringify( config ) : undefined
			}
			data-file-name={ fileName }
			data-media-url={ mediaUrl }
		></div>
	);
}
