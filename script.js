/* =========================
HAMBURGER MENU
========================= */

const hamburger = document.getElementById("hamburger");
const nav = document.getElementById("nav");

hamburger.addEventListener("click", () => {
nav.classList.toggle("active");
hamburger.classList.toggle("active");
});

/* =========================
CLOSE MENU
========================= */

document.querySelectorAll("nav a").forEach(link => {

link.addEventListener("click", () => {

nav.classList.remove("active");
hamburger.classList.remove("active");

});

});

/* =========================
HEADER SCROLL
========================= */

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

if(window.scrollY > 60){

header.classList.add("scrolled");

}else{

header.classList.remove("scrolled");

}

});

/* =========================
BACK TO TOP
========================= */

const topButton = document.getElementById("topButton");

window.addEventListener("scroll",()=>{

if(window.scrollY > 500){

topButton.style.display="flex";

}else{

topButton.style.display="none";

}

});

topButton.addEventListener("click",()=>{

window.scrollTo({

top:0,
behavior:"smooth"

});

});

/* =========================
SMOOTH SCROLL
========================= */

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

const target=document.querySelector(this.getAttribute("href"));

if(target){

e.preventDefault();

target.scrollIntoView({

behavior:"smooth"

});

}

});

});
/* =========================
SCROLL ANIMATIONS
========================= */

const observer = new IntersectionObserver((entries) => {

entries.forEach(entry => {

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{
threshold:0.15
});

document.querySelectorAll("section").forEach(section=>{

observer.observe(section);

});

/* =========================
GALLERY LIGHTBOX
========================= */

const galleryImages = document.querySelectorAll(".galleryItem img");

galleryImages.forEach(image=>{

image.addEventListener("click",()=>{

const overlay = document.createElement("div");
overlay.className = "lightbox";

const img = document.createElement("img");
img.src = image.src;

overlay.appendChild(img);

document.body.appendChild(overlay);

overlay.addEventListener("click",()=>{

overlay.remove();

});

});

});

/* =========================
PRELOADER (OPTIONAL)
========================= */

window.addEventListener("load",()=>{

document.body.classList.add("loaded");

});

/* =========================
CURRENT YEAR
========================= */

const year = document.getElementById("year");

if(year){

year.textContent = new Date().getFullYear();

}
/* =========================
BUTTON HOVER EFFECT
========================= */

document.querySelectorAll(".goldButton,.borderButton").forEach(button=>{

button.addEventListener("mouseenter",()=>{

button.style.transform="translateY(-5px)";

});

button.addEventListener("mouseleave",()=>{

button.style.transform="translateY(0px)";

});

});

/* =========================
IMAGE LAZY LOADING
========================= */

document.querySelectorAll("img").forEach(img=>{

img.setAttribute("loading","lazy");

});

/* =========================
CONSOLE MESSAGE
========================= */

console.log("Friseur Salon Ana-Marija website loaded successfully.");

AOS.init({
duration:800,
once:true,
offset:100
});