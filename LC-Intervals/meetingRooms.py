# https://www.lintcode.com/problem/meeting-rooms/note



# T.C: O(nlog(n)) - This is because of the sorting. However, the for loop is O(n), so the total 
#                   time complexity is O(nlog(n))
# S.C: O(1)
# Notice how an interval is defined below.
# We can sort the intervals by the start value of each interval so that we only have to compare
# the intervals right next to each other.
# Start a for loop while it's the length of intervals
# Start at index of one. 
# Interval one will be the intervals[0]. Second interval will be intervals[1];
# Obviously this will go up by 1 each loop until the 2nd interval hits the last interval in the array
# Return false if the first interval's end time is greater than the 2nd interval start time.
# If we get through the entire loop, there is no overlapping, so return true.

"""
Definition of Interval.
class Interval(object):
    def __init__(self, start, end):
        self.start = start
        self.end = end
"""

class Solution:
    def canAttendMeetings(self, intervals):
        intervals.sort(key = lambda i: i.start)

        for i in range(1, len(intervals)):
            i1 = intervals[i - 1]
            i2 = intervals[i]

            if i1.end > i2.start:
                return False
        

        return True
