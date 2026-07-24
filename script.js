// ==============================
// MOBILE MENU
// ==============================

const menu = document.querySelector(".menu");
const nav = document.querySelector("nav");

menu.addEventListener("click", () => {
    nav.classList.toggle("active");

    if (menu.classList.contains("fa-bars")) {
        menu.classList.remove("fa-bars");
        menu.classList.add("fa-times");
    } else {
        menu.classList.remove("fa-times");
        menu.classList.add("fa-bars");
    }
});

// Close menu after clicking a link
document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", () => {
        nav.classList.remove("active");
        menu.classList.remove("fa-times");
        menu.classList.add("fa-bars");
    });
});


// ==============================
// TYPING EFFECT
// ==============================

const words = [
    "MERN Stack Developer",
    "Frontend Developer",
    "AI Enthusiast",
    "Cybersecurity Explorer",
    "Java Programmer"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

const typing = document.getElementById("typing");

function typeEffect() {

    const currentWord = words[wordIndex];

    if (!deleting) {

        typing.textContent = currentWord.substring(0, charIndex++);

        if (charIndex > currentWord.length) {
            deleting = true;
            setTimeout(typeEffect, 1200);
            return;
        }

    } else {

        typing.textContent = currentWord.substring(0, charIndex--);

        if (charIndex < 0) {
            deleting = false;
            wordIndex++;

            if (wordIndex >= words.length) {
                wordIndex = 0;
            }
        }
    }

    setTimeout(typeEffect, deleting ? 40 : 100);
}

typeEffect();


// ==============================
// BACK TO TOP BUTTON
// ==============================

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }

});

topBtn.onclick = () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

};


// ==============================
// ACTIVE NAV LINK
// ==============================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});


// ==============================
// SCROLL ANIMATION
// ==============================

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {

    threshold: .2

});

document.querySelectorAll(
".card,.skill-card,.certificate,.timeline-item,.about-text"
).forEach(el => {

    el.classList.add("hidden");

    observer.observe(el);

});


// ==============================
// STICKY HEADER
// ==============================

window.addEventListener("scroll", () => {

    const header = document.querySelector("header");

    header.classList.toggle("sticky", window.scrollY > 50);

});


// ==============================
// CURRENT YEAR IN FOOTER
// ==============================

const footer = document.querySelector("footer p");

footer.innerHTML =
`© ${new Date().getFullYear()} Gaurav Kumar | Made with ❤️ using HTML, CSS & JavaScript`;

/*=========================
      IMAGE SLIDER
=========================*/

const images = [

    "images/winner.jpg",

    "images/judging.jpg",

    "images/certificates.jpg",

    "images/stage.jpg"

];

let currentImage = 0;

const achievementImg = document.getElementById("achievement-img");

document.querySelector(".next").onclick = () => {

    currentImage++;

    if(currentImage >= images.length){

        currentImage = 0;

    }

    achievementImg.src = images[currentImage];

}

document.querySelector(".prev").onclick = () => {

    currentImage--;

    if(currentImage < 0){

        currentImage = images.length-1;

    }

    achievementImg.src = images[currentImage];

}
setInterval(() => {

    currentImage++;

    if(currentImage >= images.length){

        currentImage = 0;

    }

    achievementImg.src = images[currentImage];

},4000);