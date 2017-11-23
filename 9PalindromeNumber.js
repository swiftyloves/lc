/**
 * https://leetcode.com/problems/palindrome-number/description/
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (x < 0) {return false;}
    if (x == 0) {return true;}

    let len = 0;
    let list = [];
    while (x !== 0) {
        len += 1;
        list.push(x % 10);
        x = Math.floor(x / 10);
    }
    let len_half = Math.floor(len / 2);
    for (let i = 0; i < len_half; i++) {
        if (list[i] !== list[len -  i - 1]) { return false; }
    }

    return true;    
};
