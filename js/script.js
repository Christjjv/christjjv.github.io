/******************* Para el menu desplazandose ***********************/
window.onscroll = function(){
    var_scroll = document.documentElement.scrollTop; 
    /*var_header = document.getElementById("cabecera");*/
    var_header1 = document.getElementById("idUp");
    var_header2 = document.getElementById("idDown");
    var_navega = document.getElementById("idUlNaveg");

    if(var_scroll > 20){
        /*var_header.classList.add('naveg-movi');*/
        var_header1.classList.add('naveg-movi1');
        var_header2.classList.add('naveg-movi2');
        var_navega.classList.add('naveg-movi3');
    }else
    if(var_scroll < 20){
        /*var_header.classList.remove('naveg-movi');*/
        var_header1.classList.remove('naveg-movi1');
        var_header2.classList.remove('naveg-movi2');
        var_navega.classList.remove('naveg-movi3');
    }
}


/*************** Para aparecer menu a lado derecho ***************/
document.getElementById("boton-menu").addEventListener("click", mostrar_menu);
/*var_menu = document.getElementById("cabecera");*/
/*var_texto = document.getElementById("idTexto");*/
/*var_nav = document.getElementById("navegador");*/
var_nav = document.getElementById("idUlNaveg");

function mostrar_menu(){
    /*var_navega.classList.toggle('move-content');*/
    /*var_texto.classList.toggle('move-content');*/
    var_nav.classList.toggle('move-naveg');
}


/******************* Messenger ***********************/
/*
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
}(document, 'script', 'facebook-jssdk'));*/