const convert = function(s, numRows) {
    if (numRows === 1) {
        return s;
    }
    const arr = s.split("");
    let string = "";
    let currentRow = 0;
    const spacing = numRows * 2 - 2
    for (let i = 0; i < numRows; i++) {
        if (currentRow === 0 || currentRow === numRows - 1) {
            for (let j = i;  j <= s.length - 1; j+=spacing) {
                string = string + arr[j]; 
            }
        }
        else {
            const nextLetter = spacing - 2*currentRow;
            if (arr[i]) {
                string = string + arr[i];
            }
            let j = i + nextLetter;
            let reverseZag = true; 
            while (j < s.length) {
                if (reverseZag && arr[j]) {
                    string = string + arr[j];
                    reverseZag = false;
                    j = j + (spacing - nextLetter);
                }
                else if (arr[j]) {
                    string = string + arr[j];
                    reverseZag = true;
                    j = j + (nextLetter);
                    
                }
            }
        }
        currentRow++;
    }
    return string;
};
