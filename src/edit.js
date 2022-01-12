/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */
import { 
	useBlockProps, 
	MediaPlaceholder, 
	MediaUpload,
	MediaUploadCheck,	
	InspectorControls,
	MediaReplaceFlow,
	BlockControls
} from '@wordpress/block-editor';

import { 
	RangeControl, 
	PanelBody, 
	PanelRow, 
	TextControl, 
	RadioControl, 
	ToggleControl, 
	Placeholder, 
	ToolbarGroup, 
	ToolbarItem, 
	Button,
	Dropdown, 
	NavigableMenu, 
	MenuItem,
} from '@wordpress/components';

import { useEffect, Fragment, useState } from '@wordpress/element';
import apiFetch from '@wordpress/api-fetch';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';
import { get } from 'lodash';
import Settings from './settings';
import Holder from './holder';
import api from '@wordpress/api';
import { select, subscribe } from '@wordpress/data';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
export default function Edit( props ) {

	const [ apiLoaded, setApiLoaded] = useState( false )
	const { attributes, setAttributes } = props
	const {
		apiKey,
		mediaUrl
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
	            	console.log(response[ 'pdf_embed_api_key' ])
	            	setAttributes( { apiKey: response[ 'pdf_embed_api_key' ] } )
	            	setApiLoaded( true )
	            } );
	        }
	    } );

	}, [] )

	return (
		<div {...useBlockProps()}>
			<InspectorControls>
				<Settings { ...props } />
			</InspectorControls>
			{
				apiKey ?
					<Holder { ...props } />
				:
				<Placeholder 
					icon={ 'pdf' } 
					instructions={ __( 'Please insert an api Key in the settings panel on the right.', 'popper' ) }
					label={ __( 'Missing key', 'popper' ) } />
			
			}

		</div>
	);
}
