// https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1/train/typescript

export function duplicateCount(text: string): number {
  let lowerCased = text.toLowerCase();
  let map = [];

  for (let i = 0; i < text.length; i++) {
    if (map.hasOwnProperty(lowerCased[i])) {
      map[lowerCased[i]]++;
    } else {
      map[lowerCased[i]] = 0;
    }
  }

  let count: number = 0;
  for (let value of Object.values(map)) {
    if (value > 0) count++;
  }

  return count;
}

console.log(duplicateCount("aabbcde"));
