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
import { useEntityProp } from '@wordpress/core-data';

import { ToolbarGroup } from '@wordpress/components';
import { useRefEffect, useInstanceId } from '@wordpress/compose';
import { useEffect, useState } from '@wordpress/element';

export const Viewer = ( props ) => {
	const { attributes, setAttributes, isSelected, clientId } = props;
	const { mediaUrl, fileName, config } = attributes;
	const instanceId = 'pdf-' + useInstanceId( Viewer );
	const [ settings ] = useEntityProp( 'root', 'site', 'pdf_embed' );

	const [ interactive, setInteractive ] = useState( isSelected );

	const setupRef = useRefEffect(
		( element ) => {
			const { ownerDocument } = element;
			const { defaultView } = ownerDocument;

			element.ownerDocument.addEventListener(
				'adobe_dc_view_sdk.ready',
				function () {
					if ( defaultView.AdobeDC ) {
						loadAdobeDc( defaultView );
					}
				}
			);
			if ( mediaUrl && defaultView.AdobeDC ) {
				if ( settings?.apiKey || pdf_embed.apiKey ) {
					loadAdobeDc( defaultView );
				}
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

	const loadAdobeDc = ( view ) => {
		const adobeDCView = new view.AdobeDC.View( {
			clientId: settings?.apiKey ?? pdf_embed.apiKey,
			divId: instanceId,
		} );

		adobeDCView.previewFile(
			{
				content: {
					location: {
						url: mediaUrl,
					},
				},
				metaData: { fileName, id: instanceId },
			},
			config ?? settings
		);
	};

	const blockProps = useBlockProps( {
		id: instanceId,
	} );

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
		if ( ! isSelected ) {
			setInteractive( false );
		}
	}, [ isSelected ] );

	if ( mediaUrl ) {
		return (
			<div { ...blockProps }>
				<BlockControls>
					{ mediaUrl && (
						<ToolbarGroup>
							<MediaReplaceFlow
								mediaURL={ mediaUrl }
								allowedTypes={ [ 'pdf' ] }
								accept="application/pdf"
								onSelect={ ( media ) => onSelectMedia( media ) }
								onReset={ () =>
									setAttributes( {
										mediaUrl: undefined,
										fileName: undefined,
									} )
								}
							></MediaReplaceFlow>
						</ToolbarGroup>
					) }
				</BlockControls>
				<div
					id={ instanceId }
					ref={ setupRef }
					//style={ { height: height ? `${ height }px` : undefined } }
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
				accept="application/pdf"
				allowedTypes={ [ 'application' ] }
			/>
		</div>
	);
};
