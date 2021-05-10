let astronauta = document.querySelector(".astronauta");



setInterval(function (){
    astronauta.style.transform=`translate(${Math.floor(Math.random()*15) + "px"},${Math.floor(Math.random()*15) + "px"}) rotate(${Math.floor(Math.random()*15) + "deg"})`;
}, 3000);
