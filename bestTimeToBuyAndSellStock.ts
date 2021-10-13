// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

// Solution Method: Using Math.max and assigning indicators
// T.C: O(N)
// S.C: O(1)
// 1. Create a set to keep track of highest right side value we've encountered while counting down the array and the max profit
// 2. For loop will iterate backwards.
// 3. We set maxProfit for the current iteration by comparing it's current maxProfit and the new highest we've encountered minus
//      the current price we're at
// 4. Then we set if the current iteration value is bigger than the biggest we've countered before while counting down and
//      set it as rightMaxValue
// 5. maxProfit will never reach 0 because it started with 0 and we will always compare negative values to 0.

function maxProfit(prices: number[]): number {
  let [rightMaxValue, maxProfit] = [prices[prices.length - 1], 0];

  for (let i = prices.length - 1; i >= 0; i--) {
    maxProfit = Math.max(maxProfit, rightMaxValue - prices[i]);
    rightMaxValue = Math.max(rightMaxValue, prices[i]);
  }

  return maxProfit;
}
