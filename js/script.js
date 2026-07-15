// =========================
// Happy Wheels
// =========================

console.log("Website Loaded");

// Smooth Scroll

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

// Navbar Shadow

window.addEventListener("scroll",()=>{

const navbar=document.querySelector(".navbar");

navbar.style.boxShadow=

window.scrollY>50

?"0 10px 30px rgba(0,0,0,.25)"

:"0 5px 20px rgba(0,0,0,.15)";

});

// Hamburger Menu

const menu=document.querySelector(".menu-toggle");

const nav=document.querySelector(".nav-links");

menu.addEventListener("click",()=>{

nav.classList.toggle("active");

});

// Close menu after clicking a link

document.querySelectorAll(".nav-links a").forEach(link=>{

link.addEventListener("click",()=>{

nav.classList.remove("active");

});

});
