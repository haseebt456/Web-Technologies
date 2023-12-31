//A functionis made async
//Async functionalways return promise
//async ensures function returns a promise and wraps non-promise in it

async function getWeather(){
let lahoreWeather = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("20 degree");
    },1000)
});
let karachiWeather = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("25 degree");
    },5000)
});
/* lahoreWeather.then(alert);
karachiWeather.then(alert);
 */
console.log("Fetching lahore weather please wait...");
let lahoreW = await lahoreWeather;//execution stops here due to await keyword resolve this then move forward

console.log("Fetched lahore weather : "+lahoreW);
console.log("Fetching karachi weather please wait...");

let karachiW = await karachiWeather;
console.log("Fetched karachi weather : "+karachiW);

return [lahoreW,karachiW];
}
/* 


//execution might stop in async function 
//but execution of different async functions do not stop
const cherry = ()=>{
    console.log("Hey I am cherry and i am not waiting");
}
console.log("welcome to weather app");
let a = getWeather();
cherry();

a.then((value)=>{//because a is a promise
    console.log(value);
})
//in real we will not create new promises like this rather promises will be returned automaticaly like in mongoose
//we are trying to mimick 



 */

const cherry = async  ()=>{
    console.log("Hey I am cherry and I have waited this time");
}
const main1 = async ()=>{
    console.log("welcome to weather app");
let a = await getWeather();
let b = await cherry();
console.log(a);

}
main1();



/* async function myfunction()
{
    return 5;
};

myfunction().then((value)=>{
    alert(value);
}); */