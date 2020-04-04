let game;

document.getElementById("btn__reset").addEventListener("click", () => {
    game = new Game();
    game.startGame();
}); 

$(".key").on('click', function (e) {
    let game = new Game();
    let button = e.target;
    game.handleInteraction(button);
    
});