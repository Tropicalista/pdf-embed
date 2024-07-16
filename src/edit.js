import { __ } from '@wordpress/i18n';

import { Fragment } from '@wordpress/element';
import { Placeholder, Flex, FlexItem } from '@wordpress/components';
import { InspectorControls, useBlockProps } from '@wordpress/block-editor';
import './editor.scss';
import KeyInput from './key-input';
import Settings from './settings';
import { Viewer } from './viewer';
import { useEntityProp } from '@wordpress/core-data';

export default function Edit( props ) {
	const blockProps = useBlockProps();
	const [ pdfKey ] = useEntityProp( 'root', 'site', 'pdf_embed_api_key' );

	if ( pdfKey || pdf_embed.apiKey ) {
		return (
			<Fragment>
				<InspectorControls>
					<Settings { ...props } />
				</InspectorControls>
				<Viewer { ...props } />
			</Fragment>
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
				<Flex expanded={ true }>
					<FlexItem isBlock>
						<KeyInput { ...props } />
					</FlexItem>
				</Flex>
			</Placeholder>
		</div>
	);
}
