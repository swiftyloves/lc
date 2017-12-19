/**
 * @param {number[]} prices
 * @return {number}
 */
/*var maxProfit = function(prices) {
    let maxProfit = 0;
    let arr = [[0,0],[0]];
    
    for (let i = 1; i < prices.length; i++) {
        if (i > 1) {
            let curMaxProfitBuy = 0;
            for (let j = 0; j <= i - 2; j++) {
                if (arr[1][j] > curMaxProfitBuy) {
                    curMaxProfitBuy = arr[1][j];
                }
            }
            arr[0].push(curMaxProfitBuy);
        }
        let curMaxProfitSell = 0;
        for (let j = 0; j < i; j++) {
            if (arr[0][j] + prices[i] - prices[j] > curMaxProfitSell) {
                curMaxProfitSell = arr[0][j] + prices[i] - prices[j];
            }
        }
        arr[1].push(curMaxProfitSell);
    }

    for (let i = 0; i < prices.length; i++) {
        if (arr[1][i] > maxProfit) {
            maxProfit = arr[1][i];
        }
    }
    return maxProfit;
};*/

/*
buy  -------> hold; ---[+price]--> sell 
hold -------> hold; ---[+price]--> sell 
sell -------> cooldown
cooldown ---> cooldown; ---[-price]--> buy
*/

var maxProfit = function(prices) {
    let len = prices.length;
    let profit = Array(len + 1);
    let negInf = Number.NEGATIVE_INFINITY;
    profit[0] = [negInf, negInf, negInf, 0];
    console.log(profit)
    for (let i = 1; i <= len; i++) {
        let arr = Array(4);
        let previous = profit[i - 1];
        arr[0] = previous[3] - prices[i - 1];
        arr[1] = Math.max(previous[0], previous[1]);
        arr[2] = Math.max(previous[0], previous[1]) + prices[i - 1];
        arr[3] = Math.max(previous[2], previous[3]);
        profit[i] = arr;
    }
    let maxProfit = negInf;
    for (let i = 0; i < 4; i++) {
        if(profit[len][i] > maxProfit) {
            maxProfit = profit[len][i];
        }
    }
    return maxProfit;    
};
