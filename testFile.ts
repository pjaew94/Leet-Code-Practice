function maxSubArray2(nums: number[]): number {
    let a1 = 0;
    let a2 = nums[0];

    nums.forEach(num => {
        a1 = Math.max(num, a1 + num);
        a2 = Math.max(a2, a1)
    })

    return a2
};