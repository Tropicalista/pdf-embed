import { __ } from '@wordpress/i18n';
import { 
	useBlockProps, 
	InspectorControls
} from '@wordpress/block-editor';

import { 
	BaseControl, 
	TextControl, 
	Placeholder, 
} from '@wordpress/components';

import { useEffect, Fragment, useState, RawHTML } from '@wordpress/element';
import apiFetch from '@wordpress/api-fetch';

import './editor.scss';
import { get } from 'lodash';
import Settings from './settings';
import Holder from './holder';
import api from '@wordpress/api';
import { select, subscribe } from '@wordpress/data';

export default function Edit( props ) {

	const [ apiLoaded, setApiLoaded] = useState( false )
	const { attributes, setAttributes } = props
	const {
		apiKey,
		height
	} = attributes;

	useEffect( () => {

	    subscribe( () => {

	        const isSavingPost = select('core/editor').isSavingPost();
	        const isAutosavingPost = select('core/editor').isAutosavingPost();

	        if ( isAutosavingPost ) {
	            return;
	        }

	        if ( ! isSavingPost ) {
	            return;
	        }

	        const settings = new api.models.Settings( {
	            [ 'pdf_embed_api_key' ]: apiKey,
	        } );
	        settings.save();
	    });

	    api.loadPromise.then( () => {
	        let settings = new api.models.Settings();

	        if ( apiLoaded === false ) {
	            settings.fetch().then( ( response ) => {
	            	setAttributes( { apiKey: response[ 'pdf_embed_api_key' ] } )
	            	setApiLoaded( true )
	            } );
	        }
	    } );

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
								__( '<p>Please insert a <b>free api Key</b> in the settings panel on the right. Get your free API key on %s.</p>', 'pdf-embed' ),
								`<a href="https://www.adobe.io/apis/documentcloud/dcsdk/pdf-embed.html" target="_blank">Adobe  Official site</a>` )
							}
						</RawHTML>	
					}
					label={ __( 'Missing key', 'pdf-embed' ) }
				/>
			
			}

		</div>
	);
}
