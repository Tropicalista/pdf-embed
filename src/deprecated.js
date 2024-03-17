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
		console.log(attributes)
		return {
			...attributes,
			'data-api-key': attributes.apiKey,
			'data-media-url': attributes.mediaUrl,
			'data-default-view-mode': 'FIT_PAGE',
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

const deprecated = [ v1 ];

export default deprecated;
