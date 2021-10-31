# https://leetcode.com/problems/coin-change/

class Solution:
    def coinChange(self, coins: list[int], amount: int) -> int:
        coins.sort(key = lambda i: i)
        res = 0
        currPos = len(coins) - 1
        while(currPos >= 0 or amount != 0):
            if(currPos < 0): break;
            if(coins[currPos] > amount):
                currPos -= 1
            else:
                divisible = amount//coins[currPos]
                amount -= coins[currPos]*divisible
                res += divisible
                currPos -= 1
         
        
        if(amount != 0): return -1
        if(amount == 0): return res


test = Solution().coinChange;
print(test(
[2,5,10,1], 27))
