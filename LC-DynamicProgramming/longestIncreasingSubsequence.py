# https://leetcode.com/problems/longest-increasing-subsequence/


# T.C: O(n^2)
# S.C: O(n)

# So if you look at the DFS solution, you'll see that a lot of routes are repeated based on 
# the number. All of the high number value routes will be repeated by the lower number routes.
# So we can solve this dynamically.
# We're going to work backwards.
# The array is going to contain all 1's because the longest subarray can be the number itself
# if there is no increase at ALL in the array (ex: [5, 3, 2, 0])
# We're going to loop through the list backwards.
# Everytime we hit a new index in the array, we're going work UP the array to see if the number
# to the right is GREATER than the number we're on now (because it's increasing subarray)
# While it's comparing going upwards, it will compare it's updated value compared with the nums[j]'s
# highest sub value. It'll take the max of it
class Solution:
    def lengthOfLIS(self, nums: List[int]) -> int:
        LIS = [1] * len(nums)

        for i in range(len(nums) - 1, -1, -1):
            for j in range( i + 1, len(nums)):
                if nums[i] < nums[j]:
                    LIS[i] = max(LIS[i], 1 + LIS[j])
        
        return max(LIS)