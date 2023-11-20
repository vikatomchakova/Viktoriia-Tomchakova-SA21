document.addEventListener("DOMContentLoaded", function() {
    const menuItems = document.querySelectorAll(".menu__item");

    menuItems.forEach(function(item) {
        item.addEventListener("click", function(event) {
            // Закриваємо бургер-меню
            document.getElementById("menu__toggle").checked = false;
        });
    });
})
document.addEventListener("DOMContentLoaded", function() {
    showSlides(slideIndex);
});
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}
function showContactForm() {
    var contactContainer = document.getElementById("form");
    var callButton = document.querySelector(".button_aboutUs");

    contactContainer.style.display = "block";

    contactContainer.scrollIntoView({ behavior: 'smooth' });
}
function showContactForm2() {
    var contactContainer = document.getElementById("form");
    var callButton = document.querySelector(".contacts_but");

    contactContainer.style.display = "block";


    contactContainer.scrollIntoView({ behavior: 'smooth' });
}
function showContactForm3() {
    var contactContainer = document.getElementById("form");
    var callButton = document.querySelector(".button_main");

    contactContainer.style.display = "block";


    contactContainer.scrollIntoView({ behavior: 'smooth' });
}