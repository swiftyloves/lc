var repeatedSubstringPattern = function(s) {
    let sArr = s.split("");
    for (let w = 1; w < s.length; w++) {
        if ((s.length % w) !== 0) {
            continue;
        }
        let index = 0;
        let succeed = true;
        for (let head = w; head < s.length; head ++) {
            if (s[head] === s[index]) {
                index++;
                index = (index % w);
            } else {
                succeed = false;
                break;
            }
        }
        if (succeed) {
            return true;
        }
    }
    return false;
};

