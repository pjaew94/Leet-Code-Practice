# https://leetcode.com/problems/coin-change/

# T.C: O(n * len(n))
# S.C: O(n)
# Bottom up dynamic programming approach with cacheing
# So we're going to start at amount of 0 instead of working from 7 and down
# (This is because it would result in DFS brute force to check for every possible solution)
# SO we're going to create an array length = amount + 1(because we have to consider the base case of 0)
# You can think of each position of the array being "how many coins I can fit if the amount was that position"
# If the amount of the position in the array cannot be met with any of the coins, then it would stay at 
# amount + 1 (This will be used to conditionally return our answer later)
# If the current amount on the array position subtracted by the coin is under 0, it means it cannot fit
# On the other hand, if it DOES equal 0, then it means it fits perfectly.
# We're taking the minimum of the current value at the position (which is how many coins can make this position value)
# Then we're taking the minimum of the spot + 1
# Return the amount of coins at the position of the AMOUNT given to us. If it equals amount + 1, it means
# no coins can make the combination to make the amount. So return -1 as directed.
class Solution:
    def coinChange(self, coins: list[int], amount: int) -> int:
        dp = [amount + 1] * (amount + 1)
        dp[0] = 0

        for a in range(1, amount + 1):
            for c in coins:
                if a - c >= 0:
                    dp[a] = min(dp[a], 1 + dp[a - c])

        return dp[amount] if dp[amount] != amount + 1 else -1 


test = Solution().coinChange;
print(test([1, 3, 4, 5], 7))
