// https://leetcode.com/problems/maximum-product-subarray/


// Solution Method: Create max array and min array. Update each array based on min/max respective to multipled by each others previous values.
// T.C: O(N)
// S.C: O(1)
// 1. Create an array that keeps track of max values and another that keeps tracking min values (for negatives);
// 2. Create variable to compare it's current max value with the latest index of the max value array.
// 3. Inside of the for loop, compare the current iteration value, current * previous max, and current * previous min.
//      Take the max out of the three and push onto the current index iteration.
// 4. Do the same, but find the min for the min array. (We multiply by the latest minimum value because the negative * negative possibility)
// 5. Update the max value by comparing the latest max value on the array and the current max.
// 6. Return the max after the iteration.

function maxProduct(nums: number[]): number {
  let maxTillIndex = [nums[0]];
  let minTillIndex = [nums[0]];
  let max = nums[0];

  for (let i = 1; i < nums.length; i++) {
    const num = nums[i];

    maxTillIndex[i] = Math.max(
      num,
      num * maxTillIndex[i - 1],
      num * minTillIndex[i - 1]
    );

    minTillIndex[i] = Math.min(
      num,
      num * maxTillIndex[i - 1],
      num * minTillIndex[i - 1]
    );

    max = Math.max(max, maxTillIndex[i]);
  }

  return max
}

console.log(maxProduct([2, 3, -2, 4]));
