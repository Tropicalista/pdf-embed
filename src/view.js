const script = document.createElement( 'script' );
script.src = 'https://acrobatservices.adobe.com/view-sdk/viewer.js';
document.head.appendChild( script );

document.addEventListener( 'adobe_dc_view_sdk.ready', function () {
	const elms = document.querySelectorAll( '.wp-block-tropicalista-pdfembed' );
	const userLang = window.navigator.language || window.navigator.userLanguage;

	for ( let i = 0; i < elms.length; i++ ) {
		const embedConfig = elms[ i ].dataset;

		const adobeDCView = new window.AdobeDC.View( {
			clientId: embedConfig.clientId,
			divId: elms[ i ].id,
			locale: userLang,
			measurementId: embedConfig.measurementId,
		} );
		const previewFilePromise = adobeDCView.previewFile(
			{
				content: {
					location: {
						url: embedConfig.mediaUrl,
					},
				},
				metaData: {
					fileName: embedConfig.fileName,
				},
			},
			{
				embedMode: embedConfig.embedMode || 'FULL_WINDOW',
				dockPageControls: Boolean( embedConfig.dockPageControls ),
				showDownloadPDF: Boolean( embedConfig.showDownloadPdf ),
				showPrintPDF: Boolean( embedConfig.showPrintPdf ),
				showPageControls: Boolean( embedConfig.showPageControls ),
				showZoomControl: Boolean( embedConfig.showZoomControl ),
				showFullScreen: Boolean( embedConfig.showFullScreen ),
				showThumbnails: Boolean( embedConfig.showThumbnails ),
				showBookmarks: Boolean( embedConfig.showBookmarks ),
				defaultViewMode: embedConfig.defaultViewMode || 'FIT_PAGE',
				showAnnotationTools: Boolean( embedConfig.showAnnotationTools ),
				enableFormFilling: Boolean( embedConfig.enableFormFilling ),
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
