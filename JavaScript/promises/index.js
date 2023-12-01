
const promise = new Promise(function(resolve,reject){
    console.log("hello");
    resolve(50);
});

console.log("Hello one ");

setTimeout(function(){
    console.log("Hello two after two seconds");
},2000);

console.log("hello three");
console.log(promise);
