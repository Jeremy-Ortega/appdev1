const hobbies = ["Drawing", "Walking", "Cooking"]

hobbies.map(hobbies => console.log(hobbies));

//--------------------------------------------

let {name, age} = {
    name: "Jeremy",
    age: "20"
}

console.log(name);
console.log(age);

//--------------------------------------------

const oldArray = [1 ,2 ,3]

const newArray = [...oldArray, 4, 5]
console.log(newArray);
