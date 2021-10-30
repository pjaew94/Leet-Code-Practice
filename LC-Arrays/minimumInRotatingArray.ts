// https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/


function findMin(nums: number[]): number {

    let sorted = nums.sort((a, b) => a - b)
    return sorted[0]
};

console.log(findMin([4,5,6,7,0,1,2]))