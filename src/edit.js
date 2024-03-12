import { __ } from '@wordpress/i18n';

import { useEffect } from '@wordpress/element';
import { Placeholder } from '@wordpress/components';
import { InspectorControls, useBlockProps } from '@wordpress/block-editor';
import './editor.scss';
import KeyInput from './key-input';
import Settings from './settings';
import { Viewer } from './viewer';

export default function Edit( props ) {
	const { attributes } = props;
	const { apiKey } = attributes;
	const blockProps = useBlockProps();

	if ( apiKey ) {
		return (
			<div { ...blockProps }>
				<InspectorControls>
					<Settings { ...props } />
				</InspectorControls>
				<Viewer { ...props } />
			</div>
		);
	}

	return (
		<div { ...blockProps }>
			<Placeholder
				icon={ 'pdf' }
				instructions={ __(
					'Please insert a free api Key here or in the settings panel on the right.',
					'pdf-embed'
				) }
				label={ __( 'PDF Embed', 'pdf-embed' ) }
			>
				<KeyInput { ...props } />
			</Placeholder>
		</div>
	);
}
