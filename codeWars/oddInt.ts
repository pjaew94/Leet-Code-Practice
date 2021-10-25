export const findOdd = (xs: number[]): number => {
  const sortedArray = xs.sort((a, b) => {
    return a - b;
  });

  let curr: number = sortedArray[0];
  let count: number = 1;

  for (let i = 1; i <= xs.length; i++) {
    if (sortedArray[i] !== curr && count % 2 !== 0) {
      return curr;
    } else if(sortedArray[i] === curr) {
        count ++
    } else {
        curr = sortedArray[i]
        count = 1
    }
  }
};




console.log(findOdd([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5]))