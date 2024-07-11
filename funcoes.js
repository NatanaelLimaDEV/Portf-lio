function clickMenu(){
    let menu = document.getElementById('menu')
    let iconMenu = document.getElementById('burguer') 
    let logo = document.getElementById('logo')
    
    if(menu.style.display == 'block'){
        menu.style.display = 'none'
        iconMenu.innerHTML = 'menu'
    } else{
        menu.style.display = 'block'
        iconMenu.innerHTML = 'close'
    }
}

function telaTamanho(){
    if(window.innerWidth >= 768){
        menu.style.display = 'block'
    } else{
        menu.style.display = 'none'
    }
}