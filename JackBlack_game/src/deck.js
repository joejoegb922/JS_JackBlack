const Card = require("./card.js");

const SUITS = ["spades", "clubs", "diamonds", "hearts"]
const VALUES = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]

class Deck {
    constructor() {
        this.cards = [];
    }

    createDeck() {
        for (let i = 0; i < 4; i++) {
            for (let j = 0; j < 13; j++) {
                this.cards.push(new Card(VALUES[j], SUITS[i]))
            }
        }
    }

    shuffle() {
        for (let i = this.cards.length-1; i > 0; i--) {
            let index = Math.floor(Math.random() * (i + 1));
            let temp = this.cards[index];
            this.cards[index] = this.cards[i];
            this.cards[i] = temp;
        }
    }
}

module.exports = Deck;
