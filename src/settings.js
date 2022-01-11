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

import { RangeControl, PanelBody, PanelRow, SelectControl, RadioControl, ToggleControl, TextControl} from '@wordpress/components';

import { Fragment, RawHTML } from '@wordpress/element';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';
import { get } from 'lodash';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
export default function Settings( { attributes, setAttributes } ) {

	const { 
		mediaUrl,
		showDownloadPDF,
		showPrintPDF,
		showFullScreen,
		dockPageControls,
		embedMode,
		width,
		height,
		apiKey
	} = attributes;

	return (
		<Fragment>
			<PanelBody title={ __( 'Settings', 'popper' ) } initialOpen={ true }>
				<TextControl
					label={ __( 'API Key', 'popper' ) }
					help={
						<RawHTML>
							{ sprintf(
								__( '<p>Get your free API key on %s.</p>', 'popper' ),
								`<a href="https://www.adobe.io/apis/documentcloud/dcsdk/pdf-embed.html" target="_blank">Adobe  Official site</a>` )
							}
						</RawHTML>						
					}
					value={ apiKey }
					onChange={ ( val ) => setAttributes( { apiKey: val } ) } 
				/>
		        <SelectControl
		            label={ __( 'Embed mode', 'popper' ) }
		            value={ embedMode }
		            options={ [
		                { label: __( 'Sized Container', 'popper' ), value: 'SIZED_CONTAINER' },
		                { label: __( 'Inline', 'popper' ), value: 'IN_LINE' },
		            ] }
		            onChange={ ( val ) => setAttributes( { embedMode: val } ) }
		        />
				<ToggleControl
					label={ __( 'Show Download PDF', 'popper' ) }
					checked={ showDownloadPDF }
					onChange={ ( val ) => setAttributes( { showDownloadPDF: val } ) } 
				/>
				<ToggleControl
					label={ __( 'Show Print PDF', 'popper' ) }
					checked={ showPrintPDF }
					onChange={ ( val ) => setAttributes( { showPrintPDF: val } ) } 
				/>
				<ToggleControl
					label={ __( 'Show FullScreen Mode', 'popper' ) }
					checked={ showFullScreen }
					onChange={ ( val ) => setAttributes( { showFullScreen: val } ) } 
				/>
				<ToggleControl
					label={ __( 'Page Controls Docked', 'popper' ) }
					checked={ dockPageControls }
					onChange={ ( val ) => setAttributes( { dockPageControls: val } ) } 
				/>
				<PanelRow>
				{ 'SIZED_CONTAINER' === embedMode && (
					<Fragment>
					<RangeControl
						label={ __(
							'Height',
							'popper'
						) }
						help={
							<small>
								{ __(
									'Show the popup when this percentage of the page has been scrolled.'
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
				</PanelRow>
			</PanelBody>
		</Fragment>
	);
}
