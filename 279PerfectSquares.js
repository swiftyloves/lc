/**
 * @param {number} n
 * @return {number}
 */
let addSquares = function(target, arr) {
    if (arr[target] !== null) {
        return arr[target];
    }
    let min = Number.POSITIVE_INFINITY;
    for (let i = 1; ; i++) {
        if (target - i*i < 0) { break; }
        min = Math.min(min, addSquares(target - i*i, arr) + 1);
    }
    arr[target] = min;
    return min;
};
var numSquares = function(n) {
    let arr = [];
    for(let i = 0; i <= n; i++) {
        arr.push(null);
    }
    arr[0] = 0;
    return addSquares(n, arr);    
};

