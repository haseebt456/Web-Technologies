function disapear()
{
    const div=document.getElementById('container');
    div.style.display = 'none';
}

function inputData()
{
    var title=document.getElementById('title').value
    var author=document.getElementById('author').value
    const t = document.createElement('p')
    const a= document.createElement('p')
    const btn = document.createElement('button')
    const div = document.createElement('div')
    t.innerText = title;
    a.innerText = author;
    btn.innerText = "remove";
    btn.addEventListner("click",()=> {
        div.querySelector("#p").style.display = 'none';
    }); 
    const cont=document.getElementById('container');
    div.appendChild(t);
    div.appendChild(a);
    div.appendChild(btn);
    cont.appendChild(div);
}