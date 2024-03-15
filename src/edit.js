import { __ } from '@wordpress/i18n';

import { useEffect } from '@wordpress/element';
import {
	Placeholder,
	Disabled,
	Spinner,
	Flex,
	FlexItem,
} from '@wordpress/components';
import { InspectorControls, useBlockProps } from '@wordpress/block-editor';
import './editor.scss';
import KeyInput from './key-input';
import Settings from './settings';
import { Viewer } from './viewer';
import { useEntityRecord } from '@wordpress/core-data';

export default function Edit( props ) {
	const blockProps = useBlockProps();

	const { record, hasResolved } = useEntityRecord( 'root', 'site' );

	if ( ! hasResolved ) {
		return (
			<Disabled>
				<Spinner />
			</Disabled>
		);
	}

	if ( record.pdf_embed_api_key ) {
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
				<Flex expanded={ true }>
					<FlexItem isBlock>
						<KeyInput { ...props } />
					</FlexItem>
				</Flex>
			</Placeholder>
		</div>
	);
}
