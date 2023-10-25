function disapear()
{
    this.parentElement.style.display='none';
}

function inputData()
{
    var title=document.getElementById('title').value
    var author=document.getElementById('author').value
    const t = document.createElement('p')
    const a= document.createElement('p')
    const btn = document.createElement('button')
    const div = document.createElement('div')
    div.setAttribute("Id","remove");
    t.innerText = title;
    a.innerText = author;
    btn.innerText = "remove";
    btn.addEventListener("click",disapear)
    /* btn.addEventListner("click",()=> {
        btn.parentElement.style.display=
    }); */ 
    const cont=document.getElementById('container');
    div.appendChild(t);
    div.appendChild(a);
    div.appendChild(btn);
    cont.appendChild(div);
}