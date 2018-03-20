
let maisInfo = document.querySelector('.info');
let menosInfo = document.querySelector('.menosInfo');
let he = document.querySelector('div.he');

maisInfo.addEventListener('click', function(){
    he.style.display = "block";
});

menosInfo.addEventListener('click', function(){
    he.style.display = "none";
});