let p1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve(4);
    },2000)
});

p1.then((value)=>{
    console.log("first handler")
})
p1.then((value)=>{
    console.log("second handler");
})