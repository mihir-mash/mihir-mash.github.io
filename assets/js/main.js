// Page Navigation
function showPage(pageName) {
    // Hide all pages
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
        page.classList.remove('active');
    });

    // Show the selected page
    const activePage = document.getElementById(pageName);
    if (activePage) {
        activePage.classList.add('active');
        window.scrollTo(0, 0);
    }

    // Update active nav link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.classList.remove('active');
    });
    
    // Find and highlight the clicked link
    const clickedLink = event ? event.target : null;
    if (clickedLink) {
        clickedLink.classList.add('active');
    } else {
        // Fallback: find by page name
        navLinks.forEach(link => {
            if (link.textContent.toLowerCase() === pageName.toLowerCase()) {
                link.classList.add('active');
            }
        });
    }
}

// Keyboard shortcuts
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        document.activeElement.blur();
    }
});

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    // Set home as active by default
    const homeLink = document.querySelector('.nav-link');
    if (homeLink) {
        homeLink.classList.add('active');
    }

    // Add smooth scroll for any anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href && href !== '#' && !href.includes('showPage')) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });
});

// Fix navigation link onclick
document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach((link, index) => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const pages = ['home', 'education', 'experience', 'projects', 'publications', 'skills', 'achievements'];
            if (index < pages.length) {
                showPage(pages[index]);
                
                // Update active state
                navLinks.forEach(l => l.classList.remove('active'));
                this.classList.add('active');
            }
        });
    });

    // Set home as active
    if (navLinks.length > 0) {
        navLinks[0].classList.add('active');
    }
});
