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
	useBlockProps,
} from '@wordpress/block-editor';

import { ToolbarGroup } from '@wordpress/components';
import { useRefEffect, useInstanceId } from '@wordpress/compose';
import { useEffect, useState } from '@wordpress/element';

export const Viewer = ( props ) => {
	const { attributes, setAttributes, isSelected, clientId } = props;
	const { mediaUrl, height, fileName, apiKey } = attributes;
	const instanceId = useInstanceId( Viewer );

	const [ interactive, setInteractive ] = useState( false );

	const setupRef = useRefEffect(
		( element ) => {
			// use the mapkit object on the window of the current document
			const { ownerDocument } = element;
			const { defaultView } = ownerDocument;

			element.ownerDocument.addEventListener(
				'adobe_dc_view_sdk.ready',
				function () {
					if ( defaultView.AdobeDC ) {
						loadAdobeDc();
					}
				}
			);
			if ( mediaUrl && defaultView.AdobeDC ) {
				loadAdobeDc();
			}

			if ( ! defaultView.AdobeDC ) {
				const script = defaultView.document.createElement( 'script' );
				script.src =
					'https://acrobatservices.adobe.com/view-sdk/viewer.js';

				defaultView.document.head.appendChild( script );
			}
		},
		[ attributes ]
	);

	const loadAdobeDc = () => {
		const adobeDCView = new window.AdobeDC.View( {
			clientId: apiKey,
			divId: clientId,
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
			attributes
		);
	};

	const blockProps = useBlockProps( { id: instanceId } );

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
				<div
					id={ clientId }
					ref={ setupRef }
					style={ { height } }
					tabIndex={ '-1' }
				></div>
				{ ! interactive && (
					/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */
					<div
						className="block-library-embed__interactive-overlay"
						onMouseUp={ () => {
							setInteractive( true );
						} }
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
};
