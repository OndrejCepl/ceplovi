window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (!navbar) return; // Ensure the navbar exists c
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const fadeStart = 50; // Start fading out the navbar
    const fadeUntil = 150; // Fully faded out

    if (scrollTop <= fadeStart) {
        navbar.style.opacity = '1';
    } else if (scrollTop >= fadeUntil) {
        navbar.style.opacity = '0';
        navbar.classList.remove('navbar-expand-lg');
    } else {
        const opacity = 1 - (scrollTop - fadeStart) / (fadeUntil - fadeStart);
        navbar.style.opacity = `${opacity}`;
        
        // navbar-toggler.style.opacity = '1';
    }

    if (scrollTop <= fadeUntil + 10) {
        navbar.classList.add('navbar-expand-lg');
    }
});

const navbarHeight = document.querySelector('.navbar').offsetHeight;
document.getElementById('header').style.height = `${navbarHeight}px`;