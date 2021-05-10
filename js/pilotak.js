let pilota = `<span class="pilota"></span>`;
let container = document.querySelectorAll(".jarra");
var modo = "";

/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////

// function chance() {
//     var chance = Math.floor(Math.random() * 100) + 1;
//     return chance
// };

function numero(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};


function uncolor() {
    let color = '#' + Math.floor(Math.random() * 16777215).toString(16);
    return color;

    // let color = ["ff0000", "ff6f00", "ffea00", "c5ff00", "b9ff66", "00ff03", "b3e4ff", "4dfaff", "003bfd", "8100ff", "ff00f0"];
    // var este = "#" + color[numero(0, color.length)]
    // return este;
}

function Ctb() {
    let tb = [`top`, `bottom`];
    let Dtb = numero(0, tb.length)
    return tb[Dtb];
};

function Clr() {
    let lr = [`left`, `right`];
    let Dlr = numero(0, lr.length)
    return lr[Dlr];
};

/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////

function Inicio(cuantas, seccion, estado) {
    for (var i = 0; i < cuantas; i++) {
        container[seccion].innerHTML += pilota;
    };

    var jarra = container[seccion].querySelectorAll(".pilota");
    modo = estado;

    for (var pelota of jarra) {
        var tamano = numero(1, 50) + "vw";
        pelota.style.height = `${tamano}`;
        pelota.style.width = `${tamano}`;
        pelota.style.backgroundColor = `${uncolor()}`;
        pelota.style.filter = `blur(${numero(5,100) + "px"})`;
        pelota.style.top = `${numero(0,1000) + "px"}`;
        pelota.style.left = `${numero(0,1000) + "px"}`;
    };



    if (modo == "") {
        setInterval(vida, 6000, modo, 50, 70);
    } else if (modo == "agujero") {
        setInterval(vida, 1200, modo, 40, 0);
    } else if (modo == "agujero respira") {
        setInterval(vida, 4000, modo, 40, 50);
    } else if (modo == "hyper") {
        setInterval(vida, 4000, modo, 40, 10);
    } else if (modo == "polvo") {
        setInterval(vida, 4000, modo, 30, 0);
    } else if (modo == "blob") {
        setInterval(vida, 4000, modo, 30, 0);
    }


    function vida(modo, tamaño, movimiento) {
        if (modo == "") {
            for (var bolita of jarra) {
                var tamano = numero(1, tamaño) + "vw";
                bolita.style.height = `${tamano}`;
                bolita.style.width = `${tamano}`;
                bolita.style.backgroundColor = uncolor();
                bolita.style.filter = `blur(${numero(5,100) + "px"})`;
                bolita.style.transform = `translate(${numero(0,movimiento) + "vw"},${numero(0,movimiento) + "vh"})`;
            };
            } else if (modo == "agujero") {
                for (var bolita of jarra) {
                    var tamano = numero(1, tamaño) + "vw";
                    bolita.style.height = `${tamano}`;
                    bolita.style.width = `${tamano}`;
                    bolita.style.backgroundColor = uncolor();
                    bolita.style.filter = `blur(${numero(5,50) + "px"})`;

                };
        } else if (modo == "agujero respira") {

            setInterval(function () {
                for (var bolita of jarra) {
                    var tamano = numero(1, tamaño) + "vw";
                    bolita.style.height = `${tamano}`;
                    bolita.style.width = `${tamano}`;
                    bolita.style.backgroundColor = uncolor();
                    bolita.style.filter = `blur(${numero(5,80) + "px"})`;
                    bolita.style.transform = `translate(${numero(-movimiento,10) + "vw"},${numero(-movimiento,10) + "vh"})`;

                }
            }, 1500)


            for (var bolita of jarra) {
                bolita.classList.toggle("respira");
            }


        } else if (modo == "hyper") {
            for (var bolita of jarra) {
                var tamano = numero(1, tamaño) + "vw";
                bolita.style.width = `${tamano}`;
                bolita.style.height = `${tamano}`;
                bolita.style.backgroundColor = uncolor();
                bolita.style.filter = `blur(${numero(5,80) + "px"})`;
                bolita.style.transform = `translate(${numero(0, movimiento) + "vw"},${numero(0, movimiento) + "vh"})`;
            };
        } else if (modo == "polvo") {
            for (var bolita of jarra) {
                var tamano = numero(1, tamaño) + "vw";
                bolita.style.width = `${tamano}`;
                bolita.style.height = `${tamano}`;
                bolita.style.backgroundColor = uncolor();
                bolita.style.filter = `blur(${numero(5,80) + "px"})`;
                bolita.style.transform = `translate(${numero(0, movimiento) + "vw"},${numero(0, movimiento) + "vh"})`;
            };
        }
        else if (modo == "blob") {
            for (var bolita of jarra) {
                bolita.style.width = numero(5, tamaño) + "vw";
                bolita.style.height = numero(5, tamaño) + "vw";
                bolita.style.borderRadius = `${numero(50, 100)}% ${numero(50, 100)}% ${numero(50, tamaño)}% ${numero(50, 100)}% / ${numero(50, 100)}% ${numero(50, 100)}% ${numero(50, tamaño)}% ${numero(50, 100)}%`;
                bolita.style.backgroundColor = uncolor();
                bolita.style.filter = `blur(${numero(1,30) + "px"})`;
            };
        };

    };
};






/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////





Inicio(14, 0, "agujero"); //HEADER

