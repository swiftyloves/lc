/* Not testing in Leetcode.com */ 

let lengthOfLongestSubstringKDistinct = function(s, k) {
    if (k >= s.length) {
        return s.length;
    }
    let head = 0
    let map = new Map();
    let sol = 0;
    for (let i = 0; i < s.length; i++) {
        let char = s[i];
        if (map.has(char)) {
            map.set(char, map.get(char) + 1);
        } else {
            map.set(char, 1);
        }

        while (map.size > k) {
            let headChar = s[head];
            let num = map.get(headChar);
            if (num > 0) {
                map.set(headChar, num - 1);
                num -= 1;
            }
            if (num == 0) {
                map.delete(headChar);
            }
            head += 1;
        }
        sol = Math.max(sol, i - head + 1);
    }

    return sol;
};

console.log(lengthOfLongestSubstringKDistinct('abcbbbbcccbdddadacb', 2));
console.log(lengthOfLongestSubstringKDistinct('abcadcacacaca', 3));
console.log(lengthOfLongestSubstringKDistinct('abc', 4));