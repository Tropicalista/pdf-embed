/******/ (function() { // webpackBootstrap
var __webpack_exports__ = {};
/*!*************************!*\
  !*** ./src/frontend.js ***!
  \*************************/
var script = document.createElement('script');
script.src = 'https://documentcloud.adobe.com/view-sdk/main.js';
document.head.appendChild(script);
document.addEventListener("adobe_dc_view_sdk.ready", function () {
  var elms = document.querySelectorAll('.wp-block-tropicalista-pdfembed');
  var userLang = navigator.language || navigator.userLanguage;

  for (let i = 0; i < elms.length; i++) {
    var embedConfig = elms[i].dataset;
    var adobeDCView = new AdobeDC.View({
      clientId: embedConfig.apikey,
      divId: elms[i].id,
      locale: userLang
    });
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
      showDownloadPDF: JSON.parse(embedConfig.showdownloadpdf),
      showPrintPDF: JSON.parse(embedConfig.showprintpdf),
      showPageControls: JSON.parse(embedConfig.showpagecontrols),
      showFullScreen: JSON.parse(embedConfig.showfullscreen),
      dockPageControls: JSON.parse(embedConfig.dockpagecontrols),
      showAnnotationTools: JSON.parse(embedConfig.showannotationtools),
      enableFormFilling: JSON.parse(embedConfig.enableformfilling)
    });
  }
});
/******/ })()
;
//# sourceMappingURL=frontend.js.map