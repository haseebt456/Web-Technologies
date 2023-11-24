let students = ["Usman","Haseeb","Ali"];
let searchedStudents= students.find(findAli);
let searchedStudents2= students.findIndex(findAli);
console.log(searchedStudents);
console.log(searchedStudents2);

//let sorted=students.sort();
//students.splice(2,1,...["talha","Roman"]);
//console.log(sorted);
let sorted=students.sort(customSort);
console.log(sorted);
function customSort(a,b)
{
    if(b > a) return -1; else return 1;
}
let rates = [2,5,7,9];
let newRates = rates.map(function(r){
    return r*2;
});
console.log(newRates);
function findAli(std){
    if(std=="Ali")
    return true;
else
return false;
}
console.log(students);