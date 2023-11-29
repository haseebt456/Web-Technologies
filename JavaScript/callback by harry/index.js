//syncronous programming - runs step by step in sequence
/* let a = prompt("What is ypur name?");
let b = prompt("What is your age?");

console.log("Age of "+a+" is "+b);
 */

//Assync programming - actions that are initiates now and they finish later

console.log("start");
setTimeout(function(){
    console.log("Hey, i am haseeb");
});
console.log("end");