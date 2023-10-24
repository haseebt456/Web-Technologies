const list = document.querySelectorAll('li');

for(let x of list)
{
    x.classList.toggle('highlight');
}