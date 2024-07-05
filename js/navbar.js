window.addEventListener('scroll', function() {
    /* transition of the navbar */
    // const navbar = document.querySelector('.navbar');
    const navbar = document.querySelectorAll('.navbar, .navbar *');
    const navbarRight = document.querySelector('div.navbar-rigth.navbar-toggler-container');
    const buttonBackground = document.querySelector('.bg-dark');
    // Filter out elements that are .navbar-right or any of its descendants
    const navbarElements = Array.from(navbar).filter(element => {
        return !element.matches('div.navbar-rigth.navbar-toggler-container') && !element.closest('.div.navbar-rigth.navbar-toggler-container');
    
    });
    if (!navbar) return; // Ensure the navbar exists c
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const fadeStart = 50; // Start fading out the navbar
    const fadeUntil = 150; // Fully faded out

    if (scrollTop <= fadeStart) {
        navbarElements.forEach(element => {
            element.style.opacity = '1';
        });
        navbarRight.style.opacity = '1';
        buttonBackground.style.opacity = '1';
    } else if (scrollTop >= fadeUntil) {
        navbarElements.forEach(element => {
            element.style.opacity = '0';
        });
        
        buttonBackground.style.opacity = '0';
        navbar.classList.remove('navbar-expand-lg');
        navbar.classList.remove('bg-dark')
    } else {
        const opacity = 1 - (scrollTop - fadeStart) / (fadeUntil - fadeStart);
        navbarElements.forEach(element => {
            element.style.opacity = `${opacity}`;
        });
        buttonBackground.style.opacity = `${opacity}`;
        navbarRight.style.opacity = '1';
        // navbar-toggler.style.opacity = '1';
    }

    if (scrollTop <= fadeUntil + 10) {
        navbar.classList.add('navbar-expand-lg');
    }

});
/* calculate padding of the toggler button div */ 
document.addEventListener("DOMContentLoaded", function() {
    const navbarLeft = document.querySelector('.navbar-left');
    const navbarRight = document.querySelector('.navbar-right');

    function adjustPadding() {
        // calculate width of the right box
        const navbarRightWidth = navbarRight.offsetWidth;
        // calculate left padding
        const navbarLeftComputedStyle = window.getComputedStyle(navbarLeft);
        const navbarLeftPaddingLeft = parseFloat(navbarLeftComputedStyle.paddingLeft);
        navbarLeft.style.paddingRight = `${navbarRightWidth + navbarLeftPaddingLeft}px`;
    }

    // Adjust padding initially
    adjustPadding();

    // Adjust padding on window resize
    window.addEventListener('resize', adjustPadding);
});

/*
const navbarHeight = document.querySelector('.navbar').offsetHeight;
document.getElementById('header').style.height = `${navbarHeight}px`;
*/