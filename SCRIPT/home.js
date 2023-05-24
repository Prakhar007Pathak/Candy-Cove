// const butttons = document.querySelectorAll(".tabs-nav__item-list button");

const HlProduct = document.querySelector(".highlighted-product-list");
const rightArrow = document.querySelector(".next-button .right-arrow svg");
const leftArrow = document.querySelector(".next-button .left-arrow svg");

const firstBestSeller = document.querySelector(".first-bestseller-product-list");
const leftArrowBestSeller = document.querySelector(".left-and-right-arrow-ofBS .bestseller-left-arrow svg");
const rightArrowBestSeller = document.querySelector(".left-and-right-arrow-ofBS .bestseller-right-arrow svg");

const secondBestSeller = document.querySelector(".actually-second-bestseller-product-list");
const secondleftArrowBestSeller = document.querySelector(".left-and-right-arrow-of-2ndBS .second-bestseller-left-arrow svg");
const secondrightArrowBestSeller = document.querySelector(".left-and-right-arrow-of-2ndBS .second-bestseller-right-arrow svg");

const thirdBestSeller = document.querySelector(".actually-third-bestseller-product-list");
const thirdleftArrowBestSeller = document.querySelector(".left-and-right-arrow-of-3rdBS .third-bestseller-left-arrow svg");
const thirdrightArrowBestSeller = document.querySelector(".left-and-right-arrow-of-3rdBS .third-bestseller-right-arrow svg");

const forthBestSeller = document.querySelector(".actually-forth-bestseller-product-list");
const forthleftArrowBestSeller = document.querySelector(".left-and-right-arrow-of-4thBS .forth-bestseller-left-arrow svg");
const forthrightArrowBestSeller = document.querySelector(".left-and-right-arrow-of-4thBS .forth-bestseller-right-arrow svg");

// const leftArrowContainer = document.querySelector(".next-button .left-arrow")
// const rightArrowContainer = document.querySelector(".next-button .right-arrow")
// const manageIcons = () => {
//     if (HlProduct.scrollLeft >= 20){
//         leftArrowContainer.classList.add("active");
//     }
//     else{
//         leftArrowContainer.classList.remove("active");
//     }
// }

rightArrowBestSeller.addEventListener("click", () => {
    firstBestSeller.scrollLeft += 1000;
    manageIcons();
});
leftArrowBestSeller.addEventListener("click", () => {
    firstBestSeller.scrollLeft -= 1000;
    manageIcons();
});


secondrightArrowBestSeller.addEventListener("click", () => {
    secondBestSeller.scrollLeft += 1000;
    manageIcons();
});
secondleftArrowBestSeller.addEventListener("click", () => {
    secondBestSeller.scrollLeft -= 1000;
    manageIcons();
});

thirdrightArrowBestSeller.addEventListener("click", () => {
    thirdBestSeller.scrollLeft += 1000;
    manageIcons();
});
thirdleftArrowBestSeller.addEventListener("click", () => {
    thirdBestSeller.scrollLeft -= 1000;
    manageIcons();
});

forthrightArrowBestSeller.addEventListener("click", () => {
    forthBestSeller.scrollLeft += 1000;
    manageIcons();
});
forthleftArrowBestSeller.addEventListener("click", () => {
    forthBestSeller.scrollLeft -= 1000;
    manageIcons();
});


rightArrow.addEventListener("click", () => {
    HlProduct.scrollLeft += 500;
    manageIcons();
});
leftArrow.addEventListener("click", () => {
    HlProduct.scrollLeft -= 500;
    manageIcons();
});

const removeALLActiveClasses = () => {
    butttons.forEach((button) => {
        button.classList.remove("heading");
    });
};

butttons.forEach(buttton => {
    buttton.addEventListener("click", () => {
        removeALLActiveClasses();
        buttton.classList.add("heading");
    });
});
// let subMenu = document.getElementById("space-for-first-bestseller");
// function toggleMenu() {
//     subMenu.classList.toggle("open-menu");
// }

var slideIndex = 1;
showSlides(slideIndex);
function plusSlides(n) {
    showSlides(slideIndex += n);
}
function currentSlide(n) {
    showSlides(slideIndex = n);
}
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}
// Auto Slide 
var slideIndex = 0;
showSlides();
function showSlides() {
    var i;
   var slides = document.getElementsByClassName("mySlides");
   for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";
   }
   slideIndex++;
   if (slideIndex > slides.length) { slideIndex = 1 }
   slides[slideIndex - 1].style.display = "block";
   setTimeout(showSlides, 4000); // Change image every 2 seconds
}