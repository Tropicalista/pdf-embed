/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/deprecated.js":
/*!***************************!*\
  !*** ./src/deprecated.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);


const blockAttributes = {
  id: {
    type: 'string',
    source: 'attribute',
    attribute: 'id'
  },
  blockId: {
    type: 'string'
  },
  apiKey: {
    type: 'string'
  },
  width: {
    type: 'number'
  },
  height: {
    type: 'string',
    default: '500px'
  },
  mediaUrl: {
    type: 'string'
  },
  fileName: {
    type: 'string',
    default: 'My PDF'
  },
  embedMode: {
    type: 'string',
    default: ''
  },
  showDownloadPDF: {
    type: 'boolean',
    default: true
  },
  showPrintPDF: {
    type: 'boolean',
    default: true
  },
  showFullScreen: {
    type: 'boolean',
    default: true
  },
  showPageControls: {
    type: 'boolean',
    default: true
  },
  dockPageControls: {
    type: 'boolean',
    default: true
  },
  enableFormFilling: {
    type: 'boolean',
    default: true
  },
  showAnnotationTools: {
    type: 'boolean',
    default: true
  }
};
const supports = {
  html: false,
  anchor: true
};
const v1 = {
  blockAttributes,
  supports,
  isEligible() {
    return true;
  },
  migrate(attributes) {
    console.log(attributes);
    return {
      ...attributes,
      'data-apikey': attributes.apiKey,
      'data-mediaurl': attributes.mediaUrl,
      'data-defaultviewmode': 'FIT_PAGE'
    };
  },
  save({
    attributes
  }) {
    const {
      blockId,
      mediaUrl,
      embedMode,
      height,
      apiKey,
      showPrintPDF,
      showDownloadPDF,
      showPageControls,
      showFullScreen,
      dockPageControls,
      fileName,
      showAnnotationTools,
      enableFormFilling
    } = attributes;
    console.log(attributes);
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      id: blockId,
      ..._wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps.save(),
      style: {
        height
      },
      "data-apiKey": apiKey,
      "data-fileName": fileName,
      "data-mediaUrl": mediaUrl,
      "data-embedMode": embedMode,
      "data-showDownloadPDF": showDownloadPDF,
      "data-showPrintPDF": showPrintPDF,
      "data-showPageControls": showPageControls,
      "data-showFullScreen": showFullScreen,
      "data-dockPageControls": dockPageControls,
      "data-showAnnotationTools": showAnnotationTools,
      "data-enableFormFilling": enableFormFilling
    });
  }
};
const v2 = {
  /*attributes: {
  	id: {
  		type: 'string',
  		source: 'attribute',
  		selector: 'div.wp-block-tropicalista-pdfembed',
  		attribute: 'id',
  	},
  	blockId: {
  		type: 'string',
  	},
  	apiKey: {
  		type: 'string',
  		source: 'attribute',
  		selector: 'div.wp-block-tropicalista-pdfembed',
  		attribute: 'data-apikey',
  	},
  	fileName: {
  		type: 'string',
  		source: 'attribute',
  		selector: 'div.wp-block-tropicalista-pdfembed',
  		attribute: 'data-filename',
  	},
  	mediaUrl: {
  		type: 'string',
  		source: 'attribute',
  		selector: 'div.wp-block-tropicalista-pdfembed',
  		attribute: 'data-mediaurl',
  	},
  	embedMode: {
  		type: 'string',
  		source: 'attribute',
  		selector: 'div.wp-block-tropicalista-pdfembed',
  		attribute: 'data-embedmode',
  	},
  	showDownloadPDF: {
  		type: 'string',
  		source: 'attribute',
  		selector: 'div.wp-block-tropicalista-pdfembed',
  		attribute: 'data-showdownloadpdf',
  		default: true,
  	},
  	dockPageControls: {
  		type: 'string',
  		source: 'attribute',
  		selector: 'div.wp-block-tropicalista-pdfembed',
  		attribute: 'data-dockpagecontrols',
  		default: false,
  	},
  	showPrintPDF: {
  		type: 'string',
  		source: 'attribute',
  		selector: 'div.wp-block-tropicalista-pdfembed',
  		attribute: 'data-showprintpdf',
  		default: true,
  	},
  	showFullScreen: {
  		type: 'string',
  		source: 'attribute',
  		selector: 'div.wp-block-tropicalista-pdfembed',
  		attribute: 'data-showfullscreen',
  		default: true,
  	},
  	showPageControls: {
  		type: 'string',
  		source: 'attribute',
  		selector: 'div.wp-block-tropicalista-pdfembed',
  		attribute: 'data-showpagecontrols',
  		default: true,
  	},
  	enableFormFilling: {
  		type: 'string',
  		source: 'attribute',
  		selector: 'div.wp-block-tropicalista-pdfembed',
  		attribute: 'data-enableformfilling',
  		default: true,
  	},
  	showAnnotationTools: {
  		type: 'string',
  		source: 'attribute',
  		selector: 'div.wp-block-tropicalista-pdfembed',
  		attribute: 'data-showannotationtools',
  		default: true,
  	},
  },*/
  blockAttributes,
  supports,
  isEligible() {
    return true;
  },
  migrate(attributes) {
    console.log(attributes);
    return {
      ...attributes
    };
  },
  save({
    attributes
  }) {
    console.log(attributes);
    const {
      blockId,
      mediaUrl,
      embedMode,
      height,
      apiKey,
      showPrintPDF,
      showDownloadPDF,
      showPageControls,
      showFullScreen,
      dockPageControls,
      fileName,
      showAnnotationTools,
      enableFormFilling
    } = attributes;
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      id: blockId,
      ..._wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps.save(),
      style: {
        height
      },
      "data-apiKey": apiKey,
      "data-fileName": fileName,
      "data-mediaUrl": mediaUrl,
      "data-embedMode": embedMode,
      "data-showDownloadPDF": JSON.stringify(showDownloadPDF),
      "data-showPrintPDF": JSON.stringify(showPrintPDF),
      "data-showPageControls": JSON.stringify(showPageControls),
      "data-showFullScreen": JSON.stringify(showFullScreen),
      "data-dockPageControls": JSON.stringify(dockPageControls),
      "data-showAnnotationTools": JSON.stringify(showAnnotationTools),
      "data-enableFormFilling": JSON.stringify(enableFormFilling)
    });
  }
};
const deprecated = [v2, v1];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (deprecated);

/***/ }),

/***/ "./src/edit.js":
/*!*********************!*\
  !*** ./src/edit.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Edit)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./editor.scss */ "./src/editor.scss");
/* harmony import */ var _key_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./key-input */ "./src/key-input.js");
/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./settings */ "./src/settings.js");
/* harmony import */ var _viewer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./viewer */ "./src/viewer.js");
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @wordpress/core-data */ "@wordpress/core-data");
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_9__);










function Edit(props) {
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.useBlockProps)();
  console.log(props);
  const {
    record,
    hasResolved
  } = (0,_wordpress_core_data__WEBPACK_IMPORTED_MODULE_9__.useEntityRecord)('root', 'site');
  if (!hasResolved) {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Disabled, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Spinner, null));
  }
  if (record.pdf_embed_api_key) {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      ...blockProps
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.InspectorControls, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_settings__WEBPACK_IMPORTED_MODULE_7__["default"], {
      ...props
    })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_viewer__WEBPACK_IMPORTED_MODULE_8__.Viewer, {
      ...props
    }));
  }
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ...blockProps
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Placeholder, {
    icon: 'pdf',
    instructions: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Please insert a free api Key here or in the settings panel on the right.', 'pdf-embed'),
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('PDF Embed', 'pdf-embed')
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Flex, {
    expanded: true
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.FlexItem, {
    isBlock: true
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_key_input__WEBPACK_IMPORTED_MODULE_6__["default"], {
    ...props
  })))));
}

/***/ }),

/***/ "./src/filter.js":
/*!***********************!*\
  !*** ./src/filter.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_7__);








const supportedBlocks = ['core/button', 'generateblocks/button'];

/**
 * Create HOC to add spacing control to inspector controls of block.
 */
const withSpacingControl = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_3__.createHigherOrderComponent)(BlockEdit => {
  return props => {
    // Do nothing if it's another block than our defined ones.
    if (!supportedBlocks.includes(props.name)) {
      return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(BlockEdit, {
        ...props
      });
    }
    const {
      attributes,
      setAttributes
    } = props;
    const isPdfLink = () => {
      if (!attributes.url) {
        return false;
      }
      return 'pdf' === attributes.url.split(/[#?]/)[0].split('.').pop().trim();
    };
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(BlockEdit, {
      ...props
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__.BlockControls, null, isPdfLink() && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.ToolbarGroup, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.ToolbarButton, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Open pdf in lightbox', 'pdf-embed'),
      icon: 'pdf',
      onClick: () => {
        setAttributes({
          embedPdf: !attributes.embedPdf
        });
      },
      isPressed: attributes.embedPdf
    }))));
  };
}, 'withSpacingControl');
(0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_2__.addFilter)('editor.BlockEdit', 'extend-block-example/with-spacing-control', withSpacingControl);
const enableToolbarButtonOnBlocks = ['core/button'];
function addAttributes(settings, name) {
  // Do nothing if it's another block than our defined ones.
  if (!enableToolbarButtonOnBlocks.includes(name)) {
    return settings;
  }

  //check if object exists for old Gutenberg version compatibility
  if (typeof settings.attributes !== 'undefined') {
    settings.attributes = Object.assign(settings.attributes, {
      embedPdf: {
        type: 'boolean',
        default: false
      }
    });
  }
  return settings;
}
function addClassName(props, blockType, attributes) {
  // Do nothing if it's not one of our specified blocks.
  if (!supportedBlocks.includes(blockType.name)) {
    return props;
  }
  const {
    embedPdf
  } = attributes;
  const {
    className
  } = props;
  return Object.assign({}, props, {
    className: classnames__WEBPACK_IMPORTED_MODULE_7___default()(className, {
      embedPdf
    })
  });
}
(0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_2__.addFilter)('blocks.registerBlockType', 'tropicalista/pdf-embed', addAttributes);
(0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_2__.addFilter)('blocks.getSaveContent.extraProps', 'tropicalista/pdf-embed', addClassName);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./block.json */ "./src/block.json");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit */ "./src/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./save */ "./src/save.js");
/* harmony import */ var _filter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./filter */ "./src/filter.js");
/* harmony import */ var _deprecated__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./deprecated */ "./src/deprecated.js");
/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */


/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */



/**
 * Internal dependencies
 */





/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_2__, {
  deprecated: _deprecated__WEBPACK_IMPORTED_MODULE_6__["default"],
  /**
   * @see ./edit.js
   */
  edit: _edit__WEBPACK_IMPORTED_MODULE_3__["default"],
  /**
   * @see ./save.js
   */
  save: _save__WEBPACK_IMPORTED_MODULE_4__["default"]
});

/***/ }),

/***/ "./src/key-input.js":
/*!**************************!*\
  !*** ./src/key-input.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ KeyInput)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/core-data */ "@wordpress/core-data");
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__);






function KeyInput({
  setAttributes
}) {
  const [pdfKey] = (0,_wordpress_core_data__WEBPACK_IMPORTED_MODULE_3__.useEntityProp)('root', 'site', 'pdf_embed_api_key');
  const [siteUrl] = (0,_wordpress_core_data__WEBPACK_IMPORTED_MODULE_3__.useEntityProp)('root', 'site', 'url');
  const {
    editEntityRecord,
    saveEditedEntityRecord
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.useDispatch)(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_3__.store);
  const save = () => {
    setAttributes({
      apiKey: pdfKey
    });
    saveEditedEntityRecord('root', 'site', undefined, {
      pdf_embed_api_key: pdfKey
    });
  };
  const validate = () => {
    const url = 'https://viewlicense.adobe.io/viewsdklicense/jwt';
    const data = {
      client_id: pdfKey,
      client_device_time: Date.now(),
      domain: siteUrl
    };
    const response = fetch(url, {
      method: 'POST',
      mode: 'cors',
      redirect: 'follow',
      headers: {
        'X-Key-Pair-Version': 'v1',
        'Content-Type': 'application/json',
        'x-api-key': pdfKey
      },
      body: JSON.stringify(data)
    });
    return response;
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalInputControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('API Key', 'pdf-embed'),
    help: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_5__.createInterpolateElement)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Get your free API key on <a>Adobe Official site</a>.', 'pdf-embed'), {
      a: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ExternalLink, {
        href: "https://www.adobe.io/apis/documentcloud/dcsdk/pdf-embed.html",
        target: "_blank",
        rel: "noreferrer"
      })
    }),
    value: pdfKey,
    onChange: val => {
      editEntityRecord('root', 'site', undefined, {
        pdf_embed_api_key: val
      });
    },
    suffix: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
      onClick: () => save(),
      isPrimary: true
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Save'))
  }));
}

/***/ }),

/***/ "./src/save.js":
/*!*********************!*\
  !*** ./src/save.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ save)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);


function save({
  attributes,
  className
}) {
  const {
    mediaUrl,
    embedMode,
    height,
    apiKey,
    showPrintPDF,
    showDownloadPDF,
    showPageControls,
    showBookmarks,
    showThumbnails,
    showFullScreen,
    defaultViewMode,
    showZoomControl,
    fileName,
    showAnnotationTools,
    enableFormFilling,
    dockPageControls
  } = attributes;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ..._wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps.save({
      className
    }),
    style: {
      height
    },
    "data-api-key": apiKey,
    "data-file-name": fileName,
    "data-media-url": mediaUrl,
    "data-embed-mode": embedMode,
    "data-dock-page-controls": dockPageControls || undefined,
    "data-show-download-PDF": showDownloadPDF || undefined,
    "data-show-print-PDF": showPrintPDF || undefined,
    "data-show-page-controls": showPageControls || undefined,
    "data-show-thumbnails": showThumbnails || undefined,
    "data-show-bookmarks": showBookmarks || undefined,
    "data-show-zoom-control": showZoomControl || undefined,
    "data-show-full-screen": showFullScreen || undefined,
    "data-default-view-mode": defaultViewMode || undefined,
    "data-show-annotation-tools": showAnnotationTools || undefined,
    "data-enable-form-filling": enableFormFilling || undefined
  });
}

/***/ }),

/***/ "./src/settings.js":
/*!*************************!*\
  !*** ./src/settings.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Settings)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _key_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./key-input */ "./src/key-input.js");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./editor.scss */ "./src/editor.scss");







function Settings(props) {
  const {
    attributes,
    setAttributes
  } = props;
  const {
    showDownloadPDF,
    showPrintPDF,
    showFullScreen,
    showZoomControl,
    embedMode,
    height,
    showAnnotationTools,
    enableFormFilling,
    defaultViewMode,
    showBookmarks,
    showThumbnails,
    dockPageControls
  } = attributes;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Settings', 'pdf-embed'),
    initialOpen: true
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_key_input__WEBPACK_IMPORTED_MODULE_5__["default"], {
    ...props
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("hr", null), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Embed mode', 'pdf-embed'),
    value: embedMode || 'FULL_WINDOW',
    options: [{
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Full Window', 'pdf-embed'),
      value: 'FULL_WINDOW'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Sized Container', 'pdf-embed'),
      value: 'SIZED_CONTAINER'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Inline', 'pdf-embed'),
      value: 'IN_LINE'
    }],
    onChange: val => setAttributes({
      embedMode: val
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Default view mode', 'pdf-embed'),
    value: defaultViewMode,
    options: [{
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Default', 'pdf-embed'),
      value: 'FIT_PAGE'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Fit Page', 'pdf-embed'),
      value: 'FIT_PAGE'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Fit Width', 'pdf-embed'),
      value: 'FIT_WIDTH'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Two Column Fit Page', 'pdf-embed'),
      value: 'TWO_COLUMN_FIT_PAGE'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Two Column', 'pdf-embed'),
      value: 'TWO_COLUMN'
    }],
    onChange: val => setAttributes({
      defaultViewMode: val
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Show Download PDF', 'pdf-embed'),
    checked: showDownloadPDF,
    onChange: val => setAttributes({
      showDownloadPDF: val
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Show Print PDF', 'pdf-embed'),
    checked: showPrintPDF,
    onChange: val => setAttributes({
      showPrintPDF: val
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Show FullScreen Mode', 'pdf-embed'),
    checked: showFullScreen,
    onChange: val => setAttributes({
      showFullScreen: val
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Show Zoom Control', 'pdf-embed'),
    checked: showZoomControl,
    onChange: val => setAttributes({
      showZoomControl: val
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Show Thumbnails', 'pdf-embed'),
    checked: showThumbnails,
    onChange: val => setAttributes({
      showThumbnails: val
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Show Bookmarks', 'pdf-embed'),
    checked: showBookmarks,
    onChange: val => setAttributes({
      showBookmarks: val
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Show Annotation Tools', 'pdf-embed'),
    checked: showAnnotationTools,
    onChange: val => setAttributes({
      showAnnotationTools: val
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Dock Page Controls', 'pdf-embed'),
    checked: dockPageControls,
    onChange: val => setAttributes({
      dockPageControls: val
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Enable Form Filling', 'pdf-embed'),
    checked: enableFormFilling,
    onChange: val => setAttributes({
      enableFormFilling: val
    })
  }), 'IN_LINE' !== embedMode && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.BaseControl, {
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Set the height of PDF.', 'pdf-embed')
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.HeightControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Height', 'pdf-embed'),
    beforeIcon: "image-flip-vertical",
    value: height,
    onChange: val => setAttributes({
      height: val
    })
  }))));
}

/***/ }),

/***/ "./src/viewer.js":
/*!***********************!*\
  !*** ./src/viewer.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Viewer: () => (/* binding */ Viewer)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/core-data */ "@wordpress/core-data");
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__);

/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */


/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */





const Viewer = props => {
  const {
    attributes,
    setAttributes,
    isSelected,
    clientId
  } = props;
  const {
    mediaUrl,
    height,
    fileName
  } = attributes;
  const instanceId = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_5__.useInstanceId)(Viewer);
  const [pdfKey] = (0,_wordpress_core_data__WEBPACK_IMPORTED_MODULE_3__.useEntityProp)('root', 'site', 'pdf_embed_api_key');
  const [interactive, setInteractive] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_6__.useState)(false);
  const setupRef = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_5__.useRefEffect)(element => {
    const {
      ownerDocument
    } = element;
    const {
      defaultView
    } = ownerDocument;
    element.ownerDocument.addEventListener('adobe_dc_view_sdk.ready', function () {
      if (defaultView.AdobeDC) {
        loadAdobeDc(defaultView);
      }
    });
    if (mediaUrl && defaultView.AdobeDC) {
      if (pdfKey) loadAdobeDc(defaultView);
    }
    if (!defaultView.AdobeDC) {
      const script = defaultView.document.createElement('script');
      script.src = 'https://acrobatservices.adobe.com/view-sdk/viewer.js';
      defaultView.document.head.appendChild(script);
    }
  }, [attributes]);
  const loadAdobeDc = view => {
    const adobeDCView = new view.AdobeDC.View({
      clientId: pdfKey,
      divId: clientId
    });
    adobeDCView.previewFile({
      content: {
        location: {
          url: mediaUrl
        }
      },
      metaData: {
        fileName
      }
    }, attributes);
  };
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps)({
    id: instanceId
  });
  const onSelectMedia = media => {
    if (media.id) {
      setAttributes({
        mediaUrl: media.url,
        fileName: media.filename ? media.filename : media.title
      });
    }
  };
  const onSelectUrl = media => {
    setAttributes({
      mediaUrl: media,
      fileName: new URL(media).pathname.split('/').pop()
    });
  };
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_6__.useEffect)(() => {
    if (!isSelected) setInteractive(false);
  }, [isSelected]);
  if (mediaUrl) {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      ...blockProps
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.BlockControls, null, mediaUrl && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToolbarGroup, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaReplaceFlow, {
      mediaURL: mediaUrl,
      allowedTypes: ['application/pdf'],
      accept: ".pdf",
      onSelect: media => onSelectMedia(media)
    }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      id: clientId,
      ref: setupRef,
      style: {
        height
      },
      tabIndex: '-1'
    }), !interactive && /* eslint-disable-next-line jsx-a11y/no-static-element-interactions */
    (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "block-library-embed__interactive-overlay",
      onMouseUp: () => {
        setInteractive(true);
      }
    }));
  }
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ...blockProps
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaPlaceholder, {
    icon: "pdf",
    labels: {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('PDF'),
      instructions: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Upload a PDF file, pick one from your media library, or add one with a URL.', 'pdf-embed')
    },
    className: "block-image",
    onSelect: onSelectMedia,
    onSelectURL: onSelectUrl,
    accept: ".pdf",
    allowedTypes: ['application/pdf']
  }));
};

/***/ }),

/***/ "./node_modules/classnames/index.js":
/*!******************************************!*\
  !*** ./node_modules/classnames/index.js ***!
  \******************************************/
/***/ ((module, exports) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;
	var nativeCodeString = '[native code]';

	function classNames() {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				if (arg.length) {
					var inner = classNames.apply(null, arg);
					if (inner) {
						classes.push(inner);
					}
				}
			} else if (argType === 'object') {
				if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes('[native code]')) {
					classes.push(arg.toString());
					continue;
				}

				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),

/***/ "./src/editor.scss":
/*!*************************!*\
  !*** ./src/editor.scss ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = window["React"];

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/compose":
/*!*********************************!*\
  !*** external ["wp","compose"] ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["compose"];

/***/ }),

/***/ "@wordpress/core-data":
/*!**********************************!*\
  !*** external ["wp","coreData"] ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["coreData"];

/***/ }),

/***/ "@wordpress/data":
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["data"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/hooks":
/*!*******************************!*\
  !*** external ["wp","hooks"] ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["hooks"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "./src/block.json":
/*!************************!*\
  !*** ./src/block.json ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://json.schemastore.org/block.json","apiVersion":3,"name":"tropicalista/pdfembed","version":"0.3.9","title":"Embed Pdf","category":"embed","icon":"pdf","description":"PDF embedder with official Adobe Embed API.","supports":{"html":false,"anchor":true},"attributes":{"id":{"type":"string","source":"attribute","attribute":"id"},"blockId":{"type":"string"},"apiKey":{"type":"string","source":"attribute","selector":"div.wp-block-tropicalista-pdfembed","attribute":"data-api-key","default":""},"width":{"type":"number"},"height":{"type":"string","default":"500px"},"mediaUrl":{"type":"string","source":"attribute","selector":"div.wp-block-tropicalista-pdfembed","attribute":"data-media-url"},"fileName":{"type":"string","source":"attribute","selector":"div.wp-block-tropicalista-pdfembed","attribute":"data-file-name"},"embedMode":{"type":"string","source":"attribute","selector":"div.wp-block-tropicalista-pdfembed","attribute":"data-embed-mode"},"showDownloadPDF":{"type":"boolean","source":"attribute","selector":"div.wp-block-tropicalista-pdfembed","attribute":"data-show-download-pdf","default":true},"dockPageControls":{"type":"boolean","source":"attribute","selector":"div.wp-block-tropicalista-pdfembed","attribute":"data-dock-page-controls","default":false},"showPrintPDF":{"type":"boolean","source":"attribute","selector":"div.wp-block-tropicalista-pdfembed","attribute":"data-show-print-pdf","default":true},"showFullScreen":{"type":"boolean","source":"attribute","selector":"div.wp-block-tropicalista-pdfembed","attribute":"data-show-full-screen","default":true},"showPageControls":{"type":"boolean","source":"attribute","selector":"div.wp-block-tropicalista-pdfembed","attribute":"data-show-page-controls","default":true},"showZoomControl":{"type":"boolean","source":"attribute","selector":"div.wp-block-tropicalista-pdfembed","attribute":"data-show-zoom-control","default":true},"showThumbnails":{"type":"boolean","source":"attribute","selector":"div.wp-block-tropicalista-pdfembed","attribute":"data-show-thumbnails","default":true},"showBookmarks":{"type":"boolean","source":"attribute","selector":"div.wp-block-tropicalista-pdfembed","attribute":"data-show-bookmarks","default":true},"defaultViewMode":{"type":"string","source":"attribute","selector":"div.wp-block-tropicalista-pdfembed","attribute":"data-default-view-mode","default":"FIT_PAGE"},"enableFormFilling":{"type":"boolean","source":"attribute","selector":"div.wp-block-tropicalista-pdfembed","attribute":"data-enable-form-filling","default":true},"showAnnotationTools":{"type":"boolean","source":"attribute","selector":"div.wp-block-tropicalista-pdfembed","attribute":"data-show-annotation-tools","default":true}},"textdomain":"pdf-embed","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css","viewScript":["file:./view.js","pdf-embed-api"],"render":"file:./render.php"}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0,
/******/ 			"./style-index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = globalThis["webpackChunkadobe_pdf"] = globalThis["webpackChunkadobe_pdf"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["./style-index"], () => (__webpack_require__("./src/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map