const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');
const navLinks = document.querySelectorAll('.nav-links li');


burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');
    burger.classList.toggle('toggle');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('nav-active');
        burger.classList.remove('toggle');
    });
});


const navLinksa = document.querySelectorAll('.nav-links li a');
const button = document.getElementById("darkmode");
button.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    document.getElementById('about').classList.toggle("dark-mode");
    document.getElementById('projects').classList.toggle("dark-mode");
    document.getElementById('certifications').classList.toggle("dark-mode");
    document.getElementById('logos').classList.toggle("dark-mode");
    document.getElementById('footer').classList.toggle("dark-mode");
    document.getElementById('header').classList.toggle("dark-mode");
    navLinksa.forEach(link=>{
        link.classList.toggle("dark-mode");
    })
    document.querySelector('#start h1').classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        button.src = "images/day-mode.png";
    } else {
        button.src = "images/night-mode.png";
    }

    burger.classList.toggle('burger-color');
            
});        

