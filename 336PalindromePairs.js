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
var palindromePairs = function(words) {
    let sol = [];
    for (let i = 0; i < words.length - 1; i++) {
        for (let j = i + 1; j < words.length; j++) {
            if(isPalindrome(words[i] + words[j])) {
                sol.push([i, j]);
            }
            if(isPalindrome(words[j] + words[i])) {
                sol.push([j, i]);
            }
        }
    }
    return sol;
};
