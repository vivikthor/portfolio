let pilota = `<span class="pilota"></span>`;
const container = document.querySelectorAll(".jarra");
let seccion = -1;
/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////

function numero(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
};


function uncolor() {
    let color = '#' + Math.floor(Math.random() * 16777215).toString(16);
    return color;
    /////////////////
    // let color = ["ff0000", "ff6f00", "ffea00", "c5ff00", "b9ff66", "00ff03", "b3e4ff", "4dfaff", "003bfd", "8100ff", "ff00f0"];
    // var este = "#" + color[numero(0, color.length)]
    // return este;
}

/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////

// ARRANQUE //

//por cada .jarra de bolitas, haremos:
for (x of container) {
    //seleccionar su index
    seccion++
    // el data-cuantas bolitas queremos
    let cuantas = x.dataset.cuantas;
    // el tamaño mínimo (data-min)
    let min = x.dataset.min;
    // el tamaño máximo (data-max)
    let max = x.dataset.max;
    // si se van a mover, cuánto será
    let mov = x.dataset.mov;
    // velocidad de cambio
    let vel = x.dataset.vel;
    // seleccionar el modo según la clase siguiente a .jarra
    let wo = x.classList[1];
    // inicio
    VIDA(cuantas, seccion, min, max, mov, vel, wo);
}



function VIDA(cuantas, seccion, tamañomin, tamañomax, movimiento, velocidad, modo) {
    for (i = 0; i < cuantas; i++) {
        container[seccion].innerHTML += pilota;
    };

    const jarra = container[seccion].querySelectorAll(".pilota");


    for (var pelota of jarra) {
        var tamano = numero(tamañomin, tamañomax) + "vw";
        pelota.style.height = `${tamano}`;
        pelota.style.width = `${tamano}`;
        pelota.style.backgroundColor = `${uncolor()}`;
        pelota.style.filter = `blur(${numero(5,100) + "px"})`;
        pelota.style.top = `${numero(0,1000) + "px"}`;
        pelota.style.left = `${numero(0,1000) + "px"}`;
        pelota.style.transition = `all ${velocidad/1000}s ease`;
    };


    setInterval(vida, velocidad, modo, tamañomin, tamañomax, movimiento)


    function vida() {

        for (var bolita of jarra) {

            var tamano = numero(tamañomin, tamañomax) + "vw";
            bolita.style.height = `${tamano}`;
            bolita.style.width = `${tamano}`;

            if (modo != "ente") {
                bolita.style.backgroundColor = uncolor();
                bolita.style.filter = `blur(${numero(5,80) + "px"})`;

                if (modo == "hyper" || modo == "polvo") {
                    bolita.style.transform = `translate(${numero(0,movimiento) + "vw"},${numero(0,movimiento) + "vh"})`;

                }
                if (modo == "blob") {
                    bolita.style.borderRadius = `${numero(50, 100)}% ${numero(50, 100)}% ${numero(50, tamaño)}% ${numero(50, 100)}% / ${numero(50, 100)}% ${numero(50, 100)}% ${numero(50, tamaño)}% ${numero(50, 100)}%`;
                }
            }
        };
    };
};

/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////