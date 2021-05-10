let seccionHeader = document.getElementById("header");
let seccionFooter = document.getElementById("footer");

let atrasBtn = document.querySelectorAll(".atras-btn");
let nav = document.querySelector("#nav");
let soleteBtn = document.querySelector("#nav-btn");
let solete = document.querySelector("#solete");
let navContnt = document.querySelectorAll("#nav *");
let navLink = document.querySelector("#nav a");

let reloj = document.querySelectorAll(".reloj");
let fechaLetr = document.querySelector(".fecha");
let fechaNum = document.querySelector(".fecha-num");



let txtRandom = document.querySelectorAll(".txt-random");


let frases = [
    "Estás dentro de una simulación, Neo",
    "*** ¡FELICIDADES! ¡¡¡Has sido la visita 1.000.000!!! ***",
    "Naughty boy would do anything for money",
    "𓅮𓆈𓃦"
];
/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
// "No te fíes del horóscopo",
// "Bebe awita uwu",
/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////

// alllinks.forEach(function (i) {
    
//     if (i.getAttribute('href') == "#" && i.classList.contains(".atras-btn") == false) {
//             i.href="limbo.html";
//     }
// });

/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////




if (reloj !== null) {
    function Reloj() {
        let hoy = new Date();
        var h = hoy.getHours();
        var m = hoy.getMinutes();
        var s = hoy.getSeconds();
        if (h < 10) {
            h = "0" + h;
        }
        if (m < 10) {
            m = "0" + m;
        }
        if (s < 10) {
            s = "0" + s;
        }

        reloj.forEach(function (i) {
            var lahora = h + ":" + m + ":" + s;
            i.innerHTML = lahora;
        })


        setTimeout(Reloj, 1000);
    }
    Reloj()
}


/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////



if (fechaLetr !== null) {
    function FechaLetr() {
        let meses = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre']
        let h = new Date();
        let d = h.getDate();
        let m = meses[h.getMonth()];
        fechaLetr.innerHTML = d + " de " + m;
    };
    FechaLetr();
}
/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
if (fechaNum !== null) {
    function FechaNum() {
        let h = new Date();
        let d = h.getDate();
        let m = h.getMonth() + 1;
        let a = h.getFullYear();

        if (d < 10) {
            d = "0" + d;
        }
        if (m < 10) {
            m = "0" + m;
        }
        fechaNum.innerHTML = d + "/" + m + "/" + a;
    };
    FechaNum();
}
/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////


function navON() {
    nav.classList.add("on");
    soleteBtn.classList.add("activo");
    solete.src = "imgs/eguzkia.gif";
    navContnt.forEach(function (o) {
        o.style.opacity = "1";
    });
}

function navOFF() {
    nav.classList.remove("on");
    soleteBtn.classList.remove("activo");
    solete.src = "imgs/eguzkia-lento.gif";
    navContnt.forEach(function (o) {
        o.style.opacity = "1";
    });
}


soleteBtn.onclick = function () {
    if (nav.classList.contains("on") != true) {
        navON();
    } else {
        navOFF();
    }
};

navLink.onclick = function () {
    navOFF();
};


/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////

txtRandom.forEach(function (i) {

    i.innerHTML = frases[Math.floor(Math.random() * frases.length)];
})



/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////

atrasBtn.forEach(function (i) {
    i.onclick = function () {
        window.history.back();
    }
})



/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////