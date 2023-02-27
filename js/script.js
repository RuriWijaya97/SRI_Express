// Scrolling Navbar
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    var navbar = document.getElementById("navbar");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        navbar.classList.add("shadow");
        navbar.classList.add("bg-red");
        navbar.classList.remove("mt-4");
    } else {
        navbar.classList.remove("shadow");
        navbar.classList.remove("bg-red");
        
    }
}



