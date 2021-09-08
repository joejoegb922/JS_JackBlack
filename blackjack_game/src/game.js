const Deck = require("./deck.js");
const Card = require("./card.js");
const Player = require("./player.js");
const Canvas = document.querySelector("canvas")

class Game {
    constructor() {
        this.player = new Player();
        this.computer = new Player();
        this.deck = new Deck();
        this.deck.createDeck();
        this.deck.shuffle();
    }

    startGame() {
        this.player.hand = [];
        this.computer.hand = [];
        this.player.hand.push(this.deck.cards.shift())
        this.player.hand.push(this.deck.cards.shift())
        this.computer.hand.push(this.deck.cards.shift())
        this.computer.hand.push(this.deck.cards.shift())
        if (this.player.value() === 21) return this.winGame();
        console.log(`player: ${this.player.value()}`);
        console.log(`dealer: ${this.computer.value()}`);

    }

    hit() {
        this.player.hand.push(this.deck.cards.shift())
        if (this.player.value() > 21) {
            return this.loseGame();
        } 
        console.log(`player: ${this.player.value()}`);
        console.log(`dealer: ${this.computer.value()}`);

    }

    stand() {
        if (this.computer.value() > 21) return this.winGame();
        if (this.computer.value() > this.player.value()) return this.loseGame();
        if (this.computer.value() < 17) {
            this.computer.hand.push(this.deck.cards.shift())
            return this.stand();
        }
    }

    loseGame() {
        console.log(`player: ${this.player.value()}`);
        console.log(`dealer: ${this.computer.value()}`);
        console.log("GAME OVER LOSER");
    }

    winGame() {
        console.log(`player: ${this.player.value()}`);
        console.log(`dealer: ${this.computer.value()}`);
        console.log("GAME OVER WINNER");
    }

}

module.exports = Game;