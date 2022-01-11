console.log('stocazzo')

var script = document.createElement('script');
script.src = 'https://documentcloud.adobe.com/view-sdk/main.js';

document.head.appendChild(script); //or something of the likes

document.addEventListener("adobe_dc_view_sdk.ready", function(){ 
	var adobeDCView = new AdobeDC.View( {
		clientId: embedConfig.apiKey, 
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
		embedMode: embedConfig.embedMode,
		showDownloadPDF: embedConfig.showDownloadPDF,
		showPrintPDF: embedConfig.showPrintPDF,
		showPageControls: embedConfig.showPageControls,
		showFullScreen: embedConfig.showFullScreen,
		dockPageControls: embedConfig.dockPageControls
	} );
});