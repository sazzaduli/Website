document.addEventListener('DOMContentLoaded', () => {
    console.log('Portfolio website is loaded');

    // Handle section visibility on scroll
    const handleSectionVisibility = () => {
        const sections = document.querySelectorAll('section');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        sections.forEach(section => observer.observe(section));
    };

    // Smooth scrolling for navigation links
    const handleSmoothScrolling = () => {
        document.querySelectorAll('nav ul li a').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                e.preventDefault();
                document.querySelector(anchor.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
            });
        });
    };

    // Toggle hamburger menu visibility
    const handleHamburgerMenu = () => {
        const hamburger = document.getElementById('hamburger');
        const menu = document.querySelector('.menu');
        const hamIcon = hamburger.querySelector('.hamburger-icon');
        const crossIcon = hamburger.querySelector('.cross-icon');

        hamburger.addEventListener('click', () => {
            const isMenuVisible = menu.style.display === "block";
            hamIcon.style.display = isMenuVisible ? "inline-block" : "none";
            crossIcon.style.display = isMenuVisible ? "none" : "inline-block";
            menu.style.display = isMenuVisible ? "none" : "block";
        });
    };

    // Rotate hero container on scroll
    const handleScrollAnimation = () => {
        document.addEventListener('scroll', () => {
            const heroContainer = document.querySelector('.hero-container');
            heroContainer.style.transform = `rotateX(${window.scrollY * 0.05}deg) rotateY(${window.scrollY * 0.05}deg)`;
        });
    };

    // Hide/reveal navbar based on scroll direction
    const handleNavbarHideReveal = () => {
        const header = document.querySelector(".header");
        let lastScrollY = window.scrollY;

        window.addEventListener("scroll", () => {
            const currentScrollY = window.scrollY;
            if (currentScrollY > lastScrollY) {
                header.classList.replace("visible", "hidden");
            } else {
                header.classList.replace("hidden", "visible");
            }
            lastScrollY = currentScrollY;
        });
    };

    // Simulate page loader
    const handlePageLoader = () => {
        setTimeout(() => {
            document.getElementById('loader-wrapper').classList.add('hide-loader');
        }, 5000); // Adjust delay as needed
    };

    // Handle "Hire Me" button click
    const handleHireMeButton = () => {
        document.getElementById('contact-btn').addEventListener('click', () => {
            const email = 'sazzaduli16@gmail.com';
            const subject = 'Interested in Hiring/Collaboration';
            const body = `Hello,

I am interested in discussing potential job opportunities or collaborations. Please let me know if you have any available positions or exciting projects.

Best regards,
[Your Name]`;

            window.location.href = `mailto:${encodeURIComponent(email)}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        });
    };

    // Initialize functions
    handleSectionVisibility();
    handleSmoothScrolling();
    handleHamburgerMenu();
    handleScrollAnimation();
    handleNavbarHideReveal();
    handlePageLoader();
    handleHireMeButton();
});

// JavaScript to generate shooting stars
document.addEventListener('mousemove', function(event) {
    const x = event.clientX / window.innerWidth * 100;
    const y = event.clientY / window.innerHeight * 100;
    document.documentElement.style.setProperty('--x', `${x}%`);
    document.documentElement.style.setProperty('--y', `${y}%`);
});
