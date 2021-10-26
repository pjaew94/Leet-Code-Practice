// https://www.codewars.com/kata/5264d2b162488dc400000001/train/typescript


const spinWords = (words: string) => {
    let arr: string[] = words.split(' ');
    let output: string[] = [];

    for(let i = 0; i < arr.length; i++) {
        if(arr[i].length >= 5) {
            output.push(arr[i].split('').reverse().join(''))
        } else {
            output.push(arr[i])
        }
    }

    return output.join(' ')
}

console.log(spinWords("Hey fellow warriors"))