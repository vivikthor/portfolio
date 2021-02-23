var pilota = `<span class="pilota"></span>`;
var container = document.querySelectorAll(".jarra");
var estado

for (o = 0; o < container.length; ++o) {
for (i = 0; i < 30; ++i) {
        container[o].innerHTML += pilota; 
    };
    var jarra = container[o].querySelectorAll(".pilota");
    Inicio()
};


// Hay varias secciones que contienen bolitas. Cada una tiene su array de bolitas
// El funcionamiento básico de las bolitas lo comparten todas las secciones
// pero cada una tiene una personalidad (estado)

/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////

function chance() {
    var chance = Math.floor(Math.random() * 100) + 1;
    return chance
}

function numero(a, b) {
    var num = Math.floor(Math.random() * a) + b;
    if (chance() > 50) {
        return -num;
    } else {
        return num;
    }
};

function alguna() {
    var esta = Math.floor(Math.random() * jarra.length)
    return esta;
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

function Inicio(seccion) {
    for (i = 0; i < jarra[seccion].length; ++i) {
        var tamano = numero(50, 1) + "vw";
        jarra[i].style.cssText = `
        height:${tamano};
        width:${tamano};
        ${Ctb()}: ${numero(1000,0) + "px"};
        ${Clr()}: ${numero(1000,0) + "px"};
        background-color: ${randomColor()};
        `;
    }
};



var tiempo = setInterval(bolitas, 12000);

function bolitas() {

    function cambioColor() {

        for (i = 0; i < jarra.length; ++i) {
            jarra[i].style.backgroundColor = randomColor();
        }
    }
    cambioColor();


    var lavida = setInterval(vida, 6000);

    function vida() {
        for (i = 0; i < jarra.length; ++i) {
            var tamano = numero(50, 1) + "vw";
            jarra[i].style.cssText = `
        height:${tamano};
        width:${tamano};
        background-color: ${randomColor()};
        filter: blur(${numero(100,5) + "px"});
        transform: translate(${numero(70,0) + "vw"},${numero(70,0) + "vh"});
        transition: all 6s ease;
        `
    };
    }
}

/////////////////////////////////////////////////////////////


/////////////////////////////////////////////////////////////