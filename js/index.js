'use strict';



const nombre = document.querySelector("#nombre");
const headerart = document.querySelector("#header article");
const headertxt = document.querySelectorAll("#header article p");
const contemplaBtn = document.querySelector("#contempla");




const seccionHago = document.querySelector("#hago")
const haikus = document.querySelector(".haikus")
const haikusImgWrap = document.querySelector("#hago .hago-img");
const haikusTitle = document.querySelector("#hago h2");
const height = haikus.clientHeight
const width = haikus.clientWidth


const seccionSobre = document.getElementById("sobre");
const sobreBtn = document.querySelectorAll('#sobre [class*="btn"]')
const sobreArt = document.querySelectorAll('#sobre article')
const sobreAlien = document.querySelector('#sobre .alien')
const mifoto = document.querySelector("#sobre .mifoto");
const mii = document.querySelector("#sobre .mii");









window.addEventListener('mousemove', movimiento);

function movimiento(e) {

    const xVal = e.layerX
    const yVal = e.layerY


    const yRotation = 10 * ((xVal - width / 2) / width)

    const xRotation = -10 * ((yVal - height / 2) / height)


    let cssstring = `transform: perspective(500px) rotateX(${xRotation}deg) rotateY(${yRotation}deg); transition: transform .1s;`;

    haikus.style = cssstring;
    //   haikusImgWrap.style.transform = `perspective(300px) rotateX(${xRotation}deg) rotateY(${yRotation}deg)`
    //   haikusTitle.style.transform = `perspective(500px) rotateX(${-xRotation}deg) rotateY(${-yRotation}deg)`

}
window.addEventListener('mouseout', function () {
    haikus.style.transform = 'perspective(500px) scale(1) rotateX(0) rotateY(0)'
    // haikusImgWrap.style.transform = 'perspective(500px) scale(1) rotateX(0) rotateY(0)'
})

//  CLICK
window.addEventListener('mousedown', function () {
    haikus.style.transform = 'perspective(500px) scale(0.9) rotateX(0) rotateY(0)'
    // haikusImgWrap.style.transform = 'perspective(500px) scale(1) rotateX(0) rotateY(0)'
})

//  UNCLICK
window.addEventListener('mouseup', function () {
    haikus.style.transform = 'perspective(500px) scale(1.1) rotateX(0) rotateY(0)'
    // haikusImgWrap.style.transform = 'perspective(500px) scale(1) rotateX(0) rotateY(0)'
})



/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////

contemplaBtn.addEventListener('click', function(){
    const todozen = document.querySelectorAll("#header *:not(.pilota)");
    for (var i of todozen) {
        i.classList.toggle("zen");
    }
    soleteBtn.classList.toggle("zen");
    nav.classList.toggle("zen");
    if (nav.classList.contains("zen")) {
        navOFF()
    }
})



/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////



function headerVictor(modo) {
    const jarra = seccionHeader.querySelectorAll(".pilota");
    if (modo == "start") {
        headertxt.forEach(function (o) {
            o.style.transform = "translateY(0vh)";
            o.style.opacity = "1";
            o.style.letterSpacing = "0";
        });
        nombre.style.opacity = "1";
        nombre.style.transform = "translateY(0)";
        nombre.style.letterSpacing = "0px";
        for (var bolita of jarra) {
            bolita.style.transform = `translate(-50%, -50%)`;
        };



    } else if (modo == "1") {
        headertxt.forEach(function (o) {
            o.style.transform = "translateY(0vh)";
            o.style.letterSpacing = "0px";
            o.style.opacity = "0";
        });
        headertxt[1].style.transform = "translateY(0vh)";
        nombre.style.opacity = "0";
        nombre.style.letterSpacing = "20px";

        for (var bolita of jarra) {
            bolita.style.transform = `translate(${numero(-window.scrollY/5,window.scrollY/5)}vw,
            
            ${numero(-window.scrollY/5,window.scrollY/5)}vh)`;
        };


    }
};





sobreBtn.forEach(function (e, index) {
    e.onfocus = function () {
        let tarjeta = document.querySelectorAll(`#sobre article .btm`);
        let string = `padding: 1rem;
        max-height: 100vh;
        transition: max-height 1s ease, padding 1s ease;`
        tarjeta[index].style = string
        // sobreAlien.style = alienON
    }
    e.onblur = function () {
        let tarjeta = document.querySelectorAll(`#sobre article .btm`);
        let string = `padding: 0;
        max-height: 0;`;
        tarjeta[index].style = string
        // sobreAlien.style = alienOFF
    }
});

// let alienON = `right: 1rem; transform: rotate(-14deg); animation: tilt 1s linear 1s infinite reverse;
// display: block;
// visibility: visible;`
// let alienOFF = `right: -20rem; transform: rotate(0deg); display: none;
// visibility: hidden;`

// sobreArt.forEach(function(e){
//     e.onmouseover = function (){
//         sobreAlien.style = alienON
//     }
// })

// sobreArt.forEach(function(e){
//     e.onmouseout = function (){
//         sobreAlien.style = alienOFF
//     }
// })



window.addEventListener('scroll', function () {

    
    let SobreCoord = window.scrollY - seccionSobre.offsetTop;
    let HeaderCoord = window.scrollY - seccionHeader.offsetTop;
    
    function a (){
        contemplaBtn.style.transform = `translate(-${window.scrollY}px)`;
      }
a();

    if (HeaderCoord <= 80) {
        headerVictor("start");
        soleteBtn.classList.add("escondido")
        navOFF()
    } else {
        headerVictor("1");
        soleteBtn.classList.remove("escondido")
        soleteBtn.classList.remove("activo")
        nav.classList.remove("on")
    }
    // if (SobreCoord > -400 && SobreCoord < 400) {
    //     mii.classList.add("quieto");
    // } else {
    //     mii.classList.remove("quieto");
    // }
    // mii.style.transform = `translate(0,${SobreCoord/2}px)`;


    //////////////////////////////////////////
    // PARA EL FINAL
    // if (window.scrollY < 2400) {
    //     soleteBtn.classList.remove("escondido")
    //     soleteBtn.classList.remove("activo")
    //     nav.classList.remove("on")
    // }
    // if (window.scrollY > 2400) {
    //     soleteBtn.classList.add("escondido")
    //     navOFF()
    // }
});





//////////////////////////////////////////     

mifoto.onclick = function () {
    mifoto.classList.toggle("woo");
}
