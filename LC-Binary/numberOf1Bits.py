# https://leetcode.com/problems/number-of-1-bits/

# Solution 1:
# T.C: O(1) - Because the length of the bits will always be 32
# S.C: O(1) - Only one input and only one variable to hold

# Idea is to divide the bit by 2 and see if we get a remainder (in this case it will always be 1).
# If we do get as remainder, then it means the last number is a 1, so we can increase the counter.
# To get rid of the 1, we can shift the bits to the right once.
# Now when we divide by 2 again, the remainder will be 1 or 0 depending on the new position on the right.
# Loop this while the length of n is NOT 0.


class Solution(object):
    def hammingWeight(self, n) -> int:
        res = 0
        while n:
            res += n % 2
            n = n >> 1
        return res


test = Solution().hammingWeight;
print(test())


# Solution 2:
# T.C: O(1) - Because the length of the bits will always be 32
# S.C: O(1) - Only one input and only one variable to hold

# Instead of shifting the binary to the right once after every loop, we're going to take logic and of it.
# Logic and basically compares the two binaries and looks for differences in the position.
# If two binaries being compared are exactly the same, then it will return the same thing
# However, if for example at the most right position, one has 0 and the other 1, it will set that position as 0
# Logic AND only returns 1 for the position if both positions are 1.
# Now with this operator, we can compare the current binary with the binary that is subtracted by 1.
# If the most right positioned binary is a 1, then it will simply become 0
# If the most right positioned binary is a 0, then ALL the 0's will become 1 until the last 1 is hit.
# The two binary sets are compared, and every single non matching binary pairs will become 0
# The most left 1 that has not been affect will remain if it exists. and it will loop
# If there is no more 1's at the end, the loop ends because everything has become 0.
class Solution2(object):
    def hammingWeight(self, n) -> int:
        res = 0
        while n:
            n = n & (n - 1)
            res += 1
        return res