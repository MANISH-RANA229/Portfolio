const header = document.querySelector("header");
window.addEventListener ("scroll", function() {
   header.classList.toggle ("sticky", window.scrollY > 100);
});

let menu = document.querySelector("#menu-icon");
let navlist = document.querySelector(".navlist");


menu.onclick = function(){
    menu.classList.toggle("bx-x");
    navlist.classList.toggle("open");
};
window.onscroll = function(){
    menu.classList.remove("bx-x");
    navlist.classList.remove("open");
};
