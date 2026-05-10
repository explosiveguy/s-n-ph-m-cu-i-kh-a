let fruits = ["apple", "banan", "orange"];
let empty_array = [];

let arr = [1, 2, "three", true, null]
console.log(arr[0]);

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

arr.push(5,10)
console.log(arr);

arr[0]=0
console.log(arr);
arr.splice(3, 2, false)
console.log(arr);

console.log(arr.indexOf(false));
console.log(arr.indexOf(9));

arr.splice(2, 2)
console.log(arr);

let human = {
    first_name: "kai",
    last_name:"Ludwig",
    weapon:"knife",
    age: 60
}

console.log(human.first_name);
console.log(human["last_name"]);

for (let key in human){
    console.log(human[key]);
    
}
human.hometown = "UK";
human["pet"] = "wolf";
human.age = 30
console.log(human);

if ("weapon" in human) {
    console.log("he have a knife");
    
}

delete human.pet
console.log(human);
/**
let elementbyid = document.getElementByid("p1");
let elementbyclassname = document.getElementByclassName("p2");
let elementbytag = document.getElementsByTagName("p");
let element = document.querySelector('.p');
let element1 = document.querySelector('#p');

let newelement = document.createElement("div");

document.body.appendChild (newelement);

let item_container = querySelector(".container");
item_container.appendChild(newelement);
item_container.innerHTML='<p>new content</p>';*/

let container = document.querySelector(".container");
let new_element = document.createElement("div");
container.appendChild(new_element);