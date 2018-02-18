/**
 * @param {number} n
 * @return {number}
 */

/* dp in iteration *
/* opt (n) =  min {opt (n - k * k)   s.t. 1 <= k && k * k <= n}.
   opt (0) =  0
*/
var numSquares = function(n) {
    let dp = [];
    for(let i = 0; i <= n; i++) {
        dp.push(Number.POSITIVE_INFINITY);
    }
    dp[0] = 0;
    for (let i = 1; i <= n; i++) {
        for (let k = 1; k * k <= n, i - k * k >= 0; k++) {
            dp[i] = Math.min(dp[i], dp[i - k * k] + 1);
        }
    }
    return dp[n];
};

/* dp in recursion */
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

