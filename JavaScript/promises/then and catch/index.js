let p1 = new Promise((ressolve,reject)=>{
    console.log("promise pending");

    setTimeout(()=>{
        //console.log("i am a promise and i am fulfilled");
        ressolve(true);
    },5000)
});

let p2 = new Promise((ressolve,reject)=>{
    console.log("promise pending");

    setTimeout(()=>{
        //console.log("i am a promise and i am rejected");
        reject(new Error("i am an error in p2"));
    },5000)
});
//ressolve and reject are two callbacks provided by javascript 

/* console.log(p1);
console.log(p2); 
//replacing console.log with then which is used to show when promise completes
*/
p1.then((value)=>{
    console.log(value);
});

/* p2.catch((error)=>{
    console.log(error);
}); */
//alternate way

p2.then((value)=>{
    console.log(value);
},(error)=>{
    console.log(error);
})

/* let p3 = new Promise((ressolve,reject)=>{
    console.log("p3 pending");
    ressolve("done")
},10000);

p3.then(alert); */