let isPalindrome = function(word) {
    let head = 0;
    let tail = word.length - 1;
    while (head < tail) {
        if (word[head] !== word[tail]) {
            return false;
        }
        head++;
        tail--;
    }
    return true;
};
let reverseWord = function(word) {
    return word.split("").reverse().join("");
};
var palindromePairs = function(words) {
    let sol = [];
    let map = {}
    for (let i = 0; i < words.length; i++) {
        map[reverseWord(words[i])] = i;
    }
    // if existing empty string ==> ["", word]
    if (map.hasOwnProperty("")) {
        for (let i = 0; i < words.length; i++) {
            if (i === map[""] ) { continue; }
            if (isPalindrome(words[i])) {
                sol.push([map[""], map[words[i]]]);
            }
        }
    }
    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        for (let j = 0; j < word.length; j++) {
            let left = word.substr(0, j);
            let right = word.substr(j, word.length);
            // left might be empty str, "", thus existing ans ==> [word, ""]
            if (map.hasOwnProperty(left) && map[left] !== i && isPalindrome(right)) {
                sol.push([i, map[left]]);
            }
            if (map.hasOwnProperty(right) && map[right] !== i && isPalindrome(left)) {
                sol.push([map[right], i]);
            }
        }
    }
    return sol;
};
