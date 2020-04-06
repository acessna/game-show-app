class Game{
    constructor(){
        this.missed = 0;
        this.phrases = this.createPhrases();
        this.activePhrase = null;
    }

    /**
    * Creates phrases for use in game
    * @return {array} An array of phrases that could be used in the game
    */
    createPhrases(){
        return [new Phrase('dont call me shirley'),
        new Phrase('better late than never'),
        new Phrase('you shall not pass'),
        new Phrase('its a trap'),
        new Phrase('there is no spoon')
        ];

        
    }

    /**
    * Selects random phrase from phrases property
    * @return {Object} Phrase object chosen to be used
    */
    getRandomPhrase(){
        let ranNum = Math.floor(Math.random() * this.phrases.length);     
        return this.phrases[ranNum]; 
    }

    /**
    * Begins game by selecting a random phrase and displaying it to user
    */
    startGame(){
        $('#overlay').hide();
        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();     
    }

    /**
    * Checks for winning move
    * @return {boolean} True if game has been won, false if game wasn't
    won
    */
    checkForWin(){
        if($('#phrase li').hasClass('hide letter')){
            return false;
        }else{
            return true;
        }
    }


    /**
    * Displays game over message
    * @param {boolean} gameWon - Whether or not the user won the game
    */
    gameOver(gameWon){
        $('#overlay').show();
        $('#phrase li').remove();
        $('.key').removeClass('chosen wrong').removeAttr('disabled');

        let tries = document.querySelectorAll('.lost-life');

        for (let i = 0; i < tries.length; i++) {
            if(tries.className = 'lost-life'){
                tries[i].classList.remove('lost-life');
                tries[i].classList.add('tries');
                tries[i].innerHTML = 
                "<img src= 'images/liveHeart.png' alt='Lost Icon' height='35' width='30'>";
            }            
        };
        
        if(gameWon === true){
            $('#overlay').removeClass('start').addClass('win');
            $('#game-over-message').html("By Azura, by Azura, by Azura! It's the Grand Champion! You've won!");
        } else{
            $('#overlay').removeClass('start').addClass('lose');
            $('#game-over-message').html('You\'ve taken an arrow to the knee! Try again?');
        }

    }

    /**
    * Increases the value of the missed property
    * Removes a life from the scoreboard
    * Checks if player has remaining lives and ends game if player is out
    */
   removeLife(){
    this.missed = this.missed + 1;

    let tries = document.querySelectorAll('.tries');

    for (let i = 0; i < tries.length; i++) {
        if(tries.className = 'tries'){
            tries[i].classList.remove('tries');
            tries[i].classList.add('lost-life');
            tries[i].innerHTML = 
            "<img src= 'images/lostHeart.png' alt='Lost Icon' height='35' width='30'>";
            break;
        }            
    };

    if(this.missed === 5){
        this.gameOver(false);
    }
    

}

    /**
    * Handles onscreen keyboard button clicks
    * @param (HTMLButtonElement) button - The clicked button element
    */
    handleInteraction(button) {
        let selectedLetter = $(button).html();        
        let phrase = new Phrase(game.activePhrase.phrase);
        button.setAttribute('disabled', true);

       if(phrase.checkLetter(selectedLetter) === true){
           $(button).addClass('chosen');
           phrase.showMatchedLetter(selectedLetter);
           if(this.checkForWin() === true){
               console.log('if')
               game.gameOver(true);
           } 
       } 
       if(phrase.checkLetter(selectedLetter) === false){
            $(button).addClass('wrong');
            game.removeLife();
       }
    
    };




}