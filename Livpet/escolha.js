
let maisInfo = document.querySelector('.info');
let menosInfo = document.querySelector('.menosInfo');
let maisInfoG = document.querySelector('.infoG');
let menosInfoG = document.querySelector('.menosInfoG');
let he = document.querySelector('div.he');
let hee = document.querySelector('div.hee');

maisInfo.addEventListener('click', function(){
    he.style.display = "block";
});

menosInfo.addEventListener('click', function(){
    he.style.display = "none";
});
maisInfoG.addEventListener('click', function(){
    hee.style.display = "block";
});

menosInfoG.addEventListener('click', function(){
    hee.style.display = "none";
})