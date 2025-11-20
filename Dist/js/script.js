const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');
const openIcon = document.getElementById('menu-icon-open');
const closeIcon = document.getElementById('menu-icon-close');

// Add smooth scrolling behavior for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        // Close mobile menu if open
        if (mobileMenu.classList.contains('open')) {
            mobileMenu.classList.remove('open');
            openIcon.classList.remove('hidden');
            closeIcon.classList.add('hidden');
            menuToggle.setAttribute('aria-expanded', 'false');
        }
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

menuToggle.addEventListener('click', () => {
    const isMenuOpen = mobileMenu.classList.toggle('open');
    
    // Toggle icons
    if (isMenuOpen) {
        openIcon.classList.add('hidden');
        closeIcon.classList.remove('hidden');
        menuToggle.setAttribute('aria-expanded', 'true');
    } else {
        openIcon.classList.remove('hidden');
        closeIcon.classList.add('hidden');
        menuToggle.setAttribute('aria-expanded', 'false');
    }
});

// Hide menu when clicking outside on mobile (optional, but good UX)
document.addEventListener('click', (event) => {
    const isClickInsideNav = menuToggle.closest('nav').contains(event.target);
    if (!isClickInsideNav && mobileMenu.classList.contains('open') && window.innerWidth < 1024) {
        mobileMenu.classList.remove('open');
        openIcon.classList.remove('hidden');
        closeIcon.classList.add('hidden');
        menuToggle.setAttribute('aria-expanded', 'false');
    }
});