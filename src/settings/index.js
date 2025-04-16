import { __ } from '@wordpress/i18n';
import {
	PanelBody,
	SelectControl,
	ToggleControl,
	TextControl,
	BaseControl,
} from '@wordpress/components';
import { HeightControl } from '@wordpress/block-editor';
import { Fragment } from '@wordpress/element';
import { useEntityProp } from '@wordpress/core-data';

export default function Settings( props ) {
	const { options, onChange } = props;
	const [ settings ] = useEntityProp( 'root', 'site', 'pdf_embed' );

	const {
		showDownloadPDF,
		showPrintPDF,
		showFullScreen,
		showZoomControl,
		embedMode,
		height,
		showAnnotationTools,
		enableFormFilling,
		enableLinearization,
		defaultViewMode,
		showBookmarks,
		showThumbnails,
		dockPageControls,
		enableTextSelection,
		measurementId,
	} = options;

	const embedModeHelp = {
		FULL_WINDOW: __(
			'Renders the PDF viewer into the full height and width of the parent element.',
			'pdf-embed'
		),
		SIZED_CONTAINER: __(
			'The sized container mode displays PDFs in a boxed container with landscape orientation.',
			'pdf-embed'
		),
		IN_LINE: __(
			'All PDF pages rendered in line within a web page.',
			'pdf-embed'
		),
	};

	const defaultViewsHelp = {
		FIT_PAGE: __(
			'Displays the entire page in the current view pane.',
			'pdf-embed'
		),
		FIT_WIDTH: __(
			'Expands the page horizontally to the full width of the document pane.',
			'pdf-embed'
		),
		TWO_COLUMN_FIT_PAGE: __(
			'Displays two pages of the PDF side by side where the entire two pages are displayed in the current view pane.',
			'pdf-embed'
		),
		TWO_COLUMN: __(
			'Displays two pages of the PDF side by side in the current view pane.',
			'pdf-embed'
		),
		CONTINUOS: __(
			'This mode displays all the document pages one after the other and users can easily navigate through the pages by scrolling up or down.',
			'pdf-embed'
		),
		SINGLE_PAGE: __(
			"This mode displays only a single document page at a time and doesn't show any adjoining page.",
			'pdf-embed'
		),
	};

	return (
		<Fragment>
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
				onChange={ ( val ) => onChange( 'embedMode', val ) }
				help={
					embedModeHelp[ embedMode ] || embedModeHelp.FULL_WINDOW
				}
				__next40pxDefaultSize
				__nextHasNoMarginBottom
			/>
			{ 'IN_LINE' !== embedMode && (
				<BaseControl
					help={ __( 'Set the height of PDF.', 'pdf-embed' ) }
					__nextHasNoMarginBottom
				>
					<HeightControl
						label={ __( 'Height', 'pdf-embed' ) }
						beforeIcon="image-flip-vertical"
						value={ height || settings.height }
						onChange={ ( val ) => onChange( 'height', val ) }
					/>
				</BaseControl>
			) }
			<SelectControl
				label={ __( 'Default view mode', 'pdf-embed' ) }
				value={ defaultViewMode ?? settings.defaultViewMode }
				options={ [
					{
						label: __( 'Fit Page', 'pdf-embed' ),
						value: 'FIT_PAGE',
					},
					{
						label: __( 'Fit Width', 'pdf-embed' ),
						value: 'FIT_WIDTH',
					},
					{
						label: __( 'Two Column', 'pdf-embed' ),
						value: 'TWO_COLUMN',
					},
					{
						label: __( 'Two Column Fit Page', 'pdf-embed' ),
						value: 'TWO_COLUMN_FIT_PAGE',
					},
					{
						label: __(
							'Continuous (mobile only)',
							'pdf-embed'
						),
						value: 'CONTINUOUS',
					},
					{
						label: __(
							'Single page (mobile only)',
							'pdf-embed'
						),
						value: 'SINGLE_PAGE',
					},
				] }
				onChange={ ( val ) => onChange( 'defaultViewMode', val ) }
				help={ defaultViewsHelp[ defaultViewMode ] }
				__next40pxDefaultSize
				__nextHasNoMarginBottom
			/>
			<ToggleControl
				label={ __( 'Show Download PDF', 'pdf-embed' ) }
				checked={ showDownloadPDF ?? settings.showDownloadPDF }
				onChange={ ( val ) => onChange( 'showDownloadPDF', val ) }
				help={ __(
					'If true, PDF can be downloaded in all embed modes. Set this to false to disable PDF download.',
					'pdf-embed'
				) }
				__nextHasNoMarginBottom
			/>
			<ToggleControl
				label={ __( 'Show Print PDF', 'pdf-embed' ) }
				checked={ showPrintPDF ?? settings.showPrintPDF }
				onChange={ ( val ) => onChange( 'showPrintPDF', val ) }
				help={ __(
					'If true, PDF can be printed in all embed modes. Set this to false to disable PDF printing.',
					'pdf-embed'
				) }
				__nextHasNoMarginBottom
			/>
			<ToggleControl
				label={ __( 'Show FullScreen Mode', 'pdf-embed' ) }
				checked={ showFullScreen ?? settings.showFullScreen }
				onChange={ ( val ) => onChange( 'showFullScreen', val ) }
				help={ __(
					'By default, the full screen toggle appears in the bottom toolbar in sized container embed mode. Set this to false to hide the full screen toggle.',
					'pdf-embed'
				) }
				__nextHasNoMarginBottom
			/>
			<ToggleControl
				label={ __( 'Show Zoom Control', 'pdf-embed' ) }
				checked={ showZoomControl ?? settings.showZoomControl }
				onChange={ ( val ) => onChange( 'showZoomControl', val ) }
				help={ __(
					'Set this to false to hide the zoom-in and zoom-out options available in the right-hand panel. This configuration will work for full window and lightbox embed modes.',
					'pdf-embed'
				) }
				__nextHasNoMarginBottom
			/>
			<ToggleControl
				label={ __( 'Show Thumbnails', 'pdf-embed' ) }
				checked={ showThumbnails ?? settings.showThumbnails }
				onChange={ ( val ) => onChange( 'showThumbnails', val ) }
				help={ __(
					'Page thumbnails are available by default in full window and lightbox embed modes. Set this to false if you want to hide the thumbnails from the right-hand panel.',
					'pdf-embed'
				) }
				__nextHasNoMarginBottom
			/>
			<ToggleControl
				label={ __( 'Show Bookmarks', 'pdf-embed' ) }
				checked={ showBookmarks ?? settings.showBookmarks }
				onChange={ ( val ) => onChange( 'showBookmarks', val ) }
				help={ __(
					'PDF bookmarks are available by default in full window and lightbox embed modes. Set this to false if you want to hide the bookmarks from the right-hand panel.',
					'pdf-embed'
				) }
				__nextHasNoMarginBottom
			/>
			<ToggleControl
				label={ __( 'Show Annotation Tools', 'pdf-embed' ) }
				checked={ showAnnotationTools ?? settings.showAnnotationTools }
				onChange={ ( val ) => onChange( 'showAnnotationTools', val ) }
				help={ __(
					'If true, tools such as add text, sticky note, highlight, and so on appear in the quick tools menu on the left-hand side in full window embed mode.',
					'pdf-embed'
				) }
				__nextHasNoMarginBottom
			/>
			<ToggleControl
				label={ __( 'Enable Text Selection', 'pdf-embed' ) }
				checked={ enableTextSelection?? settings.enableTextSelection }
				onChange={ ( val ) => onChange( 'enableTextSelection', val ) }
				help={ __( 'Enable text selection in PDF.', 'pdf-embed' ) }
				__nextHasNoMarginBottom
			/>
			<ToggleControl
				label={ __( 'Enable Linearization', 'pdf-embed' ) }
				checked={ enableLinearization ?? settings.enableLinearization }
				onChange={ ( val ) => onChange( 'enableLinearization', val ) }
				help={ __( 'Enable linearization to optimize PDFs for faster viewing.', 'pdf-embed' ) }
				__nextHasNoMarginBottom
			/>
			<ToggleControl
				label={ __( 'Enable Form Filling', 'pdf-embed' ) }
				checked={ enableFormFilling ?? settings.enableFormFilling }
				onChange={ ( val ) => onChange( 'enableFormFilling', val ) }
				help={ __(
					'If true, form filling is enabled and users can edit fields in full window embed mode.',
					'pdf-embed'
				) }
				__nextHasNoMarginBottom
			/>
			{	
				'FULL_WINDOW' !== embedMode &&
				<ToggleControl
					label={ __( 'Dock Page Controls', 'pdf-embed' ) }
					checked={ dockPageControls }
					onChange={ ( val ) => onChange( 'dockPageControls', val ) }
					help={ __(
						'This is deprecated in full window and lightbox embed modes.',
						'pdf-embed'
					) }
					__nextHasNoMarginBottom
				/>
			}
			<TextControl
				label={ __( 'Google Analytics', 'pdf-embed' ) }
				value={ measurementId ?? settings.measurementId }
				onChange={ ( val ) => onChange( 'measurementId', val ) }
				help={ __(
					'Add your measurement id (G-XXXXXXX) to track pdf events in Google Analytics.',
					'pdf-embed'
				) }
				__nextHasNoMarginBottom
				__next40pxDefaultSize
			/>
		</Fragment>
	);
}
