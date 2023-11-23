let point = {
    x:10,
    y:30
};
point.x=10.1;
point.y= 30.5;
point.z=40.8;
point["t"]="some text";
console.log(point);
console.log(point["t"]);