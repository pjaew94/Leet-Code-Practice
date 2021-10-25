// https://www.codewars.com/kata/514b92a657cdc65150000006/train/typescript

const solution = (number: number) => {
    if (number < 3) return 0;

    let multiples: number[] = [];

    for (let i = 3; i < number; i = i + 3) {
   
      multiples.push(i);
    }

    for (let i = 5; i < number; i = i + 5) {
      if (i % 3 === 0) {
        continue;
      } else {
        multiples.push(i);
      }
    }

    return multiples.reduce((a, b) => a + b, 0)
}

console.log(solution(10))