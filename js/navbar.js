window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (!navbar) return; // Ensure the navbar exists c

    const toggleButton = document.querySelector('.navbar-toggler');
    
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const fadeStart = 50; // Start fading out the navbar
    const fadeUntil = 150; // Fully faded out

    if (scrollTop <= fadeStart) {
        navbar.style.opacity = '1'; 
        toggleButton.style.opacity = '1';
    } else if (scrollTop >= fadeUntil) {
        navbar.style.opacity = '0';
        toggleButton.style.opacity = '1';
    } else {
        navbar.style.opacity = (1 - (scrollTop - fadeStart) / (fadeUntil - fadeStart)).toString();
        navbar.style.backgroundColor = `rgba(0, 0, 0, ${opacity})`;
        toggleButton.style.opacity = '1';
    }
});
