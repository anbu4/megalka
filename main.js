const box = document.querySelector('.box')



box.addEventListener('click', on)

function on(){
    box.classList.add('blue')  
    setInterval(full, 125)
}
function full(){
    box.classList.toggle('blue')
    box.classList.toggle('red')
}


