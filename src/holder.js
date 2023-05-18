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

import { ToolbarGroup } from '@wordpress/components';
import { useRefEffect } from '@wordpress/compose';
import { useEffect, useState } from '@wordpress/element';
import Settings from './settings';
import classnames from 'classnames';

export default function Holder( props ) {
	const { attributes, setAttributes, isSelected, className } = props;
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

	const ref = useRefEffect(
		( element ) => {
			const { ownerDocument } = element;
			const { defaultView } = ownerDocument;

			const script = defaultView.document.createElement( 'script' );
			script.src =
				'https://documentservices.adobe.com/view-sdk/viewer.js';

			defaultView.document.head.appendChild( script );

			if ( ! mediaUrl ) {
				return;
			}

			defaultView.document.addEventListener(
				'adobe_dc_view_sdk.ready',
				function () {
					const adobeDCView = new defaultView.AdobeDC.View( {
						clientId: apiKey,
						divId: blockId,
					} );

					adobeDCView.previewFile(
						{
							content: { location: { url: mediaUrl } },
							metaData: { fileName },
						},
						attributes
					);
				}
			);
		},
		[ mediaUrl, embedMode, apiKey, showPrintPdf, showDownloadPdf ]
	);

	const blockProps = useBlockProps( { ref } );

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

	const [ interactive, setInteractive ] = useState( false );

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
