// https://leetcode.com/problems/palindromic-substrings/


function countSubstrings(s: string): number {
    if(s.length === 1) return 1;

    const check =  (str: string) => {
        if(str === str.split('').reverse().join('')) {
            return 1
        } else {
            return 0;
        }
    }

    let count: number = s.length;

    for(let i = 0; i < s.length; i++){
        for(let j = 1; j < s.length - 1; j++) {
            count += check(s.slice(i, j + 1))
        }
    }

    return count;
};


// aadfde


// count = 6;

let string = "aadfde"

console.log(string.slice(0, 5))