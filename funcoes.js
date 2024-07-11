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