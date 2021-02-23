/////////////////////////////////////////////////////////////


let fechaAqui = document.querySelector("#header small");

let defa = document.querySelector("header a");
let def = document.querySelector(".definicion");
var seccionDef = document.getElementById("definicion");

let nav = document.querySelector("#nav");
let solete = document.querySelector("#solete");
let navOverlay = document.querySelector(".navmenu");
let navOverlayContnt = document.querySelectorAll(".navmenu *");
let navLink = document.querySelector(".navmenu a")

var seccionHeader = document.getElementById("header");
let nombre = document.querySelector("#nombre");
let logo = document.querySelector("header img");
let headertxt = document.querySelectorAll("header article p");

let alien = document.querySelector(".trip");



defa.onclick = function () {
    def.style.height = "40vh";
    return true;
};

/////////////////////////////////////////////////////////////




function Fecha () {

    let meses = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre']


    let hoy = new Date();
    let dia = hoy.getDate();
    let mes = meses[hoy.getMonth()];
    let año = hoy.getFullYear();


        fechaAqui.innerHTML = dia + " de " + mes;
        
}

Fecha()


/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////







solete.onclick = function () {
    solete.src = "imgs/eguzkia.gif"
    solete.classList.toggle("activo");
    navOverlay.classList.toggle("prendio");


    if (navOverlay.classList.contains("prendio") == true) {
        solete.src = "imgs/eguzkia.gif"
        navOverlayContnt.forEach(function (o) {
            o.style.opacity="1";
        });
    } else {
        solete.src = "imgs/eguzkia-lento.gif"
        navOverlayContnt.forEach(function (o) {
            o.style.opacity="0";
        });
    }
}

navLink.onclick = function () {
    solete.classList.remove("activo");
    navOverlay.classList.remove("prendio");
}


/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////






window.onscroll = function () {
    StickyVB()
};

let logoPos = logo.offsetTop;

function StickyVB() {
    if (window.pageYOffset >= logoPos) {
        logo.classList.add("sticky")
    } else {
        logo.classList.remove("sticky");
    }
}

/////////////////////////////////////////////////////////////






window.onscroll = function () {
    headerVictor()
};

function headerVictor() {
    let y = window.scrollY;
    if (y < 20) {
        logo.style.opacity = "0"
        nombre.style.opacity = "1";
        headertxt.forEach(function (o) {
            o.style.transform = "translateY(0vh)";
            o.style.opacity = "1";
        });
        nombre.style.transform = "translateY(0)";
    }

    if (y > 20) {
        logo.style.opacity = "1"
        nombre.style.opacity = "0";
        headertxt.forEach(function (o) {
            o.style.transform = "translateY(-10vh)";
            o.style.opacity = "0";

        });
        headertxt[1].style.transform = "translateY(-15vh)";
        // nombre.style.transform = "translateY(30px)";
    }
    if (y < 600) {
        logo.src = "imgs/victor-balbin.png";
    }
    if (y > 600) {
        logo.src = "imgs/victor-balbin1.png";
    }
    if (y > 1000) {
        logo.src = "imgs/victor-balbin2.png";
    }

    if (y > 1400) {
        logo.style.opacity = "0"
        nombre.style.opacity = "0";
    }


    // LA DEFINICIÓN
    if (y > 1400 || defa != true) {
        def.style.height = "40vh";
    }
    //////////////////////////////////////////



    // PARA EL FINAL
    if (y < 2400) {
        solete.classList.remove("escondido")
        solete.classList.remove("activo")
        navOverlay.classList.remove("prendio")
    }
    if (y > 2400) {
        solete.classList.add("escondido")
        navOverlay.classList.remove("prendio")
    }

};
//////////////////////////////////////////     



/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////



for (i = 0; i < 5; ++i) {
    seccionHeader.innerHTML += pilota; 
};

var jarra = document.querySelectorAll(".pilota");