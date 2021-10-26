// https://www.codewars.com/kata/52fba66badcd10859f00097e/train/typescript

const disemvowel = (str: string): string => {
  let arr: string[] = str.split("");
  let output: string[] = [];
  for (let i = 0; i < arr.length; i++) {
    if (
      arr[i] === "a" ||
      arr[i] === "e" ||
      arr[i] === "i" ||
      arr[i] === "o" ||
      arr[i] === "u" ||
      arr[i] === "A" ||
      arr[i] === "E" ||
      arr[i] === "I" ||
      arr[i] === "O" ||
      arr[i] === "U"
    ) {
      continue;
    } else {
      output.push(arr[i]);
    }
  }
  return output.join("");
};

console.log(disemvowel("This website is for losers LOL!"));
