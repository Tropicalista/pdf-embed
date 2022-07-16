import { __ } from '@wordpress/i18n';
import { 
	useBlockProps, 
	InspectorControls
} from '@wordpress/block-editor';
import { useEntityProp } from '@wordpress/core-data';

import { 
	BaseControl, 
	TextControl, 
	Placeholder,
	__experimentalInputControl as InputControl,
	Button
} from '@wordpress/components';

import { useEffect, Fragment, useState, RawHTML } from '@wordpress/element';
import apiFetch from '@wordpress/api-fetch';

import './editor.scss';
import { get } from 'lodash';
import Settings from './settings';
import Holder from './holder';
import ApiButton from './api-button';
import api from '@wordpress/api';
import { select, subscribe } from '@wordpress/data';

export default function Edit( props ) {

	const [ apiLoaded, setApiLoaded] = useState( false )
	const { attributes, setAttributes, clientId } = props
	const {
		height,
		blockId,
		apiKey
	} = attributes;

	useEffect(() => {

		setAttributes( { apiKey: pdf_embed.apiKey } )

	}, [] );

	useEffect( () => {
		const idx = clientId.substr( 2, 9 ).replace( '-', '' ).replace( /-/g, '' );

	    if(!blockId){
	    	setAttributes( { blockId: idx } )
	    }

	}, [] )

	return (
		<div {...useBlockProps()} style={{ height: height }}>
			<InspectorControls>
				<Settings { ...props } />
			</InspectorControls>
			{
				apiKey ?
					<Holder { ...props } />
				:
				<Placeholder 
					icon={ 'pdf' } 
					instructions={ 
						<RawHTML>
							{ sprintf(
								__( '<p>Please insert a <b>free api Key</b> here or in the settings panel on the right. Get your free API key on %s.</p>', 'pdf-embed' ),
								`<a href="https://www.adobe.io/apis/documentcloud/dcsdk/pdf-embed.html" target="_blank">Adobe  Official site</a>` )
							}
						</RawHTML>	
					}
					label={ __( 'Missing key', 'pdf-embed' ) }
				>
		        	<ApiButton {...props} />						
                </Placeholder>
			}

		</div>
	);
}
