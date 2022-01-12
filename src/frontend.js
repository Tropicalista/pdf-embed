console.log('PDF embedder')

var script = document.createElement('script');
script.src = 'https://documentcloud.adobe.com/view-sdk/main.js';

document.head.appendChild(script); //or something of the likes

document.addEventListener("DOMContentLoaded", function(event) {
   // Your code to run since DOM is loaded and ready
	var elm = document.getElementById( 'adobe-dc-view' );
	var embedConfig = elm.dataset;

	document.addEventListener("adobe_dc_view_sdk.ready", function(){ 
		var adobeDCView = new AdobeDC.View( {
			clientId: embedConfig.apikey, 
			divId: "adobe-dc-view"
		} );
		adobeDCView.previewFile({
			content: {
				location: {
					url: "https://documentcloud.adobe.com/view-sdk-demo/PDFs/Summary.pdf"
				}
			},
			metaData: {
				fileName: "Summary.pdf"
			}
		}, { 
			embedMode: embedConfig.embedmode,
			showDownloadPDF: JSON.parse( embedConfig.showdownloadpdf ),
			showPrintPDF: JSON.parse( embedConfig.showprintpdf ),
			showPageControls: JSON.parse( embedConfig.showpagecontrols ),
			showFullScreen: JSON.parse( embedConfig.showfullscreen ),
			dockPageControls: JSON.parse( embedConfig.dockpagecontrols )
		} );
	});

});


