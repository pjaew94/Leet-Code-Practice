// https://leetcode.com/problems/two-sum/


// Solution Method: Hash map
// T.C: O(N)
// S.C: O(N)
// 1. Create new map to store the value at the position of array and the index of it
// 2. Inside of for loop, calculate complement of the current number in respect to the target
// 3. Check if the complement is already stored in the hashmap. (is it?) then return the index of the complement and the current index.
//     (is it not?) skip the step and store the current value and the index inside of the map
function twoSum(nums: number[], target: number): number[] {
  const map: Map<number, number> = new Map();

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (map.has(complement)) {
      return [map.get(complement), i];
    }
    map.set(nums[i], i);
  }
}

// twoSum([2, 7, 11, 15], 9);
