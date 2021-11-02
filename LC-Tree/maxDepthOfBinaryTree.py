

# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right


# T.C: O(n)
# S.C: O(n)
# DFS Recursive
# We're simply adding the side which has the greatest node depth. 
# It's recursive so think of it as the result (the count values) are going to pile upwards after
# it has gone through all of the nodes in every branch.
class Solution:
    def maxDepth(self, root: Optional[TreeNode]) -> int:
        if not root: 
            return 0
        
        return 1+ max(self.maxDepth(root.left), self.maxDepth(root.right))




# T.C: O(n)
# S.C: O(n)
# BFS - breadth first search
# The concept of BFS revolves around going down LEVEL by LEVEL (so like floors in a building)
# There is a queue array taht keeps track of each node in each level.
# The nodes in queue will be popped out and analyzed to see if it can be replaced by
# nodes on the next level that branches from it.
# If it doesn't then it will just disappear.
# If it does, we just keep going down the level
# NOTICE: deque() is a queue array that makes it easy to append/pop for O(1) T.C. It's good practice
# rather than using list or just an array.

class Solution:
    def maxDepth(self, root: Optional[TreeNode]) -> int:
        if not root:
            return 0
        
        level = 0
        q = deque([root])  
        while q:
            for _ in range(len(q)):
                node = q.popleft()
                if node.left:
                    q.append(node.left)
                if node.right:
                    q.append(node.right)
            
            level += 1
        
        return level


# DFS Iterative
# We're using a stack to keep track of the nodes and the depth as well

class Solution:
    def maxDepth(self, root: Optional[TreeNode]) -> int:
        stack = [[root, 1]]
        res = 0

        while stack:
            node, depth = stack.pop()

            if node: 
                res = max(res, depth)
                stack.append([node.left, depth +1 ])
                stack.append([node.right, depth +1 ])

        return res