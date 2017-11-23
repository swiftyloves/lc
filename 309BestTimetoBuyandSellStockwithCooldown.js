/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
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
};