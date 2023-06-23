menu = document.getElementById("cabecera");
body = document.getElementById("container_todo");
nav = document.getElementById("navegador");


window.onscroll = function(){
    scrol = document.documentElement.scrollTop; 
    header = document.getElementById("cabecera");

    if (scrol > 20){
        cabecera.classList.add('naveg_mod')
    }else
    if (scrol < 20){
        cabecera.classList.remove('naveg_mod')
    }
}

document.getElementById("btn_iconMenu").addEventListener("click", mostrar_menu);

function mostrar_menu(){
    menu.classList.toggle('move_content');
    body.classList.toggle('move_content');
    nav.classList.toggle('move_naveg');
}

window.addEventListener("resize", function(){
    if (window.innerWidth > 760){
        menu.classList.remove('move_content');
        body.classList.remove('move_content');
        nav.classList.remove('move_naveg');
    }
})