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
        return [new Phrase('life is like a box of chocolates'),
        new Phrase('better late than never'),
        new Phrase('another day another dollar'),
        new Phrase('its a trap'),
        new Phrase('there is no spoon')
        ];

        
    }

    /**
    * Selects random phrase from phrases property
    * @return {Object} Phrase object chosen to be used
    */
    getRandomPhrase(){
        let ranNum = Math.floor(Math.random() * 5);
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
    * Displays game over message
    * @param {boolean} gameWon - Whether or not the user won the game
    */
    gameOver(gameWon){
        $('#overlay').show();

        if(gameWon === true){
            $('#overlay').removeClass('start').addClass('win');
            $('#game-over-message').html("By Azura, by Azura, by Azura! It's the Grand Champion! You've won!");
        } else{
            $('#overlay').removeClass('start').addClass('lose');
            $('#game-over-message').html('You\'ve taken an arrow to the knee! Try again?');
        }



    }




}