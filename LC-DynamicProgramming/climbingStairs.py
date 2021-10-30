# https://leetcode.com/problems/climbing-stairs/

# T.C - O(n)
# S.C - O(1)

# The solution is based on Bottom-Up technique. Instead of imagining the person climbing up, we can
# see visualize each of the possibility from the top of the staircase.
# At the nth step (the last step), the number of possible ways to get to that step is 1 (you're already there).
# On the n-1 step, number of ways to get to the nth step is 1 (one step up).
# On the n-2 step, the number of ways you can get to the nth step is 2 (1 step or 2 steps).
# On the n-3 step, the number of ways to get to the n-2 step is 1. Since we already calculated the
# number of ways we can get to the nth step from the n-2 step, we can just that by 1 (3).
# Notice the fibbinoci sequence.
# Instead of creating an array for memory, we can have two variables shifting down the steps
# until we reach the person at the initial spot.
# The 'one' variable will be the one that reaches the person, so we can return that value at the end.

class Solution:
    def climbStairs(self, n: int) -> int:
        one, two  = 1, 1

        for i in range(n - 1):
            temp = one
            one = one + two
            two = temp
        return one