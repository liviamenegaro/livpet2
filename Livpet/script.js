// GERAL

let menu = document.querySelector('.navbar-toggle');
let menu1 = document.querySelector('.menu1');
let estado = "off";
menu.addEventListener('click', function () {
    if (estado === 'off') {
        menu1.style.display = "block";
        estado = "on";
    }
    else {
        menu1.style.display = "none";
        estado = "off";
    }
})

// REGISTRO

let input = document.querySelector('.upload');
let foto = document.querySelector('uploadDiv');


