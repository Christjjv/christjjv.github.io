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
/*const carruselSlider = document.querySelector('.slider');
const itemSlider = document.getElementsByClassName('slider-item');
const itemPaginacion = document.getElementsByClassName('paginacion-item ');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');

let index = 1;

width = itemSlider[0].clientWidth;
carruselSlider.style.transform = 'translateX('+ (-width * index) + 'px)';

function sliderWidth(){
    width = itemSlider[0].clientWidth;
}

sliderWidth();
window.addEventListener('resize', sliderWidth);

//Go to next slide
nextBtn.addEventListener('click', nextSlide);

function nextSlide(){
    if(index >= itemSlider.length - 1){return}
    carruselSlider.style.transition = 'transform 0.4s ease-out';
    index++;
    carruselSlider.style.transform = 'translateX('+ (-width * index) + 'px)';

    itemPaginacionLabel();
}

//Go to prev slide
prevBtn.addEventListener('click', prevSlide);

function prevSlide(){
    if(index <= 0){return}
    carruselSlider.style.transition = 'transform 0.4s ease-out';
    index--;
    carruselSlider.style.transform = 'translateX('+ (-width * index) + 'px)';

    itemPaginacionLabel();
}

//return to the primera slider 
carruselSlider.addEventListener('transitionend', function(){
    if(itemSlider[index].id === 'firstImageDuplicate'){
        carruselSlider.style.transition = 'none';
        index = itemSlider.length - index;
        carruselSlider.style.transform = 'translateX('+ (- width * index) + 'px)';

        itemPaginacionLabel();
    }

    if(itemSlider[index].id === 'lastImageDuplicate'){
        carruselSlider.style.transition = 'none';
        index = itemSlider.length - 2;
        carruselSlider.style.transform = 'translateX('+ (- width * index) + 'px)';

        itemPaginacionLabel();
    }
});

//auto sliding
function autoSlider(){
    deleteInterval = setInterval(timer, 3000);
    function timer(){
        nextSlide();
    }
}

autoSlider();

//stop auto sliding con el mouse
const mainContainer = document.querySelector('.container-slider');
mainContainer.addEventListener('mouseover', function(){
    clearInterval(deleteInterval);
});

//resume sliding con el mouse
mainContainer.addEventListener('mouseout', autoSlider);

function itemPaginacionLabel(){
    for(i = 0; i< itemPaginacion.length; i++){
        itemPaginacion[i].className = itemPaginacion[i].className.replace(' active', '');
    }
    itemPaginacion[index - 1].className += ' active';
}*/

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