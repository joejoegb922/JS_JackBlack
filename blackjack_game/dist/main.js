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

/***/ "./src/card.js":
/*!*********************!*\
  !*** ./src/card.js ***!
  \*********************/
/***/ ((module) => {

eval("const SUITS = [\"spades\", \"clubs\", \"diamonds\", \"hearts\"]\nconst VALUES = [\"A\", \"2\", \"3\", \"4\", \"5\", \"6\", \"7\", \"8\", \"9\", \"10\", \"J\", \"Q\", \"K\"]\n\nclass Card {\n    constructor(value, suit) {\n        this.value = value;\n        this.suit = suit;\n    }\n\n}\n\nmodule.exports = Card;\n\n//# sourceURL=webpack:///./src/card.js?");

/***/ }),

/***/ "./src/deck.js":
/*!*********************!*\
  !*** ./src/deck.js ***!
  \*********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const Card = __webpack_require__(/*! ./card.js */ \"./src/card.js\");\n\nconst SUITS = [\"spades\", \"clubs\", \"diamonds\", \"hearts\"]\nconst VALUES = [\"A\", \"2\", \"3\", \"4\", \"5\", \"6\", \"7\", \"8\", \"9\", \"10\", \"J\", \"Q\", \"K\"]\n\nclass Deck {\n    constructor() {\n        this.cards = [];\n    }\n\n    createDeck() {\n        for (let i = 0; i < 4; i++) {\n            for (let j = 0; j < 13; j++) {\n                this.cards.push(new Card(VALUES[j], SUITS[i]))\n            }\n        }\n    }\n\n    shuffle() {\n        for (let i = this.cards.length-1; i > 0; i--) {\n            let index = Math.floor(Math.random() * (i + 1));\n            let temp = this.cards[index];\n            this.cards[index] = this.cards[i];\n            this.cards[i] = temp;\n        }\n    }\n}\n\nmodule.exports = Deck;\n\n\n//# sourceURL=webpack:///./src/deck.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const Deck = __webpack_require__(/*! ./deck.js */ \"./src/deck.js\");\nconst Card = __webpack_require__(/*! ./card.js */ \"./src/card.js\");\nconst Player = __webpack_require__(/*! ./player.js */ \"./src/player.js\");\nconst Canvas = document.querySelector(\"canvas\")\n\nclass Game {\n    constructor() {\n        this.player = new Player();\n        this.computer = new Player();\n        this.deck = new Deck();\n        this.deck.createDeck();\n        this.deck.shuffle();\n    }\n\n    startGame() {\n        this.player.hand = [];\n        this.computer.hand = [];\n        this.player.hand.push(this.deck.cards.shift())\n        this.player.hand.push(this.deck.cards.shift())\n        this.computer.hand.push(this.deck.cards.shift())\n        this.computer.hand.push(this.deck.cards.shift())\n        if (this.player.value() === 21) return this.winGame();\n        console.log(`player: ${this.player.value()}`);\n        console.log(`dealer: ${this.computer.value()}`);\n\n    }\n\n    hit() {\n        this.player.hand.push(this.deck.cards.shift())\n        if (this.player.value() > 21) {\n            return this.loseGame();\n        } \n        console.log(`player: ${this.player.value()}`);\n        console.log(`dealer: ${this.computer.value()}`);\n\n    }\n\n    stand() {\n        if (this.computer.value() > 21) return this.winGame();\n        if (this.computer.value() > this.player.value()) return this.loseGame();\n        if (this.computer.value() < 17) {\n            this.computer.hand.push(this.deck.cards.shift())\n            return this.stand();\n        }\n    }\n\n    loseGame() {\n        console.log(`player: ${this.player.value()}`);\n        console.log(`dealer: ${this.computer.value()}`);\n        console.log(\"GAME OVER LOSER\");\n    }\n\n    winGame() {\n        console.log(`player: ${this.player.value()}`);\n        console.log(`dealer: ${this.computer.value()}`);\n        console.log(\"GAME OVER WINNER\");\n    }\n\n}\n\nmodule.exports = Game;\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const Deck = __webpack_require__(/*! ./deck.js */ \"./src/deck.js\");\nconst Card = __webpack_require__(/*! ./card.js */ \"./src/card.js\");\nconst Game = __webpack_require__(/*! ./game.js */ \"./src/game.js\");\nconst Player = __webpack_require__(/*! ./player.js */ \"./src/player.js\");\n\n\nwindow.addEventListener('DOMContentLoaded', (event) => {\n    const canvasElement = document.getElementById(\"game-canvas\");\n    const ctx = canvasElement.getContext(\"2d\");\n    // window.ctx = ctx;\n    // window.Deck = Deck;\n    // window.Card = Card;\n    // window.Game = Game;\n    \n    const Play = document.getElementById(\"play-button\");\n    Play.addEventListener(\"click\", function() {\n        let game = new Game();\n        game.startGame();\n\n        const Hit = document.getElementById(\"hit-button\");\n        Hit.addEventListener(\"click\", function () {\n            game.hit();\n        })\n        \n        const Stand = document.getElementById(\"stand-button\");\n        Stand.addEventListener(\"click\", function () {\n            game.stand();\n        })\n    })\n\n    \n});\n\n\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ ((module) => {

eval("const Score = {\n    \"2\": 2,\n    \"3\": 3,\n    \"4\": 4,\n    \"5\": 5,\n    \"6\": 6,\n    \"7\": 7,\n    \"8\": 8,\n    \"9\": 9,\n    \"10\": 10,\n    \"J\": 10,\n    \"Q\": 10,\n    \"K\": 10,\n    \"A\": 11\n}\n\nclass Player {\n    constructor() {\n        this.hand = [];\n    }\n\n    value() {\n        let hand = this.hand;\n        let sum = 0;\n        for (let i = 0; i < this.hand.length; i++){\n            sum += Score[this.hand[i].value];\n        }\n        return sum;\n    }\n}\nmodule.exports = Player;\n\n//# sourceURL=webpack:///./src/player.js?");

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