class Solution:
    def hammingWeight(self, n: int) -> int:
        res: int = 0
        while(n):
            res += n % 2
            n >> 1
        return res