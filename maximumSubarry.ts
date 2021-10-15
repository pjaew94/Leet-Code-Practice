// https://leetcode.com/problems/maximum-subarray/


// Solution Method: Set one variable to see if current number is greater than the sum. Set another to compare for maximum sum.
// T.C: O(N)
// S.C: O(1)
// 1. Create a variable that compares the current number to the sum of the previous sums
// 2. Create another variable that keeps track of the highest sum.
// 3. Inside of the forEach, a1 update to the current iterating number value if it's greater than the previous sums (Hence it's not going higher)
// 4. If the sum is increasing, then it will take the higher value.
// 5. a2 will always take the higher value of itself or if the new current sum is greater. a2 will NEVER go down in value.
// 6. Return a2

function maxSubArray(nums: number[]): number {

    let a1: number = 0;
    let a2: number = nums[0];
    nums.forEach((num) => {
        a1 = Math.max(num, num + a1);
        a2 = Math.max(a2, a1)
    })

    return a2
};