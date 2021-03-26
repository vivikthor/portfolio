/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////

function chance() {
    var chance = Math.floor(Math.random() * 100) + 1;
    return chance
};

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
};

function Ctb() {
    var tb = [`top`, `bottom`];
    var Dtb = numero(tb.length, 0)
    return tb[Dtb];
};

function Clr() {
    var lr = [`left`, `right`];
    var Dlr = numero(lr.length, 0)
    return lr[Dlr];
};

/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////

function Inicio(cuantas, seccion, estado) {
    for (i = 0; i < cuantas; i++) {
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
    };



    if(modo == ""){
        setInterval(vida, 6000, modo, 50, 70);
    }
    else if(modo == "agujero"){
        setInterval(vida, 1000, modo, 40, 0);
    }
    else if(modo == "hyper"){
        setInterval(vida, 4000, modo, 40, 10);
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
        else if(modo == "hyper"){
            for (var bolita of jarra) {
                var tamano = numero(tamaño, 1) + "vw";
                bolita.style.width = `${tamano}`;
                bolita.style.height = `${tamano}`;
                bolita.style.backgroundColor = randomColor();
                bolita.style.filter = `blur(${numero(80,5) + "px"})`;
                bolita.style.transform = `translate(${numero(movimiento,0, "X") + "vw"},${numero(movimiento,0, "x") + "vh"})`;
            };
        }

    }; 
};