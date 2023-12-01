
let p1 = new Promise((ressolve,reject)=>{
    setTimeout(()=>{
        console.log("ressolved after two minutes");
        ressolve(50);
    },2000)
});

p1.then((value)=>{
    console.log(value);
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("promise 2 resolved");
        },2000)
    })
}).then((value)=>{
    console.log(value);
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("promise 3 resolved");
        },2000)
    })
}).then((value)=>{
    console.log(value)
    return 2;
}).then((value)=>{
    console.log("Automatic converted constant value to promise");
})