let favoriteFoods = ["Sinigang", "Fried Chicken", "Kape"];
//-------------------------------------------- 

favoriteFoods.push("Matcha frappe");
favoriteFoods.shift();
//-------------------------------------------- 

for (let i = 0; i < favoriteFoods.length; i++){
    console.log(favoriteFoods[i]);
}
//-------------------------------------------- 

let likedFoods = favoriteFoods.map(favoriteFoods => `I like ${favoriteFoods}`);
console.log(likedFoods);