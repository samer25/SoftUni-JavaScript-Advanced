function wordsUppercase(string) {
    let reg =  /(\w|\s)*\w(?=")|\w+/gm;
    let extractedWords = string.match(reg);
    function uppercase(word){
        return word.toUpperCase();
    }
    return extractedWords.map(uppercase).join(', ');
}


console.log(wordsUppercase('Functions in JS can be nested, i.e. hold other functions'))