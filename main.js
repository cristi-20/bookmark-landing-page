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
    if (!showMenu) {
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

 // Switch Tabs
const tabs = document.querySelectorAll('[data-tab-target]');
const tabContents = document.querySelectorAll('[data-tab-content')

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.tabTarget)
        tabContents.forEach(tabContent => {
            tabContent.classList.remove('active')
            
        })
        tabs.forEach(tab => {
            tab.classList.remove('active')  
        })
        tab.classList.add('active');
        target.classList.add('active')
    })
})

// Collapsible Text
var acc = document.getElementsByClassName("accordion");
var i;


for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");

        var panel = this.nextElementSibling;
        if (panel.style.display === "block" || (panel.style.maxHeight))  {
            panel.style.display = "none"
            panel.style.maxHeight = null;
           
        } else {
            panel.style.display = "block";
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    })
}

// Email Validation
const form = document.getElementById('form');
const email = document.getElementById('email');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInputs();
})

function checkInputs() {
   const emailValue =  email.value.trim()

   if(emailValue === '') {
    setErrorFor(email, 'Email cannot be blank');
} else if (!isEmail(emailValue)) {
    setErrorFor(email, 'Not a valid email');
} else {
    setSuccessFor(email);
}
}

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = document.querySelector('small');
    // add error message inside small tag
    small.innerText = message;
    // add error class
    formControl.className = 'form-control error'
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}

function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);

}
