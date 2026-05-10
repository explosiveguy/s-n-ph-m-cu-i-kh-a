let x = 1
let y = 2
console.log(x + y);
console.log(x / y);
console.log(x * y);
console.log(y % x);
let a = 5
a%=4
console.log(a);

let c = 20;
let b = 10;
console.log(b == c);

console.log(b != c);
console.log(b > c);
console.log(b < c);


let d = 20;
let e = 10;
console.log(d > 5 && e > 5);
console.log(d > 10 && e > 5);

console.log(d > 5 || e > 5);
console.log(d < 5 || e < 5);

let f = true
let g = false
console.log(!f);
console.log(!g);

let score = 10
if (score == 10){
    console.log("giỏi thế bro");
}

let age = 9
if (age >= 18) {
    console.log("adult");

}
else {
    console.log("not adult");
    
}

let price = -50
if (price >=100) {
    console.log("shit is expensive");
    
}
else if (price < 100 && price >=50) {
    console.log("not shit and expensive");
    
}
else {
    console.log("shit cheap");
    
}
if (price < 0 && price){
    console.log("get a job bro");
    
}

for(let i = 1; i <=50; 1++ ){
    console.log(i);
    
}
