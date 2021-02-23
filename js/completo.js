/////////////////////////////////////////////////////////////
let fechaAqui = document.querySelector("#header small");
let defa = document.querySelector("header a");
let def = document.querySelector(".definicion");
let seccionDef = document.getElementById("definicion");
let seccionHeader = document.getElementById("header");
let nombre = document.querySelector("#nombre");
let logo = document.querySelector("header img");
let headertxt = document.querySelectorAll("header article p");




let nav = document.querySelector("#nav");
let solete = document.querySelector("#solete");
let navOverlay = document.querySelector(".navmenu");
let navOverlayContnt = document.querySelectorAll(".navmenu *");
let navLink = document.querySelector(".navmenu a")







let alien = document.querySelector(".trip");

      
var pilota = `<span class="pilota"></span>`;
var container = document.querySelectorAll(".jarra");
var modo = "";




defa.onclick = function () {
    def.style.height = "40vh";
    return true;
};
/////////////////////////////////////////////////////////////




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
  
  Inicio(5, 0, "agujero");        //HEADER
    Inicio(30, 1, "");                 //DEFINICIÓN


/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////

function chance() {
    var chance = Math.floor(Math.random() * 100) + 1;
    return chance
}

function numero(a, b, x) {
    var num = Math.floor(Math.random() * a) + b;
    if(x !== ""){
        if (chance() > 50) {
            return -num;
        } else {
            return num;
        }
    }else {return num}
};

function randomColor() {
    var color = '#' + Math.floor(Math.random() * 16777215).toString(16);
    return color;
}

function Ctb() {
    var tb = [`top`, `bottom`];
    var Dtb = numero(tb.length, 0)
    return tb[Dtb];
}

function Clr() {
    var lr = [`left`, `right`];
    var Dlr = numero(lr.length, 0)
    return lr[Dlr];
}

/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////

function Inicio(cuantas, seccion, estado) {
    for (i = 0; i < cuantas; ++i) {
        container[seccion].innerHTML += pilota;
    };

    var jarra = container[seccion].querySelectorAll(".pilota");
    modo = estado;

    for (var pelota of jarra) {
        var tamano = numero(50, 1) + "vw";
        pelota.style.height = `${tamano}`;
        pelota.style.width = `${tamano}`;
        pelota.style.backgroundColor = `${randomColor()}`;
        pelota.style.filter = `blur(${numero(100,5) + "px"})`;
        pelota.style.top = `${numero(1000,0) + "px"}`;
        pelota.style.left = `${numero(1000,0) + "px"}`;
    }


    if(modo == ""){
        setInterval(vida, 6000, modo, 50, 70);
    }
    else if(modo == "agujero"){
        setInterval(vida, 1000, modo, 40, 0);

        for (i = 2; i < 5; ++i) {
            jarra[i].classList.toggle("alt");
        };

    }

        
    function vida(modo, tamaño, movimiento) {
        if(modo == ""){
            for (var bolita of jarra) {
                var tamano = numero(tamaño, 1) + "vw";
                bolita.style.height = `${tamano}`;
                bolita.style.width = `${tamano}`;
                bolita.style.backgroundColor = randomColor();
                bolita.style.filter = `blur(${numero(100,5) + "px"})`;
                bolita.style.transform = `translate(${numero(movimiento,0, "X") + "vw"},${numero(movimiento,0, "x") + "vh"})`;
            };
            
        }
        else if(modo == "agujero"){
            for (var bolita of jarra) {
                var tamano = numero(tamaño, 1) + "vw";
                bolita.style.height = `${tamano}`;
                bolita.style.width = `${tamano}`;
                bolita.style.backgroundColor = randomColor();
                bolita.style.filter = `blur(${numero(80,5) + "px"})`;
            };



            
        }

    };
    
};


/////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////