const script = document.createElement( 'script' );
script.src = 'https://acrobatservices.adobe.com/view-sdk/viewer.js';
document.head.appendChild( script );

document.addEventListener( 'adobe_dc_view_sdk.ready', function () {
	const elms = document.querySelectorAll( '.wp-block-tropicalista-pdfembed' );
	const userLang = window.navigator.language || window.navigator.userLanguage;

	for ( let i = 0; i < elms.length; i++ ) {
		const embedConfig = elms[ i ].dataset;

		const config = { ...pdf_embed, ...embedConfig };
console.log(config, embedConfig)
		const adobeDCView = new window.AdobeDC.View( {
			clientId: config.clientId,
			divId: elms[ i ].id,
			locale: userLang,
			measurementId: config.measurementId,
		} );

		const previewFilePromise = adobeDCView.previewFile(
			{
				content: {
					location: {
						url: config.mediaUrl,
					},
				},
				metaData: {
					fileName: config.fileName,
				},
			},
			{
				embedMode: config.embedMode,
				defaultViewMode: config.defaultViewMode,
				dockPageControls: Boolean( config.dockPageControls ),
				showDownloadPDF: Boolean( config.showDownloadPdf ),
				showPrintPDF: Boolean( config.showPrintPdf ),
				showPageControls: Boolean( config.showPageControls ),
				showZoomControl: Boolean( config.showZoomControl ),
				showFullScreen: Boolean( config.showFullScreen ),
				showThumbnails: Boolean( config.showThumbnails ),
				showBookmarks: Boolean( config.showBookmarks ),
				showAnnotationTools: Boolean( config.showAnnotationTools ),
				enableTextSelection: Boolean( config.enableTextSelection ),
				enableFormFilling: Boolean( config.enableFormFilling ),
				enableLinearization: Boolean( config.enableLinearization ),
			}
		);
		previewFilePromise.then( ( adobeViewer ) => {
			adobeViewer.getAPIs().then( ( apis ) => {
				apis.enableTextSelection(
					Boolean( embedConfig.enableTextSelection )
				);
				if ( embedConfig.goTo ) {
					apis.gotoLocation( embedConfig.goTo );
				}
			} );
		} );
	}

	const buttons = document.querySelectorAll( '.embedPdf>a, a.embedPdf' );
	for ( let i = 0; i < buttons.length; i++ ) {
		buttons[ i ].onclick = function ( e ) {
			const ext = e.target.href
				.split( /[#?]/ )[ 0 ]
				.split( '.' )
				.pop()
				.trim();
			if ( 'pdf' === ext ) {
				e.preventDefault();
				previewFile( e );
			}
		};
	}
} );

/* Function to render the file using PDF Embed API. */
function previewFile( e ) {
	if ( ! e.target.href ) {
		return;
	}

	/* Initialize the AdobeDC View object */
	const adobeDCView = new window.AdobeDC.View( {
		/* Pass your registered client id */
		clientId: pdf_embed.apiKey,
	} );

	/* Invoke the file preview API on Adobe DC View object */
	adobeDCView.previewFile(
		{
			/* Pass information on how to access the file */
			content: {
				/* Location of file where it is hosted */
				location: {
					url: e.target.href,
				},
			},
			/* Pass meta data of file */
			metaData: {
				/* file name */
				fileName: new URL( e.target.href ).pathname.split( '/' ).pop(),
			},
		},
		{
			embedMode: 'LIGHT_BOX',
		}
	);
}
