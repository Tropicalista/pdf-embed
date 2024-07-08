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
	/*attributes: {
		id: {
			type: 'string',
			source: 'attribute',
			selector: 'div.wp-block-tropicalista-pdfembed',
			attribute: 'id',
		},
		blockId: {
			type: 'string',
		},
		apiKey: {
			type: 'string',
			source: 'attribute',
			selector: 'div.wp-block-tropicalista-pdfembed',
			attribute: 'data-apikey',
		},
		fileName: {
			type: 'string',
			source: 'attribute',
			selector: 'div.wp-block-tropicalista-pdfembed',
			attribute: 'data-filename',
		},
		mediaUrl: {
			type: 'string',
			source: 'attribute',
			selector: 'div.wp-block-tropicalista-pdfembed',
			attribute: 'data-mediaurl',
		},
		embedMode: {
			type: 'string',
			source: 'attribute',
			selector: 'div.wp-block-tropicalista-pdfembed',
			attribute: 'data-embedmode',
		},
		showDownloadPDF: {
			type: 'string',
			source: 'attribute',
			selector: 'div.wp-block-tropicalista-pdfembed',
			attribute: 'data-showdownloadpdf',
			default: true,
		},
		dockPageControls: {
			type: 'string',
			source: 'attribute',
			selector: 'div.wp-block-tropicalista-pdfembed',
			attribute: 'data-dockpagecontrols',
			default: false,
		},
		showPrintPDF: {
			type: 'string',
			source: 'attribute',
			selector: 'div.wp-block-tropicalista-pdfembed',
			attribute: 'data-showprintpdf',
			default: true,
		},
		showFullScreen: {
			type: 'string',
			source: 'attribute',
			selector: 'div.wp-block-tropicalista-pdfembed',
			attribute: 'data-showfullscreen',
			default: true,
		},
		showPageControls: {
			type: 'string',
			source: 'attribute',
			selector: 'div.wp-block-tropicalista-pdfembed',
			attribute: 'data-showpagecontrols',
			default: true,
		},
		enableFormFilling: {
			type: 'string',
			source: 'attribute',
			selector: 'div.wp-block-tropicalista-pdfembed',
			attribute: 'data-enableformfilling',
			default: true,
		},
		showAnnotationTools: {
			type: 'string',
			source: 'attribute',
			selector: 'div.wp-block-tropicalista-pdfembed',
			attribute: 'data-showannotationtools',
			default: true,
		},
	},*/
	blockAttributes,
	supports,
	isEligible() {
		return true;
	},
	migrate( attributes ) {
		return {
			...attributes,
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
				data-showDownloadPDF={ JSON.stringify( showDownloadPDF ) }
				data-showPrintPDF={ JSON.stringify( showPrintPDF ) }
				data-showPageControls={ JSON.stringify( showPageControls ) }
				data-showFullScreen={ JSON.stringify( showFullScreen ) }
				data-dockPageControls={ JSON.stringify( dockPageControls ) }
				data-showAnnotationTools={ JSON.stringify(
					showAnnotationTools
				) }
				data-enableFormFilling={ JSON.stringify( enableFormFilling ) }
			></div>
		);
	},
};

const deprecated = [ v2, v1 ];

export default deprecated;
