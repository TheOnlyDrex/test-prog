/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./block.json"
/*!********************!*\
  !*** ./block.json ***!
  \********************/
(module) {

module.exports = /*#__PURE__*/JSON.parse('{"schema":"https://schemas.wp.org/trunk/plugin.json","apiVersion":3,"title":"Blocco Griglia","name":"blocks/cer-grid","description":"griglia con opzioni ","category":"cescot-blocks","icon":"grid-view","editorScript":"file:./build/index.js","viewScript":"file:./assets/js/scripts.js","editorStyle":"file:./assets/css/style.css","style":["file:./assets/css/style.css","file:./assets/css/style-2.css"],"supports":{"anchor":true,"align":true,"color":{"background":true,"text":true,"link":true},"spacing":{"margin":true,"padding":true,"blockGap":true}}}');

/***/ },

/***/ "@wordpress/block-editor"
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
(module) {

module.exports = window["wp"]["blockEditor"];

/***/ },

/***/ "@wordpress/blocks"
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
(module) {

module.exports = window["wp"]["blocks"];

/***/ },

/***/ "@wordpress/components"
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
(module) {

module.exports = window["wp"]["components"];

/***/ },

/***/ "react/jsx-runtime"
/*!**********************************!*\
  !*** external "ReactJSXRuntime" ***!
  \**********************************/
(module) {

module.exports = window["ReactJSXRuntime"];

/***/ }

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
/******/ 		// Check if module exists (development only)
/******/ 		if (__webpack_modules__[moduleId] === undefined) {
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
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
/************************************************************************/
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../block.json */ "./block.json");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
Object(function webpackMissingModule() { var e = new Error("Cannot find module './ResponsiveTabPanel'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");

//tra graffe indico il nome della funz da importare. guarda anche export default per info aggiuntive
//controlla l'importazione e non fidarti di copilot, magari vuoi importare qualcosa di omonimo però da un altro pacchetto
 //importa il file block.json e lo assegna alla variabile blockMeta (blockMeta nome che decido io)




(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_1__.name, /*prende il nome del blocco dal file block.json*/{
  title: _block_json__WEBPACK_IMPORTED_MODULE_1__.title,
  description: _block_json__WEBPACK_IMPORTED_MODULE_1__.description,
  category: _block_json__WEBPACK_IMPORTED_MODULE_1__.category,
  icon: _block_json__WEBPACK_IMPORTED_MODULE_1__.icon,
  attributes: {
    "mobileColumns": {
      "type": "number",
      "default": 1
    },
    "tabletColumns": {
      "type": "number",
      "default": 2
    },
    "desktopColumns": {
      "type": "number",
      "default": 3
    }
  },
  edit: props => {
    const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps)({
      style: {
        '--cer-grid--mob-columns': props.attributes.mobileColumns,
        '--cer-grid--tablet-columns': props.attributes.tabletColumns,
        '--cer-grid--desktop-columns': props.attributes.desktopColumns
      }
    });
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InspectorControls, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
          title: "Grid Settings",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TabPanel, {
            tabs: [{
              name: 'mobile',
              title: 'Mobile'
            }, {
              name: 'tablet',
              title: 'Tablet'
            }, {
              name: 'desktop',
              title: 'Desktop'
            }]
          }), tab => {
            const tabname = tab.name;
            switch (tabname) {
              case 'mobile':
                return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
                  label: "Numero di colonne (Mobile)",
                  value: props.attributes.mobileColumns,
                  onChange: newColumns => {
                    props.setAttributes({
                      mobileColumns: newColumns
                    });
                  },
                  min: 1,
                  max: 12,
                  step: 1,
                  withInputField: false
                });
              case 'tablet':
                return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
                  label: "Numero di colonne (Tablet)",
                  value: props.attributes.tabletColumns,
                  onChange: newColumns => {
                    props.setAttributes({
                      tabletColumns: newColumns
                    });
                  },
                  min: 1,
                  max: 12,
                  step: 1,
                  withInputField: false
                });
              case 'desktop':
                return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
                  label: "Numero di colonne (Desktop)",
                  value: props.attributes.desktopColumns,
                  onChange: newColumns => {
                    props.setAttributes({
                      desktopColumns: newColumns
                    });
                  },
                  min: 1,
                  max: 12,
                  step: 1,
                  withInputField: false
                });
            }
          }]
        })
      }, "settings"), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
        ...blockProps,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InnerBlocks, {})
      })]
    });
  },
  /*funzione freccia
  posso fare anche un file edit.js e save.js e le importo; 
  magari fallo solo se sono molto lunghi*/
  //codice che viene eseguito fichè lavoro nel blocco

  /*esempio di argomento dentro le garffe di edit
      const date=new Date();
      return <span>{date.toString()}</span>
      */
  save: props => {
    const blockProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps.save({
      style: {
        '--cer-grid--mob-columns': props.attributes.mobileColumns,
        '--cer-grid--tablet-columns': props.attributes.tabletColumns,
        '--cer-grid--desktop-columns': props.attributes.desktopColumns
      }
    });
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
        ...blockProps,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InnerBlocks.Content, {})
      })
    });
  }
  //codice che viene eseguito quando premo salva, entrambe devono aver eun return. il return deve avere solo 1 tag
  //InnerBlocks permette di inserire altri blocchi dentro questo blocco ma posso usarlo solo una volta
});
})();

/******/ })()
;
//# sourceMappingURL=index.js.map