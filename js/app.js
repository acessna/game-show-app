let game;

document.getElementById("btn__reset").addEventListener("click", () => {
    game = new Game();
    game.startGame();
    $('#overlay').removeClass('win lose');
}); 

$(".key").on('click', function (e) {
    let button = e.target;
    game.handleInteraction(button);
    
});


