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

/***/ "./src/Views/credits.js":
/*!******************************!*\
  !*** ./src/Views/credits.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {\n    return `\n    <div class=\"app__content-page\">\n        <h2>Credits</h2>\n        <p>Art Direction: Eleni Kashis<p>\n        <p>Development: Andrew Caldwell</p>\n    </div>\n    `;\n}\n\n//# sourceURL=webpack://dysongame/./src/Views/credits.js?");

/***/ }),

/***/ "./src/Views/end.js":
/*!**************************!*\
  !*** ./src/Views/end.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {\n    return `\n    <div class=\"app__content-page\">\n        <h2>GAME OVER</h2>\n    </div>\n    `;\n}\n\n//# sourceURL=webpack://dysongame/./src/Views/end.js?");

/***/ }),

/***/ "./src/Views/start.js":
/*!****************************!*\
  !*** ./src/Views/start.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {\n\n    return `\n        <div class=\"app__canvas\">\n            <div class=\"app__world\">\n                <div class=\"collider earth\"><img src=\"./assets/world.png\" width=\"300\" height=\"300\" /></div>\n                <!-- your vaccuum swap div with 8bit when eleni has a chance -->\n                <div class=\"vaccuum collider hero\" style=\"bottom: 10%; right: 50%; transition: all .2s\">\n                    <div></div>\n                </div>\n                </div>\n        </div>\n    `;\n\n    \n\n}\n\n//# sourceURL=webpack://dysongame/./src/Views/start.js?");

/***/ }),

/***/ "./src/engine/colliders.js":
/*!*********************************!*\
  !*** ./src/engine/colliders.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Collider)\n/* harmony export */ });\n/* harmony import */ var _gameevents__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameevents */ \"./src/engine/gameevents.js\");\n\n\nclass Collider{\n    static collider_list = []\n\n    constructor(DOM_Element){\n        this.collider = DOM_Element\n        this.constructor.collider_list.push(this.collider)\n    }\n\n    static log(){\n       // console.log(this.collider_list)\n    }\n    \n    static watchCollision = (gameInstance) => {\n        setInterval(()=> this.log(),2000)\n        \n        for(let i = 0; i < this.collider_list.length; i++){\n            for(let x = i + 1; x < this.collider_list.length; x++){\n                // check colliders in here\n                let i_x = [this.collider_list[i].getBoundingClientRect().left, this.collider_list[i].getBoundingClientRect().right]\n                let i_y = [this.collider_list[i].getBoundingClientRect().top, this.collider_list[i].getBoundingClientRect().bottom]\n                let x_x = [this.collider_list[x].getBoundingClientRect().left, this.collider_list[x].getBoundingClientRect().right]\n                let x_y = [this.collider_list[x].getBoundingClientRect().top, this.collider_list[x].getBoundingClientRect().bottom]\n\n                \n                if((i_x[0] < x_x[0]) && i_x[1] > x_x[1]){\n                    if(i_y[0] < x_y[0] && i_y[1] > x_y[1]){\n                        // collision logic here\n\n                        if(this.collider_list[x].classList.contains('enemy') && this.collider_list[i].classList.contains('hero')){\n                            this.collider_list[x].remove()\n                            this.collider_list.splice(x,1)   \n                        }\n\n                        if(this.collider_list[x].classList.contains('enemy') && this.collider_list[i].classList.contains('earth')){\n                            //dust touches earth\n                            this.collider_list[x].remove()\n                            this.collider_list.splice(x,1)   \n                            gameInstance.removeLife()\n                        }\n\n                        \n                        \n                        if(!document.querySelector('.vaccuum').classList.contains('red')){\n                            document.querySelector('.vaccuum').classList.add('red');\n                        }\n\n                    }\n                    else{\n                    }\n                }\n                else{\n                }\n\n\n            }\n        }\n        \n    }\n}\n\n\n//# sourceURL=webpack://dysongame/./src/engine/colliders.js?");

/***/ }),

/***/ "./src/engine/gameevents.js":
/*!**********************************!*\
  !*** ./src/engine/gameevents.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _colliders__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./colliders */ \"./src/engine/colliders.js\");\n/* harmony import */ var _modules_scenedelegate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modules/scenedelegate */ \"./src/modules/scenedelegate.js\");\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (class {\n    constructor(numberEnemies, lives, score, round) {\n        this.numberEnemies = numberEnemies\n        this.lives = lives\n        this.score = score\n    }\n\n    removeLife = () => {\n        this.lives = this.lives - 1\n        document.querySelectorAll('.nes-icon')[this.lives].classList.add('is-empty')\n        if (this.lives === 0) {\n            (0,_modules_scenedelegate__WEBPACK_IMPORTED_MODULE_1__.default)(\"End\")\n        }\n    }\n\n\n\n    getRandomInt = (min, max) => {\n        return Math.floor(Math.random() * (max - min + 1)) + min;\n    }\n\n    loadStats = () => {\n        let root_lives_elem = document.createElement('div')\n        root_lives_elem.classList.add('lives')\n        root_lives_elem.style.cssText = `display: flex;`;\n        for (let i = 0; i < this.lives; i++) {\n            let start_wrapper = document.createElement('div')\n            start_wrapper.classList.add('start-wrapper')\n            let start = document.createElement('i')\n            start.classList\n                .add('nes-icon', 'is-large', 'heart')\n\n            start_wrapper.appendChild(start)\n            root_lives_elem.appendChild(start_wrapper)\n        }\n\n        document.body.appendChild(root_lives_elem)\n\n    }\n\n\n\n\n    spawnEnemies = () => {\n\n        this.numberEnemies = this.numberEnemies\n        for (let i = 0; i < this.numberEnemies; i++) {\n            setTimeout(() => {\n\n                let enemy = document.createElement('div');\n                let enemy_id = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5);\n                enemy.classList.add('collider');\n                enemy.classList.add('enemy');\n                enemy.classList.add(enemy_id)\n                let fromTop, fromLeft, y_spawn, x_spawn;\n                Math.round(Math.random()) === 1 ? fromTop = true : fromTop = false\n                Math.round(Math.random()) === 1 ? fromLeft = true : fromLeft = false\n\n                if (fromTop) {\n                    y_spawn = 0\n                    x_spawn = this.getRandomInt(0, window.innerWidth)\n                }\n                else {\n                    x_spawn = 0\n                    y_spawn = this.getRandomInt(0, window.innerHeight)\n                }\n\n                enemy.style.cssText = `bottom: ${y_spawn}px; right: ${x_spawn}px;`;\n                document.querySelector('.app__world').appendChild(enemy)\n                new _colliders__WEBPACK_IMPORTED_MODULE_0__.default(document.querySelector(`.${enemy_id}`))\n                //interval code start\n                let interval = setInterval(() => {\n                    let elem = document.querySelector(`.${enemy_id}`)\n                    if (elem == null) {\n                        clearInterval(interval)\n                        return\n                    }\n                    let curr_bottom = elem.style.bottom\n                    let curr_right = elem.style.right\n                    let new_right, new_bottom\n                    if (fromTop) {\n                        new_bottom = String(parseInt(curr_bottom.replace(\"px\", \"\")) + 3)\n\n                        elem.style.cssText = `bottom: ${new_bottom}px; right: ${curr_right};`;\n\n                    }\n                    else {\n                        new_right = String(parseInt(curr_right.replace(\"px\", \"\")) + 3)\n                        elem.style.cssText = `bottom: ${curr_bottom}; right: ${new_right}px;`;\n                    }\n                }, 50)\n\n\n                //end random interval here\n            }, Math.random() * 1000 * 50)\n        }\n    }\n});\n\n//# sourceURL=webpack://dysongame/./src/engine/gameevents.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_initgame__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/initgame */ \"./src/modules/initgame.js\");\n\n\n(0,_modules_initgame__WEBPACK_IMPORTED_MODULE_0__.default)()\n\n\n\n\n\n//# sourceURL=webpack://dysongame/./src/index.js?");

/***/ }),

/***/ "./src/modules/initgame.js":
/*!*********************************!*\
  !*** ./src/modules/initgame.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _listeners__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./listeners */ \"./src/modules/listeners.js\");\n\n\n\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {\n    let root = document.querySelector('#app')\n    let canvas = document.createElement('div')\n    canvas.classList.add('app__background')\n    root.appendChild(canvas)\n    //delay then display start screen\n\n    document.querySelector('.app__background').innerHTML = `\n    <div>\n        <div class=\"app__custom-fadein\">\n        \n        <form class=\"app__custom-form\">\n            <label>\n                <input type=\"radio\" class=\"nes-radio is-dark\" name=\"answer-dark\" checked />\n                <span>Start</span>\n            </label>\n            <br>\n            <label>\n                <input type=\"radio\" class=\"nes-radio is-dark\" name=\"answer-dark\" />\n                <span>Credits</span>\n            </label>\n        <form>\n            </div>\n        </div>\n        `;\n    (0,_listeners__WEBPACK_IMPORTED_MODULE_0__.default)()\n    \n\n\n}\n\n\n//# sourceURL=webpack://dysongame/./src/modules/initgame.js?");

/***/ }),

/***/ "./src/modules/input.js":
/*!******************************!*\
  !*** ./src/modules/input.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Right\": () => (/* binding */ Right),\n/* harmony export */   \"Left\": () => (/* binding */ Left),\n/* harmony export */   \"Up\": () => (/* binding */ Up),\n/* harmony export */   \"Down\": () => (/* binding */ Down),\n/* harmony export */   \"StartGame\": () => (/* binding */ StartGame)\n/* harmony export */ });\nfunction Right() {\n    let sprite = document.querySelector('.hero');\n    let currHeight_pre = sprite.style.right\n    let currHeight = parseInt(currHeight_pre.replace(\"%\",\"\"))\n    let updatedHeight = (currHeight - 3) + \"%\";\n    document.querySelector('.hero').style.right = updatedHeight\n    document.querySelector('.hero').classList.add('flip-right')\n }\n\nfunction Left() { \n    let sprite = document.querySelector('.hero');\n    let currHeight_pre = sprite.style.right\n    let currHeight = parseInt(currHeight_pre.replace(\"%\",\"\"))\n    let updatedHeight = (currHeight + 3) + \"%\";\n    document.querySelector('.hero').style.right = updatedHeight\n    document.querySelector('.hero').classList.remove('flip-right')\n}\n\nfunction Up() {\n    let sprite = document.querySelector('.hero');\n    let currHeight_pre = sprite.style.bottom\n    let currHeight = parseInt(currHeight_pre.replace(\"%\",\"\"))\n    let updatedHeight = (currHeight + 3) + \"%\";\n    document.querySelector('.hero').style.bottom = updatedHeight\n }\n\nfunction Down() {\n    let sprite = document.querySelector('.hero');\n    let currHeight_pre = sprite.style.bottom\n    let currHeight = parseInt(currHeight_pre.replace(\"%\",\"\"))\n    let updatedHeight = (currHeight - 3) + \"%\";\n    document.querySelector('.hero').style.bottom = updatedHeight\n}\n\nfunction StartGame(){\n    \n}\n\n//# sourceURL=webpack://dysongame/./src/modules/input.js?");

/***/ }),

/***/ "./src/modules/listeners.js":
/*!**********************************!*\
  !*** ./src/modules/listeners.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _input__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./input */ \"./src/modules/input.js\");\n/* harmony import */ var _scenedelegate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scenedelegate */ \"./src/modules/scenedelegate.js\");\n\n\n\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {\n\n\n// listen for keyboard events\n    document.addEventListener('keydown', (e) => {\n        \n        if (e.code === \"ArrowUp\" || e.code === \"KeyW\")\n            (0,_input__WEBPACK_IMPORTED_MODULE_0__.Up)()\n        if (e.code === \"ArrowRight\" || e.code === \"KeyD\")\n            (0,_input__WEBPACK_IMPORTED_MODULE_0__.Right)()\n        if (e.code === \"ArrowLeft\" || e.code === \"KeyA\")\n            (0,_input__WEBPACK_IMPORTED_MODULE_0__.Left)()\n        if (e.code === \"ArrowDown\" || e.code === \"KeyS\")\n            (0,_input__WEBPACK_IMPORTED_MODULE_0__.Down)()\n        \n    });\n\n\n   document\n   .querySelector('.app__custom-form')\n   .querySelectorAll('label')\n   .forEach(item => {\n        item.addEventListener('click', (e) => {\n            let view = e.currentTarget.querySelector('span').innerHTML\n            ;(0,_scenedelegate__WEBPACK_IMPORTED_MODULE_1__.default)(view)\n            e.preventDefault()\n        })\n   })\n\n}\n\n\n\n//# sourceURL=webpack://dysongame/./src/modules/listeners.js?");

/***/ }),

/***/ "./src/modules/scenedelegate.js":
/*!**************************************!*\
  !*** ./src/modules/scenedelegate.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Views_start__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Views/start */ \"./src/Views/start.js\");\n/* harmony import */ var _Views_credits__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Views/credits */ \"./src/Views/credits.js\");\n/* harmony import */ var _Views_end__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Views/end */ \"./src/Views/end.js\");\n/* harmony import */ var _startgamefunctions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./startgamefunctions */ \"./src/modules/startgamefunctions.js\");\n\n\n\n\n\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(screen) {\n    if (screen === \"Start\") {\n        document\n        .querySelector('.app__background')\n        .innerHTML = (0,_Views_start__WEBPACK_IMPORTED_MODULE_0__.default)()\n        ;(0,_startgamefunctions__WEBPACK_IMPORTED_MODULE_3__.startColliderInit)()   \n    }\n    if(screen === \"End\"){\n        document.querySelector('.app__background')\n        .innerHTML = (0,_Views_end__WEBPACK_IMPORTED_MODULE_2__.default)()\n    }\n    if (screen === \"Credits\") {\n        document\n        .querySelector('.app__custom-fadein')\n        .innerHTML = (0,_Views_credits__WEBPACK_IMPORTED_MODULE_1__.default)()\n    }\n}\n\n//# sourceURL=webpack://dysongame/./src/modules/scenedelegate.js?");

/***/ }),

/***/ "./src/modules/startgamefunctions.js":
/*!*******************************************!*\
  !*** ./src/modules/startgamefunctions.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"startColliderInit\": () => (/* binding */ startColliderInit)\n/* harmony export */ });\n/* harmony import */ var _engine_colliders__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../engine/colliders */ \"./src/engine/colliders.js\");\n/* harmony import */ var _engine_gameevents__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../engine/gameevents */ \"./src/engine/gameevents.js\");\n\n\n\nfunction startColliderInit(){\n    document.querySelectorAll('.collider')\n    .forEach(item => {\n        new _engine_colliders__WEBPACK_IMPORTED_MODULE_0__.default(item)\n    })\n\n    \n\n    let game = new _engine_gameevents__WEBPACK_IMPORTED_MODULE_1__.default(100,7,100,1)\n    game.loadStats()\n    game.spawnEnemies()\n\n    setInterval(()=> _engine_colliders__WEBPACK_IMPORTED_MODULE_0__.default.watchCollision(game) ,10)\n\n\n\n    \n\n}\n\n//# sourceURL=webpack://dysongame/./src/modules/startgamefunctions.js?");

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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;