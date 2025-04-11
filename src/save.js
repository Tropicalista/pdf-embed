import { useBlockProps } from '@wordpress/block-editor';

export default function save( { attributes, className } ) {
	const {
		mediaUrl,
		embedMode,
		height,
		apiKey,
		showPrintPDF,
		showDownloadPDF,
		showPageControls,
		showBookmarks,
		showThumbnails,
		showFullScreen,
		defaultViewMode,
		showZoomControl,
		fileName,
		showAnnotationTools,
		enableFormFilling,
		enableLinearization,
		dockPageControls,
		measurementId,
		enableTextSelection,
	} = attributes;

	return (
		<div
			{ ...useBlockProps.save( { className } ) }
			style={ { height: height || undefined } }
			data-api-key={ apiKey }
			data-file-name={ fileName }
			data-media-url={ mediaUrl }
			data-embed-mode={ embedMode }
			data-show-download-PDF={ showDownloadPDF || undefined }
			data-show-print-PDF={ showPrintPDF || undefined }
			data-show-annotation-tools={ showAnnotationTools || undefined }
			data-show-page-controls={ showPageControls || undefined }
			data-show-thumbnails={ showThumbnails || undefined }
			data-show-bookmarks={ showBookmarks || undefined }
			data-show-zoom-control={ showZoomControl || undefined }
			data-show-full-screen={ showFullScreen || undefined }
			data-default-view-mode={ defaultViewMode || undefined }
			data-dock-page-controls={ dockPageControls || undefined }
			data-enable-form-filling={ enableFormFilling || undefined }
			data-enable-text-selection={ enableTextSelection || undefined }
			data-enable-linearization={ enableLinearization || undefined }
			data-measurement-id={ measurementId || undefined }
		></div>
	);
}
