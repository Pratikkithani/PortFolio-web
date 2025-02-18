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
    document.getElementById('experience').classList.toggle("dark-mode");
    document.getElementById('tech').classList.toggle("dark-mode");
    document.getElementById('contact').classList.toggle("dark-mode");
    document.getElementById('logos').classList.toggle("dark-mode");
    document.getElementById('header').classList.toggle("dark-mode");
    navLinksa.forEach(link=>{
        link.classList.toggle("dark-mode");
    })
    document.querySelector('#start h1').classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        button.src = "images/day-mode.png";
        document.body.classList.remove("light-mode");
    } else {
        button.src = "images/night-mode.png";
        document.body.classList.add("light-mode");
    }
    burger.classList.toggle('burger-color');
});



const gallery = [
    {
        imgsrc: "images/certifications/java.png",
        altext: "java"
    },
    {
        imgsrc: "images/certifications/python.png",
        altext: "python"
    },
    {
        imgsrc: "images/certifications/ai.png",
        altext: "ai"
    },
    {
        imgsrc: "images/certifications/sql.jpg",
        altext: "sql"
    }
];

const prev_gal_btn = document.getElementById('prev-gallery-btn');
const next_gal_btn = document.getElementById('next-gallery-btn');
const gal_imgs = document.getElementById('gallery-img');
let i = 0;

next_gal_btn.addEventListener("click", () => {
    i = (i + 1) % gallery.length;
    gal_imgs.src = gallery[i].imgsrc;
    gal_imgs.alt = gallery[i].altext;
});

prev_gal_btn.addEventListener("click", () => {
    i = (i - 1 + gallery.length) % gallery.length;
    gal_imgs.src = gallery[i].imgsrc;
    gal_imgs.alt = gallery[i].altext;
});