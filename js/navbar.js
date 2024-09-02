
window.addEventListener('scroll', function() {
    /* transition of the navbar */
    const navbar = document.querySelector('.navbar');
    if (!navbar) return; // Ensure the navbar exists
    // const navbar = document.querySelectorAll('.navbar, .navbar *');
    // const navbarElements = Array.from(navbar);
    const navbarID = document.getElementById('navbar-id');
    const pageTitleID = document.getElementById('page-title-id');
    // const opaqueHeight = 100; // Adjust this height as needed
    
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const fadeStart = 50; // Start fading out the navbar
    const fadeUntil = 350; // Fully faded out

    if (scrollTop <= fadeStart) {
        navbarID.style.setProperty('background-color', 'rgba(33,37,41, 1)', 'important');
        pageTitleID.style.setProperty('opacity', '1'); 
    } else if (scrollTop >= fadeUntil) {
        navbarID.style.setProperty('background-color', 'rgba(33,37,41, 0)', 'important');
        navbar.classList.remove('navbar-expand-lg');
        pageTitleID.style.opacity = '0'; 
    } else {
        const opacity = 1 - (scrollTop - fadeStart) / (fadeUntil - fadeStart);
        navbarID.style.setProperty('background-color', `rgba(33, 37, 41, ${opacity})`, 'important');
        pageTitleID.style.opacity = opacity.toString(); 
    }

    if (scrollTop <= fadeUntil + 10) {
        navbar.classList.add('navbar-expand-lg');
    }
});

