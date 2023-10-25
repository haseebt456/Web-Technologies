
const cont=document.getElementById('par');
var progreesCount=0;
function forward()
{ 
    if(progreesCount == 0)
    {
       const first =cont.firstElementChild;
       const second = first.nextElementSibling;
       first.classList.add("fill");
       second.classList.add("fill");
       var current=second.nextElementSibling;  
       progreesCount++;
    }
    else{
   if(current.nextElementSibling && progreesCount!=0)
   {
    current.classList.add("fill");
    current.nextElementSibling.classList.add("fill");
    current=current.nextElementSibling.nextElementSibling;
   }
   else
   {
    current.classList.add("fill");
   }
}
}

