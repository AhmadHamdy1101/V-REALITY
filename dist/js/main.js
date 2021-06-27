let menu =  document.querySelector('.menu');
let menuIcon = document.querySelector('.hamburger');
let closenav = document.querySelector('.close');

menuIcon.addEventListener('click',function(){
    menu.style.display = "flex";
    closenav.style.display = "block";
    menuIcon.style.display ="none";

});
closenav.addEventListener('click',function(){
    menu.style.display = "none";

    closenav.style.display = "none";
    menuIcon.style.display ="block";

});


//animeation
anime({
    targets: '.slider-img',
    opacity	: [0, 1],
    delay: 700,
});
anime({
    targets:'.landing-txt ',
    opacity	: [0, 1],
    delay: 900,

})