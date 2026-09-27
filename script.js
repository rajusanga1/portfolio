// ================= MOBILE MENU =================

const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

menuBtn.addEventListener("click", function () {

    navMenu.classList.toggle("active");

});


// ================= CLOSE MOBILE MENU =================

const navLinks = document.querySelectorAll("#navMenu a");

navLinks.forEach(function(link) {

    link.addEventListener("click", function() {

        navMenu.classList.remove("active");

    });

});


// ================= CURRENT YEAR =================

const year = document.getElementById("year");

if (year) {

    year.textContent = new Date().getFullYear();

}


// ================= BACK TO TOP =================

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", function() {

    if (window.scrollY > 500) {

        topBtn.classList.add("show");

    } else {

        topBtn.classList.remove("show");

    }

});


topBtn.addEventListener("click", function() {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});


// ================= SCROLL REVEAL =================

const revealElements = document.querySelectorAll(
    ".project-card, .skill-card, .info-card, .education-card, .contact-card"
);


const revealObserver = new IntersectionObserver(

    function(entries) {

        entries.forEach(function(entry) {

            if (entry.isIntersecting) {

                entry.target.classList.add("reveal-visible");

                revealObserver.unobserve(entry.target);

            }

        });

    },

    {
        threshold: 0.12
    }

);


revealElements.forEach(function(element) {

    element.classList.add("reveal-hidden");

    revealObserver.observe(element);

});
// ================= EXTRA REVEAL CSS =================

const revealStyle = document.createElement("style");

revealStyle.innerHTML = `

.reveal-hidden {
    opacity: 0;
    transform: translateY(25px);
    transition: opacity 0.7s ease, transform 0.7s ease;
}

.reveal-visible {
    opacity: 1;
    transform: translateY(0);
}

`;

document.head.appendChild(revealStyle);