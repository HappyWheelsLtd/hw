// ===============================
// Happy Wheels - JavaScript
// ===============================

console.log("Happy Wheels Website Loaded");

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function (e) {
        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            e.preventDefault();

            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

// Navbar shadow on scroll
window.addEventListener("scroll", function () {

    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 50) {
        navbar.style.boxShadow = "0 10px 30px rgba(0,0,0,.2)";
    } else {
        navbar.style.boxShadow = "0 5px 20px rgba(0,0,0,.15)";
    }

});