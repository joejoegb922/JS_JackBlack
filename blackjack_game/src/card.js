const SUITS = ["spades", "clubs", "diamonds", "hearts"]
const VALUES = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]

class Card {
    constructor(value, suit) {
        this.value = value;
        this.suit = suit;
    }

}

module.exports = Card;