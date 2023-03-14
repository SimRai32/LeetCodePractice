const lengthOfLongestSubstring = function(s) {
    let longest = 0;
    let streak = 0;
    const arr = s.split('');
    let currentString = "";
    for (const letter of arr) {
        if (currentString.includes(letter)) {
            const index = currentString.indexOf(letter);
            const newString = (index === 0 ? currentString.slice(1) : currentString.slice(index+1, currentString.length));
            currentString = newString + letter ;
            streak = currentString.length;
            } 
        else {
            streak++;
            currentString += letter;
            
        }
        if (streak > longest) {
            longest = streak;
        }
    }
    return longest;
};
