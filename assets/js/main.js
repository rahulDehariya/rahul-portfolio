/**
 * =====================================================
 * Rahul Portfolio v2 - Main JavaScript
 * =====================================================
 */

document.addEventListener("DOMContentLoaded", function () {

    "use strict";

    // ===============================
    // Initialize AOS
    // ===============================
    if (typeof AOS !== "undefined") {
        AOS.init({
            duration: 1000,
            easing: "ease-in-out",
            once: true,
            mirror: false
        });
    }

    // ===============================
    // Smooth Scroll
    // ===============================
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {

        link.addEventListener("click", function (e) {

            const target = document.querySelector(this.getAttribute("href"));

            if (!target) return;

            e.preventDefault();

            window.scrollTo({
                top: target.offsetTop - 70,
                behavior: "smooth"
            });

        });

    });

    // ===============================
    // Active Navigation
    // ===============================

    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll(".nav-link");

    function activateNav() {

        let scrollY = window.pageYOffset;

        sections.forEach(section => {

            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 120;
            const sectionId = section.getAttribute("id");

            if (
                scrollY >= sectionTop &&
                scrollY < sectionTop + sectionHeight
            ) {

                navLinks.forEach(nav => {
                    nav.classList.remove("active");
                });

                const current = document.querySelector(
                    '.nav-link[href="#' + sectionId + '"]'
                );

                if (current) {
                    current.classList.add("active");
                }

            }

        });

    }

    window.addEventListener("scroll", activateNav);

    activateNav();

    // ===============================
    // Navbar Shadow
    // ===============================

    const navbar = document.querySelector(".navbar");

    function navbarShadow() {

        if (!navbar) return;

        if (window.scrollY > 50) {

            navbar.classList.add("shadow");

        } else {

            navbar.classList.remove("shadow");

        }

    }

    window.addEventListener("scroll", navbarShadow);

    navbarShadow();

    // ===============================
    // Hero Role Animation
    // ===============================

    const heroTitle = document.querySelector("#hero h3");

    if (heroTitle) {

        const roles = [

            "Machine Learning Engineer",
            "Data Scientist",
            "Backend Engineer",
            "Python Developer"

        ];

        let current = 0;

        setInterval(function () {

            current++;

            if (current >= roles.length) {

                current = 0;

            }

            heroTitle.style.opacity = 0;

            setTimeout(function () {

                heroTitle.innerHTML = roles[current];

                heroTitle.style.opacity = 1;

            }, 300);

        }, 2500);

    }

    // ===============================
    // Button Hover Animation
    // ===============================

    document.querySelectorAll(".btn").forEach(function (button) {

        button.addEventListener("mouseenter", function () {

            this.style.transform = "translateY(-3px)";
            this.style.transition = ".3s";

        });

        button.addEventListener("mouseleave", function () {

            this.style.transform = "translateY(0px)";

        });

    });

    // ===============================
    // Fade Cards on Hover
    // ===============================

    document.querySelectorAll(".card").forEach(function (card) {

        card.addEventListener("mouseenter", function () {

            this.style.transform = "translateY(-8px)";

        });

        card.addEventListener("mouseleave", function () {

            this.style.transform = "translateY(0px)";

        });

    });

});