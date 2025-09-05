console.log(26 == "26");
console.log(26 === "26");

//--------------------------------------------

let isUndefined;
let isNull = null;

console.log(isUndefined);
console.log(isNull);


//--------------------------------------------

const obj = {
  value: 25,
  regularFunction: function() {
    console.log("regular Function:", this.value); 
  },

  arrowFunction: () => {
    console.log("arrow Function:", this.value); 
  }
};

obj.regularFunction(); 
obj.arrowFunction();  

//--------------------------------------------


let array1 = [2, 4, 6];

let array2 = array1; 
array2.push(8);

console.log("array 1:", array1); 
console.log("array 2 ( = copy):", array2); 


let array3 = [1, 3, 5];
let array4 = [...array3];
array4.push(7);

console.log("array 3:", array3); 
console.log("array 4 (spread operators):", array4);