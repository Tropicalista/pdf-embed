var script = document.createElement('script');
script.src = 'https://documentcloud.adobe.com/view-sdk/main.js';

document.head.appendChild(script); //or something of the likes

document.addEventListener("DOMContentLoaded", function(event) {
   // Your code to run since DOM is loaded and ready
	var elm = document.getElementById( 'adobe-dc-view' );
	var embedConfig = elm.dataset;
	var userLang = navigator.language || navigator.userLanguage;

	document.addEventListener("adobe_dc_view_sdk.ready", function(){ 
		var adobeDCView = new AdobeDC.View( {
			clientId: embedConfig.apikey, 
			divId: "adobe-dc-view",
			locale: userLang
		} );
		adobeDCView.previewFile({
			content: {
				location: {
					url: embedConfig.mediaurl
				}
			},
			metaData: {
				fileName: embedConfig.filename
			}
		}, { 
			embedMode: embedConfig.embedmode,
			showDownloadPDF: JSON.parse( embedConfig.showdownloadpdf ),
			showPrintPDF: JSON.parse( embedConfig.showprintpdf ),
			showPageControls: JSON.parse( embedConfig.showpagecontrols ),
			showFullScreen: JSON.parse( embedConfig.showfullscreen ),
			dockPageControls: JSON.parse( embedConfig.dockpagecontrols ),
			showAnnotationTools: JSON.parse( embedConfig.showannotationtools ),
			enableFormFilling: JSON.parse( embedConfig.enableformfilling )
		} );

	});

});


