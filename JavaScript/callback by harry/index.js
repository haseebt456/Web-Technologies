//syncronous programming - runs step by step in sequence
/* let a = prompt("What is ypur name?");
let b = prompt("What is your age?");

console.log("Age of "+a+" is "+b);
 */

//Assync programming - actions that are initiates now and they finish later

/* console.log("start");
setTimeout(function(){
    console.log("Hey, i am haseeb");
});
console.log("end");
 */
//output
//start
//end
//hey,i am haseeb
//But code didn't stopped rather it has just scheduled that settimout action

//Callback - asyncronous programming

function loadscript(src,Callback)
{
    var script = document.createElement('script');
    script.src = src;
    script.onload = function (){
        console.log("loaded script with src : "+src);
        Callback(null,src);
    }
    script.onerror = function(){
        console.log("Error loading scrip with src : "+src);
        Callback(new Error("src got some error"));
    }
    document.body.appendChild(script);
};

function hello(error,src){
    if(error)
    {
        console.log(error);
        return;
    }
    alert("hello"+src)
}
function mycallback(error,src){
    if(error)
    {console.log(error)
        return;
    }
    alert("Call back" +src);
};

loadscript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js",mycallback);

//problem with callback is that a whole function is provided to the function whch can be dangerous in case of minor error
//if somebody pass true in onload success 
//and in call back it calls a emergency function although there is no emergency
//we solve this problem using promises

//pyramid of doom
loadscript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js", function mycallback(error,src){
        if(error)
        {console.log(error)
        return;
        }
        loadscript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap2.bundle.min.js", function mycallback(error,src){
            if(error)
            {console.log(error)
            return;
            }
                loadscript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap3.bundle.min.js", function mycallback(error,src){
                    if(error)
                        {console.log(error)
                        return;
                        }
                        loadscript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap4.bundle.min.js", function mycallback(error,src){
                            if(error)
                            {console.log(error)
                            return;
                            }
                            loadscript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap5.bundle.min.js", function mycallback(error,src){
                            if(error)
                            {console.log(error)
                            return;
                            }
                            loadscript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap6.bundle.min.js", function mycallback(error,src){
                                if(error)
                                {console.log(error)
                                return;
                                }
                                loadscript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap7.bundle.min.js", function mycallback(error,src){}
    )}
    )}
    )}
    )
})
})
})

//as we can see it has created a pyramid of callback
//it is called pyramid of doom or callback hell
//promises will help us when we need to handle multiple callbacks