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
