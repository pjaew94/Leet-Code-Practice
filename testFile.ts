function maxProfit2(prices: number[]): number {
    let [maxProfit, rightMaxValue] = [0, prices[prices.length - 1]]

    for(let i = prices.length - 1; i >= 0 ; i--) {
        maxProfit = Math.max(maxProfit, rightMaxValue - prices[i])
        rightMaxValue = Math.max(rightMaxValue, prices[i])
    }

    return maxProfit
};