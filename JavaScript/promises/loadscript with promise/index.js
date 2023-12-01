
const loadscript = (src) =>{
    return new Promise((resolve,reject)=>{
        let script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = src;
        document.body.appendChild(script);
        script.onload = ()=>{
            resolve(1);
        }
        script.onerror = ()=>{
            reject(0);
        }
    })
}

let p1 = loadscript("https://localhost:3000/api/products/5");
p1.then((value)=>{
    console.log(value);
}).catch((value)=>{
    console.log("Error loading script and returned value : "+value);
}) ;

let p2 = loadscript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js");
p2.then((value)=>{
    console.log("Loaded script returned value : "+value);
}).catch((error)=>{
    console.log(error);
})