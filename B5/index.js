function dien_tich_hcn(width, length) {
    let area = width * length;
    console.log(area);
}

dien_tich_hcn(9,10);

let width = 5
let length = 8
dien_tich_hcn(width, length);

function dien_tich_hcn1(width, length) {
    let area = width * length;
    return area;
}
let result=dien_tich_hcn1(10,9);
console.log(result);

function dien_tich_hcn2(width, length) {
    let area = width * length;
    console.log(area);
}
dien_tich_hcn2

function get_sum(a, b) {
    let sum = x + y
    console.log(sum);
}
//let //local variable
//const // co dinh
//var // global variable

{
    var g= 1
    console.log(g);
}
console.log(g);

/**
 * local storage
 */
//luu tru cac gia tri
localStorage.setItem("name", "kien");

//truy van gia tri
let test = localStorage.getItem("name");
console.log(test);

//xoa gia tri
localStorage.removeItem("name");

//xoa all
localStorage.clear();

let user = {
    username: "kien",
    password: "kien",
    email: "a@gmail.com",
    age: "10",
}
//luu du lieu thong qua json vao local storage
localStorage.setItem("user", JSON.stringify(user))

// Lay du lieu tu localstorage thong qua json
let test_date = JSON.parse(localStorage.getItem("user"))
console.log(test_date);
