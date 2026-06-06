const toggleThemeBtn = document.querySelector("#toggle-theme");
toggleThemeBtn.addEventListener("click" , () => {
    if (localStorage.theme === "dark"){
        document.documentElement.classList.remove("dark");
        localStorage.theme = "light";
    } else {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme" , "dark");
    }
})

// Menu Open & Close 
const menuBtn = document.getElementById('bars-3');
const closeBtn = document.getElementById('xmark');
const menu = document.getElementById('menu');

menuBtn.addEventListener('click',() =>{
    menu.classList.remove('hidden');
});

closeBtn.addEventListener('click',() =>{
    menu.classList.add('hidden');
});

// Shop Box on Mobile open & close
const shoplogoBtn = document.getElementById('shop-logo');
const shopcloseBtn = document.getElementById('shop-xmark');
const mobileShop = document.getElementById('mobile-shopbox');

shoplogoBtn.addEventListener('click',() =>{
    mobileShop.classList.remove('hidden');
});

shopcloseBtn.addEventListener('click',() =>{
    mobileShop.classList.add('hidden');
});


const shopMenuBtn = document.getElementById('shop-menu');
const shopMenucloseBtn = document.getElementById('shop-menu');
const mobileMenu = document.getElementById('mobile-shopmenu');

 shopMenuBtn.addEventListener('click',() =>{
    mobileMenu.classList.remove('hidden');
});

shopMenucloseBtn.addEventListener('click',() =>{
    mobileMenu.classList.add('hidden');
});