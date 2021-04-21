// Select DOM Items
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-ul');
const wrapper = document.querySelector('.wrapper');
const navItems = document.querySelectorAll('.menu-item');


// Seti Initial State Of Menu
 let showMenu = false;  

menuBtn.addEventListener('click', toggleMenu);


function toggleMenu() {
    if(!showMenu) {
menuBtn.classList.add('close');
menu.classList.add('show');
menuNav.classList.add('show');
wrapper.classList.add('show');
navItems.forEach(item => item.classList.add('show'));


// Set menu state
showMenu = true;
    } else {
        menuBtn.classList.remove('close');
        menu.classList.remove('show');
        menuNav.classList.remove('show');
        wrapper.classList.remove('show');
        navItems.forEach(item => item.classList.remove('show'));
        
        // Set Menu State
        showMenu = false;
    }
}


