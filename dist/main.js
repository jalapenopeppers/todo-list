/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Montserrat:wght@400&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  padding: 0;\n  margin: 0;\n  font-family: 'Montserrat', sans-serif;\n}\n\n/* html {\n  font-size: \n} */\n\nimg.header-logo {\n  width: 75px;\n  height: 75px;\n}\n\nimg.header-logo,\nimg.github-logo {\n  filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(242deg) brightness(110%) contrast(101%);\n}\n\n.add-todo-button {\n  width: clamp(30px, 5vw, 50px);\n  height: clamp(30px, 5vw, 50px);\n  /* background-color: #AEF6C7; */\n  border: 1px solid #104c88;\n  border-radius: 5px;\n  cursor: pointer;\n}\n\n.add-todo-button-icon {\n  filter: invert(22%) sepia(30%) saturate(3932%) hue-rotate(193deg) brightness(87%) contrast(91%);\n}\n\n.content {\n  width: 100vw;\n  height: 100vh;\n  box-sizing: border-box;\n  display: grid;\n  grid-template: 100px 1fr / 1fr 4fr;\n}\n\n.header {\n  font-size: 20px;\n  color: whitesmoke;\n  background: linear-gradient(90deg, #2274A5, #1e628a);\n  grid-column: 1 / 3;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.title-logo-container {\n  padding-left: 20px;\n  font-size: 36px;\n  display: grid;\n  grid-template-columns: repeat(2, max-content);\n  align-items: center;\n  gap: 10px;\n}\n\n.sidebar {\n  font-size: clamp(16px, 2vw, 30px);\n  padding: 10px;\n  padding-top: 20px;\n  color: rgb(206, 206, 206);\n  background-color: #104c88;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n\n.sidebar-main-buttons {\n  padding-left: 20px;\n  display: grid;\n  grid-template-rows: repeat(6, min-content);\n  gap: 15px;\n}\n\n.button {\n  cursor: pointer;\n}\n\n.credits-footer {\n  font-size: 16px;\n  align-self: center;\n  display: grid;\n  grid-template-columns: repeat(2, max-content);\n  align-items: center;\n  gap: 10px;\n}\n\n.main-content {\n  padding: 20px;\n  display: grid;\n  grid-template: repeat(3, min-content) / 1fr;\n  gap: 20px;\n}\n\n.main-content-top-row {\n  display: grid;\n  grid-template-columns: repeat(2, min-content);\n  align-items: center;\n  gap: 30px;\n}\n\n.current-category-text {\n  font-size: clamp(40px, 6vw, 70px);\n  color: #104c88;\n}\n\n.todo-items-category-titles,\n.todo-item {\n  font-size: clamp(16px, 2vw, 25px);\n  /* display: grid;\n  grid-template-columns: repeat(6, max-content);\n  grid-template-rows: min-content;\n  justify-content: space-between;\n  gap: 20px; */\n}\n\n.todo-items-container {\n  font-size: clamp(16px, 2vw, 25px);\n  /* display: grid;\n  grid-template-rows: min-content; */\n}\n\ntable {\n  width: 100%;\n  border-collapse: collapse;\n}\n\n.title-title {\n  width: 30%;\n}\n\n.todo-item {\n  height: 40px;\n  text-align: center;\n}\n\ntd.title {\n  /* display: block; */\n  /* width: 100%; */\n  max-width: 0;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\ntd {\n  border: 0;\n}\n\n.todo-item-checkbox {\n  height: clamp(16px, 2vw, 25px);\n  width: clamp(16px, 2vw, 25px);\n}\n\ntd.priority-low {color: rgb(42, 96, 42)}\ntd.priority-med {color: rgb(136, 97, 24)}\ntd.priority-high {color: rgb(174, 28, 28)}\n\n/* Strikeout for completed tasks */\n.todo-item.completed {\n  position: relative;\n  background-color: rgb(140, 140, 140);\n  text-decoration: line-through;\n}\n\n.todo-item:hover {\n  background-color: rgb(196, 196, 196);\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAEA;EACE,UAAU;EACV,SAAS;EACT,qCAAqC;AACvC;;AAEA;;GAEG;;AAEH;EACE,WAAW;EACX,YAAY;AACd;;AAEA;;EAEE,8FAA8F;AAChG;;AAEA;EACE,6BAA6B;EAC7B,8BAA8B;EAC9B,+BAA+B;EAC/B,yBAAyB;EACzB,kBAAkB;EAClB,eAAe;AACjB;;AAEA;EACE,+FAA+F;AACjG;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,sBAAsB;EACtB,aAAa;EACb,kCAAkC;AACpC;;AAEA;EACE,eAAe;EACf,iBAAiB;EACjB,oDAAoD;EACpD,kBAAkB;EAClB,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;AACrB;;AAEA;EACE,kBAAkB;EAClB,eAAe;EACf,aAAa;EACb,6CAA6C;EAC7C,mBAAmB;EACnB,SAAS;AACX;;AAEA;EACE,iCAAiC;EACjC,aAAa;EACb,iBAAiB;EACjB,yBAAyB;EACzB,yBAAyB;EACzB,aAAa;EACb,sBAAsB;EACtB,8BAA8B;AAChC;;AAEA;EACE,kBAAkB;EAClB,aAAa;EACb,0CAA0C;EAC1C,SAAS;AACX;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,eAAe;EACf,kBAAkB;EAClB,aAAa;EACb,6CAA6C;EAC7C,mBAAmB;EACnB,SAAS;AACX;;AAEA;EACE,aAAa;EACb,aAAa;EACb,2CAA2C;EAC3C,SAAS;AACX;;AAEA;EACE,aAAa;EACb,6CAA6C;EAC7C,mBAAmB;EACnB,SAAS;AACX;;AAEA;EACE,iCAAiC;EACjC,cAAc;AAChB;;AAEA;;EAEE,iCAAiC;EACjC;;;;cAIY;AACd;;AAEA;EACE,iCAAiC;EACjC;oCACkC;AACpC;;AAEA;EACE,WAAW;EACX,yBAAyB;AAC3B;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,YAAY;EACZ,kBAAkB;AACpB;;AAEA;EACE,oBAAoB;EACpB,iBAAiB;EACjB,YAAY;EACZ,gBAAgB;EAChB,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,SAAS;AACX;;AAEA;EACE,8BAA8B;EAC9B,6BAA6B;AAC/B;;AAEA,iBAAiB,sBAAsB;AACvC,iBAAiB,uBAAuB;AACxC,kBAAkB,uBAAuB;;AAEzC,kCAAkC;AAClC;EACE,kBAAkB;EAClB,oCAAoC;EACpC,6BAA6B;AAC/B;;AAEA;EACE,oCAAoC;AACtC","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400&display=swap');\n\n* {\n  padding: 0;\n  margin: 0;\n  font-family: 'Montserrat', sans-serif;\n}\n\n/* html {\n  font-size: \n} */\n\nimg.header-logo {\n  width: 75px;\n  height: 75px;\n}\n\nimg.header-logo,\nimg.github-logo {\n  filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(242deg) brightness(110%) contrast(101%);\n}\n\n.add-todo-button {\n  width: clamp(30px, 5vw, 50px);\n  height: clamp(30px, 5vw, 50px);\n  /* background-color: #AEF6C7; */\n  border: 1px solid #104c88;\n  border-radius: 5px;\n  cursor: pointer;\n}\n\n.add-todo-button-icon {\n  filter: invert(22%) sepia(30%) saturate(3932%) hue-rotate(193deg) brightness(87%) contrast(91%);\n}\n\n.content {\n  width: 100vw;\n  height: 100vh;\n  box-sizing: border-box;\n  display: grid;\n  grid-template: 100px 1fr / 1fr 4fr;\n}\n\n.header {\n  font-size: 20px;\n  color: whitesmoke;\n  background: linear-gradient(90deg, #2274A5, #1e628a);\n  grid-column: 1 / 3;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.title-logo-container {\n  padding-left: 20px;\n  font-size: 36px;\n  display: grid;\n  grid-template-columns: repeat(2, max-content);\n  align-items: center;\n  gap: 10px;\n}\n\n.sidebar {\n  font-size: clamp(16px, 2vw, 30px);\n  padding: 10px;\n  padding-top: 20px;\n  color: rgb(206, 206, 206);\n  background-color: #104c88;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n\n.sidebar-main-buttons {\n  padding-left: 20px;\n  display: grid;\n  grid-template-rows: repeat(6, min-content);\n  gap: 15px;\n}\n\n.button {\n  cursor: pointer;\n}\n\n.credits-footer {\n  font-size: 16px;\n  align-self: center;\n  display: grid;\n  grid-template-columns: repeat(2, max-content);\n  align-items: center;\n  gap: 10px;\n}\n\n.main-content {\n  padding: 20px;\n  display: grid;\n  grid-template: repeat(3, min-content) / 1fr;\n  gap: 20px;\n}\n\n.main-content-top-row {\n  display: grid;\n  grid-template-columns: repeat(2, min-content);\n  align-items: center;\n  gap: 30px;\n}\n\n.current-category-text {\n  font-size: clamp(40px, 6vw, 70px);\n  color: #104c88;\n}\n\n.todo-items-category-titles,\n.todo-item {\n  font-size: clamp(16px, 2vw, 25px);\n  /* display: grid;\n  grid-template-columns: repeat(6, max-content);\n  grid-template-rows: min-content;\n  justify-content: space-between;\n  gap: 20px; */\n}\n\n.todo-items-container {\n  font-size: clamp(16px, 2vw, 25px);\n  /* display: grid;\n  grid-template-rows: min-content; */\n}\n\ntable {\n  width: 100%;\n  border-collapse: collapse;\n}\n\n.title-title {\n  width: 30%;\n}\n\n.todo-item {\n  height: 40px;\n  text-align: center;\n}\n\ntd.title {\n  /* display: block; */\n  /* width: 100%; */\n  max-width: 0;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\ntd {\n  border: 0;\n}\n\n.todo-item-checkbox {\n  height: clamp(16px, 2vw, 25px);\n  width: clamp(16px, 2vw, 25px);\n}\n\ntd.priority-low {color: rgb(42, 96, 42)}\ntd.priority-med {color: rgb(136, 97, 24)}\ntd.priority-high {color: rgb(174, 28, 28)}\n\n/* Strikeout for completed tasks */\n.todo-item.completed {\n  position: relative;\n  background-color: rgb(140, 140, 140);\n  text-decoration: line-through;\n}\n\n.todo-item:hover {\n  background-color: rgb(196, 196, 196);\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/requiredArgs/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ requiredArgs)
/* harmony export */ });
function requiredArgs(required, args) {
  if (args.length < required) {
    throw new TypeError(required + ' argument' + (required > 1 ? 's' : '') + ' required, but only ' + args.length + ' present');
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/compareAsc/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/compareAsc/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ compareAsc)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name compareAsc
 * @category Common Helpers
 * @summary Compare the two dates and return -1, 0 or 1.
 *
 * @description
 * Compare the two dates and return 1 if the first date is after the second,
 * -1 if the first date is before the second or 0 if dates are equal.
 *
 * @param {Date|Number} dateLeft - the first date to compare
 * @param {Date|Number} dateRight - the second date to compare
 * @returns {Number} the result of the comparison
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Compare 11 February 1987 and 10 July 1989:
 * const result = compareAsc(new Date(1987, 1, 11), new Date(1989, 6, 10))
 * //=> -1
 *
 * @example
 * // Sort the array of dates:
 * const result = [
 *   new Date(1995, 6, 2),
 *   new Date(1987, 1, 11),
 *   new Date(1989, 6, 10)
 * ].sort(compareAsc)
 * //=> [
 * //   Wed Feb 11 1987 00:00:00,
 * //   Mon Jul 10 1989 00:00:00,
 * //   Sun Jul 02 1995 00:00:00
 * // ]
 */

function compareAsc(dirtyDateLeft, dirtyDateRight) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var dateLeft = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateLeft);
  var dateRight = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateRight);
  var diff = dateLeft.getTime() - dateRight.getTime();

  if (diff < 0) {
    return -1;
  } else if (diff > 0) {
    return 1; // Return 0 if diff is 0; return NaN if diff is NaN
  } else {
    return diff;
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/compareDesc/index.js":
/*!********************************************************!*\
  !*** ./node_modules/date-fns/esm/compareDesc/index.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ compareDesc)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name compareDesc
 * @category Common Helpers
 * @summary Compare the two dates reverse chronologically and return -1, 0 or 1.
 *
 * @description
 * Compare the two dates and return -1 if the first date is after the second,
 * 1 if the first date is before the second or 0 if dates are equal.
 *
 * @param {Date|Number} dateLeft - the first date to compare
 * @param {Date|Number} dateRight - the second date to compare
 * @returns {Number} the result of the comparison
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Compare 11 February 1987 and 10 July 1989 reverse chronologically:
 * const result = compareDesc(new Date(1987, 1, 11), new Date(1989, 6, 10))
 * //=> 1
 *
 * @example
 * // Sort the array of dates in reverse chronological order:
 * const result = [
 *   new Date(1995, 6, 2),
 *   new Date(1987, 1, 11),
 *   new Date(1989, 6, 10)
 * ].sort(compareDesc)
 * //=> [
 * //   Sun Jul 02 1995 00:00:00,
 * //   Mon Jul 10 1989 00:00:00,
 * //   Wed Feb 11 1987 00:00:00
 * // ]
 */

function compareDesc(dirtyDateLeft, dirtyDateRight) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var dateLeft = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateLeft);
  var dateRight = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateRight);
  var diff = dateLeft.getTime() - dateRight.getTime();

  if (diff > 0) {
    return -1;
  } else if (diff < 0) {
    return 1; // Return 0 if diff is 0; return NaN if diff is NaN
  } else {
    return diff;
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/toDate/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/toDate/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toDate)
/* harmony export */ });
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }


/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @param {Date|Number} argument - the value to convert
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */

function toDate(argument) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var argStr = Object.prototype.toString.call(argument); // Clone the date

  if (argument instanceof Date || _typeof(argument) === 'object' && argStr === '[object Date]') {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new Date(argument.getTime());
  } else if (typeof argument === 'number' || argStr === '[object Number]') {
    return new Date(argument);
  } else {
    if ((typeof argument === 'string' || argStr === '[object String]') && typeof console !== 'undefined') {
      // eslint-disable-next-line no-console
      console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"); // eslint-disable-next-line no-console

      console.warn(new Error().stack);
    }

    return new Date(NaN);
  }
}

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/informationitemmanager.js":
/*!***************************************!*\
  !*** ./src/informationitemmanager.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InformationItemManager": () => (/* binding */ InformationItemManager)
/* harmony export */ });
/* harmony import */ var _objects_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./objects.js */ "./src/objects.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/compareDesc/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/compareAsc/index.js");



const InformationItemManager = (() => {
  let projectMap = new Map();
  let projectCounter = 0; // used to generate projIDs
  let todoCounter = 0; // used to generate todoIDs

  const createProject = (projectItem) => {
    projectItem.projID = 'proj' + projectCounter;
    projectCounter++;

    let singleProjectMap = new Map();
    singleProjectMap.set('project', projectItem);
    singleProjectMap.set('todoItems', new Map());
    projectMap.set(projectItem.projID, singleProjectMap);
  };
  const deleteProject = (projID) => {
    projectMap.delete(projID);
  };
  const getProjects = () => {
    let projectObjArray = [];
    for (let projectEntry of projectMap) {
      // CAUTION: map.get returns references to objects. Changing the reference WILL
      //   change the actual project object in projectMap
      projectObjArray.push(projectEntry[1].get('project'));
    }
    return projectObjArray;
  };
  const createTodo = (projID, todoItem) => {
    todoItem.todoID = 'todo' + todoCounter;
    todoCounter++;

    projectMap.get(projID).get('todoItems').set(todoItem.todoID, todoItem);
  };
  const deleteTodo = (todoID) => {
    projectMap.forEach((value, key) => {
      // Attempt to delete the todoItem from every project.
      // Will only work if the todoItem is in the project
      if (value.get('todoItems').delete(todoID) === true) {
        return undefined; // normal return value for .forEach
      };
    });
  };
  const moveTodo = (todoID, targetProjID) => {
    let tempTodoItem = {};
    projectMap.forEach((value, key) => {
      let todoObj = value.get('todoItems').get(todoID);
      if (todoObj !== undefined) {
        if (todoObj.todoID === todoID) {
          tempTodoItem = todoObj;
          deleteTodo(todoID);
          return undefined; // normal return value for .forEach
        };
      };
    });
    projectMap.get(targetProjID).get('todoItems').set(todoID, tempTodoItem);
  };
  const getTodos = (todoCategoryTypeStr = 'all', todoSortStr = 'creation-date') => {
    let todoItemsArray = [];
    
    // First, get the specified todos
    if (todoCategoryTypeStr === 'all') {
      projectMap.forEach((value1) => {
        value1.get('todoItems').forEach((value2) => {
          todoItemsArray.push(value2);
        });
      });
    } else if (todoCategoryTypeStr === 'due-today') {
      projectMap.forEach((value1) => {
        value1.get('todoItems').forEach((value2) => {
          // IMPLEMENT WITH TIME LIBRARY
          todoItemsArray.push(value2);
        });
      });
    } else if (todoCategoryTypeStr === 'due-this-week') {
      projectMap.forEach((value1) => {
        value1.get('todoItems').forEach((value2) => {
          // IMPLEMENT WITH TIME LIBRARY
          todoItemsArray.push(value2);
        });
      });
    } else if (todoCategoryTypeStr === 'low-priority') {
      projectMap.forEach((value1) => {
        value1.get('todoItems').forEach((value2) => {
          if (value2.priority === 'low') {
            todoItemsArray.push(value2);
          };
        });
      });
    } else if (todoCategoryTypeStr === 'med-priority') {
      projectMap.forEach((value1) => {
        value1.get('todoItems').forEach((value2) => {
          if (value2.priority === 'med') {
            todoItemsArray.push(value2);
          };
        });
      });
    } else if (todoCategoryTypeStr === 'high-priority') {
      projectMap.forEach((value1) => {
        value1.get('todoItems').forEach((value2) => {
          if (value2.priority === 'high') {
            todoItemsArray.push(value2);
          };
        });
      });
    } else if (todoCategoryTypeStr === 'completed') {
      projectMap.forEach((value1) => {
        value1.get('todoItems').forEach((value2) => {
          if (value2.completed === true) {
            todoItemsArray.push(value2);
          };
        });
      });
    } else if (todoCategoryTypeStr.includes('proj')) {
      // searching for todos in specific project
      projectMap.get(todoCategoryTypeStr).get('todoItems').forEach((value) => {
        todoItemsArray.push(value);
      });
    }

    // Second, sort the retrieved todos
    if (todoSortStr === 'low-high-priority') {
      todoItemsArray.sort((todoItem1, todoItem2) => {
        if ((todoItem1.priority === 'low' && (todoItem2.priority === 'med' || todoItem2.priority === 'high')) ||
            (todoItem1.priority === 'med' && todoItem2.priority === 'high')) {
          return -1;
        } else if (todoItem1.priority === todoItem2.priority) {
          return 0;
        } else if ((todoItem1.priority === 'high' && (todoItem2.priority === 'low' || todoItem2.priority === 'med')) ||
        (todoItem1.priority === 'med' && todoItem2.priority === 'low')) {
          return 1;
        }
      });
    } else if (todoSortStr === 'high-low-priority') {
      todoItemsArray.sort((todoItem1, todoItem2) => {
        if ((todoItem1.priority === 'low' && (todoItem2.priority === 'med' || todoItem2.priority === 'high')) ||
            (todoItem1.priority === 'med' && todoItem2.priority === 'high')) {
          return 1;
        } else if (todoItem1.priority === todoItem2.priority) {
          return 0;
        } else if ((todoItem1.priority === 'high' && (todoItem2.priority === 'low' || todoItem2.priority === 'med')) ||
        (todoItem1.priority === 'med' && todoItem2.priority === 'low')) {
          return -1;
        }
      });
    } else if (todoSortStr === 'creation-date-recent') {
      todoItemsArray.sort((todoItem1, todoItem2) => (0,date_fns__WEBPACK_IMPORTED_MODULE_1__["default"])(todoItem1.creationDate, todoItem2.creationDate));
    } else if (todoSortStr === 'creation-date-old') {
      todoItemsArray.sort((todoItem1, todoItem2) => (0,date_fns__WEBPACK_IMPORTED_MODULE_2__["default"])(todoItem1.creationDate, todoItem2.creationDate));
    } else if (todoSortStr === 'due-date-soonest') {
      todoItemsArray.sort((todoItem1, todoItem2) => (0,date_fns__WEBPACK_IMPORTED_MODULE_2__["default"])(todoItem1.dueDate, todoItem2.dueDate));
    } else if (todoSortStr === 'due-date-latest') {
      todoItemsArray.sort((todoItem1, todoItem2) => (0,date_fns__WEBPACK_IMPORTED_MODULE_1__["default"])(todoItem1.dueDate, todoItem2.dueDate));
    }

    return todoItemsArray;
  };

  return {
    createProject,
    deleteProject,
    getProjects,
    createTodo,
    deleteTodo,
    moveTodo,
    getTodos,
  };
})();

InformationItemManager.createProject(new _objects_js__WEBPACK_IMPORTED_MODULE_0__.ProjectItem({title:'wash dishes', description:'do it fast'}));
InformationItemManager.createProject(new _objects_js__WEBPACK_IMPORTED_MODULE_0__.ProjectItem({title:'move to me'}));
let todoObj = new _objects_js__WEBPACK_IMPORTED_MODULE_0__.TodoItem({title:'eat crap', dueDate:'2022-10-10T00:00', priority: 'med'});
todoObj.creationDate = new Date(1900, 1, 1);
let todoObj1 = new _objects_js__WEBPACK_IMPORTED_MODULE_0__.TodoItem({title:'eat crap1', dueDate:'2022-10-07T00:00', priority: 'high'});
todoObj1.creationDate = new Date(1950, 1, 1);
let todoObj2 = new _objects_js__WEBPACK_IMPORTED_MODULE_0__.TodoItem({title:'eat crap2', dueDate:'2022-10-02T00:00',});
todoObj2.creationDate = new Date(2019, 1, 1);
InformationItemManager.createTodo('proj0', todoObj);
InformationItemManager.createTodo('proj0', todoObj1);
InformationItemManager.createTodo('proj0', todoObj2);
InformationItemManager.moveTodo('todo0', 'proj1');
console.log(InformationItemManager.getProjects()[0].description);

for (let todo of InformationItemManager.getTodos('all', 'due-date-latest')) {
  console.log(todo.dueDate);
}

/***/ }),

/***/ "./src/objects.js":
/*!************************!*\
  !*** ./src/objects.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProjectItem": () => (/* binding */ ProjectItem),
/* harmony export */   "TodoItem": () => (/* binding */ TodoItem)
/* harmony export */ });
// const TodoItem = (title) => {
//   const getTitle = () => {
//     return title;
//   };
//   const setTitle = (newTitle) => {
//     title = newTitle;
//   };

//   return {
//     getTitle,
//     setTitle,
//   };
// }

// let todoItem = TodoItem('Eat cake');
// // todoItem.setTitle('wash clothes');
// // todoItem.title = 'hamburger';
// console.log(todoItem.getTitle());
// todoItem.setTitle('yumm');
// console.log(todoItem.getTitle());

/*
  The following was chosen as the most succinct yet understandable
    and practical solution to organizing the objects.
*/

// Object storing all the methods shared by todoItem and projectItem
const infoItemMethods = {
  get title() {
    return this._title;
  },
  set title(newTitle) {
    this._title = newTitle;
  },
  get description() {
    return this._description;
  },
  set description(newDescription) {
    this._description = newDescription;
  },
  get dueDate() {
    return this._dueDate;
  },
  set dueDate(newDueDate) {
    this._dueDate = newDueDate;
  },
  get priority() {
    return this._priority;
  },
  set priority(newPriority) {
    this._priority = newPriority;
  },
  get notes() {
    return this._notes;
  },
  set notes(newNotes) {
    this._notes = newNotes;
  },
  get completed() {
    return this._completed;
  },
  set completed(newCompleted) {
    this._completed = newCompleted;
  },
  get creationDate() {
    return this._creationDate;
  },
  set creationDate(newCreationDate) {
    this._creationDate = newCreationDate;
  },
}

// TodoItem constructor
function TodoItem({title, description = '', dueDate = '', priority = 'low', notes = '', completed = false} = {}) {
  this._title = title;
  this._description = description;
  this._dueDate = new Date(dueDate);
  this._priority = priority;
  this._notes = notes;
  this._completed = completed;
  this._creationDate = new Date();

  this._todoID = '';
}
// Set TodoItem's prototype to be the object with all the methods +
//   some additional methods to deal with todoID
TodoItem.prototype = Object.create(infoItemMethods, {
  todoID: {
    configurable: false,
    get() {
      return this._todoID;
    },
    set(newTodoID) {
      this._todoID = newTodoID;
    }, 
  },
});

// ProjectItem constructor
function ProjectItem({title, description = '', dueDate = '', priority = 'low', notes = '', completed = false} = {}) {
  this._title = title;
  this._description = description;
  this._dueDate = new Date(dueDate);
  this._priority = priority;
  this._notes = notes;
  this._completed = completed;
  this._creationDate = new Date();

  this._projID = '';
}
// Set ProjectItem's prototype to be the object with all the methods +
//   some additional methods to deal with projID
ProjectItem.prototype = Object.create(infoItemMethods, {
  projID: {
    configurable: false,
    get() {
      return this._projID;
    },
    set(newProjID) {
      this._projID = newProjID;
    }, 
  },
});

// let todoItemObj = new TodoItem('yo', 'yo mama');
// console.log(todoItemObj.title);

// let projItemObj = new ProjectItem('scooby', 'doo');
// console.log(projItemObj.title);
// console.log(projItemObj.description);
// console.log(projItemObj.projID);


/***/ }),

/***/ "./src/icons/clipboard-list.svg":
/*!**************************************!*\
  !*** ./src/icons/clipboard-list.svg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5d84269fbadcf213365b.svg";

/***/ }),

/***/ "./src/icons/plus.svg":
/*!****************************!*\
  !*** ./src/icons/plus.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3cffe9a515498593b872.svg";

/***/ }),

/***/ "./src/images/GitHub-Mark-32px.png":
/*!*****************************************!*\
  !*** ./src/images/GitHub-Mark-32px.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0035c307a36c17babb8d.png";

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _informationitemmanager_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./informationitemmanager.js */ "./src/informationitemmanager.js");
/* harmony import */ var _images_GitHub_Mark_32px_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/GitHub-Mark-32px.png */ "./src/images/GitHub-Mark-32px.png");
/* harmony import */ var _icons_clipboard_list_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./icons/clipboard-list.svg */ "./src/icons/clipboard-list.svg");
/* harmony import */ var _icons_plus_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./icons/plus.svg */ "./src/icons/plus.svg");






console.log('this works!');
console.log('epic');

// Setup GitHub logo
const gitHubLogoElem = document.querySelector('img.github-logo');
gitHubLogoElem.setAttribute('src', _images_GitHub_Mark_32px_png__WEBPACK_IMPORTED_MODULE_2__);

// Setup icons
const checkListLogoElem = document.querySelector('img.header-logo');
checkListLogoElem.setAttribute('src', _icons_clipboard_list_svg__WEBPACK_IMPORTED_MODULE_3__);
const addTodoElem = document.querySelector('.add-todo-button-icon');
addTodoElem.setAttribute('src', _icons_plus_svg__WEBPACK_IMPORTED_MODULE_4__);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQjtBQUMxQjtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEI7QUFDNUI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1AsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUCxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUCxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1AsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUCxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxNQUFNO0FBQ04sb0RBQW9ELG9EQUFXO0FBQy9ELE1BQU07QUFDTixvREFBb0Qsb0RBQVU7QUFDOUQsTUFBTTtBQUNOLG9EQUFvRCxvREFBVTtBQUM5RCxNQUFNO0FBQ04sb0RBQW9ELG9EQUFXO0FBQy9EOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRCx5Q0FBeUMsb0RBQVcsRUFBRSw4Q0FBOEM7QUFDcEcseUNBQXlDLG9EQUFXLEVBQUUsbUJBQW1CO0FBQ3pFLGtCQUFrQixpREFBUSxFQUFFLDhEQUE4RDtBQUMxRjtBQUNBLG1CQUFtQixpREFBUSxFQUFFLGdFQUFnRTtBQUM3RjtBQUNBLG1CQUFtQixpREFBUSxFQUFFLCtDQUErQztBQUM1RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUMxTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBLG1CQUFtQix3RkFBd0YsSUFBSTtBQUMvRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0gsQ0FBQzs7QUFFRDtBQUNBLHNCQUFzQix3RkFBd0YsSUFBSTtBQUNsSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0gsQ0FBQzs7QUFFRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDbElBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2ZBOzs7Ozs7Ozs7Ozs7Ozs7O0FDQXFCO0FBQytDO0FBQ2I7QUFDQTtBQUNaOztBQUUzQztBQUNBOztBQUVBO0FBQ0E7QUFDQSxtQ0FBbUMseURBQVU7O0FBRTdDO0FBQ0E7QUFDQSxzQ0FBc0Msc0RBQWE7QUFDbkQ7QUFDQSxnQ0FBZ0MsNENBQVcsRSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vY29tcGFyZUFzYy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2NvbXBhcmVEZXNjL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vdG9EYXRlL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmZvcm1hdGlvbml0ZW1tYW5hZ2VyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9vYmplY3RzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Nb250c2VycmF0OndnaHRANDAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG4gIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XFxufVxcblxcbi8qIGh0bWwge1xcbiAgZm9udC1zaXplOiBcXG59ICovXFxuXFxuaW1nLmhlYWRlci1sb2dvIHtcXG4gIHdpZHRoOiA3NXB4O1xcbiAgaGVpZ2h0OiA3NXB4O1xcbn1cXG5cXG5pbWcuaGVhZGVyLWxvZ28sXFxuaW1nLmdpdGh1Yi1sb2dvIHtcXG4gIGZpbHRlcjogaW52ZXJ0KDEwMCUpIHNlcGlhKDAlKSBzYXR1cmF0ZSgwJSkgaHVlLXJvdGF0ZSgyNDJkZWcpIGJyaWdodG5lc3MoMTEwJSkgY29udHJhc3QoMTAxJSk7XFxufVxcblxcbi5hZGQtdG9kby1idXR0b24ge1xcbiAgd2lkdGg6IGNsYW1wKDMwcHgsIDV2dywgNTBweCk7XFxuICBoZWlnaHQ6IGNsYW1wKDMwcHgsIDV2dywgNTBweCk7XFxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiAjQUVGNkM3OyAqL1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzEwNGM4ODtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmFkZC10b2RvLWJ1dHRvbi1pY29uIHtcXG4gIGZpbHRlcjogaW52ZXJ0KDIyJSkgc2VwaWEoMzAlKSBzYXR1cmF0ZSgzOTMyJSkgaHVlLXJvdGF0ZSgxOTNkZWcpIGJyaWdodG5lc3MoODclKSBjb250cmFzdCg5MSUpO1xcbn1cXG5cXG4uY29udGVudCB7XFxuICB3aWR0aDogMTAwdnc7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlOiAxMDBweCAxZnIgLyAxZnIgNGZyO1xcbn1cXG5cXG4uaGVhZGVyIHtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIGNvbG9yOiB3aGl0ZXNtb2tlO1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjMjI3NEE1LCAjMWU2MjhhKTtcXG4gIGdyaWQtY29sdW1uOiAxIC8gMztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4udGl0bGUtbG9nby1jb250YWluZXIge1xcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xcbiAgZm9udC1zaXplOiAzNnB4O1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIG1heC1jb250ZW50KTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDEwcHg7XFxufVxcblxcbi5zaWRlYmFyIHtcXG4gIGZvbnQtc2l6ZTogY2xhbXAoMTZweCwgMnZ3LCAzMHB4KTtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBwYWRkaW5nLXRvcDogMjBweDtcXG4gIGNvbG9yOiByZ2IoMjA2LCAyMDYsIDIwNik7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTA0Yzg4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5zaWRlYmFyLW1haW4tYnV0dG9ucyB7XFxuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoNiwgbWluLWNvbnRlbnQpO1xcbiAgZ2FwOiAxNXB4O1xcbn1cXG5cXG4uYnV0dG9uIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmNyZWRpdHMtZm9vdGVyIHtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCBtYXgtY29udGVudCk7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4ubWFpbi1jb250ZW50IHtcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZTogcmVwZWF0KDMsIG1pbi1jb250ZW50KSAvIDFmcjtcXG4gIGdhcDogMjBweDtcXG59XFxuXFxuLm1haW4tY29udGVudC10b3Atcm93IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCBtaW4tY29udGVudCk7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAzMHB4O1xcbn1cXG5cXG4uY3VycmVudC1jYXRlZ29yeS10ZXh0IHtcXG4gIGZvbnQtc2l6ZTogY2xhbXAoNDBweCwgNnZ3LCA3MHB4KTtcXG4gIGNvbG9yOiAjMTA0Yzg4O1xcbn1cXG5cXG4udG9kby1pdGVtcy1jYXRlZ29yeS10aXRsZXMsXFxuLnRvZG8taXRlbSB7XFxuICBmb250LXNpemU6IGNsYW1wKDE2cHgsIDJ2dywgMjVweCk7XFxuICAvKiBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNiwgbWF4LWNvbnRlbnQpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBtaW4tY29udGVudDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGdhcDogMjBweDsgKi9cXG59XFxuXFxuLnRvZG8taXRlbXMtY29udGFpbmVyIHtcXG4gIGZvbnQtc2l6ZTogY2xhbXAoMTZweCwgMnZ3LCAyNXB4KTtcXG4gIC8qIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IG1pbi1jb250ZW50OyAqL1xcbn1cXG5cXG50YWJsZSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxufVxcblxcbi50aXRsZS10aXRsZSB7XFxuICB3aWR0aDogMzAlO1xcbn1cXG5cXG4udG9kby1pdGVtIHtcXG4gIGhlaWdodDogNDBweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxudGQudGl0bGUge1xcbiAgLyogZGlzcGxheTogYmxvY2s7ICovXFxuICAvKiB3aWR0aDogMTAwJTsgKi9cXG4gIG1heC13aWR0aDogMDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxufVxcblxcbnRkIHtcXG4gIGJvcmRlcjogMDtcXG59XFxuXFxuLnRvZG8taXRlbS1jaGVja2JveCB7XFxuICBoZWlnaHQ6IGNsYW1wKDE2cHgsIDJ2dywgMjVweCk7XFxuICB3aWR0aDogY2xhbXAoMTZweCwgMnZ3LCAyNXB4KTtcXG59XFxuXFxudGQucHJpb3JpdHktbG93IHtjb2xvcjogcmdiKDQyLCA5NiwgNDIpfVxcbnRkLnByaW9yaXR5LW1lZCB7Y29sb3I6IHJnYigxMzYsIDk3LCAyNCl9XFxudGQucHJpb3JpdHktaGlnaCB7Y29sb3I6IHJnYigxNzQsIDI4LCAyOCl9XFxuXFxuLyogU3RyaWtlb3V0IGZvciBjb21wbGV0ZWQgdGFza3MgKi9cXG4udG9kby1pdGVtLmNvbXBsZXRlZCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTQwLCAxNDAsIDE0MCk7XFxuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG59XFxuXFxuLnRvZG8taXRlbTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTk2LCAxOTYsIDE5Nik7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7RUFDRSxVQUFVO0VBQ1YsU0FBUztFQUNULHFDQUFxQztBQUN2Qzs7QUFFQTs7R0FFRzs7QUFFSDtFQUNFLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7O0VBRUUsOEZBQThGO0FBQ2hHOztBQUVBO0VBQ0UsNkJBQTZCO0VBQzdCLDhCQUE4QjtFQUM5QiwrQkFBK0I7RUFDL0IseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsK0ZBQStGO0FBQ2pHOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsYUFBYTtFQUNiLGtDQUFrQztBQUNwQzs7QUFFQTtFQUNFLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsb0RBQW9EO0VBQ3BELGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsYUFBYTtFQUNiLDZDQUE2QztFQUM3QyxtQkFBbUI7RUFDbkIsU0FBUztBQUNYOztBQUVBO0VBQ0UsaUNBQWlDO0VBQ2pDLGFBQWE7RUFDYixpQkFBaUI7RUFDakIseUJBQXlCO0VBQ3pCLHlCQUF5QjtFQUN6QixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsMENBQTBDO0VBQzFDLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYiw2Q0FBNkM7RUFDN0MsbUJBQW1CO0VBQ25CLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGFBQWE7RUFDYixhQUFhO0VBQ2IsMkNBQTJDO0VBQzNDLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGFBQWE7RUFDYiw2Q0FBNkM7RUFDN0MsbUJBQW1CO0VBQ25CLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGlDQUFpQztFQUNqQyxjQUFjO0FBQ2hCOztBQUVBOztFQUVFLGlDQUFpQztFQUNqQzs7OztjQUlZO0FBQ2Q7O0FBRUE7RUFDRSxpQ0FBaUM7RUFDakM7b0NBQ2tDO0FBQ3BDOztBQUVBO0VBQ0UsV0FBVztFQUNYLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLFlBQVk7RUFDWixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFNBQVM7QUFDWDs7QUFFQTtFQUNFLDhCQUE4QjtFQUM5Qiw2QkFBNkI7QUFDL0I7O0FBRUEsaUJBQWlCLHNCQUFzQjtBQUN2QyxpQkFBaUIsdUJBQXVCO0FBQ3hDLGtCQUFrQix1QkFBdUI7O0FBRXpDLGtDQUFrQztBQUNsQztFQUNFLGtCQUFrQjtFQUNsQixvQ0FBb0M7RUFDcEMsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0Usb0NBQW9DO0FBQ3RDXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU1vbnRzZXJyYXQ6d2dodEA0MDAmZGlzcGxheT1zd2FwJyk7XFxuXFxuKiB7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcXG59XFxuXFxuLyogaHRtbCB7XFxuICBmb250LXNpemU6IFxcbn0gKi9cXG5cXG5pbWcuaGVhZGVyLWxvZ28ge1xcbiAgd2lkdGg6IDc1cHg7XFxuICBoZWlnaHQ6IDc1cHg7XFxufVxcblxcbmltZy5oZWFkZXItbG9nbyxcXG5pbWcuZ2l0aHViLWxvZ28ge1xcbiAgZmlsdGVyOiBpbnZlcnQoMTAwJSkgc2VwaWEoMCUpIHNhdHVyYXRlKDAlKSBodWUtcm90YXRlKDI0MmRlZykgYnJpZ2h0bmVzcygxMTAlKSBjb250cmFzdCgxMDElKTtcXG59XFxuXFxuLmFkZC10b2RvLWJ1dHRvbiB7XFxuICB3aWR0aDogY2xhbXAoMzBweCwgNXZ3LCA1MHB4KTtcXG4gIGhlaWdodDogY2xhbXAoMzBweCwgNXZ3LCA1MHB4KTtcXG4gIC8qIGJhY2tncm91bmQtY29sb3I6ICNBRUY2Qzc7ICovXFxuICBib3JkZXI6IDFweCBzb2xpZCAjMTA0Yzg4O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uYWRkLXRvZG8tYnV0dG9uLWljb24ge1xcbiAgZmlsdGVyOiBpbnZlcnQoMjIlKSBzZXBpYSgzMCUpIHNhdHVyYXRlKDM5MzIlKSBodWUtcm90YXRlKDE5M2RlZykgYnJpZ2h0bmVzcyg4NyUpIGNvbnRyYXN0KDkxJSk7XFxufVxcblxcbi5jb250ZW50IHtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGhlaWdodDogMTAwdmg7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGU6IDEwMHB4IDFmciAvIDFmciA0ZnI7XFxufVxcblxcbi5oZWFkZXIge1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgY29sb3I6IHdoaXRlc21va2U7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICMyMjc0QTUsICMxZTYyOGEpO1xcbiAgZ3JpZC1jb2x1bW46IDEgLyAzO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi50aXRsZS1sb2dvLWNvbnRhaW5lciB7XFxuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XFxuICBmb250LXNpemU6IDM2cHg7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgbWF4LWNvbnRlbnQpO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMTBweDtcXG59XFxuXFxuLnNpZGViYXIge1xcbiAgZm9udC1zaXplOiBjbGFtcCgxNnB4LCAydncsIDMwcHgpO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIHBhZGRpbmctdG9wOiAyMHB4O1xcbiAgY29sb3I6IHJnYigyMDYsIDIwNiwgMjA2KTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxMDRjODg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLnNpZGViYXItbWFpbi1idXR0b25zIHtcXG4gIHBhZGRpbmctbGVmdDogMjBweDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCg2LCBtaW4tY29udGVudCk7XFxuICBnYXA6IDE1cHg7XFxufVxcblxcbi5idXR0b24ge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uY3JlZGl0cy1mb290ZXIge1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIG1heC1jb250ZW50KTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDEwcHg7XFxufVxcblxcbi5tYWluLWNvbnRlbnQge1xcbiAgcGFkZGluZzogMjBweDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlOiByZXBlYXQoMywgbWluLWNvbnRlbnQpIC8gMWZyO1xcbiAgZ2FwOiAyMHB4O1xcbn1cXG5cXG4ubWFpbi1jb250ZW50LXRvcC1yb3cge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIG1pbi1jb250ZW50KTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDMwcHg7XFxufVxcblxcbi5jdXJyZW50LWNhdGVnb3J5LXRleHQge1xcbiAgZm9udC1zaXplOiBjbGFtcCg0MHB4LCA2dncsIDcwcHgpO1xcbiAgY29sb3I6ICMxMDRjODg7XFxufVxcblxcbi50b2RvLWl0ZW1zLWNhdGVnb3J5LXRpdGxlcyxcXG4udG9kby1pdGVtIHtcXG4gIGZvbnQtc2l6ZTogY2xhbXAoMTZweCwgMnZ3LCAyNXB4KTtcXG4gIC8qIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg2LCBtYXgtY29udGVudCk7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IG1pbi1jb250ZW50O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgZ2FwOiAyMHB4OyAqL1xcbn1cXG5cXG4udG9kby1pdGVtcy1jb250YWluZXIge1xcbiAgZm9udC1zaXplOiBjbGFtcCgxNnB4LCAydncsIDI1cHgpO1xcbiAgLyogZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogbWluLWNvbnRlbnQ7ICovXFxufVxcblxcbnRhYmxlIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXG59XFxuXFxuLnRpdGxlLXRpdGxlIHtcXG4gIHdpZHRoOiAzMCU7XFxufVxcblxcbi50b2RvLWl0ZW0ge1xcbiAgaGVpZ2h0OiA0MHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG50ZC50aXRsZSB7XFxuICAvKiBkaXNwbGF5OiBibG9jazsgKi9cXG4gIC8qIHdpZHRoOiAxMDAlOyAqL1xcbiAgbWF4LXdpZHRoOiAwO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG59XFxuXFxudGQge1xcbiAgYm9yZGVyOiAwO1xcbn1cXG5cXG4udG9kby1pdGVtLWNoZWNrYm94IHtcXG4gIGhlaWdodDogY2xhbXAoMTZweCwgMnZ3LCAyNXB4KTtcXG4gIHdpZHRoOiBjbGFtcCgxNnB4LCAydncsIDI1cHgpO1xcbn1cXG5cXG50ZC5wcmlvcml0eS1sb3cge2NvbG9yOiByZ2IoNDIsIDk2LCA0Mil9XFxudGQucHJpb3JpdHktbWVkIHtjb2xvcjogcmdiKDEzNiwgOTcsIDI0KX1cXG50ZC5wcmlvcml0eS1oaWdoIHtjb2xvcjogcmdiKDE3NCwgMjgsIDI4KX1cXG5cXG4vKiBTdHJpa2VvdXQgZm9yIGNvbXBsZXRlZCB0YXNrcyAqL1xcbi50b2RvLWl0ZW0uY29tcGxldGVkIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxNDAsIDE0MCwgMTQwKTtcXG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcbn1cXG5cXG4udG9kby1pdGVtOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxOTYsIDE5NiwgMTk2KTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlcXVpcmVkQXJncyhyZXF1aXJlZCwgYXJncykge1xuICBpZiAoYXJncy5sZW5ndGggPCByZXF1aXJlZCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IocmVxdWlyZWQgKyAnIGFyZ3VtZW50JyArIChyZXF1aXJlZCA+IDEgPyAncycgOiAnJykgKyAnIHJlcXVpcmVkLCBidXQgb25seSAnICsgYXJncy5sZW5ndGggKyAnIHByZXNlbnQnKTtcbiAgfVxufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgY29tcGFyZUFzY1xuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBDb21wYXJlIHRoZSB0d28gZGF0ZXMgYW5kIHJldHVybiAtMSwgMCBvciAxLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQ29tcGFyZSB0aGUgdHdvIGRhdGVzIGFuZCByZXR1cm4gMSBpZiB0aGUgZmlyc3QgZGF0ZSBpcyBhZnRlciB0aGUgc2Vjb25kLFxuICogLTEgaWYgdGhlIGZpcnN0IGRhdGUgaXMgYmVmb3JlIHRoZSBzZWNvbmQgb3IgMCBpZiBkYXRlcyBhcmUgZXF1YWwuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZUxlZnQgLSB0aGUgZmlyc3QgZGF0ZSB0byBjb21wYXJlXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlUmlnaHQgLSB0aGUgc2Vjb25kIGRhdGUgdG8gY29tcGFyZVxuICogQHJldHVybnMge051bWJlcn0gdGhlIHJlc3VsdCBvZiB0aGUgY29tcGFyaXNvblxuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDb21wYXJlIDExIEZlYnJ1YXJ5IDE5ODcgYW5kIDEwIEp1bHkgMTk4OTpcbiAqIGNvbnN0IHJlc3VsdCA9IGNvbXBhcmVBc2MobmV3IERhdGUoMTk4NywgMSwgMTEpLCBuZXcgRGF0ZSgxOTg5LCA2LCAxMCkpXG4gKiAvLz0+IC0xXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFNvcnQgdGhlIGFycmF5IG9mIGRhdGVzOlxuICogY29uc3QgcmVzdWx0ID0gW1xuICogICBuZXcgRGF0ZSgxOTk1LCA2LCAyKSxcbiAqICAgbmV3IERhdGUoMTk4NywgMSwgMTEpLFxuICogICBuZXcgRGF0ZSgxOTg5LCA2LCAxMClcbiAqIF0uc29ydChjb21wYXJlQXNjKVxuICogLy89PiBbXG4gKiAvLyAgIFdlZCBGZWIgMTEgMTk4NyAwMDowMDowMCxcbiAqIC8vICAgTW9uIEp1bCAxMCAxOTg5IDAwOjAwOjAwLFxuICogLy8gICBTdW4gSnVsIDAyIDE5OTUgMDA6MDA6MDBcbiAqIC8vIF1cbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb21wYXJlQXNjKGRpcnR5RGF0ZUxlZnQsIGRpcnR5RGF0ZVJpZ2h0KSB7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZUxlZnQgPSB0b0RhdGUoZGlydHlEYXRlTGVmdCk7XG4gIHZhciBkYXRlUmlnaHQgPSB0b0RhdGUoZGlydHlEYXRlUmlnaHQpO1xuICB2YXIgZGlmZiA9IGRhdGVMZWZ0LmdldFRpbWUoKSAtIGRhdGVSaWdodC5nZXRUaW1lKCk7XG5cbiAgaWYgKGRpZmYgPCAwKSB7XG4gICAgcmV0dXJuIC0xO1xuICB9IGVsc2UgaWYgKGRpZmYgPiAwKSB7XG4gICAgcmV0dXJuIDE7IC8vIFJldHVybiAwIGlmIGRpZmYgaXMgMDsgcmV0dXJuIE5hTiBpZiBkaWZmIGlzIE5hTlxuICB9IGVsc2Uge1xuICAgIHJldHVybiBkaWZmO1xuICB9XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBjb21wYXJlRGVzY1xuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBDb21wYXJlIHRoZSB0d28gZGF0ZXMgcmV2ZXJzZSBjaHJvbm9sb2dpY2FsbHkgYW5kIHJldHVybiAtMSwgMCBvciAxLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQ29tcGFyZSB0aGUgdHdvIGRhdGVzIGFuZCByZXR1cm4gLTEgaWYgdGhlIGZpcnN0IGRhdGUgaXMgYWZ0ZXIgdGhlIHNlY29uZCxcbiAqIDEgaWYgdGhlIGZpcnN0IGRhdGUgaXMgYmVmb3JlIHRoZSBzZWNvbmQgb3IgMCBpZiBkYXRlcyBhcmUgZXF1YWwuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZUxlZnQgLSB0aGUgZmlyc3QgZGF0ZSB0byBjb21wYXJlXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlUmlnaHQgLSB0aGUgc2Vjb25kIGRhdGUgdG8gY29tcGFyZVxuICogQHJldHVybnMge051bWJlcn0gdGhlIHJlc3VsdCBvZiB0aGUgY29tcGFyaXNvblxuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDb21wYXJlIDExIEZlYnJ1YXJ5IDE5ODcgYW5kIDEwIEp1bHkgMTk4OSByZXZlcnNlIGNocm9ub2xvZ2ljYWxseTpcbiAqIGNvbnN0IHJlc3VsdCA9IGNvbXBhcmVEZXNjKG5ldyBEYXRlKDE5ODcsIDEsIDExKSwgbmV3IERhdGUoMTk4OSwgNiwgMTApKVxuICogLy89PiAxXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFNvcnQgdGhlIGFycmF5IG9mIGRhdGVzIGluIHJldmVyc2UgY2hyb25vbG9naWNhbCBvcmRlcjpcbiAqIGNvbnN0IHJlc3VsdCA9IFtcbiAqICAgbmV3IERhdGUoMTk5NSwgNiwgMiksXG4gKiAgIG5ldyBEYXRlKDE5ODcsIDEsIDExKSxcbiAqICAgbmV3IERhdGUoMTk4OSwgNiwgMTApXG4gKiBdLnNvcnQoY29tcGFyZURlc2MpXG4gKiAvLz0+IFtcbiAqIC8vICAgU3VuIEp1bCAwMiAxOTk1IDAwOjAwOjAwLFxuICogLy8gICBNb24gSnVsIDEwIDE5ODkgMDA6MDA6MDAsXG4gKiAvLyAgIFdlZCBGZWIgMTEgMTk4NyAwMDowMDowMFxuICogLy8gXVxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbXBhcmVEZXNjKGRpcnR5RGF0ZUxlZnQsIGRpcnR5RGF0ZVJpZ2h0KSB7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZUxlZnQgPSB0b0RhdGUoZGlydHlEYXRlTGVmdCk7XG4gIHZhciBkYXRlUmlnaHQgPSB0b0RhdGUoZGlydHlEYXRlUmlnaHQpO1xuICB2YXIgZGlmZiA9IGRhdGVMZWZ0LmdldFRpbWUoKSAtIGRhdGVSaWdodC5nZXRUaW1lKCk7XG5cbiAgaWYgKGRpZmYgPiAwKSB7XG4gICAgcmV0dXJuIC0xO1xuICB9IGVsc2UgaWYgKGRpZmYgPCAwKSB7XG4gICAgcmV0dXJuIDE7IC8vIFJldHVybiAwIGlmIGRpZmYgaXMgMDsgcmV0dXJuIE5hTiBpZiBkaWZmIGlzIE5hTlxuICB9IGVsc2Uge1xuICAgIHJldHVybiBkaWZmO1xuICB9XG59IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiOyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9OyB9IGVsc2UgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07IH0gcmV0dXJuIF90eXBlb2Yob2JqKTsgfVxuXG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSB0b0RhdGVcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgQ29udmVydCB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIENvbnZlcnQgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIGFuIGluc3RhbmNlIG9mIERhdGUsIHRoZSBmdW5jdGlvbiByZXR1cm5zIGl0cyBjbG9uZS5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYSBudW1iZXIsIGl0IGlzIHRyZWF0ZWQgYXMgYSB0aW1lc3RhbXAuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIG5vbmUgb2YgdGhlIGFib3ZlLCB0aGUgZnVuY3Rpb24gcmV0dXJucyBJbnZhbGlkIERhdGUuXG4gKlxuICogKipOb3RlKio6ICphbGwqIERhdGUgYXJndW1lbnRzIHBhc3NlZCB0byBhbnkgKmRhdGUtZm5zKiBmdW5jdGlvbiBpcyBwcm9jZXNzZWQgYnkgYHRvRGF0ZWAuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gYXJndW1lbnQgLSB0aGUgdmFsdWUgdG8gY29udmVydFxuICogQHJldHVybnMge0RhdGV9IHRoZSBwYXJzZWQgZGF0ZSBpbiB0aGUgbG9jYWwgdGltZSB6b25lXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ2xvbmUgdGhlIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUobmV3IERhdGUoMjAxNCwgMSwgMTEsIDExLCAzMCwgMzApKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ29udmVydCB0aGUgdGltZXN0YW1wIHRvIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUoMTM5MjA5ODQzMDAwMClcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9EYXRlKGFyZ3VtZW50KSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgYXJnU3RyID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGFyZ3VtZW50KTsgLy8gQ2xvbmUgdGhlIGRhdGVcblxuICBpZiAoYXJndW1lbnQgaW5zdGFuY2VvZiBEYXRlIHx8IF90eXBlb2YoYXJndW1lbnQpID09PSAnb2JqZWN0JyAmJiBhcmdTdHIgPT09ICdbb2JqZWN0IERhdGVdJykge1xuICAgIC8vIFByZXZlbnQgdGhlIGRhdGUgdG8gbG9zZSB0aGUgbWlsbGlzZWNvbmRzIHdoZW4gcGFzc2VkIHRvIG5ldyBEYXRlKCkgaW4gSUUxMFxuICAgIHJldHVybiBuZXcgRGF0ZShhcmd1bWVudC5nZXRUaW1lKCkpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBhcmd1bWVudCA9PT0gJ251bWJlcicgfHwgYXJnU3RyID09PSAnW29iamVjdCBOdW1iZXJdJykge1xuICAgIHJldHVybiBuZXcgRGF0ZShhcmd1bWVudCk7XG4gIH0gZWxzZSB7XG4gICAgaWYgKCh0eXBlb2YgYXJndW1lbnQgPT09ICdzdHJpbmcnIHx8IGFyZ1N0ciA9PT0gJ1tvYmplY3QgU3RyaW5nXScpICYmIHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgIGNvbnNvbGUud2FybihcIlN0YXJ0aW5nIHdpdGggdjIuMC4wLWJldGEuMSBkYXRlLWZucyBkb2Vzbid0IGFjY2VwdCBzdHJpbmdzIGFzIGRhdGUgYXJndW1lbnRzLiBQbGVhc2UgdXNlIGBwYXJzZUlTT2AgdG8gcGFyc2Ugc3RyaW5ncy4gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91cGdyYWRlR3VpZGUubWQjc3RyaW5nLWFyZ3VtZW50c1wiKTsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcblxuICAgICAgY29uc29sZS53YXJuKG5ldyBFcnJvcigpLnN0YWNrKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgfVxufSIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyBUb2RvSXRlbSwgUHJvamVjdEl0ZW0gfSBmcm9tIFwiLi9vYmplY3RzLmpzXCI7XG5pbXBvcnQgeyBjb21wYXJlQXNjLCBjb21wYXJlRGVzYyB9IGZyb20gXCJkYXRlLWZuc1wiO1xuXG5leHBvcnQgY29uc3QgSW5mb3JtYXRpb25JdGVtTWFuYWdlciA9ICgoKSA9PiB7XG4gIGxldCBwcm9qZWN0TWFwID0gbmV3IE1hcCgpO1xuICBsZXQgcHJvamVjdENvdW50ZXIgPSAwOyAvLyB1c2VkIHRvIGdlbmVyYXRlIHByb2pJRHNcbiAgbGV0IHRvZG9Db3VudGVyID0gMDsgLy8gdXNlZCB0byBnZW5lcmF0ZSB0b2RvSURzXG5cbiAgY29uc3QgY3JlYXRlUHJvamVjdCA9IChwcm9qZWN0SXRlbSkgPT4ge1xuICAgIHByb2plY3RJdGVtLnByb2pJRCA9ICdwcm9qJyArIHByb2plY3RDb3VudGVyO1xuICAgIHByb2plY3RDb3VudGVyKys7XG5cbiAgICBsZXQgc2luZ2xlUHJvamVjdE1hcCA9IG5ldyBNYXAoKTtcbiAgICBzaW5nbGVQcm9qZWN0TWFwLnNldCgncHJvamVjdCcsIHByb2plY3RJdGVtKTtcbiAgICBzaW5nbGVQcm9qZWN0TWFwLnNldCgndG9kb0l0ZW1zJywgbmV3IE1hcCgpKTtcbiAgICBwcm9qZWN0TWFwLnNldChwcm9qZWN0SXRlbS5wcm9qSUQsIHNpbmdsZVByb2plY3RNYXApO1xuICB9O1xuICBjb25zdCBkZWxldGVQcm9qZWN0ID0gKHByb2pJRCkgPT4ge1xuICAgIHByb2plY3RNYXAuZGVsZXRlKHByb2pJRCk7XG4gIH07XG4gIGNvbnN0IGdldFByb2plY3RzID0gKCkgPT4ge1xuICAgIGxldCBwcm9qZWN0T2JqQXJyYXkgPSBbXTtcbiAgICBmb3IgKGxldCBwcm9qZWN0RW50cnkgb2YgcHJvamVjdE1hcCkge1xuICAgICAgLy8gQ0FVVElPTjogbWFwLmdldCByZXR1cm5zIHJlZmVyZW5jZXMgdG8gb2JqZWN0cy4gQ2hhbmdpbmcgdGhlIHJlZmVyZW5jZSBXSUxMXG4gICAgICAvLyAgIGNoYW5nZSB0aGUgYWN0dWFsIHByb2plY3Qgb2JqZWN0IGluIHByb2plY3RNYXBcbiAgICAgIHByb2plY3RPYmpBcnJheS5wdXNoKHByb2plY3RFbnRyeVsxXS5nZXQoJ3Byb2plY3QnKSk7XG4gICAgfVxuICAgIHJldHVybiBwcm9qZWN0T2JqQXJyYXk7XG4gIH07XG4gIGNvbnN0IGNyZWF0ZVRvZG8gPSAocHJvaklELCB0b2RvSXRlbSkgPT4ge1xuICAgIHRvZG9JdGVtLnRvZG9JRCA9ICd0b2RvJyArIHRvZG9Db3VudGVyO1xuICAgIHRvZG9Db3VudGVyKys7XG5cbiAgICBwcm9qZWN0TWFwLmdldChwcm9qSUQpLmdldCgndG9kb0l0ZW1zJykuc2V0KHRvZG9JdGVtLnRvZG9JRCwgdG9kb0l0ZW0pO1xuICB9O1xuICBjb25zdCBkZWxldGVUb2RvID0gKHRvZG9JRCkgPT4ge1xuICAgIHByb2plY3RNYXAuZm9yRWFjaCgodmFsdWUsIGtleSkgPT4ge1xuICAgICAgLy8gQXR0ZW1wdCB0byBkZWxldGUgdGhlIHRvZG9JdGVtIGZyb20gZXZlcnkgcHJvamVjdC5cbiAgICAgIC8vIFdpbGwgb25seSB3b3JrIGlmIHRoZSB0b2RvSXRlbSBpcyBpbiB0aGUgcHJvamVjdFxuICAgICAgaWYgKHZhbHVlLmdldCgndG9kb0l0ZW1zJykuZGVsZXRlKHRvZG9JRCkgPT09IHRydWUpIHtcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDsgLy8gbm9ybWFsIHJldHVybiB2YWx1ZSBmb3IgLmZvckVhY2hcbiAgICAgIH07XG4gICAgfSk7XG4gIH07XG4gIGNvbnN0IG1vdmVUb2RvID0gKHRvZG9JRCwgdGFyZ2V0UHJvaklEKSA9PiB7XG4gICAgbGV0IHRlbXBUb2RvSXRlbSA9IHt9O1xuICAgIHByb2plY3RNYXAuZm9yRWFjaCgodmFsdWUsIGtleSkgPT4ge1xuICAgICAgbGV0IHRvZG9PYmogPSB2YWx1ZS5nZXQoJ3RvZG9JdGVtcycpLmdldCh0b2RvSUQpO1xuICAgICAgaWYgKHRvZG9PYmogIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBpZiAodG9kb09iai50b2RvSUQgPT09IHRvZG9JRCkge1xuICAgICAgICAgIHRlbXBUb2RvSXRlbSA9IHRvZG9PYmo7XG4gICAgICAgICAgZGVsZXRlVG9kbyh0b2RvSUQpO1xuICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7IC8vIG5vcm1hbCByZXR1cm4gdmFsdWUgZm9yIC5mb3JFYWNoXG4gICAgICAgIH07XG4gICAgICB9O1xuICAgIH0pO1xuICAgIHByb2plY3RNYXAuZ2V0KHRhcmdldFByb2pJRCkuZ2V0KCd0b2RvSXRlbXMnKS5zZXQodG9kb0lELCB0ZW1wVG9kb0l0ZW0pO1xuICB9O1xuICBjb25zdCBnZXRUb2RvcyA9ICh0b2RvQ2F0ZWdvcnlUeXBlU3RyID0gJ2FsbCcsIHRvZG9Tb3J0U3RyID0gJ2NyZWF0aW9uLWRhdGUnKSA9PiB7XG4gICAgbGV0IHRvZG9JdGVtc0FycmF5ID0gW107XG4gICAgXG4gICAgLy8gRmlyc3QsIGdldCB0aGUgc3BlY2lmaWVkIHRvZG9zXG4gICAgaWYgKHRvZG9DYXRlZ29yeVR5cGVTdHIgPT09ICdhbGwnKSB7XG4gICAgICBwcm9qZWN0TWFwLmZvckVhY2goKHZhbHVlMSkgPT4ge1xuICAgICAgICB2YWx1ZTEuZ2V0KCd0b2RvSXRlbXMnKS5mb3JFYWNoKCh2YWx1ZTIpID0+IHtcbiAgICAgICAgICB0b2RvSXRlbXNBcnJheS5wdXNoKHZhbHVlMik7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmICh0b2RvQ2F0ZWdvcnlUeXBlU3RyID09PSAnZHVlLXRvZGF5Jykge1xuICAgICAgcHJvamVjdE1hcC5mb3JFYWNoKCh2YWx1ZTEpID0+IHtcbiAgICAgICAgdmFsdWUxLmdldCgndG9kb0l0ZW1zJykuZm9yRWFjaCgodmFsdWUyKSA9PiB7XG4gICAgICAgICAgLy8gSU1QTEVNRU5UIFdJVEggVElNRSBMSUJSQVJZXG4gICAgICAgICAgdG9kb0l0ZW1zQXJyYXkucHVzaCh2YWx1ZTIpO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAodG9kb0NhdGVnb3J5VHlwZVN0ciA9PT0gJ2R1ZS10aGlzLXdlZWsnKSB7XG4gICAgICBwcm9qZWN0TWFwLmZvckVhY2goKHZhbHVlMSkgPT4ge1xuICAgICAgICB2YWx1ZTEuZ2V0KCd0b2RvSXRlbXMnKS5mb3JFYWNoKCh2YWx1ZTIpID0+IHtcbiAgICAgICAgICAvLyBJTVBMRU1FTlQgV0lUSCBUSU1FIExJQlJBUllcbiAgICAgICAgICB0b2RvSXRlbXNBcnJheS5wdXNoKHZhbHVlMik7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmICh0b2RvQ2F0ZWdvcnlUeXBlU3RyID09PSAnbG93LXByaW9yaXR5Jykge1xuICAgICAgcHJvamVjdE1hcC5mb3JFYWNoKCh2YWx1ZTEpID0+IHtcbiAgICAgICAgdmFsdWUxLmdldCgndG9kb0l0ZW1zJykuZm9yRWFjaCgodmFsdWUyKSA9PiB7XG4gICAgICAgICAgaWYgKHZhbHVlMi5wcmlvcml0eSA9PT0gJ2xvdycpIHtcbiAgICAgICAgICAgIHRvZG9JdGVtc0FycmF5LnB1c2godmFsdWUyKTtcbiAgICAgICAgICB9O1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAodG9kb0NhdGVnb3J5VHlwZVN0ciA9PT0gJ21lZC1wcmlvcml0eScpIHtcbiAgICAgIHByb2plY3RNYXAuZm9yRWFjaCgodmFsdWUxKSA9PiB7XG4gICAgICAgIHZhbHVlMS5nZXQoJ3RvZG9JdGVtcycpLmZvckVhY2goKHZhbHVlMikgPT4ge1xuICAgICAgICAgIGlmICh2YWx1ZTIucHJpb3JpdHkgPT09ICdtZWQnKSB7XG4gICAgICAgICAgICB0b2RvSXRlbXNBcnJheS5wdXNoKHZhbHVlMik7XG4gICAgICAgICAgfTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKHRvZG9DYXRlZ29yeVR5cGVTdHIgPT09ICdoaWdoLXByaW9yaXR5Jykge1xuICAgICAgcHJvamVjdE1hcC5mb3JFYWNoKCh2YWx1ZTEpID0+IHtcbiAgICAgICAgdmFsdWUxLmdldCgndG9kb0l0ZW1zJykuZm9yRWFjaCgodmFsdWUyKSA9PiB7XG4gICAgICAgICAgaWYgKHZhbHVlMi5wcmlvcml0eSA9PT0gJ2hpZ2gnKSB7XG4gICAgICAgICAgICB0b2RvSXRlbXNBcnJheS5wdXNoKHZhbHVlMik7XG4gICAgICAgICAgfTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKHRvZG9DYXRlZ29yeVR5cGVTdHIgPT09ICdjb21wbGV0ZWQnKSB7XG4gICAgICBwcm9qZWN0TWFwLmZvckVhY2goKHZhbHVlMSkgPT4ge1xuICAgICAgICB2YWx1ZTEuZ2V0KCd0b2RvSXRlbXMnKS5mb3JFYWNoKCh2YWx1ZTIpID0+IHtcbiAgICAgICAgICBpZiAodmFsdWUyLmNvbXBsZXRlZCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgdG9kb0l0ZW1zQXJyYXkucHVzaCh2YWx1ZTIpO1xuICAgICAgICAgIH07XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmICh0b2RvQ2F0ZWdvcnlUeXBlU3RyLmluY2x1ZGVzKCdwcm9qJykpIHtcbiAgICAgIC8vIHNlYXJjaGluZyBmb3IgdG9kb3MgaW4gc3BlY2lmaWMgcHJvamVjdFxuICAgICAgcHJvamVjdE1hcC5nZXQodG9kb0NhdGVnb3J5VHlwZVN0cikuZ2V0KCd0b2RvSXRlbXMnKS5mb3JFYWNoKCh2YWx1ZSkgPT4ge1xuICAgICAgICB0b2RvSXRlbXNBcnJheS5wdXNoKHZhbHVlKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIFNlY29uZCwgc29ydCB0aGUgcmV0cmlldmVkIHRvZG9zXG4gICAgaWYgKHRvZG9Tb3J0U3RyID09PSAnbG93LWhpZ2gtcHJpb3JpdHknKSB7XG4gICAgICB0b2RvSXRlbXNBcnJheS5zb3J0KCh0b2RvSXRlbTEsIHRvZG9JdGVtMikgPT4ge1xuICAgICAgICBpZiAoKHRvZG9JdGVtMS5wcmlvcml0eSA9PT0gJ2xvdycgJiYgKHRvZG9JdGVtMi5wcmlvcml0eSA9PT0gJ21lZCcgfHwgdG9kb0l0ZW0yLnByaW9yaXR5ID09PSAnaGlnaCcpKSB8fFxuICAgICAgICAgICAgKHRvZG9JdGVtMS5wcmlvcml0eSA9PT0gJ21lZCcgJiYgdG9kb0l0ZW0yLnByaW9yaXR5ID09PSAnaGlnaCcpKSB7XG4gICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICB9IGVsc2UgaWYgKHRvZG9JdGVtMS5wcmlvcml0eSA9PT0gdG9kb0l0ZW0yLnByaW9yaXR5KSB7XG4gICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgIH0gZWxzZSBpZiAoKHRvZG9JdGVtMS5wcmlvcml0eSA9PT0gJ2hpZ2gnICYmICh0b2RvSXRlbTIucHJpb3JpdHkgPT09ICdsb3cnIHx8IHRvZG9JdGVtMi5wcmlvcml0eSA9PT0gJ21lZCcpKSB8fFxuICAgICAgICAodG9kb0l0ZW0xLnByaW9yaXR5ID09PSAnbWVkJyAmJiB0b2RvSXRlbTIucHJpb3JpdHkgPT09ICdsb3cnKSkge1xuICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKHRvZG9Tb3J0U3RyID09PSAnaGlnaC1sb3ctcHJpb3JpdHknKSB7XG4gICAgICB0b2RvSXRlbXNBcnJheS5zb3J0KCh0b2RvSXRlbTEsIHRvZG9JdGVtMikgPT4ge1xuICAgICAgICBpZiAoKHRvZG9JdGVtMS5wcmlvcml0eSA9PT0gJ2xvdycgJiYgKHRvZG9JdGVtMi5wcmlvcml0eSA9PT0gJ21lZCcgfHwgdG9kb0l0ZW0yLnByaW9yaXR5ID09PSAnaGlnaCcpKSB8fFxuICAgICAgICAgICAgKHRvZG9JdGVtMS5wcmlvcml0eSA9PT0gJ21lZCcgJiYgdG9kb0l0ZW0yLnByaW9yaXR5ID09PSAnaGlnaCcpKSB7XG4gICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgIH0gZWxzZSBpZiAodG9kb0l0ZW0xLnByaW9yaXR5ID09PSB0b2RvSXRlbTIucHJpb3JpdHkpIHtcbiAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgfSBlbHNlIGlmICgodG9kb0l0ZW0xLnByaW9yaXR5ID09PSAnaGlnaCcgJiYgKHRvZG9JdGVtMi5wcmlvcml0eSA9PT0gJ2xvdycgfHwgdG9kb0l0ZW0yLnByaW9yaXR5ID09PSAnbWVkJykpIHx8XG4gICAgICAgICh0b2RvSXRlbTEucHJpb3JpdHkgPT09ICdtZWQnICYmIHRvZG9JdGVtMi5wcmlvcml0eSA9PT0gJ2xvdycpKSB7XG4gICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKHRvZG9Tb3J0U3RyID09PSAnY3JlYXRpb24tZGF0ZS1yZWNlbnQnKSB7XG4gICAgICB0b2RvSXRlbXNBcnJheS5zb3J0KCh0b2RvSXRlbTEsIHRvZG9JdGVtMikgPT4gY29tcGFyZURlc2ModG9kb0l0ZW0xLmNyZWF0aW9uRGF0ZSwgdG9kb0l0ZW0yLmNyZWF0aW9uRGF0ZSkpO1xuICAgIH0gZWxzZSBpZiAodG9kb1NvcnRTdHIgPT09ICdjcmVhdGlvbi1kYXRlLW9sZCcpIHtcbiAgICAgIHRvZG9JdGVtc0FycmF5LnNvcnQoKHRvZG9JdGVtMSwgdG9kb0l0ZW0yKSA9PiBjb21wYXJlQXNjKHRvZG9JdGVtMS5jcmVhdGlvbkRhdGUsIHRvZG9JdGVtMi5jcmVhdGlvbkRhdGUpKTtcbiAgICB9IGVsc2UgaWYgKHRvZG9Tb3J0U3RyID09PSAnZHVlLWRhdGUtc29vbmVzdCcpIHtcbiAgICAgIHRvZG9JdGVtc0FycmF5LnNvcnQoKHRvZG9JdGVtMSwgdG9kb0l0ZW0yKSA9PiBjb21wYXJlQXNjKHRvZG9JdGVtMS5kdWVEYXRlLCB0b2RvSXRlbTIuZHVlRGF0ZSkpO1xuICAgIH0gZWxzZSBpZiAodG9kb1NvcnRTdHIgPT09ICdkdWUtZGF0ZS1sYXRlc3QnKSB7XG4gICAgICB0b2RvSXRlbXNBcnJheS5zb3J0KCh0b2RvSXRlbTEsIHRvZG9JdGVtMikgPT4gY29tcGFyZURlc2ModG9kb0l0ZW0xLmR1ZURhdGUsIHRvZG9JdGVtMi5kdWVEYXRlKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRvZG9JdGVtc0FycmF5O1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgY3JlYXRlUHJvamVjdCxcbiAgICBkZWxldGVQcm9qZWN0LFxuICAgIGdldFByb2plY3RzLFxuICAgIGNyZWF0ZVRvZG8sXG4gICAgZGVsZXRlVG9kbyxcbiAgICBtb3ZlVG9kbyxcbiAgICBnZXRUb2RvcyxcbiAgfTtcbn0pKCk7XG5cbkluZm9ybWF0aW9uSXRlbU1hbmFnZXIuY3JlYXRlUHJvamVjdChuZXcgUHJvamVjdEl0ZW0oe3RpdGxlOid3YXNoIGRpc2hlcycsIGRlc2NyaXB0aW9uOidkbyBpdCBmYXN0J30pKTtcbkluZm9ybWF0aW9uSXRlbU1hbmFnZXIuY3JlYXRlUHJvamVjdChuZXcgUHJvamVjdEl0ZW0oe3RpdGxlOidtb3ZlIHRvIG1lJ30pKTtcbmxldCB0b2RvT2JqID0gbmV3IFRvZG9JdGVtKHt0aXRsZTonZWF0IGNyYXAnLCBkdWVEYXRlOicyMDIyLTEwLTEwVDAwOjAwJywgcHJpb3JpdHk6ICdtZWQnfSk7XG50b2RvT2JqLmNyZWF0aW9uRGF0ZSA9IG5ldyBEYXRlKDE5MDAsIDEsIDEpO1xubGV0IHRvZG9PYmoxID0gbmV3IFRvZG9JdGVtKHt0aXRsZTonZWF0IGNyYXAxJywgZHVlRGF0ZTonMjAyMi0xMC0wN1QwMDowMCcsIHByaW9yaXR5OiAnaGlnaCd9KTtcbnRvZG9PYmoxLmNyZWF0aW9uRGF0ZSA9IG5ldyBEYXRlKDE5NTAsIDEsIDEpO1xubGV0IHRvZG9PYmoyID0gbmV3IFRvZG9JdGVtKHt0aXRsZTonZWF0IGNyYXAyJywgZHVlRGF0ZTonMjAyMi0xMC0wMlQwMDowMCcsfSk7XG50b2RvT2JqMi5jcmVhdGlvbkRhdGUgPSBuZXcgRGF0ZSgyMDE5LCAxLCAxKTtcbkluZm9ybWF0aW9uSXRlbU1hbmFnZXIuY3JlYXRlVG9kbygncHJvajAnLCB0b2RvT2JqKTtcbkluZm9ybWF0aW9uSXRlbU1hbmFnZXIuY3JlYXRlVG9kbygncHJvajAnLCB0b2RvT2JqMSk7XG5JbmZvcm1hdGlvbkl0ZW1NYW5hZ2VyLmNyZWF0ZVRvZG8oJ3Byb2owJywgdG9kb09iajIpO1xuSW5mb3JtYXRpb25JdGVtTWFuYWdlci5tb3ZlVG9kbygndG9kbzAnLCAncHJvajEnKTtcbmNvbnNvbGUubG9nKEluZm9ybWF0aW9uSXRlbU1hbmFnZXIuZ2V0UHJvamVjdHMoKVswXS5kZXNjcmlwdGlvbik7XG5cbmZvciAobGV0IHRvZG8gb2YgSW5mb3JtYXRpb25JdGVtTWFuYWdlci5nZXRUb2RvcygnYWxsJywgJ2R1ZS1kYXRlLWxhdGVzdCcpKSB7XG4gIGNvbnNvbGUubG9nKHRvZG8uZHVlRGF0ZSk7XG59IiwiLy8gY29uc3QgVG9kb0l0ZW0gPSAodGl0bGUpID0+IHtcbi8vICAgY29uc3QgZ2V0VGl0bGUgPSAoKSA9PiB7XG4vLyAgICAgcmV0dXJuIHRpdGxlO1xuLy8gICB9O1xuLy8gICBjb25zdCBzZXRUaXRsZSA9IChuZXdUaXRsZSkgPT4ge1xuLy8gICAgIHRpdGxlID0gbmV3VGl0bGU7XG4vLyAgIH07XG5cbi8vICAgcmV0dXJuIHtcbi8vICAgICBnZXRUaXRsZSxcbi8vICAgICBzZXRUaXRsZSxcbi8vICAgfTtcbi8vIH1cblxuLy8gbGV0IHRvZG9JdGVtID0gVG9kb0l0ZW0oJ0VhdCBjYWtlJyk7XG4vLyAvLyB0b2RvSXRlbS5zZXRUaXRsZSgnd2FzaCBjbG90aGVzJyk7XG4vLyAvLyB0b2RvSXRlbS50aXRsZSA9ICdoYW1idXJnZXInO1xuLy8gY29uc29sZS5sb2codG9kb0l0ZW0uZ2V0VGl0bGUoKSk7XG4vLyB0b2RvSXRlbS5zZXRUaXRsZSgneXVtbScpO1xuLy8gY29uc29sZS5sb2codG9kb0l0ZW0uZ2V0VGl0bGUoKSk7XG5cbi8qXG4gIFRoZSBmb2xsb3dpbmcgd2FzIGNob3NlbiBhcyB0aGUgbW9zdCBzdWNjaW5jdCB5ZXQgdW5kZXJzdGFuZGFibGVcbiAgICBhbmQgcHJhY3RpY2FsIHNvbHV0aW9uIHRvIG9yZ2FuaXppbmcgdGhlIG9iamVjdHMuXG4qL1xuXG4vLyBPYmplY3Qgc3RvcmluZyBhbGwgdGhlIG1ldGhvZHMgc2hhcmVkIGJ5IHRvZG9JdGVtIGFuZCBwcm9qZWN0SXRlbVxuY29uc3QgaW5mb0l0ZW1NZXRob2RzID0ge1xuICBnZXQgdGl0bGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RpdGxlO1xuICB9LFxuICBzZXQgdGl0bGUobmV3VGl0bGUpIHtcbiAgICB0aGlzLl90aXRsZSA9IG5ld1RpdGxlO1xuICB9LFxuICBnZXQgZGVzY3JpcHRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX2Rlc2NyaXB0aW9uO1xuICB9LFxuICBzZXQgZGVzY3JpcHRpb24obmV3RGVzY3JpcHRpb24pIHtcbiAgICB0aGlzLl9kZXNjcmlwdGlvbiA9IG5ld0Rlc2NyaXB0aW9uO1xuICB9LFxuICBnZXQgZHVlRGF0ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fZHVlRGF0ZTtcbiAgfSxcbiAgc2V0IGR1ZURhdGUobmV3RHVlRGF0ZSkge1xuICAgIHRoaXMuX2R1ZURhdGUgPSBuZXdEdWVEYXRlO1xuICB9LFxuICBnZXQgcHJpb3JpdHkoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3ByaW9yaXR5O1xuICB9LFxuICBzZXQgcHJpb3JpdHkobmV3UHJpb3JpdHkpIHtcbiAgICB0aGlzLl9wcmlvcml0eSA9IG5ld1ByaW9yaXR5O1xuICB9LFxuICBnZXQgbm90ZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuX25vdGVzO1xuICB9LFxuICBzZXQgbm90ZXMobmV3Tm90ZXMpIHtcbiAgICB0aGlzLl9ub3RlcyA9IG5ld05vdGVzO1xuICB9LFxuICBnZXQgY29tcGxldGVkKCkge1xuICAgIHJldHVybiB0aGlzLl9jb21wbGV0ZWQ7XG4gIH0sXG4gIHNldCBjb21wbGV0ZWQobmV3Q29tcGxldGVkKSB7XG4gICAgdGhpcy5fY29tcGxldGVkID0gbmV3Q29tcGxldGVkO1xuICB9LFxuICBnZXQgY3JlYXRpb25EYXRlKCkge1xuICAgIHJldHVybiB0aGlzLl9jcmVhdGlvbkRhdGU7XG4gIH0sXG4gIHNldCBjcmVhdGlvbkRhdGUobmV3Q3JlYXRpb25EYXRlKSB7XG4gICAgdGhpcy5fY3JlYXRpb25EYXRlID0gbmV3Q3JlYXRpb25EYXRlO1xuICB9LFxufVxuXG4vLyBUb2RvSXRlbSBjb25zdHJ1Y3RvclxuZnVuY3Rpb24gVG9kb0l0ZW0oe3RpdGxlLCBkZXNjcmlwdGlvbiA9ICcnLCBkdWVEYXRlID0gJycsIHByaW9yaXR5ID0gJ2xvdycsIG5vdGVzID0gJycsIGNvbXBsZXRlZCA9IGZhbHNlfSA9IHt9KSB7XG4gIHRoaXMuX3RpdGxlID0gdGl0bGU7XG4gIHRoaXMuX2Rlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gIHRoaXMuX2R1ZURhdGUgPSBuZXcgRGF0ZShkdWVEYXRlKTtcbiAgdGhpcy5fcHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgdGhpcy5fbm90ZXMgPSBub3RlcztcbiAgdGhpcy5fY29tcGxldGVkID0gY29tcGxldGVkO1xuICB0aGlzLl9jcmVhdGlvbkRhdGUgPSBuZXcgRGF0ZSgpO1xuXG4gIHRoaXMuX3RvZG9JRCA9ICcnO1xufVxuLy8gU2V0IFRvZG9JdGVtJ3MgcHJvdG90eXBlIHRvIGJlIHRoZSBvYmplY3Qgd2l0aCBhbGwgdGhlIG1ldGhvZHMgK1xuLy8gICBzb21lIGFkZGl0aW9uYWwgbWV0aG9kcyB0byBkZWFsIHdpdGggdG9kb0lEXG5Ub2RvSXRlbS5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKGluZm9JdGVtTWV0aG9kcywge1xuICB0b2RvSUQ6IHtcbiAgICBjb25maWd1cmFibGU6IGZhbHNlLFxuICAgIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLl90b2RvSUQ7XG4gICAgfSxcbiAgICBzZXQobmV3VG9kb0lEKSB7XG4gICAgICB0aGlzLl90b2RvSUQgPSBuZXdUb2RvSUQ7XG4gICAgfSwgXG4gIH0sXG59KTtcblxuLy8gUHJvamVjdEl0ZW0gY29uc3RydWN0b3JcbmZ1bmN0aW9uIFByb2plY3RJdGVtKHt0aXRsZSwgZGVzY3JpcHRpb24gPSAnJywgZHVlRGF0ZSA9ICcnLCBwcmlvcml0eSA9ICdsb3cnLCBub3RlcyA9ICcnLCBjb21wbGV0ZWQgPSBmYWxzZX0gPSB7fSkge1xuICB0aGlzLl90aXRsZSA9IHRpdGxlO1xuICB0aGlzLl9kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICB0aGlzLl9kdWVEYXRlID0gbmV3IERhdGUoZHVlRGF0ZSk7XG4gIHRoaXMuX3ByaW9yaXR5ID0gcHJpb3JpdHk7XG4gIHRoaXMuX25vdGVzID0gbm90ZXM7XG4gIHRoaXMuX2NvbXBsZXRlZCA9IGNvbXBsZXRlZDtcbiAgdGhpcy5fY3JlYXRpb25EYXRlID0gbmV3IERhdGUoKTtcblxuICB0aGlzLl9wcm9qSUQgPSAnJztcbn1cbi8vIFNldCBQcm9qZWN0SXRlbSdzIHByb3RvdHlwZSB0byBiZSB0aGUgb2JqZWN0IHdpdGggYWxsIHRoZSBtZXRob2RzICtcbi8vICAgc29tZSBhZGRpdGlvbmFsIG1ldGhvZHMgdG8gZGVhbCB3aXRoIHByb2pJRFxuUHJvamVjdEl0ZW0ucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShpbmZvSXRlbU1ldGhvZHMsIHtcbiAgcHJvaklEOiB7XG4gICAgY29uZmlndXJhYmxlOiBmYWxzZSxcbiAgICBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fcHJvaklEO1xuICAgIH0sXG4gICAgc2V0KG5ld1Byb2pJRCkge1xuICAgICAgdGhpcy5fcHJvaklEID0gbmV3UHJvaklEO1xuICAgIH0sIFxuICB9LFxufSk7XG5cbi8vIGxldCB0b2RvSXRlbU9iaiA9IG5ldyBUb2RvSXRlbSgneW8nLCAneW8gbWFtYScpO1xuLy8gY29uc29sZS5sb2codG9kb0l0ZW1PYmoudGl0bGUpO1xuXG4vLyBsZXQgcHJvakl0ZW1PYmogPSBuZXcgUHJvamVjdEl0ZW0oJ3Njb29ieScsICdkb28nKTtcbi8vIGNvbnNvbGUubG9nKHByb2pJdGVtT2JqLnRpdGxlKTtcbi8vIGNvbnNvbGUubG9nKHByb2pJdGVtT2JqLmRlc2NyaXB0aW9uKTtcbi8vIGNvbnNvbGUubG9nKHByb2pJdGVtT2JqLnByb2pJRCk7XG5leHBvcnQge1RvZG9JdGVtLCBQcm9qZWN0SXRlbX07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IHsgSW5mb3JtYXRpb25JdGVtTWFuYWdlciB9IGZyb20gJy4vaW5mb3JtYXRpb25pdGVtbWFuYWdlci5qcydcbmltcG9ydCBHaXRIdWJMb2dvIGZyb20gJy4vaW1hZ2VzL0dpdEh1Yi1NYXJrLTMycHgucG5nJztcbmltcG9ydCBDaGVja0xpc3RMb2dvIGZyb20gJy4vaWNvbnMvY2xpcGJvYXJkLWxpc3Quc3ZnJztcbmltcG9ydCBBZGRUb2RvSWNvbiBmcm9tICcuL2ljb25zL3BsdXMuc3ZnJztcblxuY29uc29sZS5sb2coJ3RoaXMgd29ya3MhJyk7XG5jb25zb2xlLmxvZygnZXBpYycpO1xuXG4vLyBTZXR1cCBHaXRIdWIgbG9nb1xuY29uc3QgZ2l0SHViTG9nb0VsZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbWcuZ2l0aHViLWxvZ28nKTtcbmdpdEh1YkxvZ29FbGVtLnNldEF0dHJpYnV0ZSgnc3JjJywgR2l0SHViTG9nbyk7XG5cbi8vIFNldHVwIGljb25zXG5jb25zdCBjaGVja0xpc3RMb2dvRWxlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2ltZy5oZWFkZXItbG9nbycpO1xuY2hlY2tMaXN0TG9nb0VsZW0uc2V0QXR0cmlidXRlKCdzcmMnLCBDaGVja0xpc3RMb2dvKTtcbmNvbnN0IGFkZFRvZG9FbGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC10b2RvLWJ1dHRvbi1pY29uJyk7XG5hZGRUb2RvRWxlbS5zZXRBdHRyaWJ1dGUoJ3NyYycsIEFkZFRvZG9JY29uKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=