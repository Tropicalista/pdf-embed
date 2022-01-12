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
	InspectorControls,
	BlockControls,
	MediaReplaceFlow
} from '@wordpress/block-editor';

import { RangeControl, PanelBody, PanelRow, TextControl, RadioControl, ToggleControl, Placeholder, ToolbarGroup } from '@wordpress/components';

import { useEffect, Fragment } from '@wordpress/element';
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

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
export default function Holder( props ) {

	const { attributes, setAttributes } = props;
	const { mediaUrl, embedMode, height, apiKey, showPrintPdf, fileName } = attributes;

	const onSelectMedia = ( media ) => {
		setAttributes( {
			mediaUrl: media.url,
			fileName: media.filename
		} );
	}

	const onSelectUrl = ( media ) => {
		setAttributes( {
			mediaUrl: media,
			fileName: new URL( media ).pathname.split("/").pop()
		} );
	}

	useEffect( () => {
		var script = document.createElement('script');
		script.src = 'https://documentcloud.adobe.com/view-sdk/main.js';

  		document.head.appendChild(script);
		if( ! mediaUrl ){
			return
		}
		document.addEventListener("adobe_dc_view_sdk.ready", function(){ 
        	var adobeDCView = new AdobeDC.View( { clientId: apiKey, divId: 'adobe-dc-view' } );
	        adobeDCView.previewFile({
	            content:{ location: { url: mediaUrl } },
	            metaData:{ fileName: fileName }
	        }, attributes );

		} )

	}, [] )

	useEffect( () => {
		if( !window.AdobeDC ){
			return
		}

    	var elm = document.getElementById( 'adobe-dc-view' )
    	if( !elm ){
    		return
    	}
    	elm.style.height = '500px'

		var adobeDCView = new AdobeDC.View({clientId: apiKey, divId: "adobe-dc-view"});
        adobeDCView.previewFile({
            content:{ location: { url: mediaUrl } },
            metaData:{ fileName: fileName }
        }, attributes );


	}, [ mediaUrl, embedMode, apiKey, showPrintPdf ] )

	return (
		<Fragment>
			{
				mediaUrl ?
				<>
					<BlockControls>
						{
							mediaUrl && 
							<ToolbarGroup>
								<MediaReplaceFlow
									mediaURL={ mediaUrl }
									allowedTypes={ [ 'application/pdf' ] }
									accept=".pdf"
									onSelect={ ( media ) => onSelectMedia( media ) }
									onError={ () => console.log(99) }
								>
								</MediaReplaceFlow>
							</ToolbarGroup>
						}
					</BlockControls>
					<div id="adobe-dc-view" style={{ height: height }}></div>
				</>
				:
				<MediaPlaceholder
					icon= 'pdf'
					labels={{
						title: __( 'PDF' ),
						instructions: __( 'Upload a PDF file, pick one from your media library, or add one with a URL.' ),
					}}
					className = 'block-image'
					onSelect = { onSelectMedia }
					onSelectURL = { onSelectUrl }
					accept = '.pdf'
					allowedTypes={ [ 'application/pdf' ] }
				/>				
			}
		</Fragment>
	);
}
