const Deck = require("./deck.js");
const Card = require("./card.js");
const Game = require("./game.js");
const Player = require("./player.js");
const sources = {
    "2 of spades": "../src/card_imgs/2_spades.png",
    "A of spades": "../src/card_imgs/A_spades.png",
    "3 of spades": "../src/card_imgs/3_spades.png",
    "4 of spades": "../src/card_imgs/4_spades.png",
    "5 of spades": "../src/card_imgs/5_spades.png",
    "6 of spades": "../src/card_imgs/6_spades.png",
    "7 of spades": "../src/card_imgs/7_spades.png",
    "8 of spades": "../src/card_imgs/8_spades.png",
    "9 of spades": "../src/card_imgs/9_spades.png",
    "10 of spades": "../src/card_imgs/10_spades.png",
    "J of spades": "../src/card_imgs/J_spades.png",
    "Q of spades": "../src/card_imgs/Q_spades.png",
    "K of spades": "../src/card_imgs/K_spades.png",
    "A of hearts": "../src/card_imgs/A_hearts.png",
    "2 of hearts": "../src/card_imgs/2_hearts.png",
    "3 of hearts": "../src/card_imgs/3_hearts.png",
    "4 of hearts": "../src/card_imgs/4_hearts.png",
    "5 of hearts": "../src/card_imgs/5_hearts.png",
    "6 of hearts": "../src/card_imgs/6_hearts.png",
    "7 of hearts": "../src/card_imgs/7_hearts.png",
    "8 of hearts": "../src/card_imgs/8_hearts.png",
    "9 of hearts": "../src/card_imgs/9_hearts.png",
    "10 of hearts": "../src/card_imgs/10_hearts.png",
    "J of hearts": "../src/card_imgs/J_hearts.png",
    "Q of hearts": "../src/card_imgs/Q_hearts.png",
    "K of hearts": "../src/card_imgs/K_hearts.png",
    "A of clubs": "../src/card_imgs/A_clubs.png",
    "2 of clubs": "../src/card_imgs/2_clubs.png",
    "3 of clubs": "../src/card_imgs/3_clubs.png",
    "4 of clubs": "../src/card_imgs/4_clubs.png",
    "5 of clubs": "../src/card_imgs/5_clubs.png",
    "6 of clubs": "../src/card_imgs/6_clubs.png",
    "7 of clubs": "../src/card_imgs/7_clubs.png",
    "8 of clubs": "../src/card_imgs/8_clubs.png",
    "9 of clubs": "../src/card_imgs/9_clubs.png",
    "10 of clubs": "../src/card_imgs/10_clubs.png",
    "J of clubs": "../src/card_imgs/J_clubs.png",
    "Q of clubs": "../src/card_imgs/Q_clubs.png",
    "K of clubs": "../src/card_imgs/K_clubs.png",
    "A of diamonds": "../src/card_imgs/A_diamonds.png",
    "2 of diamonds": "../src/card_imgs/2_diamonds.png",
    "3 of diamonds": "../src/card_imgs/3_diamonds.png",
    "4 of diamonds": "../src/card_imgs/4_diamonds.png",
    "5 of diamonds": "../src/card_imgs/5_diamonds.png",
    "6 of diamonds": "../src/card_imgs/6_diamonds.png",
    "7 of diamonds": "../src/card_imgs/7_diamonds.png",
    "8 of diamonds": "../src/card_imgs/8_diamonds.png",
    "9 of diamonds": "../src/card_imgs/9_diamonds.png",
    "10 of diamonds": "../src/card_imgs/10_diamonds.png",
    "J of diamonds": "../src/card_imgs/J_diamonds.png",
    "Q of diamonds": "../src/card_imgs/Q_diamonds.png",
    "K of diamonds": "../src/card_imgs/K_diamonds.png",
    "hidden" : "../src/card_imgs/hidden.jpeg"
}



window.addEventListener('DOMContentLoaded', (event) => {
    const canvasElement = document.getElementById("game-canvas");
    const ctx = canvasElement.getContext("2d");
    const Play = document.getElementById("play-button");
    const Hit = document.getElementById("hit-button");
    const Stand = document.getElementById("stand-button");
    
    Play.addEventListener("click", (event) => {
        ctx.clearRect(0, 0, 1100, 650);
        let game = new Game();
        let card1 = new Image();
        let card2 = new Image();
        let dcard1 = new Image();
        let dcard2 = new Image();
        card1.src = sources[game.player.hand[0].source]
        card2.src = sources[game.player.hand[1].source]
        dcard1.src = sources[game.computer.hand[0].source]
        dcard2.src = sources["hidden"]
        let xPos = 500;

        card1.onload = function () {
            ctx.drawImage(card1, 500, 500, 100, 150);
        }
        card2.onload = function () {
            ctx.drawImage(card2, 600, 500, 100, 150);
        }
        dcard1.onload = function () {
            ctx.drawImage(dcard1, 450, 100, 75, 100);
        }
        dcard2.onload = function () {
            ctx.drawImage(dcard2, 550, 100, 75, 100);
        }

        if (game.player.value() === 21) {
            setTimeout(function () {
                alert("You Win BROH")
            }, 2000);
        }

        Hit.addEventListener("click", function () {
            game.hit();
            let index = game.player.hand.length - 1;
            let hitCard = new Image();
            hitCard.src = sources[game.player.hand[index].source];

            hitCard.onload = function () {
                ctx.drawImage(hitCard, xPos+100, 500, 100, 150);
            }
            xPos += 100;
            if (game.player.value() > 21) {
                alert("You Lose Broh");
            }
        })
        Stand.addEventListener("click", function () {
            dcard2.src = sources[game.computer.hand[1].source];
            dcard2.onload = function () {
                ctx.drawImage(dcard2, 550, 100, 75, 100);
            }
            game.stand();

            let i = 2;
            let dxPos = 550;
            while (i < game.computer.hand.length) {
                if (game.computer.hand[i]) {
                    let hitDealer = new Image();
                    hitDealer.src = sources[game.computer.hand[i].source];
                    hitDealer.onload = function () {
                        ctx.drawImage(hitDealer, dxPos, 100, 75, 100);
                    }
                }
                dxPos += 100;
                i += 1;
            }
            if (game.computer.value() > 21) {
                winner();
            } else if (game.computer.value() < game.player.value()) {
                winner();
            } else if (game.computer.value() > game.player.value()) {
               loser()
            } else {
                setTimeout(function () {
                    alert("You Tied BROH")
                }, 2000);
            }
        })
    })
})

function winner() {
    setTimeout(function () {
        alert("You Win BROH")
    }, 2000);
}

function loser() {
    setTimeout(function () {
        alert("You Lose BROH")
    }, 2000);
}
