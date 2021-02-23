var seccionHeader = document.getElementById("header");

      
var pilota = `<span class="pilota"></span>`;
var container = document.querySelectorAll(".jarra");
var modo = "";


  
  Inicio(5, 0, "agujero");        //HEADER
    Inicio(30, 1);                 //DEFINICIÓN


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
        setInterval(vida(modo, 50, 700), 1000);
    }
    else if(modo == "agujero"){
        setInterval(vida(modo, 40, 0), 1000); 
    }

        
    function vida(modo, tamaño, movimiento) {
        if(modo == undefined){
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
        // function vida(tamaño, movimiento) {
        //     for (i = 0; i < jarra[seccion]; ++i) {
        //         var tamano = numero(tamaño, 1) + "vw";
        //         jarra[seccion].childNodes.style.height = `${tamano}`;
        //         jarra[seccion].childNodes.style.width = `${tamano}`;
        //         jarra[seccion].childNodes.style.backgroundColor = randomColor();
        //         jarra[seccion].childNodes.style.filter = `blur(${numero(100,5) + "px"})`;
        //         jarra[seccion].childNodes.style.transform = `translate(${numero(movimiento,0) + "vw"},${numero(movimiento,0) + "vh"})`;
        //     };
        // }
    
};


/////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////