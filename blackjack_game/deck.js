export default class Deck {
    constructor () {
        this.cards = [];

    }

    createDeck () {
        for (let i = 0; i < SUITS.length; i++) {
            for (let j= 0; j < VALUES.length; j++) {
                this.cards.push(new Card(VALUES[j], SUITS[i]))
            }
        }
    }

    shuffle() {
        this.cards
    }

}

const SUITS = ["spades", "clubs", "diamonds", "hearts"]
const VALUES = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]

class Card {
    constructor(value, suit) {
        this.value = value;
        this.suit = suit;
    }

}


