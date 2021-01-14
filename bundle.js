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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ \"./src/index.css\");\n\nconst buttonsContainer = document.getElementById(\"buttons-container\");\nconst textRoot = document.getElementById(\"text-root\");\n\nconst shuffleLetters = () => {\n  let letters = String.fromCharCode(...[...Array(\"Я\".charCodeAt(0) - \"А\".charCodeAt(0) + 1).keys()].map(i => i + \"А\".charCodeAt(0))).split(\"\");\n  let result = [];\n\n  while (letters.length > 0) {\n    const letterNumber = Math.floor(Math.random() * letters.length);\n    result.push(letters[letterNumber]);\n    letters.splice(letterNumber, 1);\n  }\n\n  return result;\n};\n\nconst writeText = e => {\n  const letter = e.target.data;\n  const letterSpan = document.createElement(\"span\");\n  letterSpan.innerText = letter;\n  textRoot.append(letterSpan);\n};\n\nconst createLetterButton = letter => {\n  const _button = document.createElement(\"button\");\n\n  _button.data = letter;\n  _button.id = letter;\n  _button.className = \"letter-btn\";\n  _button.innerHTML = letter;\n  if (letter === \" \") _button.disabled = true;\n  _button.onclick = writeText;\n  buttonsContainer.append(_button);\n};\n\nconst placeButtons = () => {\n  buttonsContainer.innerHTML = \"\";\n  shuffleLetters().forEach((letter, i) => {\n    if (i === 28) buttonsContainer.append(document.createElement(\"br\"));\n    if (i === 0 || i === 4 || i === 28) createLetterButton(\" \");\n    if ([4, 10, 16, 22].includes(i)) buttonsContainer.append(document.createElement(\"br\"));\n    createLetterButton(letter);\n  });\n  createLetterButton(\" \");\n};\n\nconst placeShuffleButton = () => {\n  const _button = document.createElement(\"button\");\n\n  _button.innerHTML = \"Перемешать буквы\";\n  _button.onclick = placeButtons;\n  document.getElementById(\"controls\").append(_button);\n};\n\nconst placeClearButton = () => {\n  const _button = document.createElement(\"button\");\n\n  _button.innerHTML = \"Очистить текст\";\n\n  _button.onclick = () => textRoot.innerHTML = \"\";\n\n  document.getElementById(\"controls\").append(_button);\n};\n\nplaceButtons();\nplaceShuffleButton();\nplaceClearButton();\n\n//# sourceURL=webpack://random-letters/./src/index.js?");

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://random-letters/./src/index.css?");

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
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;