document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('.nav');
    
    // Create and append overlay
    const overlay = document.createElement('div');
    overlay.className = 'nav-overlay';
    document.body.appendChild(overlay);
    
    function toggleMenu() {
        const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
        menuToggle.setAttribute('aria-expanded', !isExpanded);
        nav.classList.toggle('active');
        overlay.classList.toggle('active');
        document.body.style.overflow = isExpanded ? '' : 'hidden';
    }

    menuToggle.addEventListener('click', toggleMenu);
    overlay.addEventListener('click', () => {
        menuToggle.setAttribute('aria-expanded', 'false');
        nav.classList.remove('active');
        overlay.classList.remove('active');
        document.body.style.overflow = '';
    });
});
