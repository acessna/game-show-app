class Game{
    constructor(){
        this.missed = 0;
        this.phrases = this.createPhrases();
        this.activePhrase = this.getRandomPhrase();
        this.phrase = new Phrase(this.getRandomPhrase);
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
        new Phrase('the spoon isnt real')
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

    startGame(){
        $('#overlay').hide();
        
        this.getRandomPhrase(); 
        this.phrase.addPhraseToDisplay();       
    }
}