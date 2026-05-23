import { __ } from '@wordpress/i18n';
import { addQueryArgs } from '@wordpress/url';
import { Fragment, createInterpolateElement } from '@wordpress/element';
import {
	Placeholder,
	PanelBody,
	__experimentalToolsPanelItem as ToolsPanelItem,
	__experimentalToggleGroupControl as ToggleGroupControl,
	__experimentalToggleGroupControlOption as ToggleGroupControlOption,
	RangeControl,
} from '@wordpress/components';
import {
	InspectorControls,
	useBlockProps,
	HeightControl,
} from '@wordpress/block-editor';
import './editor.scss';
import { KeyInput } from './key-input';
import { Viewer } from './viewer';
import { Settings } from './settings.js';
import { useEntityProp } from '@wordpress/core-data';

export const MIN_PREVIEW_HEIGHT = 200;
export const MAX_PREVIEW_HEIGHT = 2000;

export default function Edit( props ) {
	const [ pdfEmbedSettings ] = useEntityProp( 'root', 'site', 'pdf_embed' );

	const {
		attributes: { height, type, config, mediaUrl },
		setAttributes,
		clientId,
	} = props;

	const helpString = createInterpolateElement(
		__( 'Use <a>global settings</a>.' ),
		{
			a: (
				<a
					href={ addQueryArgs( 'admin.php', {
						page: 'pdf-embed',
					} ) }
					target="_blank"
					rel="noreferrer"
				>
					{ __( 'global settings', 'pdf-embed' ) }
				</a>
			),
		}
	);

	const blockProps = useBlockProps( {
		style: {
			height: null,
			minHeight: null,
		},
	} );

	if ( window.pdf_embed?.apiKey || pdfEmbedSettings?.apiKey ) {
		return (
			<Fragment>
				<InspectorControls>
					<PanelBody
						title={ __( 'Settings', 'pdf-embed' ) }
						initialOpen={ true }
					>
						<ToggleGroupControl
							value={ type }
							isBlock
							help={
								'global' === type
									? helpString
									: __( 'Use local settings.', 'pdf-embed' )
							}
							__nextHasNoMarginBottom
							__next40pxDefaultSize
							onChange={ ( val ) => {
								if ( ! config ) {
									setAttributes( {
										config: pdfEmbedSettings,
									} );
								}
								setAttributes( { type: val } );
							} }
						>
							<ToggleGroupControlOption
								value="global"
								label={ __( 'Global', 'pdf-embed' ) }
							/>
							<ToggleGroupControlOption
								value="local"
								label={ __( 'Local', 'pdf-embed' ) }
							/>
						</ToggleGroupControl>
						{ 'local' === type && <Settings { ...props } /> }
					</PanelBody>
				</InspectorControls>
				{ mediaUrl && (
					<InspectorControls group="dimensions">
						<ToolsPanelItem
							hasValue={ () => !! height }
							label={ __( 'Height' ) }
							onDeselect={ () =>
								setAttributes( { height: undefined } )
							}
							resetAllFilter={ () =>
								setAttributes( { height: undefined } )
							}
							panelId={ clientId }
						>
							<RangeControl
								label={ __( 'Height' ) }
								onChange={ ( val ) =>
									setAttributes( { height: Number( val ) } )
								}
								//min={ MIN_PREVIEW_HEIGHT }
								max={ Math.max( MAX_PREVIEW_HEIGHT, height ) }
								value={ height ?? 500 }
								help={ __(
									'The height in pixels',
									'pdf-embed'
								) }
							/>
						</ToolsPanelItem>
					</InspectorControls>
				) }
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
				isColumnLayout
			>
				<KeyInput />
			</Placeholder>
		</div>
	);
}
