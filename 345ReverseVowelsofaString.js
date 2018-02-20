var reverseVowels = function(s) {
    let vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    let sol = [];
    let vowelChar = [];
    let len = s.length;
    for (let i = 0 ; i < len; i++) {
        let char = s[i];
        if (vowels.indexOf(char) !== -1) {
            vowelChar.push(char);
        }
    }
    let index = 0;
    let vowelLength = vowelChar.length;
    for (let i = 0 ; i < len; i++) {
        let char = s[i];
        if (vowels.indexOf(char) !== -1) {
            sol.push(vowelChar[vowelLength - 1 - index]);
            index++;
        } else {
            sol.push(char);
        }
    }
    return sol.join("");
};
