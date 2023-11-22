
const cont=document.getElementById('par');
var child=cont.firstElementChild;
const nextbtn = document.getElementById('nxtBtn')
const prevbtn = document.getElementById('preBtn')

function forward()
{ 
   if(child.previousElementSibling==null){
        prevbtn.disabled=false;
    }
    if(child.classList.contains('fill'))
    {
        child=child.nextElementSibling;
        child.classList.toggle('active');
        if(child.nextElementSibling==null){
            nextbtn.disabled=true;
            return;
        }
        else {
            child=child.nextElementSibling;
            child.classList.toggle('fill');
        }
    }
    else {
        child.classList.toggle('fill');
        child=child.nextElementSibling;
        child.classList.toggle('fill');
    
}
}

function previous()
{
    if(child.nextElementSibling==null){
        nextbtn.disabled=false;
    }
    if(child.classList.contains('fill'))
    {
        child.classList.remove('fill');
        child=child.previousElementSibling;
        child.classList.remove('fill');
    }
    else {
        if(child.previousElementSibling) {
            child=child.previousElementSibling;
            child.classList.remove('fill');
            if(child.previousElementSibling==null){
                prevbtn.disabled=true;
                return;
            }
            else {
                child=child.previousElementSibling;
                child.classList.remove('fill');
            }
        }
    }
}
