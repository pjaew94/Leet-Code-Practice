# https://leetcode.com/problems/same-tree/

# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

# T.C: O(p + q)
# S.C: O(n)

# DFS Recursive
# We need to set base cases for any recursive so it knows when to stop.
# We will return true if both trees do not exist.
# We will return false if either p or q do not exist (so only one or em cause of the OR statement)
# and we will also return false if the values of those nodes are different even if nodes on that position
# exits.
# All we have to do now is to do recursion and compare the same routes for each of the trees.
class Solution:
    def isSameTree(self, p: Optional[TreeNode], q: Optional[TreeNode]) -> bool:
        if not p and not q:
            return True
        if not p or not q or p.val != q.val:
            return False

        return (self.isSameTree(p.left, q.left) and
                self.isSameTree(p.right, q.right))
