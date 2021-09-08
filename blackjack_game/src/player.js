const Score = {
    "2": 2,
    "3": 3,
    "4": 4,
    "5": 5,
    "6": 6,
    "7": 7,
    "8": 8,
    "9": 9,
    "10": 10,
    "J": 10,
    "Q": 10,
    "K": 10,
    "A": 11
}

class Player {
    constructor() {
        this.hand = [];
    }

    value() {
        let hand = this.hand;
        let sum = 0;
        for (let i = 0; i < this.hand.length; i++){
            sum += Score[this.hand[i].value];
        }
        return sum;
    }
}
module.exports = Player;