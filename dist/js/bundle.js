/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/dna-converter.js":
/*!*********************************!*\
  !*** ./src/js/dna-converter.js ***!
  \*********************************/
/*! exports provided: convertToDNA, isInvalidDNA, convertToLanguage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"convertToDNA\", function() { return convertToDNA; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isInvalidDNA\", function() { return isInvalidDNA; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"convertToLanguage\", function() { return convertToLanguage; });\n/* harmony import */ var _string_converter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./string-converter */ \"./src/js/string-converter.js\");\n\n\nvar dnaHexValue = {'AA': '0', 'AT': '1', 'AC': '2', 'AG': '3',\n         'TA': '4', 'TT': '5', 'TC': '6', 'TG': '7',\n         'CA': '8', 'CT': '9', 'CC': 'a', 'CG': 'b',\n         'GA': 'c', 'GT': 'd', 'GC': 'e', 'GG': 'f'};\n\nfunction convertToDNA(text) {\n  var hex = Object(_string_converter__WEBPACK_IMPORTED_MODULE_0__[\"stringToHexString\"])(text);\n  var result = hex;\n  for (var dna in dnaHexValue) {\n    result = Object(_string_converter__WEBPACK_IMPORTED_MODULE_0__[\"stringReplaceAll\"])(result, dnaHexValue[dna], dna);\n  }\n  return result;\n}\n\nfunction isInvalidDNA(text) {\n  if (!text || text.length % 2 != 0) {\n    return true;\n  }\n  var result = text.match(/[ATCG]/g);\n  return result == null;\n}\n\nfunction convertToLanguage(text) {\n  var dnaArray = Object(_string_converter__WEBPACK_IMPORTED_MODULE_0__[\"splitStringInto\"])(text, 2);\n  var result = \"\"\n  for (var index in dnaArray) {\n    result = result + dnaHexValue[dnaArray[index]];\n  }\n  return Object(_string_converter__WEBPACK_IMPORTED_MODULE_0__[\"hexStringToString\"])(result);\n}\n\n\n//# sourceURL=webpack:///./src/js/dna-converter.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dna_converter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dna-converter */ \"./src/js/dna-converter.js\");\n\n\nnew Vue({\n  el: '#converter',\n  data: {\n    picked: '0',\n    originalText: '',\n    convertedText: ''\n  },\n  methods: {\n    convert: function () {\n      if (this.picked === '0') {\n        this.convertedText = Object(_dna_converter__WEBPACK_IMPORTED_MODULE_0__[\"convertToDNA\"])(this.originalText);\n      } else {\n        if (Object(_dna_converter__WEBPACK_IMPORTED_MODULE_0__[\"isInvalidDNA\"])(this.originalText)) {\n          this.convertedText = 'むり...';\n        } else {\n          this.convertedText = Object(_dna_converter__WEBPACK_IMPORTED_MODULE_0__[\"convertToLanguage\"])(this.originalText);\n        }\n      }\n    },\n    tweet: function () {\n      if (Object(_dna_converter__WEBPACK_IMPORTED_MODULE_0__[\"isInvalidDNA\"])(this.convertedText)) {\n        alert('むり...');\n        return;\n      }\n      var hashTag = '&hashtags=' + encodeURI('DNA変換');\n      location.href='https://twitter.com/intent/tweet?text=' + encodeURI(this.convertedText) + hashTag;\n    }\n  }\n})\n\n\n//# sourceURL=webpack:///./src/js/index.js?");

/***/ }),

/***/ "./src/js/string-converter.js":
/*!************************************!*\
  !*** ./src/js/string-converter.js ***!
  \************************************/
/*! exports provided: stringReplaceAll, splitStringInto, stringToHexString, hexStringToString */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"stringReplaceAll\", function() { return stringReplaceAll; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"splitStringInto\", function() { return splitStringInto; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"stringToHexString\", function() { return stringToHexString; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"hexStringToString\", function() { return hexStringToString; });\nfunction stringReplaceAll(text, target, replacement) {\n  var regexp = new RegExp(target, 'g');\n  return text.replace(regexp, replacement);\n}\n\nfunction splitStringInto(text, length) {\n  var result = [];\n  var index = 0;\n  while (index + length <= text.length) {\n    result.push(text.substring(index, index + length));\n    index = index + length;\n  }\n  return result;\n}\n\n// 文字列を16進文字列に変換\nfunction stringToHexString(text) {\n\tvar bytes = stringToBytes(text);\n\tvar hexString = bytesToHexString(bytes);\n\treturn hexString;\n}\n\n// 16進文字列を文字列に変換\nfunction hexStringToString(hexString) {\n\tvar bytes = hexStringToBytes(hexString);\n\tvar string = bytesToString(bytes);\n\treturn string;\n}\n\n// 文字列をバイト配列に変換\nfunction stringToBytes(text) {\n    var result = [];\n    if (text == null)\n        return result;\n    for (var i = 0; i < text.length; i++) {\n        var c = text.charCodeAt(i);\n        if (c <= 0x7f) {\n            result.push(c);\n        } else if (c <= 0x07ff) {\n            result.push(((c >> 6) & 0x1F) | 0xC0);\n            result.push((c & 0x3F) | 0x80);\n        } else {\n            result.push(((c >> 12) & 0x0F) | 0xE0);\n            result.push(((c >> 6) & 0x3F) | 0x80);\n            result.push((c & 0x3F) | 0x80);\n        }\n    }\n    return result;\n}\n\n// バイト値を16進文字列に変換\nfunction byteToHexString(byteNum) {\n\tvar digits = (byteNum).toString(16);\n  if (byteNum < 16) return '0' + digits;\n  return digits;\n}\n\n// バイト配列を16進文字列に変換\nfunction bytesToHexString(bytes) {\n\tvar\tresult = \"\";\n\tfor (var i = 0; i < bytes.length; i++) {\n\t\tresult += byteToHexString(bytes[i]);\n\t}\n\treturn result;\n}\n\n// 16進文字列をバイト値に変換\nfunction hexStringToByte(hexString) {\n\treturn parseInt(hexString, 16);\n}\n\n// バイト配列を16進文字列に変換\nfunction hexStringToBytes(hexString) {\n\tvar\tresult = [];\n\tfor (var i = 0; i < hexString.length; i+=2) {\n\t\tresult.push(hexStringToByte(hexString.substr(i,2)));\n\t}\n\treturn result;\n}\n\n// バイト配列を文字列に変換\nfunction bytesToString(bytes) {\n    if (bytes == null)\n        return null;\n    var result = \"\";\n    var i;\n    while (i = bytes.shift()) {\n        if (i <= 0x7f) {\n            result += String.fromCharCode(i);\n        } else if (i <= 0xdf) {\n            var c = ((i&0x1f)<<6);\n            c += bytes.shift()&0x3f;\n            result += String.fromCharCode(c);\n        } else if (i <= 0xe0) {\n            var c = ((bytes.shift()&0x1f)<<6)|0x0800;\n            c += bytes.shift()&0x3f;\n            result += String.fromCharCode(c);\n        } else {\n            var c = ((i&0x0f)<<12);\n            c += (bytes.shift()&0x3f)<<6;\n            c += bytes.shift() & 0x3f;\n            result += String.fromCharCode(c);\n        }\n    }\n    return result;\n}\n\n\n//# sourceURL=webpack:///./src/js/string-converter.js?");

/***/ })

/******/ });