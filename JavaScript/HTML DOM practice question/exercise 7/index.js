const  div= document.querySelector('#container');

for(let i=0; i < 100; i++)
{
    const newbtn=document.createElement('button');
    newbtn.innerHTML='click';
    div.append(newbtn);
}