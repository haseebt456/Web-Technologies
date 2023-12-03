
let p1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("value 1");
    },1000)
})
let p2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("value 2");
    },2000)
})
let p3 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("value 3");
    },3000)
});

p1.then((value)=>{
    console.log(value);
})
p2.then((value)=>{
    console.log(value);
})
p3.then((value)=>{
    console.log(value);
})
//in real life we don't know how much it will take for a promise to complete
//to run all promise together we will use promise.all