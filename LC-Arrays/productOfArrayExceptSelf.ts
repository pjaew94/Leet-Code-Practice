// https://leetcode.com/problems/product-of-array-except-self/



// Solution Method: Create two arrays left and right of the current index and multiply left and right of current index to be filled for solution
// T.C: O(1)
// S.C: O(1)
// 1. Create left side array to store the left side of left multiples
// 2. lefStart will start at 1 for edge cases (when the array is at position 0);
// 3. Store the current left multiple value into the array then multiply that by by number at the same position on nums array./
// 4. Repeat same thing, but just multiply the left side of the array at the index with the right index (remember right goes down the array for position)
// 5. return the right array because it has already been multiplied by the left side for the right solution.

function productExceptSelf(nums: number[]): number[] {
    let left: number[] = [];
    let leftStart: number = 1;
    for(let i = 0; i < nums.length; i++) {
        left[i] = leftStart;
        leftStart *= nums[i];
    };

    let right: number[] = [];
    let rightStart: number =  1;
    for(let i = nums.length - 1; i >= 0; i--) {
        right[i] = rightStart;
        rightStart *= nums[i];
        right[i] *= left[i];
    }

    return right
};


console.log(productExceptSelf([1, 2, 3, 4]))



// Solution Method (My solution): Create set of variables for answer multiplied and keep track of current index of answer[I] being pushed.
// T.C: O(N^2) - NOT ACCEPTED
// S.C: O(N)
// 1. Create answer array to be returned at the end.
// 2. Create set to keep track of the answer[i] to be pushed and which index it's currently on.
// 3. Create while loop to keep iterating while the current index to be filled is less than the nums.length
// 4. Create for loop to itearte through each of the numbers in the array.
// 5. If the index is the same as the index of answer[i] currently working on, skip;
// 6. Else multiply the answer[i] to be pushed
// 7. After each for loop cycle, push the number into the array, reset the answerMultiple, and increment the index of answer to be  worked on
// 8. return answer once while loop is finished.
// function productExceptSelf(nums: number[]): number[] {
//   let answer: number[] = [];
//   let [answerMultiple, currentIndex] = [1, 0];

//   while (currentIndex < nums.length) {
//     for (let i = 0; i < nums.length; i++) {
//       if (i === currentIndex) continue;
//       answerMultiple = answerMultiple * nums[i];
//     }
//     answer.push(answerMultiple);
//     answerMultiple = 1;
//     currentIndex++;
//   }

//   return answer;
// }
