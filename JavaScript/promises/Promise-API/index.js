
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

let p_rejected = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        reject(new Error("Error occured"));
    })
})
/* p1.then((value)=>{
    console.log(value);
})
p2.then((value)=>{
    console.log(value);
})
p3.then((value)=>{
    console.log(value);
}) */

//in real life we don't know how much it will take for a promise to complete
//to run all promise together we will use promise.all
//If any of the promise is rejected then promise.all will not work 
let promise_all=Promise.all([p1,p2,p3]);//values of all promises will be stored in promise_all array

promise_all.then((value)=>{
    for(let i=0;i<value.length;i++){
        console.log(value[i]);
    }
});
let promise_all_reject=Promise.all([p1,p_rejected,p3]);//values of all promises will be stored in promise_all array
promise_all_reject.then((value)=>{
    for(let i=0;i<value.length;i++){
        console.log(value[i]);
    }
});

//to solve promise.all rejection issue we will use .allSettled which will not only give value but also status
let promise_all_set = Promise.allSettled([p1,p_rejected,p3]);
promise_all_set.then((value)=>{
    for(let i=0;i<value.length;i++){
        console.log(value[i]);
    }
}) 