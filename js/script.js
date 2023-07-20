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
/*************** Para aparecer menu a lado izquierdo ***************/
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




/*************** Estido Slider - Carrusel **************/
//Acceso a las imagenes.
let sliderImagen = document.querySelectorAll('.imagenes');


//Acceso a los botones de siguiente y retroseso
let btnNext = document.querySelector('.next');
let btnPrev = document.querySelector('.prev');


//Acceso a los indicadores
let itemPaginacion = document.querySelectorAll('.paginacion');


var counter = 0;


//Codigo para el boton de siguiente
btnNext.addEventListener('click', sliderNext);

function sliderNext(){
    sliderImagen[counter].style.animation = 'next1 0.5s ease-in forwards';

    if(counter >= sliderImagen.length-1){
        counter = 0;
    }else{
        counter++;
    }

    sliderImagen[counter].style.animation = 'next2 0.5s ease-in forwards';
    paginacionIndicador();
}


//Codigo para el boton de retroceso
btnPrev.addEventListener('click', sliderPrev);

function sliderPrev(){
    sliderImagen[counter].style.animation = 'prev1 0.5s ease-in forwards';

    if(counter == 0){
        counter = sliderImagen.length-1;
    }else{
        counter--;
    }

    sliderImagen[counter].style.animation = 'prev2 0.5s ease-in forwards';
    paginacionIndicador();
}

// Auto slideing
function autoSlinding(){
    deletInterval = setInterval(timer, 3000);

    function timer(){
        sliderNext();
        paginacionIndicador();
    }
}

autoSlinding();

//Parar el auto sliding cuando se pasa el mouse
const container = document.querySelector('.container-slider');
container.addEventListener('mouseover', function(){
    clearInterval(deletInterval);
});

//Restaurar el sliding cuando se aleja el mouse
container.addEventListener('mouseout', autoSlinding);

// ingresar y remover las clases actividad de los indicadores
function paginacionIndicador(){
    for(i = 0; i < itemPaginacion.length; i++){
        itemPaginacion[i].className = itemPaginacion[i].className.replace(' active', '');
    }

    itemPaginacion[counter].className += ' active';
}

// añadir evento click en el indicador
function switchImage(currentImage){
    currentImage.classList.add('active');
    var imageId = currentImage.getAttribute('attr');

    if(imageId > counter){
        sliderImagen[counter].style.animation = 'next1 0.5s ease-in forwards';
        counter = imageId;
        sliderImagen[counter].style.animation = 'next2 0.5s ease-in forwards';
    }else
    if(imageId == counter){
        return
    }else{
        sliderImagen[counter].style.animation = 'prev1 0.5s ease-in forwards';
        counter = imageId;
        sliderImagen[counter].style.animation = 'prev2 0.5s ease-in forwards';
    }

    paginacionIndicador();
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