function disapear()
{
    const div=document.getElementById('div');
    const para = div.querySelector('#para');
    para.style.display='none';

    const h = document.createElement('h1')
    h.innerText = "Hello Pakistan"
    div.appendChild(h);
}
