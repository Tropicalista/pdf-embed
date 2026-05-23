const script = document.createElement( 'script' );
script.src = 'https://acrobatservices.adobe.com/view-sdk/viewer.js';
document.head.appendChild( script );

document.addEventListener( 'adobe_dc_view_sdk.ready', function () {
	const elms = document.querySelectorAll( '.wp-block-tropicalista-pdfembed' );
	const userLang = window.navigator.language || window.navigator.userLanguage;

	for ( let i = 0; i < elms.length; i++ ) {
		const { config, ...rest } = elms[ i ].dataset;

		const embedConfig = {
			...pdf_embed,
			...rest,
			...( config ? JSON.parse( config ) : undefined ),
		};

		const adobeDCView = new window.AdobeDC.View( {
			clientId: pdf_embed.apiKey,
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
				embedMode: embedConfig.embedMode ?? 'FULL_WINDOW',
				defaultViewMode: embedConfig.defaultViewMode ?? 'FIT_PAGE',
				dockPageControls: Boolean( embedConfig.dockPageControls ),
				showDownloadPDF: Boolean( embedConfig.showDownloadPDF ),
				showPrintPDF: Boolean( embedConfig.showPrintPDF ),
				showPageControls: Boolean( embedConfig.showPageControls ),
				showZoomControl: Boolean( embedConfig.showZoomControl ),
				showFullScreen: Boolean( embedConfig.showFullScreen ),
				showThumbnails: Boolean( embedConfig.showThumbnails ),
				showBookmarks: Boolean( embedConfig.showBookmarks ),
				showAnnotationTools: Boolean( embedConfig.showAnnotationTools ),
				enableTextSelection: Boolean( embedConfig.enableTextSelection ),
				enableFormFilling: Boolean( embedConfig.enableFormFilling ),
				enableLinearization: Boolean( embedConfig.enableLinearization ),
				exitPDFViewerType: embedConfig.exitPDFViewerType ?? 'CLOSE',
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
				id: e.target.href,
			},
		},
		{
			...pdf_embed,
			embedMode: 'LIGHT_BOX',
		}
	);
}
