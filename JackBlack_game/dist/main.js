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

eval("const SUITS = [\"spades\", \"clubs\", \"diamonds\", \"hearts\"]\nconst VALUES = [\"A\", \"2\", \"3\", \"4\", \"5\", \"6\", \"7\", \"8\", \"9\", \"10\", \"J\", \"Q\", \"K\"]\n\nclass Card {\n    constructor(value, suit) {\n        this.value = value;\n        this.suit = suit;\n        this.source = `${value} of ${suit}`\n    }\n\n}\n\nmodule.exports = Card;\n\n//# sourceURL=webpack:///./src/card.js?");

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

eval("const Deck = __webpack_require__(/*! ./deck.js */ \"./src/deck.js\");\nconst Card = __webpack_require__(/*! ./card.js */ \"./src/card.js\");\nconst Player = __webpack_require__(/*! ./player.js */ \"./src/player.js\");\nconst Canvas = document.querySelector(\"canvas\")\n\nclass Game {\n    constructor() {\n        this.player = new Player();\n        this.computer = new Player();\n        this.deck = new Deck();\n        this.deck.createDeck();\n        this.deck.shuffle();\n        this.startGame();\n    }\n\n    startGame() {\n        this.player.hand = [];\n        this.computer.hand = [];\n        this.player.hand.push(this.deck.cards.shift())\n        this.player.hand.push(this.deck.cards.shift())\n        this.computer.hand.push(this.deck.cards.shift())\n        this.computer.hand.push(this.deck.cards.shift())\n        if (this.player.value() === 21) return this.winGame();\n        // console.log(this.player.hand[0].value)\n        console.log(this.player.hand[0].source)\n        console.log(this.computer.hand);\n        console.log(this.player.hand);\n        console.log(`player: ${this.player.value()}`);\n        console.log(`dealer: ${this.computer.value()}`);\n\n    }\n\n    hit() {\n        this.player.hand.push(this.deck.cards.shift())\n        if (this.player.value() > 21) {\n            return this.loseGame();\n        } \n        console.log(this.player.hand);\n        console.log(`player: ${this.player.value()}`);\n        console.log(`dealer: ${this.computer.value()}`);\n        console.log(this.computer.hand);\n        \n    }\n\n    stand() {\n        while (this.computer.hand.length > 2) this.computer.hand.pop();\n        if (this.computer.value() < 17) {\n            this.computer.hand.push(this.deck.cards.shift())\n        }\n        console.log(this.computer.hand);\n    }\n\n    loseGame() {\n        console.log(this.player.hand);\n        console.log(this.computer.hand);\n        console.log(`player: ${this.player.value()}`);\n        console.log(`dealer: ${this.computer.value()}`);\n        console.log(\"GAME OVER LOSER\");\n    }\n\n    winGame() {\n        console.log(this.computer.hand);\n        console.log(this.player.hand);\n        console.log(`player: ${this.player.value()}`);\n        console.log(`dealer: ${this.computer.value()}`);\n        console.log(\"GAME OVER WINNER\");\n    }\n\n    endGame(){\n        this.player = new Player();\n        this.computer = new Player();\n        this.deck = new Deck();\n        this.deck.createDeck();\n        this.deck.shuffle();\n    }\n\n\n}\n\nmodule.exports = Game;\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const Deck = __webpack_require__(/*! ./deck.js */ \"./src/deck.js\");\nconst Card = __webpack_require__(/*! ./card.js */ \"./src/card.js\");\nconst Game = __webpack_require__(/*! ./game.js */ \"./src/game.js\");\nconst Player = __webpack_require__(/*! ./player.js */ \"./src/player.js\");\nconst sources = {\n    \"2 of spades\": \"../src/card_imgs/2_spades.png\",\n    \"A of spades\": \"../src/card_imgs/A_spades.png\",\n    \"3 of spades\": \"../src/card_imgs/3_spades.png\",\n    \"4 of spades\": \"../src/card_imgs/4_spades.png\",\n    \"5 of spades\": \"../src/card_imgs/5_spades.png\",\n    \"6 of spades\": \"../src/card_imgs/6_spades.png\",\n    \"7 of spades\": \"../src/card_imgs/7_spades.png\",\n    \"8 of spades\": \"../src/card_imgs/8_spades.png\",\n    \"9 of spades\": \"../src/card_imgs/9_spades.png\",\n    \"10 of spades\": \"../src/card_imgs/10_spades.png\",\n    \"J of spades\": \"../src/card_imgs/J_spades.png\",\n    \"Q of spades\": \"../src/card_imgs/Q_spades.png\",\n    \"K of spades\": \"../src/card_imgs/K_spades.png\",\n    \"A of hearts\": \"../src/card_imgs/A_hearts.png\",\n    \"2 of hearts\": \"../src/card_imgs/2_hearts.png\",\n    \"3 of hearts\": \"../src/card_imgs/3_hearts.png\",\n    \"4 of hearts\": \"../src/card_imgs/4_hearts.png\",\n    \"5 of hearts\": \"../src/card_imgs/5_hearts.png\",\n    \"6 of hearts\": \"../src/card_imgs/6_hearts.png\",\n    \"7 of hearts\": \"../src/card_imgs/7_hearts.png\",\n    \"8 of hearts\": \"../src/card_imgs/8_hearts.png\",\n    \"9 of hearts\": \"../src/card_imgs/9_hearts.png\",\n    \"10 of hearts\": \"../src/card_imgs/10_hearts.png\",\n    \"J of hearts\": \"../src/card_imgs/J_hearts.png\",\n    \"Q of hearts\": \"../src/card_imgs/Q_hearts.png\",\n    \"K of hearts\": \"../src/card_imgs/K_hearts.png\",\n    \"A of clubs\": \"../src/card_imgs/A_clubs.png\",\n    \"2 of clubs\": \"../src/card_imgs/2_clubs.png\",\n    \"3 of clubs\": \"../src/card_imgs/3_clubs.png\",\n    \"4 of clubs\": \"../src/card_imgs/4_clubs.png\",\n    \"5 of clubs\": \"../src/card_imgs/5_clubs.png\",\n    \"6 of clubs\": \"../src/card_imgs/6_clubs.png\",\n    \"7 of clubs\": \"../src/card_imgs/7_clubs.png\",\n    \"8 of clubs\": \"../src/card_imgs/8_clubs.png\",\n    \"9 of clubs\": \"../src/card_imgs/9_clubs.png\",\n    \"10 of clubs\": \"../src/card_imgs/10_clubs.png\",\n    \"J of clubs\": \"../src/card_imgs/J_clubs.png\",\n    \"Q of clubs\": \"../src/card_imgs/Q_clubs.png\",\n    \"K of clubs\": \"../src/card_imgs/K_clubs.png\",\n    \"A of diamonds\": \"../src/card_imgs/A_diamonds.png\",\n    \"2 of diamonds\": \"../src/card_imgs/2_diamonds.png\",\n    \"3 of diamonds\": \"../src/card_imgs/3_diamonds.png\",\n    \"4 of diamonds\": \"../src/card_imgs/4_diamonds.png\",\n    \"5 of diamonds\": \"../src/card_imgs/5_diamonds.png\",\n    \"6 of diamonds\": \"../src/card_imgs/6_diamonds.png\",\n    \"7 of diamonds\": \"../src/card_imgs/7_diamonds.png\",\n    \"8 of diamonds\": \"../src/card_imgs/8_diamonds.png\",\n    \"9 of diamonds\": \"../src/card_imgs/9_diamonds.png\",\n    \"10 of diamonds\": \"../src/card_imgs/10_diamonds.png\",\n    \"J of diamonds\": \"../src/card_imgs/J_diamonds.png\",\n    \"Q of diamonds\": \"../src/card_imgs/Q_diamonds.png\",\n    \"K of diamonds\": \"../src/card_imgs/K_diamonds.png\",\n    \"hidden\" : \"../src/card_imgs/hidden.jpeg\"\n}\n\n\n\nwindow.addEventListener('DOMContentLoaded', (event) => {\n    const canvasElement = document.getElementById(\"game-canvas\");\n    const ctx = canvasElement.getContext(\"2d\");\n    const Play = document.getElementById(\"play-button\");\n    const Hit = document.getElementById(\"hit-button\");\n    const Stand = document.getElementById(\"stand-button\");\n    \n    Play.addEventListener(\"click\", (event) => {\n        ctx.clearRect(0, 0, 1100, 650);\n        let game = new Game();\n        let card1 = new Image();\n        let card2 = new Image();\n        let dcard1 = new Image();\n        let dcard2 = new Image();\n        card1.src = sources[game.player.hand[0].source]\n        card2.src = sources[game.player.hand[1].source]\n        dcard1.src = sources[game.computer.hand[0].source]\n        dcard2.src = sources[\"hidden\"]\n        let xPos = 500;\n\n        card1.onload = function () {\n            ctx.drawImage(card1, 500, 500, 75, 100);\n        }\n        card2.onload = function () {\n            ctx.drawImage(card2, 600, 500, 75, 100);\n        }\n        dcard1.onload = function () {\n            ctx.drawImage(dcard1, 450, 100, 75, 100);\n        }\n        dcard2.onload = function () {\n            ctx.drawImage(dcard2, 550, 100, 75, 100);\n        }\n\n        if (game.player.value() === 21) {\n            setTimeout(function () {\n                alert(\"You Win BROH\")\n            }, 2000);\n        }\n\n        Hit.addEventListener(\"click\", function () {\n            game.hit();\n            let index = game.player.hand.length - 1;\n            let hitCard = new Image();\n            hitCard.src = sources[game.player.hand[index].source];\n\n            hitCard.onload = function () {\n                ctx.drawImage(hitCard, xPos + 100, 500, 75, 100);\n            }\n            xPos += 100;\n            if (game.player.value() > 21) {\n                alert(\"You Lose Broh\");\n            }\n        })\n        Stand.addEventListener(\"click\", function () {\n            dcard2.src = sources[game.computer.hand[1].source];\n            dcard2.onload = function () {\n                ctx.drawImage(dcard2, 550, 100, 75, 100);\n            }\n            game.stand();\n\n            let i = 2;\n            let dxPos = 550;\n            while (i < game.computer.hand.length) {\n                if (game.computer.hand[i]) {\n                    let hitDealer = new Image();\n                    hitDealer.src = sources[game.computer.hand[i].source];\n                    hitDealer.onload = function () {\n                        ctx.drawImage(hitDealer, dxPos, 100, 75, 100);\n                    }\n                }\n                dxPos += 100;\n                i += 1;\n            }\n            if (game.computer.value() > 21) {\n                setTimeout(function () {\n                    alert(\"You Win BROH\")\n                }, 2000);\n                return;\n            } else if (game.computer.value() < game.player.value()) {\n                setTimeout(function () {\n                    alert(\"You Win BROH\")\n                }, 2000);\n                return;\n\n            } else if (game.computer.value() > game.player.value()) {\n                setTimeout(function () {\n                    alert(\"You Lose BROH\")\n                }, 2000);\n                return;\n            } else {\n                setTimeout(function () {\n                    alert(\"You Tied BROH\")\n                }, 2000);\n                return;\n            }\n        })\n    })\n})\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

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