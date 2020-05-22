let game;

document.getElementById("btn__reset").addEventListener("click", () => {
    game = new Game();
    game.startGame();
    $('#overlay').removeClass('win lose');
}); 

$(".key").on('click', function (e) {
    let button = e.target;
    game.handleInteraction($(button).html());
});

$(document).on('keydown', function(e) {
  let key = e.key.toLowerCase();

  if (key == 'enter') {
    let reset = $('#btn__reset:visible');

    if (reset.length > 0) {
      reset.click();
      return;
    }
  }

  if ($('.key:contains("' + key + '"):visible').length > 0) {
    game.handleInteraction(key);
  }
});

