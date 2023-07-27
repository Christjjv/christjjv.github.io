const vservEduc = document.querySelector(".container-serv-edu")
const vcarrusel = document.querySelector(".carrusel");
const direccionBtn = document.querySelectorAll(".container-serv-edu i");
const primeraCardWidth = vcarrusel.querySelector(".card").offsetWidth;
const vcarruselHijos = [...vcarrusel.children];

let isArrastrar = false, startX, starScrollLeft, tiempoFueraId;

//obtiene un numero de cards
let cardPerView = Math.round(vcarrusel.offsetWidth / primeraCardWidth);

//Inserta copias de cards de ultimo
vcarruselHijos.slice(-cardPerView).reverse().forEach(card => {
    vcarrusel.insertAdjacentHTML("afterbegin", card.outerHTML);
});

//Inserta copias de cards de inicio
vcarruselHijos.slice(0, cardPerView).forEach(card => {
    vcarrusel.insertAdjacentHTML("beforeend", card.outerHTML);
});

//Es para funcionalidad de los botones dereha e izquierda.
direccionBtn.forEach(btn => {
    btn.addEventListener("click", () => {
        //console.log(btn.id);
        vcarrusel.scrollLeft += btn.id === "idIzquierda" ? -primeraCardWidth : primeraCardWidth;
    });
});

const arrastrarInicio = (e) => {
    isArrastrar = true;
    vcarrusel.classList.add("arrastrarFin");
    //Inicializa el cursos y el scroll en su posicion del carrusel
    startX = e.pageX;
    starScrollLeft = vcarrusel.scrollLeft;
}

const arrastrarFin = (e) => {
    //console.log(e.pageX);
    if(!isArrastrar) return;
    //actualiza la posicion del scroll en la base del carrusel del cursor en movimiento
    vcarrusel.scrollLeft = starScrollLeft - (e.pageX - startX);
}

const arrastrarParar = () => {
    isArrastrar = false;
    vcarrusel.classList.remove("arrastrarFin");
}

const automatico = () => {
    if(window.innerWidth < 800) return;
    //Automático el carrusel despues de 2500ms
    tiempoFueraId = setTimeout(() => vcarrusel.scrollLeft += primeraCardWidth, 2500);
}
automatico();

const infinitoScroll = () => {
    //este es cuando el carrusel llegue al comienzo vuelva al final
    if(vcarrusel.scrollLeft === 0){
        //console.log("Usted alcanzo el final de lado izquierdo");
        vcarrusel.classList.add("no-transition");
        vcarrusel.scrollLeft = vcarrusel.scrollWidth - (2 * vcarrusel.offsetWidth);
        vcarrusel.classList.remove("no-transition");
    }else 
    //este es cuando el carrusel llegue al final vuelva al comienzo
    if(Math.ceil(vcarrusel.scrollLeft) === vcarrusel.scrollWidth - vcarrusel.offsetWidth){
        //console.log("Usted alcanzo el final de lado derecho");
        vcarrusel.classList.add("no-transition");
        vcarrusel.scrollLeft = vcarrusel.offsetWidth;
        vcarrusel.classList.remove("no-transition");
    }

    clearTimeout(tiempoFueraId);
    if(!vservEduc.matches(":hover")) automatico();
}

vcarrusel.addEventListener("mousedown", arrastrarInicio);
vcarrusel.addEventListener("mousemove", arrastrarFin);
document.addEventListener("mouseup",arrastrarParar);
vcarrusel.addEventListener("scroll", infinitoScroll);
vservEduc.addEventListener("mouseenter", () => clearInterval(tiempoFueraId));
vservEduc.addEventListener("mouseleave", automatico);