// https://www.codewars.com/kata/523f5d21c841566fde000009/train/typescript

export function arrayDiff(a: number[], b: number[]): number[] {
    if(a.length === 0 || b.length === 0) return a;

    const exists = (n: number, arr: number[]) => {
        return arr.includes(n)
    }

    let output: number[] = [];

    for(let number of a) {
        if(exists(number, b)) {
            continue;
        } else {
            output.push(number)
        }
    }
    return output
  }
  

  console.log(arrayDiff([1,8,2], [2]))