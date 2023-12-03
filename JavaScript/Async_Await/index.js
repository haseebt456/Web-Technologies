//A functionis made async
//Async functionalways return promise
//async ensures function returns a promise and wraps non-promise in it

async function myfunction(){
    return 5;
};

myfunction().then((value)=>{
    alert(value);
})