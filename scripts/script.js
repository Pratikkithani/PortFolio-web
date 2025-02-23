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



const projects_info = [
    {
        heading: "SMS Spam Filtering",
        year: "(January 2023)",
        info: "Developed a mixture of Web Development skills and Machine Learning algorithm to differentiate and Spam and Ham messages. It is a website which acts as a simple database for the users to know whether the message is spam or not.",
        tools: "Tools & technologies used: HTML, BOOTSTRAP, Flask, Python, Twilio",
        psrc: "https://github.com/Pratikkithani/SMS-Spam-Filtering"
    },
    {
        heading: "ATM-Simulator",
        year: "(December 2021)",
        info: "Developed an application that simulates an ATM. Utilized Swing framework to develop its graphical user interface (GUI). Implemented database connectivity using JDBC and managed the database system with MySQL.",
        tools: "Tools & technologies used: Java, Swing, JDBC, MYSQL",
        psrc: "https://github.com/Pratikkithani/ATM-SIMULATOR"
    },
    {
        heading: "Blood Donation",
        year: "(July 2020)",
        info: "The Blood Donation App is an Android application developed using Android Studio, Java, and Firebase for database management. This app serves as a platform for both donors and recipients, facilitating the process of blood donation and matching donors with those in need.",
        tools: "Tools & technologies used: Java, Android Studio, Firebase",
        psrc: "https://github.com/Pratikkithani/Blood-Donation-App"
    },
    {
        heading: "College Space",
        year: "(February 2022)",
        info: "A central site to keep track of all committee activities. The website includes a free newsletter that keeps everyone up to date on forthcoming events held by the college’s committees.",
        tools: "Tools & technologies used: HTML, CSS, BOOTSTRAP, JavaScript",
        psrc: "https://github.com/Pratikkithani/College-Space"
    }
];


const prev_pro_btn = document.getElementById('prev-proj-btn');
const next_pro_btn = document.getElementById('next-proj-btn');
const proj_div_h2 = document.querySelector('.proj_div h2');
const proj_div_h5 = document.querySelector('.proj_div h5');
const proj_div_p = document.querySelector('.proj_div p');
const proj_btns = document.querySelector('.proj_btns a');


let j = 0;

next_pro_btn.addEventListener("click", () => {
    i = (i + 1) % projects_info.length;
    proj_div_h2.textContent = projects_info[i].heading;
    proj_div_h5.textContent = projects_info[i].year;
    proj_div_p.textContent = projects_info[i].info;
    proj_btns.href = projects_info[i].psrc;
});


prev_pro_btn.addEventListener("click", () => {
    i = (i - 1 + projects_info.length) % projects_info.length;
    proj_div_h2.textContent = projects_info[i].heading;
    proj_div_h5.textContent = projects_info[i].year;
    proj_div_p.textContent = projects_info[i].info;
    proj_btns.href = projects_info[i].psrc;

});