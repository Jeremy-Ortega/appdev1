const numbers = [1, 2, 3];
const user = { name: "Jeremy", age: 20 }; 

const clonedNum = [...numbers];
const extendedNum = [...numbers ,4 ,5 ,6];

console.log(extendedNum[1]);

//--------------------------------------------
function sumOfAnyNumbers(...numbers) {
  return numbers.reduce((total, n) => total + n, 0);
}

console.log(sumOfAnyNumbers(1,2,3,4,5,6,26));