console.log('PDF embedder')

var script = document.createElement('script');
script.src = 'https://documentcloud.adobe.com/view-sdk/main.js';

document.head.appendChild(script); //or something of the likes

document.addEventListener("DOMContentLoaded", function(event) {
   // Your code to run since DOM is loaded and ready
	var elm = document.getElementById( 'adobe-dc-view' );
	var embedConfig = elm.dataset;
console.log(embedConfig)
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

	    /* Define Save API Handler */
	    var saveApiHandler = function (metaData, content, options) {
	        console.log(metaData, content, options);
	        return new Promise(function (resolve, reject) {
	            /* Dummy implementation of Save API, replace with your business logic */
	            setTimeout(function () {
	                var response = {
	                    code: AdobeDC.View.Enum.ApiResponseCode.SUCCESS,
	                    data: {
	                        metaData: Object.assign(metaData, {updatedAt: new Date().getTime()})
	                    },
	                };
	                resolve(response);
	            }, 2000);
	        });
	    };

	    adobeDCView.registerCallback(
	        AdobeDC.View.Enum.CallbackType.SAVE_API,
	        saveApiHandler,
	        {}
	    );
	});

});


