let x=10;
let y=x;
x=20;
console.log(y);

//shallow copy means passes refernce rather than value
//object,arrays,function e.g
//deep copy passes value of the variable
//number,string i.e..
let user={name:"haseeb",email:"haseeb@gmail.com"};
let anotherUser=user;//shallow copy
let anotherAnotherUser = Object.assign({},user);//deep copy
let user1 = {...user};//...spread operator will create deep copy
user.name = "Talha";
console.log(anotherUser);
console.log(anotherAnotherUser);
console.log(user1);