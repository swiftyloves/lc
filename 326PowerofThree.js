var isPowerOfThree = function(n) {
    if (n === 0) { return false; }
    while (n !== 1) {
        n = n / 3;
        if (n !== Math.floor(n)) {
            return false;
        }
    }
    return true;    
};
