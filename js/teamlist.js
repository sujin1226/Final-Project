const linkcopy = document.querySelectorAll('.linkcopy');
const tooltip = document.querySelectorAll('.tooltip');
const tooptiptriangle = document.querySelectorAll('.tooptip::after');

// tooptip copy 효과
for(let i=0; i<linkcopy.length; i++)
{
    linkcopy[i].addEventListener('mouseover', function(){
        tooltip[i].style.opacity = '1';
    })

    tooltip[i].addEventListener('click', function(){
        tooltip[i].innerHTML = 'Copied';
    })

    linkcopy[i].addEventListener('click', function(){
        tooltip[i].innerHTML = 'Copied';
    })
    
    linkcopy[i].addEventListener('mouseout', function(){
        tooltip[i].style.opacity = '0';
    })

    tooltip[i].addEventListener('mouseout', function(){
        tooltip[i].innerHTML = 'Copy';
    })

}

