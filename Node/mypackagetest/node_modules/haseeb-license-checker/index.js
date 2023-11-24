function checkEligibility(testPassed,age,callback) {
    setTimeout(function(){
        callback(testPassed);
    },1000);
    console.log("--checking Age--");
    if(age > 18)
    {
        return "Eligible for test";
    }
};

function checkTest(testPassed)
{
    console.log("--Checking test--");
    if(testPassed == true)
    console.log("Eligible for license");
else 
console.log("You are not eigible for license");
}

module.exports= {
    checkEligibility,
    checkTest,
}