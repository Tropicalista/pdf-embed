!function(){var e=document.createElement("script");function o(e){e.target.href&&new AdobeDC.View({clientId:pdf_embed.apiKey}).previewFile({content:{location:{url:e.target.href}},metaData:{fileName:new URL(e.target.href).pathname.split("/").pop()}},{embedMode:"LIGHT_BOX"})}e.src="https://documentcloud.adobe.com/view-sdk/main.js",document.head.appendChild(e),document.addEventListener("adobe_dc_view_sdk.ready",(function(){var e=document.querySelectorAll(".wp-block-tropicalista-pdfembed"),a=navigator.language||navigator.userLanguage;for(let o=0;o<e.length;o++){var t=e[o].dataset;new AdobeDC.View({clientId:t.apikey,divId:e[o].id,locale:a}).previewFile({content:{location:{url:t.mediaurl}},metaData:{fileName:t.filename}},{embedMode:t.embedmode,showDownloadPDF:JSON.parse(t.showdownloadpdf),showPrintPDF:JSON.parse(t.showprintpdf),showPageControls:JSON.parse(t.showpagecontrols),showFullScreen:JSON.parse(t.showfullscreen),dockPageControls:JSON.parse(t.dockpagecontrols),showAnnotationTools:JSON.parse(t.showannotationtools),enableFormFilling:JSON.parse(t.enableformfilling)})}var n=document.querySelectorAll(".embedPdf>a, a.embedPdf");for(let e=0;e<n.length;e++)n[e].onclick=function(e){e.preventDefault(),o(e)}}))}();