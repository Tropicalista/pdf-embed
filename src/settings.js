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
} from '@wordpress/block-editor';

import { 
	RangeControl,
	PanelBody,
	SelectControl,
	RadioControl,
	ToggleControl,
	TextControl,
	__experimentalInputControl as InputControl,
	Button,
} from '@wordpress/components';

import { Fragment, RawHTML } from '@wordpress/element';
import ApiButton from './api-button';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';
import { get } from 'lodash';
import api from '@wordpress/api';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
export default function Settings( props ) {

	const { attributes, setAttributes } = props;

	const { 
		mediaUrl,
		showDownloadPDF,
		showPrintPDF,
		showFullScreen,
		dockPageControls,
		embedMode,
		width,
		height,
		apiKey,
		showAnnotationTools,
		enableFormFilling
	} = attributes;

	return (
		<Fragment>
			<PanelBody title={ __( 'Settings', 'pdf-embed' ) } initialOpen={ true }>
				<ApiButton {...props} />						
				<RawHTML>
					{ sprintf(
						__( '<p>Get your free API key on %s.</p>', 'pdf-embed' ),
						`<a href="https://www.adobe.io/apis/documentcloud/dcsdk/pdf-embed.html" target="_blank">Adobe  Official site</a>` )
					}
				</RawHTML>
		        <SelectControl
		            label={ __( 'Embed mode', 'pdf-embed' ) }
		            value={ embedMode }
		            options={ [
		                { label: __( 'Default', 'pdf-embed' ), value: '' },
		                { label: __( 'Sized Container', 'pdf-embed' ), value: 'SIZED_CONTAINER' },
		                { label: __( 'Inline', 'pdf-embed' ), value: 'IN_LINE' },
		            ] }
		            onChange={ ( val ) => setAttributes( { embedMode: val } ) }
		        />
				<ToggleControl
					label={ __( 'Show Download PDF', 'pdf-embed' ) }
					checked={ showDownloadPDF }
					onChange={ ( val ) => setAttributes( { showDownloadPDF: val } ) } 
				/>
				<ToggleControl
					label={ __( 'Show Print PDF', 'pdf-embed' ) }
					checked={ showPrintPDF }
					onChange={ ( val ) => setAttributes( { showPrintPDF: val } ) } 
				/>
				<ToggleControl
					label={ __( 'Show FullScreen Mode', 'pdf-embed' ) }
					checked={ showFullScreen }
					onChange={ ( val ) => setAttributes( { showFullScreen: val } ) } 
				/>
				<ToggleControl
					label={ __( 'Page Controls Docked', 'pdf-embed' ) }
					checked={ dockPageControls }
					onChange={ ( val ) => setAttributes( { dockPageControls: val } ) } 
				/>
				<ToggleControl
					label={ __( 'Show Annotation Tools', 'pdf-embed' ) }
					checked={ showAnnotationTools }
					onChange={ ( val ) => setAttributes( { showAnnotationTools: val } ) } 
				/>
				<ToggleControl
					label={ __( 'Enable Form Filling', 'pdf-embed' ) }
					checked={ enableFormFilling }
					onChange={ ( val ) => setAttributes( { enableFormFilling: val } ) } 
				/>

				{ 'SIZED_CONTAINER' === embedMode && (
					<Fragment>
					<RangeControl
						label={ __(
							'Height',
							'pdf-embed'
						) }
						help={
							<small>
								{ __(
									'Set the height of PDF.', 'pdf-embed'
								) }
							</small>
						}
						beforeIcon="image-flip-vertical"
						value={ height }
						onChange={ ( val ) => setAttributes( { height: val } ) }
						min={ 500 }
						max={ 1000 }
					/>
					</Fragment>
				) }				

			</PanelBody>
		</Fragment>
	);
}
