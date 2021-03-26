'use strict';


/////////////////////////////////////////////////////////////




let seccionHeader = document.getElementById("header");
let fechaAqui = document.querySelector(".fecha");
let defa = document.querySelector("#header a");
let nombre = document.querySelector("#nombre");
let seccionHeaderLogo = document.querySelector("header img");
let headerart = document.querySelector("#header article");
let headertxt = document.querySelectorAll("#header article p");

let contemplaBtn = document.querySelector("#contempla");
let idioma = document.getElementsByTagName('html')[0].getAttribute('lang');
let idiomasSec = document.querySelector("#idiomas");
let idiomaBox = document.querySelector("#idiomas .current")
let eusBtn = document.getElementById("langEUS");
let engBtn = document.getElementById("langENG");
let espBtn = document.getElementById("langESP");


let logoPosY = seccionHeaderLogo.offsetTop;



let nav = document.querySelector("#nav");
let soleteBtn = document.querySelector("#nav-btn");
let solete = document.querySelector("#solete");
let navContnt = document.querySelectorAll("#nav *");
let navLink = document.querySelector("#nav a");


let seccionDef = document.getElementById("definicion");
let def = document.querySelector(".definicion");





let alien = document.querySelector(".trip");

   
eusBtn.onclick=function (){
    idiomaBox.style.transform="translateX(-230%)";
    idioma="eu";
}
espBtn.onclick=function (){
    idiomaBox.style.transform="translateX(0%)";
    idioma="es";
}
engBtn.onclick=function (){
    idiomaBox.style.transform="translateX(-120%)";
    idioma="en";
}





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
        
};

//Fecha();


/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////

function navON (){
    nav.classList.add("on");
    soleteBtn.classList.add("activo");
    solete.src = "imgs/eguzkia.gif";
    navContnt.forEach(function (o) {
        o.style.opacity="1";
    });
}

function navOFF (){
    nav.classList.remove("on");
    soleteBtn.classList.remove("activo");
    solete.src = "imgs/eguzkia-lento.gif";
    navContnt.forEach(function (o) {
        o.style.opacity="1";
    });
}


soleteBtn.onclick = function () {
    if (nav.classList.contains("on")!=true) {
        navON();
    }else{
        navOFF();
    }
};

navLink.onclick = function () {
    navOFF();
};

/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////

contemplaBtn.onclick = function (){
let todozen = document.querySelectorAll("#header *:not(.pilota)");
for(var i of todozen){
    i.classList.toggle("zen");
}
soleteBtn.classList.toggle("zen");
nav.classList.toggle("zen");
if(nav.classList.contains("zen")){
navOFF()
}
}


/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////




function headerVictor (modo) {
    console.log(modo)
    if (modo == "start") {
        seccionHeaderLogo.style.opacity = "0";
        seccionHeaderLogo.style.display = "none";
        headertxt.forEach(function (o) {
            o.style.transform = "translateY(0vh)";
            o.style.opacity = "1";
            o.style.letterSpacing = "0";
        });
        nombre.style.opacity = "1";
        nombre.style.transform = "translateY(0)";
        nombre.style.letterSpacing = "0px";
    }


    else if(modo == "1"){
        seccionHeaderLogo.style.opacity = "1";
        seccionHeaderLogo.style.display = "block";
        headertxt.forEach(function (o) {
            o.style.transform = "translateY(0vh)";
            o.style.letterSpacing = "0px";
            o.style.opacity = "0";
        });
        headertxt[1].style.transform = "translateY(0vh)";
        nombre.style.opacity = "0";
        nombre.style.letterSpacing = "20px";
        
        
    }
    else if(modo == "2") {
        seccionHeaderLogo.src = "imgs/victor-balbin1.png";
    }
    else if(modo == "3") {
        seccionHeaderLogo.src = "imgs/victor-balbin2.png";
    }

    else if(modo == "4") {
        seccionHeaderLogo.style.opacity = "0";
        nombre.style.opacity = "0";
    };
};


window.onscroll = function () {
    console.log(window.scrollY);
    contemplaBtn.style.transform=`translate3d(-${window.scrollY/2}px,0,0)`
    idiomasSec.style.transform=`translate3d(${window.scrollY/2}px,0,0)`
    if(window.scrollY <= 200){
        headerVictor("start");
    }
     if (window.scrollY >= 200) {
        headerVictor("1");
    }
     if (window.scrollY >= 800) {
        headerVictor("2");
    }
     if (window.scrollY >= 1000) {
        headerVictor("3");
    }
     if (window.scrollY >= 1400) {
        headerVictor("4");
    }

        // LA DEFINICIÓN
        if (window.scrollY > 1400 || defa != true) {
            def.style.height = "40vh";
        }
        //////////////////////////////////////////
    // PARA EL FINAL
    if (window.scrollY < 2400) {
        soleteBtn.classList.remove("escondido")
        soleteBtn.classList.remove("activo")
        nav.classList.remove("on")
    }
    if (window.scrollY > 2400) {
        soleteBtn.classList.add("escondido")
        navOFF()
    }
};


//////////////////////////////////////////     

