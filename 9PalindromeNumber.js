/**
 * https://leetcode.com/problems/palindrome-number/description/
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (x < 0) {return false;}
    let list = [];
    let len = x.toString().length;
    
    while(len > 0) {
        list.push(Math.floor (x / Math.pow(10, len - 1)));
        x = x % Math.pow(10, len - 1);
        len -= 1; 
    }

    for (let i = 0; i < Math.floor(list.length / 2); i++) {
        if (list[i] !== list[list.length -  i - 1]) { return false;}
    }
    return true;
};
