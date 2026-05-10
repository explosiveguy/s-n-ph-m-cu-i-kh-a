let scoop = 0
if (scoop >= 5) {
    console.log("eat faster bro");
}
else if (scoop == 3) {
    console.log("about to run out");
    
}
else if (scoop == 2) {
    console.log("round 1");
    
}
else if (scoop == 1) {
    console.log("round 2");
    
}
else if (scoop <= 0){
    console.log("all gone bro");
    
}

let x = 3
let y = -7
let z = 2
let i = x*y*z
if (i<=0) {
    console.log("-");
    
}
else if (i >= 0){
    console.log("+");
    
}
else if (i=0){
    console.log("empty");
    
}
for(let i =0; i<=15; i++ ){
    if(i%2 == 0)
    console.log(i+" chẵn");
    else(i%2 == 1)
    console.log('${i} lẻ');
    
}