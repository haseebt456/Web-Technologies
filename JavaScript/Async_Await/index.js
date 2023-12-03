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
let lahoreW = await lahoreWeather;
let karachiW = await karachiWeather;
return [lahoreW,karachiW];
}
console.log("welcome to weather app");
let a=getWeather();
console.log(a);
//in real we will not create new promises like this rather promises will be returned automaticaly like in mongoose
//we are trying to mimick 
/* async function myfunction()
{
    return 5;
};

myfunction().then((value)=>{
    alert(value);
}); */