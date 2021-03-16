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

/***/ "./src/asteroid.js":
/*!*************************!*\
  !*** ./src/asteroid.js ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\");\r\nconst Util = __webpack_require__(/*! ./util.js */ \"./src/util.js\");\r\n\r\n\r\nfunction Asteroid(options) {\r\n  // this.pos = options.pos;\r\n  // this.x = options.pos[0];\r\n  // this.y = options.pos[1];\r\n  \r\n  options.pos = options.pos;\r\n  options.color = '#6969f4';\r\n  options.radius = 7;\r\n  options.vel = Util.randomVec(5);\r\n  MovingObject.call(this, options)\r\n  \r\n}\r\n\r\nUtil.inherits(Asteroid, MovingObject);\r\n\r\n// new Asteroid({ pos: [30, 30] });\r\n\r\nmodule.exports = Asteroid;\n\n//# sourceURL=webpack:///./src/asteroid.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("console.log(\"Webpack is working\");\r\nconst MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\");\r\nconst Asteroid = __webpack_require__(/*! ./asteroid.js */ \"./src/asteroid.js\")\r\n\r\ndocument.addEventListener(\"DOMContentLoaded\", () => {\r\n  const canvas = document.getElementById(\"game-canvas\");\r\n  const context = canvas.getContext(\"2d\");\r\n  // context.fillStyle = \"red\"; \r\n  // context.fillRect(10,10,40,30); \r\n  console.log(\"DOM fully loaded and parsed\");\r\n  \r\n  const mo = new MovingObject({\r\n    pos: [30, 30],\r\n    vel: [10, 10],\r\n    radius: 5,\r\n    color: \"#00FF00\"\r\n  });\r\n  \r\n  const ast = new Asteroid({ pos: [30, 30] });\r\n  \r\n  window.mo = mo;\r\n  window.ast = ast;\r\n  window.MovingObject = MovingObject;\r\n  window.Asteroid = Asteroid;\r\n  window.context = context;\r\n});\r\n\r\n// const canvas = document.getElementById('bird-game');\r\n// const game = new FlappyBird(canvas);\r\n// game.restart();\r\n// canvas.addEventListener(\"mousedown\", game.click.bind(game));\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/moving_object.js":
/*!******************************!*\
  !*** ./src/moving_object.js ***!
  \******************************/
/***/ ((module) => {

eval("// (pos, vel, radius, color)\nfunction MovingObject(options) {\n    // debugger/\n    this.pos = options.pos;\n    this.x = options.pos[0];\n    this.y = options.pos[1];\n    this.vel = options.vel;\n    this.xVel = options.vel[0];\n    this.yVel = options.vel[1];\n    this.radius = options.radius;\n    this.color = options.color;\n}\n\nMovingObject.prototype.draw = function (ctx) {\n  ctx.fillStyle = this.color\n  ctx.beginPath()\n\n  ctx.arc(\n    this.x,\n    this.y,\n    this.radius,\n    0,\n    2 * Math.PI,\n    false\n  )\n  ctx.fill()\n}\n\nMovingObject.prototype.move = function () {\n  this.x += this.xVel\n  this.y += this.yVel\n}\n// const movingObjectTest = new MovingObject([0,0], [1,1], 5, 'red') \n\nmodule.exports = MovingObject;\n\n//# sourceURL=webpack:///./src/moving_object.js?");

/***/ }),

/***/ "./src/util.js":
/*!*********************!*\
  !*** ./src/util.js ***!
  \*********************/
/***/ ((module) => {

eval("const Util = {\r\n  inherits(childClass, parentClass) {\r\n    function Surrogate() {}\r\n    Surrogate.prototype = parentClass.prototype\r\n    childClass.prototype = new Surrogate()\r\n    childClass.prototype.constructor = childClass\r\n  },\r\n  randomVec(length) {\r\n    const deg = 2 * Math.PI * Math.random();\r\n    return Util.scale([Math.sin(deg), Math.cos(deg)], length);\r\n  },\r\n  // Scale the length of a vector by the given amount.\r\n  scale(vec, m) {\r\n    return [vec[0] * m, vec[1] * m];\r\n  }\r\n};\r\n\r\nmodule.exports = Util;\n\n//# sourceURL=webpack:///./src/util.js?");

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