/******************* Para el menu desplazandose ***********************/
window.onscroll = function(){
    var_scroll = document.documentElement.scrollTop; /* aqui es el numero de pixeles que recorremos */
    var_header = document.getElementById("cabecera");

    if(var_scroll > 20){
        var_header.classList.add('naveg-movi');
    }else
    if(var_scroll < 20){
        var_header.classList.remove('naveg-movi');
    }
}


/*************** Para aparecer menu a lado derecho ***************/
document.getElementById("boton-menu").addEventListener("click", mostrar_menu);
var_menu = document.getElementById("cabecera");
/*var_texto = document.getElementById("idTexto");*/
var_nav = document.getElementById("navegador");

function mostrar_menu(){
    var_menu.classList.toggle('move-content');
    /*var_texto.classList.toggle('move-content');*/
    var_nav.classList.toggle('move-naveg');
}


/******************* Messenger ***********************/
var chatbox = document.getElementById('fb-customer-chat');
chatbox.setAttribute("page_id", "112327411899958");
chatbox.setAttribute("attribution", "biz_inbox");
chatbox.setAttribute("theme_color", "#0084FF");

window.fbAsyncInit = function() {
    FB.init({
        xfbml   : true,
        version : 'v17.0'
    });
};

(function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = 'https://connect.facebook.net/es_LA/sdk/xfbml.customerchat.js';
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));