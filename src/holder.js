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
	MediaPlaceholder,
	BlockControls,
	MediaReplaceFlow,
	InspectorControls,
	useBlockProps,
} from '@wordpress/block-editor';

import { ToolbarGroup, Disabled, SandBox } from '@wordpress/components';
import { useRefEffect } from '@wordpress/compose';
import {
	useEffect,
	useState,
	useRef,
	memo,
	Fragment,
} from '@wordpress/element';
import Settings from './settings';
import classnames from 'classnames';
import ViewSDK from './ViewSDK';

export default function Holder( props ) {
	const { attributes, setAttributes, isSelected, clientId } = props;
	const {
		mediaUrl,
		embedMode,
		height,
		apiKey,
		showPrintPdf,
		showDownloadPdf,
		fileName,
		blockId,
	} = attributes;

	const [ interactive, setInteractive ] = useState( false );

	/**
	 * setup the initial authentication of mapkit and setup all the event listeners
	 *
	 * ensures that the mapkit object gets initialized on the correct window which is
	 * needed for the iframe editors.
	 */
	const setupRef = useRefEffect(
		( element ) => {
			// use the mapkit object on the window of the current document
			const { ownerDocument } = element;
			const { defaultView } = ownerDocument;

			element.ownerDocument.addEventListener(
				'adobe_dc_view_sdk.ready',
				function () {
					const adobeDCView =
						new element.ownerDocument.defaultView.AdobeDC.View( {
							clientId: apiKey,
							divId: blockId,
						} );
					adobeDCView.previewFile(
						{
							content: {
								location: {
									url: mediaUrl,
								},
							},
							metaData: { fileName },
						},
						{ embedMode, showPrintPdf, showDownloadPdf }
					);
				}
			);

			if ( mediaUrl && defaultView.AdobeDC ) {
				const adobeDCView =
					new element.ownerDocument.defaultView.AdobeDC.View( {
						clientId: apiKey,
						divId: blockId,
					} );
				adobeDCView.previewFile(
					{
						content: {
							location: {
								url: mediaUrl,
							},
						},
						metaData: { fileName },
					},
					{ embedMode, showPrintPdf, showDownloadPdf }
				);
			}

			if ( ! defaultView.AdobeDC ) {
				const script = defaultView.document.createElement( 'script' );
				script.src =
					'https://acrobatservices.adobe.com/view-sdk/viewer.js';

				defaultView.document.head.appendChild( script );
			}
		},
		[ mediaUrl, embedMode, apiKey, showPrintPdf, showDownloadPdf ]
	);

	const blockProps = useBlockProps( { ref: setupRef } );

	const onSelectMedia = ( media ) => {
		if ( media.id ) {
			setAttributes( {
				mediaUrl: media.url,
				fileName: media.filename ? media.filename : media.title,
			} );
		}
	};

	const onSelectUrl = ( media ) => {
		setAttributes( {
			mediaUrl: media,
			fileName: new URL( media ).pathname.split( '/' ).pop(),
		} );
	};

	useEffect( () => {
		if ( ! isSelected ) setInteractive( false );
	}, [ isSelected ] );

	if ( mediaUrl ) {
		return (
			<div { ...blockProps }>
				<InspectorControls>
					<Settings { ...props } />
				</InspectorControls>
				<BlockControls>
					{ mediaUrl && (
						<ToolbarGroup>
							<MediaReplaceFlow
								mediaURL={ mediaUrl }
								allowedTypes={ [ 'application/pdf' ] }
								accept=".pdf"
								onSelect={ ( media ) => onSelectMedia( media ) }
							></MediaReplaceFlow>
						</ToolbarGroup>
					) }
				</BlockControls>

				<div id={ blockId } style={ { height } }></div>
				{ ! interactive && (
					<div
						className="block-library-embed__interactive-overlay"
						onMouseUp={ () => setInteractive( true ) }
					/>
				) }
			</div>
		);
	}

	return (
		<div { ...blockProps }>
			<MediaPlaceholder
				icon="pdf"
				labels={ {
					title: __( 'PDF' ),
					instructions: __(
						'Upload a PDF file, pick one from your media library, or add one with a URL.',
						'pdf-embed'
					),
				} }
				className="block-image"
				onSelect={ onSelectMedia }
				onSelectURL={ onSelectUrl }
				accept=".pdf"
				allowedTypes={ [ 'application/pdf' ] }
			/>
		</div>
	);
}
