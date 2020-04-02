let game;

document.getElementById("btn__reset").addEventListener("click", (e) => {
    game = new Game();
    game.startGame();
}); 