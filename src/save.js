import { useBlockProps } from '@wordpress/block-editor';

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
		enableFormFilling,
	} = attributes;

	return (
		<div
			id={ blockId }
			{ ...useBlockProps.save() }
			style={ { height } }
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
