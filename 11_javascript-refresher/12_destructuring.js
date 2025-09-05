
const person = {
  name: "Jeremy",
  age: 20
};

const hobbies = ["drawing", "walking", "drinking water", "sleeping"];

//--------------------------------------------

function printName(person){
    console.log(person.name);
};

const [first, second, third, fourth] = hobbies;

printName(person);
console.log(third);


