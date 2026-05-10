import { useBlockProps } from '@wordpress/block-editor';

const blockAttributes = {
	id: {
		type: 'string',
		source: 'attribute',
		attribute: 'id',
	},
	blockId: {
		type: 'string',
	},
	apiKey: {
		type: 'string',
	},
	width: {
		type: 'number',
	},
	height: {
		type: 'string',
		default: '500px',
	},
	mediaUrl: {
		type: 'string',
	},
	fileName: {
		type: 'string',
		default: 'My PDF',
	},
	embedMode: {
		type: 'string',
		default: '',
	},
	showDownloadPDF: {
		type: 'boolean',
		default: true,
	},
	showPrintPDF: {
		type: 'boolean',
		default: true,
	},
	showFullScreen: {
		type: 'boolean',
		default: true,
	},
	showPageControls: {
		type: 'boolean',
		default: true,
	},
	dockPageControls: {
		type: 'boolean',
		default: true,
	},
	enableFormFilling: {
		type: 'boolean',
		default: true,
	},
	showAnnotationTools: {
		type: 'boolean',
		default: true,
	},
};

const supports = { html: false, anchor: true };

const v1 = {
	blockAttributes,
	supports,
	isEligible() {
		return true;
	},
	migrate( attributes ) {
		return {
			...attributes,
			'data-apikey': attributes.apiKey,
			'data-mediaurl': attributes.mediaUrl,
			'data-defaultviewmode': 'FIT_PAGE',
		};
	},
	save( { attributes } ) {
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
	},
};

const v2 = {
	attributes: {
		id: {
			type: 'string',
			source: 'attribute',
			attribute: 'id',
		},
		blockId: {
			type: 'string',
		},
		apiKey: {
			type: 'string',
			source: 'attribute',
			selector: 'div.wp-block-tropicalista-pdfembed',
			attribute: 'data-api-key',
			default: '',
		},
		width: {
			type: 'number',
		},
		height: {
			type: 'string',
			default: '500px',
		},
		mediaUrl: {
			type: 'string',
			source: 'attribute',
			selector: 'div.wp-block-tropicalista-pdfembed',
			attribute: 'data-media-url',
		},
		fileName: {
			type: 'string',
			source: 'attribute',
			selector: 'div.wp-block-tropicalista-pdfembed',
			attribute: 'data-file-name',
		},
		embedMode: {
			type: 'string',
			source: 'attribute',
			selector: 'div.wp-block-tropicalista-pdfembed',
			attribute: 'data-embed-mode',
		},
		showDownloadPDF: {
			type: 'boolean',
			source: 'attribute',
			selector: 'div.wp-block-tropicalista-pdfembed',
			attribute: 'data-show-download-pdf',
		},
		dockPageControls: {
			type: 'boolean',
			source: 'attribute',
			selector: 'div.wp-block-tropicalista-pdfembed',
			attribute: 'data-dock-page-controls',
		},
		showPrintPDF: {
			type: 'boolean',
			source: 'attribute',
			selector: 'div.wp-block-tropicalista-pdfembed',
			attribute: 'data-show-print-pdf',
		},
		showFullScreen: {
			type: 'boolean',
			source: 'attribute',
			selector: 'div.wp-block-tropicalista-pdfembed',
			attribute: 'data-show-full-screen',
		},
		showPageControls: {
			type: 'boolean',
			source: 'attribute',
			selector: 'div.wp-block-tropicalista-pdfembed',
			attribute: 'data-show-page-controls',
		},
		showZoomControl: {
			type: 'boolean',
			source: 'attribute',
			selector: 'div.wp-block-tropicalista-pdfembed',
			attribute: 'data-show-zoom-control',
		},
		showThumbnails: {
			type: 'boolean',
			source: 'attribute',
			selector: 'div.wp-block-tropicalista-pdfembed',
			attribute: 'data-show-thumbnails',
		},
		showBookmarks: {
			type: 'boolean',
			source: 'attribute',
			selector: 'div.wp-block-tropicalista-pdfembed',
			attribute: 'data-show-bookmarks',
		},
		defaultViewMode: {
			type: 'string',
			source: 'attribute',
			selector: 'div.wp-block-tropicalista-pdfembed',
			attribute: 'data-default-view-mode',
			default: 'FIT_PAGE',
		},
		enableFormFilling: {
			type: 'boolean',
			source: 'attribute',
			selector: 'div.wp-block-tropicalista-pdfembed',
			attribute: 'data-enable-form-filling',
		},
		showAnnotationTools: {
			type: 'boolean',
			source: 'attribute',
			selector: 'div.wp-block-tropicalista-pdfembed',
			attribute: 'data-show-annotation-tools',
		},
		enableTextSelection: {
			type: 'boolean',
			source: 'attribute',
			selector: 'div.wp-block-tropicalista-pdfembed',
			attribute: 'data-enable-text-selection',
		},
		enableLinearization: {
			type: 'boolean',
			source: 'attribute',
			selector: 'div.wp-block-tropicalista-pdfembed',
			attribute: 'data-enable-linearization',
		},
		measurementId: {
			type: 'string',
			source: 'attribute',
			selector: 'div.wp-block-tropicalista-pdfembed',
			attribute: 'data-measurement-id',
			default: '',
		},
	},
	migrate( { fileName, mediaUrl, height, ...rest } ) {
		return {
			config: rest,
			fileName,
			mediaUrl,
		};
	},
	save( { attributes, className } ) {
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
			defaultViewMode,
			showThumbnails,
			showBookmarks,
			showZoomControl,
			enableTextSelection,
			enableLinearization,
			measurementId,
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
	},
};

const deprecated = [ v2, v1 ];

export default deprecated;
