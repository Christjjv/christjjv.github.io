window.onscroll = function(){
    var_scroll = document.documentElement.scrollTop; /* aqui es el numero de pixeles que recorremos */
    var_header = document.getElementById("idHeader");

    if(var_scroll > 20){
        var_header.classList.add('nav-mod');
    }else
    if(var_scroll < 20){
        var_header.classList.remove('nav-mod');
    }
}