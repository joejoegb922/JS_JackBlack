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
        this.startGame();
    }

    startGame() {
        this.player.hand = [];
        this.computer.hand = [];
        this.player.hand.push(this.deck.cards.shift())
        this.player.hand.push(this.deck.cards.shift())
        this.computer.hand.push(this.deck.cards.shift())
        this.computer.hand.push(this.deck.cards.shift())
        if (this.player.value() === 21) return this.winGame();
        // console.log(this.player.hand[0].value)
        console.log(this.player.hand[0].source)
        console.log(this.computer.hand);
        console.log(this.player.hand);
        console.log(`player: ${this.player.value()}`);
        console.log(`dealer: ${this.computer.value()}`);

    }

    hit() {
        this.player.hand.push(this.deck.cards.shift())
        if (this.player.value() > 21) {
            return this.loseGame();
        } 
        console.log(this.player.hand);
        console.log(`player: ${this.player.value()}`);
        console.log(`dealer: ${this.computer.value()}`);
        console.log(this.computer.hand);
        
    }

    stand() {
        while (this.computer.hand.length > 2) this.computer.hand.pop();
        if (this.computer.value() < 17) {
            this.computer.hand.push(this.deck.cards.shift())
        }
        console.log(this.computer.hand);
    }

    loseGame() {
        console.log(this.player.hand);
        console.log(this.computer.hand);
        console.log(`player: ${this.player.value()}`);
        console.log(`dealer: ${this.computer.value()}`);
        console.log("GAME OVER LOSER");
    }

    winGame() {
        console.log(this.computer.hand);
        console.log(this.player.hand);
        console.log(`player: ${this.player.value()}`);
        console.log(`dealer: ${this.computer.value()}`);
        console.log("GAME OVER WINNER");
    }

    endGame(){
        this.player = new Player();
        this.computer = new Player();
        this.deck = new Deck();
        this.deck.createDeck();
        this.deck.shuffle();
    }


}

module.exports = Game;