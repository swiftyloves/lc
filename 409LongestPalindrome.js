var longestPalindrome = function(s) {
    map = {}
    for (let i = 0; i < s.length; i++) {
        let char = s[i];
        map[char] = map.hasOwnProperty(char) ?  map[char] + 1 : 1;
    }
    let keys = Object.keys(map);
    var res = 0
    let oddFlag = false;
    
    for (let i = 0; i < keys.length; i++) {
        let key = keys[i];
        if (map[key] % 2 === 0) {
            res = res + map[key];
        } else {
            oddFlag = true
            res += map[key] - 1;
        }
    }
    if (oddFlag === true) {
        res += 1
    }
    return res;
};
