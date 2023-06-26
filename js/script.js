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




var chatbox = document.getElementById('fb-customer-chat');
chatbox.setAttribute("page_id", "112327411899958");
chatbox.setAttribute("attribution", "biz_inbox");

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
