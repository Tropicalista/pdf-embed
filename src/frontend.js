var script = document.createElement('script');
script.src = 'https://documentcloud.adobe.com/view-sdk/main.js';

document.head.appendChild(script);

document.addEventListener("adobe_dc_view_sdk.ready", function(){ 

	var elms = document.querySelectorAll( '.wp-block-tropicalista-pdfembed' );
	var userLang = navigator.language || navigator.userLanguage;

	for (let i = 0; i < elms.length; i++) {
		var embedConfig = elms[i].dataset

		var adobeDCView = new AdobeDC.View( {
			clientId: embedConfig.apikey, 
			divId: elms[i].id,
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

	}

	var buttons = document.querySelectorAll( 'a' );
	for (let i = 0; i < buttons.length; i++) {
		buttons[i].onclick = function(e) { 
			e.preventDefault()
			previewFile(e)
		};
	}

});


/* Function to render the file using PDF Embed API. */
function previewFile(e)
{
    /* Initialize the AdobeDC View object */
    var adobeDCView = new AdobeDC.View({
        /* Pass your registered client id */
        clientId: pdf_embed.apiKey
    });

    /* Invoke the file preview API on Adobe DC View object */
    adobeDCView.previewFile({
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
            fileName: new URL( e.target.href ).pathname.split("/").pop()
        }
    }, {
	    embedMode: "LIGHT_BOX"
    });
};