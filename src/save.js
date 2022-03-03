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
import { useBlockProps } from '@wordpress/block-editor';

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#save
 *
 * @return {WPElement} Element to render.
 */
export default function save( { attributes } ) {
    const { 
        blockId,
        mediaUrl,
        embedMode,
        height,
        apiKey,
        showPrintPDF,
        showDownloadPDF,
        showPageControls,
        showFullScreen,
        dockPageControls,
        fileName,
        showAnnotationTools,
        enableFormFilling
    } = attributes;

	return (
        <div id={ blockId } { ...useBlockProps.save() } 
            style={{ height: attributes.height }}
            data-apiKey={ apiKey }
            data-fileName={ fileName }
            data-mediaUrl={ mediaUrl }
            data-embedMode={ embedMode }
            data-showDownloadPDF={ showDownloadPDF }
            data-showPrintPDF={ showPrintPDF }
            data-showPageControls={ showPageControls }
            data-showFullScreen={ showFullScreen }
            data-dockPageControls={ dockPageControls }
            data-showAnnotationTools={ showAnnotationTools }
            data-enableFormFilling={ enableFormFilling }
        ></div>
	);
}