!function(){console.log("PDF embedder");var e=document.createElement("script");e.src="https://documentcloud.adobe.com/view-sdk/main.js",document.head.appendChild(e),document.addEventListener("DOMContentLoaded",(function(e){var o=document.getElementById("adobe-dc-view").dataset;document.addEventListener("adobe_dc_view_sdk.ready",(function(){var e=new AdobeDC.View({clientId:o.apikey,divId:"adobe-dc-view"});e.previewFile({content:{location:{url:"https://documentcloud.adobe.com/view-sdk-demo/PDFs/Summary.pdf"}},metaData:{fileName:o.filename}},{embedMode:o.embedmode,showDownloadPDF:JSON.parse(o.showdownloadpdf),showPrintPDF:JSON.parse(o.showprintpdf),showPageControls:JSON.parse(o.showpagecontrols),showFullScreen:JSON.parse(o.showfullscreen),dockPageControls:JSON.parse(o.dockpagecontrols),showAnnotationTools:JSON.parse(o.showannotationtools),enableFormFilling:JSON.parse(o.enableformfilling)}),e.registerCallback(AdobeDC.View.Enum.CallbackType.SAVE_API,(function(e,o,n){return console.log(e,o,n),new Promise((function(o,n){setTimeout((function(){var n={code:AdobeDC.View.Enum.ApiResponseCode.SUCCESS,data:{metaData:Object.assign(e,{updatedAt:(new Date).getTime()})}};o(n)}),2e3)}))}),{})}))}))}();