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
}
