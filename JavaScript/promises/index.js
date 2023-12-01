//promise is promise that code will execute
//promise object has two properties - state and result
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

//promises are used for parallel execution 
//fetch google.com homepage => console.log("google.com done");
//fetch data from data api
//fetch pictures from the server
//print downloading 
//and rest of the scrpit

//all above task should run parallely rather it wait for page to load it continue execution
//and do multiple execution 