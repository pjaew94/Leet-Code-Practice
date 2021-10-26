// https://www.codewars.com/kata/541c8630095125aba6000c00/train/typescript

const digitalRoot = (n: number): number => {
    let arr = n.toString().split('').map(Number);
    let res: number = 0;

    while(arr.length > 1) {
        res = arr.reduce((a, b) => a + b, 0)
        arr = res.toString().split('').map(Number);
    }

    return res;

};



console.log(digitalRoot(132189))