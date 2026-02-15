// Mobile navigation toggle
const mobileToggle = document.getElementById("mobileToggle");
const navLinks = document.getElementById("navLinks");

mobileToggle.addEventListener("click", () => {
    mobileToggle.classList.toggle("active");
    navLinks.classList.toggle("active");
});

// Close mobile nav when a link is clicked
navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
        mobileToggle.classList.remove("active");
        navLinks.classList.remove("active");
    });
});

// Navbar style on scroll
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
    if (window.scrollY > 20) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});

// Scroll-reveal animation
const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Add fade-up class to animatable elements
document.querySelectorAll(
    ".feature-card, .step-card, .use-case-card, .pricing-card, .section-header"
).forEach((el, i) => {
    el.classList.add("fade-up");
    el.style.transitionDelay = `${(i % 6) * 0.08}s`;
    observer.observe(el);
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", (e) => {
        const target = document.querySelector(anchor.getAttribute("href"));
        if (target) {
            e.preventDefault();
            const offset = 80;
            const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
            window.scrollTo({ top, behavior: "smooth" });
        }
    });
});

// CTA form handling
const ctaForm = document.getElementById("ctaForm");

ctaForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const inputs = ctaForm.querySelectorAll("input");
    const values = Array.from(inputs).map((i) => i.value.trim());

    if (values.some((v) => !v)) return;

    ctaForm.innerHTML =
        '<div class="form-success">You\'re on the list! We\'ll be in touch soon.</div>';
});

// Active nav link highlighting on scroll
const sections = document.querySelectorAll("section[id]");

window.addEventListener("scroll", () => {
    const scrollY = window.pageYOffset + 100;

    sections.forEach((section) => {
        const top = section.offsetTop;
        const height = section.offsetHeight;
        const id = section.getAttribute("id");
        const link = document.querySelector(`.nav-links a[href="#${id}"]`);

        if (link) {
            if (scrollY >= top && scrollY < top + height) {
                link.style.color = "#6C5CE7";
            } else {
                link.style.color = "";
            }
        }
    });
});
