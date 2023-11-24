const {checkEligibility , checkTest} = require("./node_modules/haseeb-license-checker/index");

let test=true;
let age = 20;

console.log(checkEligibility(test,age,checkTest));