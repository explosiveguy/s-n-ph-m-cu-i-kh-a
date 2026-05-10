let user = [
    {name:"object1",id:1},
    {name:"object2",id:2},
    {name:"object3",id:3},
];
user.push({name:"object4"})
console.log(user);

    
for (let i = 0; i < user.length; i++) {
  if (user[i].name === "object") {
    user[i].id = 4; 
  }
}
console.log(user);
