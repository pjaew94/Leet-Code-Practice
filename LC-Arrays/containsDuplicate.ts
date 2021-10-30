// https://leetcode.com/problems/contains-duplicate/

// Solution Method: Create Set (basically array of numbers) and check if a number is stored in there.
// 1. Create set that will contain all of the encountered numbers.
// 2. Create for loop to iterate through each of the numbers
// 3. Check if the current number has already been encountered by checking inside of the set.
// 4. If the number has not been encountered, store inside of the set
// 5. If we iterated through each of the numbers and we have not seen a dupe, then return false.

function containsDuplicate(nums: number[]): boolean {
  const seenNumbers = new Set<number>();
  for(let num of nums) {
    if(seenNumbers.has(num)) return true;
    seenNumbers.add(num);
  }

  return false;
}

containsDuplicate([1, 2, 3, 1]);
