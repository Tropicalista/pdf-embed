!function(){"use strict";var e,t={439:function(e,t,o){var n=window.wp.blocks,l=window.wp.element,a=window.wp.i18n,r=window.wp.blockEditor,i=window.wp.components;function c(e){let{attributes:t,setAttributes:o}=e;const{mediaUrl:n,showDownloadPDF:r,showPrintPDF:c,showFullScreen:d,dockPageControls:p,embedMode:s,width:u,height:h,apiKey:m,showAnnotationTools:w,enableFormFilling:f}=t;return(0,l.createElement)(l.Fragment,null,(0,l.createElement)(i.PanelBody,{title:(0,a.__)("Settings","popper"),initialOpen:!0},(0,l.createElement)(i.TextControl,{label:(0,a.__)("API Key","popper"),help:(0,l.createElement)(l.RawHTML,null,sprintf((0,a.__)("<p>Get your free API key on %s.</p>","popper"),'<a href="https://www.adobe.io/apis/documentcloud/dcsdk/pdf-embed.html" target="_blank">Adobe  Official site</a>')),value:m,onChange:e=>o({apiKey:e})}),(0,l.createElement)(i.SelectControl,{label:(0,a.__)("Embed mode","popper"),value:s,options:[{label:(0,a.__)("Default","popper"),value:""},{label:(0,a.__)("Sized Container","popper"),value:"SIZED_CONTAINER"},{label:(0,a.__)("Inline","popper"),value:"IN_LINE"}],onChange:e=>o({embedMode:e})}),(0,l.createElement)(i.ToggleControl,{label:(0,a.__)("Show Download PDF","popper"),checked:r,onChange:e=>o({showDownloadPDF:e})}),(0,l.createElement)(i.ToggleControl,{label:(0,a.__)("Show Print PDF","popper"),checked:c,onChange:e=>o({showPrintPDF:e})}),(0,l.createElement)(i.ToggleControl,{label:(0,a.__)("Show FullScreen Mode","popper"),checked:d,onChange:e=>o({showFullScreen:e})}),(0,l.createElement)(i.ToggleControl,{label:(0,a.__)("Page Controls Docked","popper"),checked:p,onChange:e=>o({dockPageControls:e})}),(0,l.createElement)(i.ToggleControl,{label:(0,a.__)("Show Annotation Tools","popper"),checked:w,onChange:e=>o({showAnnotationTools:e})}),(0,l.createElement)(i.ToggleControl,{label:(0,a.__)("Enable Form Filling","popper"),checked:f,onChange:e=>o({enableFormFilling:e})}),(0,l.createElement)(i.PanelRow,null,"SIZED_CONTAINER"===s&&(0,l.createElement)(l.Fragment,null,(0,l.createElement)(i.RangeControl,{label:(0,a.__)("Height","popper"),help:(0,l.createElement)("small",null,(0,a.__)("Show the popup when this percentage of the page has been scrolled.")),beforeIcon:"image-flip-vertical",value:h,onChange:e=>o({height:e}),min:500,max:1e3})))))}window.wp.apiFetch,window.lodash;var d=window.wp.api,p=o.n(d),s=window.wp.data;function u(e){const{attributes:t,setAttributes:o}=e,{mediaUrl:n,embedMode:c,height:d,apiKey:u,showPrintPdf:h,fileName:m}=t,w=e=>{o({mediaUrl:e.url,fileName:e.filename})};return(0,l.useEffect)((()=>{(0,s.subscribe)((()=>{const e=(0,s.select)("core/editor").isSavingPost();(0,s.select)("core/editor").isAutosavingPost()||e&&new(p().models.Settings)({embed_pdf_api_key:u}).save()}));var e=document.createElement("script");e.src="https://documentcloud.adobe.com/view-sdk/main.js",document.head.appendChild(e),n&&document.addEventListener("adobe_dc_view_sdk.ready",(function(){new AdobeDC.View({clientId:u,divId:"adobe-dc-view"}).previewFile({content:{location:{url:n}},metaData:{fileName:m}},t)}))}),[]),(0,l.useEffect)((()=>{if(window.AdobeDC){var e=document.getElementById("adobe-dc-view");e&&(e.style.height="500px",new AdobeDC.View({clientId:u,divId:"adobe-dc-view"}).previewFile({content:{location:{url:n}},metaData:{fileName:m}},t))}}),[n,c,u,h]),(0,l.createElement)(l.Fragment,null,n?(0,l.createElement)(l.Fragment,null,(0,l.createElement)(r.BlockControls,null,n&&(0,l.createElement)(i.ToolbarGroup,null,(0,l.createElement)(r.MediaReplaceFlow,{mediaURL:n,allowedTypes:["application/pdf"],accept:".pdf",onSelect:e=>w(e),onError:()=>console.log(99)}))),(0,l.createElement)("div",{id:"adobe-dc-view",style:{height:d}})):(0,l.createElement)(r.MediaPlaceholder,{icon:"pdf",labels:{title:(0,a.__)("PDF"),instructions:(0,a.__)("Upload a PDF file, pick one from your media library, or add one with a URL.")},className:"block-image",onSelect:w,onSelectURL:e=>{o({mediaUrl:e,fileName:new URL(e).pathname.split("/").pop()})},accept:".pdf",allowedTypes:["application/pdf"]}))}function h(){return h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e},h.apply(this,arguments)}(0,n.registerBlockType)("tropicalista/pdfembed",{edit:function(e){const{attributes:t,setAttributes:o}=e,{apiKey:n,mediaUrl:d}=t;return(0,l.createElement)("div",(0,r.useBlockProps)(),(0,l.createElement)(r.InspectorControls,null,(0,l.createElement)(c,e)),n?(0,l.createElement)(u,e):(0,l.createElement)(i.Placeholder,{icon:"pdf",instructions:(0,a.__)("Please insert an api Key in the settings panel on the right.","popper"),label:(0,a.__)("Missing key","popper")}))},save:function(e){let{attributes:t}=e;const{mediaUrl:o,embedMode:n,height:a,apiKey:i,showPrintPDF:c,showDownloadPDF:d,showPageControls:p,showFullScreen:s,dockPageControls:u,fileName:m,showAnnotationTools:w,enableFormFilling:f}=t;return(0,l.createElement)("div",h({id:"adobe-dc-view"},r.useBlockProps.save(),{style:{height:t.height},"data-apiKey":i,"data-fileName":m,"data-mediaUrl":o,"data-embedMode":n,"data-showDownloadPDF":d,"data-showPrintPDF":c,"data-showPageControls":p,"data-showFullScreen":s,"data-dockPageControls":u,"data-showAnnotationTools":w,"data-enableFormFilling":f}))}})}},o={};function n(e){var l=o[e];if(void 0!==l)return l.exports;var a=o[e]={exports:{}};return t[e](a,a.exports,n),a.exports}n.m=t,e=[],n.O=function(t,o,l,a){if(!o){var r=1/0;for(p=0;p<e.length;p++){o=e[p][0],l=e[p][1],a=e[p][2];for(var i=!0,c=0;c<o.length;c++)(!1&a||r>=a)&&Object.keys(n.O).every((function(e){return n.O[e](o[c])}))?o.splice(c--,1):(i=!1,a<r&&(r=a));if(i){e.splice(p--,1);var d=l();void 0!==d&&(t=d)}}return t}a=a||0;for(var p=e.length;p>0&&e[p-1][2]>a;p--)e[p]=e[p-1];e[p]=[o,l,a]},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,{a:t}),t},n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){var e={826:0,46:0};n.O.j=function(t){return 0===e[t]};var t=function(t,o){var l,a,r=o[0],i=o[1],c=o[2],d=0;if(r.some((function(t){return 0!==e[t]}))){for(l in i)n.o(i,l)&&(n.m[l]=i[l]);if(c)var p=c(n)}for(t&&t(o);d<r.length;d++)a=r[d],n.o(e,a)&&e[a]&&e[a][0](),e[r[d]]=0;return n.O(p)},o=self.webpackChunkadobe_pdf=self.webpackChunkadobe_pdf||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var l=n.O(void 0,[46],(function(){return n(439)}));l=n.O(l)}();