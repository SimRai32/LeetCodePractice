const reverseVowels = function(s) {
    const vowels = [];
    let newString = [];
    for (let i =0; i < s.length; i++) {
        const lowercased = s[i].toLowerCase();
        if (lowercased === "a" || lowercased === "e" || lowercased === "i" || lowercased === "o" || lowercased === "u")    
        vowels.push(s[i]);
        newString[i] = s[i];
    }
    
    for (let i =0; i < newString.length; i++) {
        const lowercased = newString[i].toLowerCase();
        if (lowercased === "a" || lowercased === "e" || lowercased === "i" || lowercased === "o" || lowercased === "u") {
            newString[i] = vowels.pop();
        }
    }
    return newString.join("");
};
