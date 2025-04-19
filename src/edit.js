import { __ } from '@wordpress/i18n';

import { Fragment, useState, useEffect } from '@wordpress/element';
import { Placeholder, Flex, FlexItem, PanelBody, Modal, Button, PanelRow } from '@wordpress/components';
import { InspectorControls, useBlockProps } from '@wordpress/block-editor';
import './editor.scss';
import KeyInput from './key-input';
import { Viewer } from './viewer';
import { useEntityProp } from '@wordpress/core-data';
import Settings from './settings/index.js';
import { SettingsModal } from './settings/modal.js';

export default function Edit( props ) {
	const blockProps = useBlockProps();
	const [ pdfKey ] = useEntityProp( 'root', 'site', 'pdf_embed_api_key' );

	const { attributes, setAttributes } = props;
	const [ isOpen, setOpen ] = useState( false );

	const onChange = ( key, val ) => {
		setAttributes( {
			[key]: val
		} )
	}

	if ( pdfKey || pdf_embed.apiKey ) {
		return (
			<Fragment>
				<InspectorControls>
					<PanelBody
						title={ __( 'Settings', 'pdf-embed' ) }
						initialOpen={ true }
					>
						<Button 
							size="small" 
							text={ __( 'Global Settings', 'pdf-embed' ) } 
							variant="primary" 
							onClick={ () => setOpen( true ) }
						/>
						<hr />
						{ isOpen && (
							<Modal
								title={ __( 'Global Settings', 'pdf-embed' ) }
								onRequestClose={ () => setOpen( false ) }
								focusOnMount={ true }
								size="medium"
							>
								<SettingsModal />
							</Modal>
						) }
						<Settings options={ attributes } onChange={ onChange } />
					</PanelBody>
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
					'Please insert a free api key to start using this block.',
					'pdf-embed'
				) }
				label={ __( 'PDF Embed', 'pdf-embed' ) }
			>
				<Button text={ __( 'Global Settings', 'pdf-embed' ) } variant="primary" onClick={ () => setOpen( true ) } />
				{ isOpen && (
					<Modal
						title={ __( 'Global Settings', 'pdf-embed' ) }
						onRequestClose={ () => setOpen( false ) }
						focusOnMount={ true }
						size="medium"
					>
						<SettingsModal />
					</Modal>
				) }
			</Placeholder>
		</div>
	);
}
