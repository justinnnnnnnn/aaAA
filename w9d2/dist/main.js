/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("console.log(\"Webpack is working\");\r\nconst MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\");\r\n\r\ndocument.addEventListener(\"DOMContentLoaded\", () => {\r\n  const canvas = document.getElementById(\"game-canvas\");\r\n  const canvas2d = canvas.getContext(\"2d\");\r\n  // canvas2d.fillStyle = \"red\"; \r\n  // canvas2d.fillRect(10,10,40,30); \r\n  console.log(\"DOM fully loaded and parsed\");\r\n  const mo = new MovingObject({\r\n    pos: [30, 30],\r\n    vel: [10, 10],\r\n    radius: 5,\r\n    color: \"#00FF00\"\r\n  });\r\n  window.mo = mo;\r\n  window.MovingObject = MovingObject;\r\n  window.canvas2d = canvas2d;\r\n});\r\n\r\n// const canvas = document.getElementById('bird-game');\r\n// const game = new FlappyBird(canvas);\r\n// game.restart();\r\n// canvas.addEventListener(\"mousedown\", game.click.bind(game));\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/moving_object.js":
/*!******************************!*\
  !*** ./src/moving_object.js ***!
  \******************************/
/***/ ((module) => {

eval("// (pos, vel, radius, color)\nfunction MovingObject(options) {\n    this.pos = options.pos;\n    this.x = options.pos[0];\n    this.y = options.pos[1];\n    this.vel = options.vel;\n    this.xVel = options.vel[0];\n    this.yVel = options.vel[1];\n    this.radius = options.radius;\n    this.color = options.color;\n}\n\nMovingObject.prototype.draw = function (ctx) {\n  ctx.fillStyle = this.color\n  ctx.beginPath()\n\n  ctx.arc(\n    this.x,\n    this.y,\n    this.radius,\n    0,\n    2 * Math.PI,\n    false\n  )\n  ctx.fill()\n}\n\nMovingObject.prototype.move = function () {\n  this.x += this.xVel\n  this.y += this.yVel\n}\n// const movingObjectTest = new MovingObject([0,0], [1,1], 5, 'red') \n\nmodule.exports = MovingObject;\n\n//# sourceURL=webpack:///./src/moving_object.js?");

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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;