let maisInfoG = document.querySelector('.infoG');
let menosInfoG = document.querySelector('.menosInfoG');
let hee = document.querySelector('div.hee');

maisInfoG.addEventListener('click', function(){
    hee.style.display = "block";
});

menosInfoG.addEventListener('click', function(){
    hee.style.display = "none";
});