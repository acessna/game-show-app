class Phrase{
    constructor(phrase){
        this.phrase = phrase;
    }

    addPhraseToDisplay(){
        const phraseLetters = [];
        for (let i = 0; i < this.phrase.length; i++) {
            phraseLetters.push(this.phrase.charAt(i)); 
        };
        phraseLetters.forEach(letter => {
            if(letter === ' '){
                $('#phrase ul').append( '<li class="space"> </li>');
            }else{
                $('#phrase ul').append(`<li class="hide letter ${letter}">${letter}</li>`);
            }
        });
    }

    /**
    * Checks if passed letter is in phrase
    * @param (string) letter - Letter to check
    */
    checkLetter(letter) {
        const phraseLetters = [];
        for (let i = 0; i < this.phrase.length; i++) {
            phraseLetters.push(this.phrase.charAt(i)); 
        };

        for(let i = 0; i < phraseLetters.length; i++) {
            if(letter === phraseLetters[i]){
                return true;
            }      
        }

        return false;

    }

    /**
    * Displays passed letter on screen after a match is found
    * @param (string) letter - Letter to display
    */
    showMatchedLetter(letter) {
        $('#phrase li').removeClass(`hide letter ${letter}`).addClass('show');

    }

}