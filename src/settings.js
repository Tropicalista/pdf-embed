import { __ } from '@wordpress/i18n';
import {
	PanelBody,
	SelectControl,
	ToggleControl,
	BaseControl,
} from '@wordpress/components';
import { HeightControl } from '@wordpress/block-editor';
import { Fragment } from '@wordpress/element';
import ApiButton from './key-input';

import './editor.scss';

export default function Settings( props ) {
	const { attributes, setAttributes } = props;

	const {
		showDownloadPDF,
		showPrintPDF,
		showFullScreen,
		showZoomControl,
		embedMode,
		height,
		showAnnotationTools,
		enableFormFilling,
		defaultViewMode,
		showBookmarks,
		showThumbnails,
		dockPageControls,
	} = attributes;

	return (
		<Fragment>
			<PanelBody
				title={ __( 'Settings', 'pdf-embed' ) }
				initialOpen={ true }
			>
				<ApiButton { ...props } />
				<hr />
				<SelectControl
					label={ __( 'Embed mode', 'pdf-embed' ) }
					value={ embedMode || 'FULL_WINDOW' }
					options={ [
						{
							label: __( 'Full Window', 'pdf-embed' ),
							value: 'FULL_WINDOW',
						},
						{
							label: __( 'Sized Container', 'pdf-embed' ),
							value: 'SIZED_CONTAINER',
						},
						{
							label: __( 'Inline', 'pdf-embed' ),
							value: 'IN_LINE',
						},
					] }
					onChange={ ( val ) => setAttributes( { embedMode: val } ) }
				/>
				<SelectControl
					label={ __( 'Default view mode', 'pdf-embed' ) }
					value={ defaultViewMode }
					options={ [
						{
							label: __( 'Default', 'pdf-embed' ),
							value: 'FIT_PAGE',
						},
						{
							label: __( 'Fit Page', 'pdf-embed' ),
							value: 'FIT_PAGE',
						},
						{
							label: __( 'Fit Width', 'pdf-embed' ),
							value: 'FIT_WIDTH',
						},
						{
							label: __( 'Two Column Fit Page', 'pdf-embed' ),
							value: 'TWO_COLUMN_FIT_PAGE',
						},
						{
							label: __( 'Two Column', 'pdf-embed' ),
							value: 'TWO_COLUMN',
						},
					] }
					onChange={ ( val ) =>
						setAttributes( { defaultViewMode: val } )
					}
				/>
				<ToggleControl
					label={ __( 'Show Download PDF', 'pdf-embed' ) }
					checked={ showDownloadPDF }
					onChange={ ( val ) =>
						setAttributes( { showDownloadPDF: val } )
					}
				/>
				<ToggleControl
					label={ __( 'Show Print PDF', 'pdf-embed' ) }
					checked={ showPrintPDF }
					onChange={ ( val ) =>
						setAttributes( { showPrintPDF: val } )
					}
				/>
				<ToggleControl
					label={ __( 'Show FullScreen Mode', 'pdf-embed' ) }
					checked={ showFullScreen }
					onChange={ ( val ) =>
						setAttributes( { showFullScreen: val } )
					}
				/>
				<ToggleControl
					label={ __( 'Show Zoom Control', 'pdf-embed' ) }
					checked={ showZoomControl }
					onChange={ ( val ) =>
						setAttributes( { showZoomControl: val } )
					}
				/>
				<ToggleControl
					label={ __( 'Show Thumbnails', 'pdf-embed' ) }
					checked={ showThumbnails }
					onChange={ ( val ) =>
						setAttributes( { showThumbnails: val } )
					}
				/>
				<ToggleControl
					label={ __( 'Show Bookmarks', 'pdf-embed' ) }
					checked={ showBookmarks }
					onChange={ ( val ) =>
						setAttributes( { showBookmarks: val } )
					}
				/>
				<ToggleControl
					label={ __( 'Show Annotation Tools', 'pdf-embed' ) }
					checked={ showAnnotationTools }
					onChange={ ( val ) =>
						setAttributes( { showAnnotationTools: val } )
					}
				/>
				<ToggleControl
					label={ __( 'Dock Page Controls', 'pdf-embed' ) }
					checked={ dockPageControls }
					onChange={ ( val ) =>
						setAttributes( { dockPageControls: val } )
					}
				/>
				<ToggleControl
					label={ __( 'Enable Form Filling', 'pdf-embed' ) }
					checked={ enableFormFilling }
					onChange={ ( val ) =>
						setAttributes( { enableFormFilling: val } )
					}
				/>

				{ 'IN_LINE' !== embedMode && (
					<BaseControl
						help={ __( 'Set the height of PDF.', 'pdf-embed' ) }
					>
						<HeightControl
							label={ __( 'Height', 'pdf-embed' ) }
							beforeIcon="image-flip-vertical"
							value={ height }
							onChange={ ( val ) =>
								setAttributes( { height: val } )
							}
						/>
					</BaseControl>
				) }
			</PanelBody>
		</Fragment>
	);
}
