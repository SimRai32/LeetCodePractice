const countConsistentStrings = function(allowed, words) {
    // create object with the allowed letters
    const letters = new Set(allowed);
    let wordsPassed = 0;
    let wordsLength = words.length;
    allLettersLength = allowed.length;

    // iterate through each word and letter and check
    for (let i = 0; i < wordsLength; i++) {
        const word = words[i];
        let check = true;
        const wordLength = word.length;
        for (let j = 0; j < wordLength; j++) {
            if (!letters.has(word[j])) {
                check = false;
                break;
            }
        }
        if (check) wordsPassed++;
    }
    return wordsPassed;
};
