/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./public/assets/js/indexDB.js":
/*!*************************************!*\
  !*** ./public/assets/js/indexDB.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"saveRecord\": () => /* binding */ saveRecord\n/* harmony export */ });\nvar db; // create a new db request for a \"budget\" database.\n\nvar request = indexedDB.open(\"budget\", 1);\n\nrequest.onupgradeneeded = function (event) {\n  // create object store called \"pending\" and set autoIncrement to true\n  var db = event.target.result;\n  db.createObjectStore(\"pending\", {\n    autoIncrement: true\n  });\n};\n\nrequest.onsuccess = function (event) {\n  db = event.target.result; // check if app is online before reading from db\n\n  if (navigator.onLine) {\n    checkDatabase();\n  }\n};\n\nrequest.onerror = function (event) {\n  console.log(\"Woops! \" + event.target.errorCode);\n};\n\nfunction saveRecord(record) {\n  // open a transaction on the pending object store in the budget db with readwrite access\n  var transaction = db.transaction([\"pending\"], \"readwrite\"); // access your pending object store\n\n  var store = transaction.objectStore(\"pending\"); // add record to your store with add method.\n\n  store.add(record);\n}\n\nfunction checkDatabase() {\n  // open a transaction on the pending object store in the budget db\n  var transaction = db.transaction([\"pending\"], \"readwrite\"); // access your pending object store\n\n  var store = transaction.objectStore(\"pending\"); // get all records from store and set to a variable\n\n  var getAll = store.getAll();\n\n  getAll.onsuccess = function () {\n    if (getAll.result.length > 0) {\n      fetch(\"/api/transaction/bulk\", {\n        method: \"POST\",\n        body: JSON.stringify(getAll.result),\n        headers: {\n          Accept: \"application/json, text/plain, */*\",\n          \"Content-Type\": \"application/json\"\n        }\n      }).then(function (response) {\n        return response.json();\n      }).then(function () {\n        // if successful, open a transaction on your pending db\n        var transaction = db.transaction([\"pending\"], \"readwrite\"); // access your pending object store\n\n        var store = transaction.objectStore(\"pending\"); // clear all items in your store\n\n        store.clear();\n      });\n    }\n  };\n} // listen for app coming back online\n\n\nwindow.addEventListener(\"online\", checkDatabase);\n\n//# sourceURL=webpack://budget-app/./public/assets/js/indexDB.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
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
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./public/assets/js/indexDB.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;