const Deck = require("./deck.js");
const Card = require("./card.js");
const Game = require("./game.js");
const Player = require("./player.js");


window.addEventListener('DOMContentLoaded', (event) => {
    const canvasElement = document.getElementById("game-canvas");
    const ctx = canvasElement.getContext("2d");
    // window.ctx = ctx;
    // window.Deck = Deck;
    // window.Card = Card;
    // window.Game = Game;
    
    const Play = document.getElementById("play-button");
    Play.addEventListener("click", function() {
        let game = new Game();
        game.startGame();

        const Hit = document.getElementById("hit-button");
        Hit.addEventListener("click", function () {
            game.hit();
        })
        
        const Stand = document.getElementById("stand-button");
        Stand.addEventListener("click", function () {
            game.stand();
        })
    })

    
});



