import { __, sprintf } from '@wordpress/i18n';
import { PanelBody, SelectControl, ToggleControl } from '@wordpress/components';
import { HeightControl } from '@wordpress/block-editor';
import { Fragment } from '@wordpress/element';
import ApiButton from './api-button';

import './editor.scss';

export default function Settings( props ) {
	const { attributes, setAttributes } = props;

	const {
		showDownloadPDF,
		showPrintPDF,
		showFullScreen,
		dockPageControls,
		embedMode,
		height,
		showAnnotationTools,
		enableFormFilling,
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
					value={ embedMode }
					options={ [
						{ label: __( 'Default', 'pdf-embed' ), value: '' },
						{
							label: __( 'Sized Container', 'pdf-embed' ),
							value: 'SIZED_CONTAINER',
						},
						{
							label: __( 'Inline', 'pdf-embed' ),
							value: 'IN_LINE',
						},
						{
							label: __( 'Full Window', 'pdf-embed' ),
							value: 'FULL_WINDOW',
						},
					] }
					onChange={ ( val ) => setAttributes( { embedMode: val } ) }
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
					label={ __( 'Page Controls Docked', 'pdf-embed' ) }
					checked={ dockPageControls }
					onChange={ ( val ) =>
						setAttributes( { dockPageControls: val } )
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
					label={ __( 'Enable Form Filling', 'pdf-embed' ) }
					checked={ enableFormFilling }
					onChange={ ( val ) =>
						setAttributes( { enableFormFilling: val } )
					}
				/>

				{ 'INLINE' !== embedMode && (
					<Fragment>
						<HeightControl
							label={ __( 'Height', 'pdf-embed' ) }
							beforeIcon="image-flip-vertical"
							value={ height }
							onChange={ ( val ) =>
								setAttributes( { height: val } )
							}
							help={ __( 'Set the height of PDF.', 'pdf-embed' ) }
						/>
						<small>
							{ __( 'Set the height of PDF.', 'pdf-embed' ) }
						</small>
					</Fragment>
				) }
			</PanelBody>
		</Fragment>
	);
}
