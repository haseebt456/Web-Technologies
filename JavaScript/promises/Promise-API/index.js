
let p1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("value 1");
    },4000)
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
    },1000)
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
    console.log("Simple .all to hanlde all promsie together")
    for(let i=0;i<value.length;i++){
        console.log(value[i]);
    }
});
let promise_all_reject=Promise.all([p1,p_rejected,p3]);//values of all promises will be stored in promise_all array
console.log("In case of rejection promise will not work now");
promise_all_reject.then((value)=>{
    for(let i=0;i<value.length;i++){
        console.log(value[i]);
    }
});

//to solve promise.all rejection issue we will use .allSettled which will not only give value but also status
let promise_all_set = Promise.allSettled([p1,p_rejected,p3]);
promise_all_set.then((value)=>{
    console.log(".allSetled that will show result whether a rejection occured");
    for(let i=0;i<value.length;i++){
        console.log(value[i]);
    }
});

let promise_race = Promise.race([p1,p2,p3]);

promise_race.then((value)=>{
    console.log("Promise.race showing value of earliest ressolved promise");
    console.log(value);
});
//In case of rejection and it is ealiest executed then it shows error
//for this problem we use .any
let promse_any = Promise.any([p1,p_rejected,p3]);
//throw aggregate error if all promise are rejected
promse_any.then((value)=>{
    console.log("Wait for any promise to fullfill && not rejected");
    console.log(value);
});