// https://www.codewars.com/kata/54ff3102c1bad923760001f3/solutions/typescript

const getCount = (str: string): number => {
  const arr: string[] = str.split("");

  let count: number = 0;

  for (let i = 0; i < arr.length; i++) {
    if (
      arr[i] === "a" ||
      arr[i] === "e" ||
      arr[i] === "i" ||
      arr[i] === "o" ||
      arr[i] === "u"
    ) {
      count++;
    }
  }

  return count;
};
