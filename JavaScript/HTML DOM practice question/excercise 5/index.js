const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

const span = document.querySelectorAll('span');
for(i=0 ; i < span.length; i++)
{
    span[i].style.color=colors[i];
}