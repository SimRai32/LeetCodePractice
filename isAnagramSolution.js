const isAnagram = (string1, string2) => {
    if (!string1 || !string2) {
        throw new Error ("Bad Data");
    }
    if (string1.length !== string2.length) {
        return false;
    }
    const jsonStrings = {};
    const length = string1.length;
    for (let i = 0; i < length; i++) {
        const char1 = string1[i];
        const char2 = string2[i];
        if (jsonStrings[char1]) {
            jsonStrings[char1]++;
        } else {
            jsonStrings[char1] = 1;
        }
        if (jsonStrings[char2]) {
            jsonStrings[char2]--;
        } else {
            jsonStrings[char2] = -1;
        }
    };
    const keys = Object.keys(jsonStrings);
    for ( let i = 0; i < keys.length; i++) {
        const key = keys[i];
        if (jsonStrings[key] !== 0) {
            return false;
        }
    }
    return true;
};
