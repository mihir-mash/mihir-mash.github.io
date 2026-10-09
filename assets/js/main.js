// Native hash links remain functional with JavaScript disabled.
(() => {
    const nav = document.querySelector('.navbar');
    const links = [...document.querySelectorAll('.nav-link')];
    const sections = links.map(link => document.querySelector(link.getAttribute('href'))).filter(Boolean);
    let queued = false;
    let navHeight = nav ? nav.offsetHeight : 0;

    function measureNav() {
        navHeight = nav ? nav.offsetHeight : 0;
        document.documentElement.style.setProperty('--nav-height', `${navHeight}px`);
    }
    function updateActive() {
        queued = false;
        let current = sections[0];
        for (const section of sections) {
            if (section.getBoundingClientRect().top <= navHeight + 40) current = section;
        }
        if (window.scrollY > 0 && window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) {
            current = sections[sections.length - 1];
        }
        links.forEach(link => {
            const active = !!current && link.getAttribute('href') === `#${current.id}`;
            link.classList.toggle('active', active);
            if (active) link.setAttribute('aria-current', 'location');
            else link.removeAttribute('aria-current');
        });
    }
    function scheduleUpdate() {
        if (!queued) { queued = true; window.requestAnimationFrame(updateActive); }
    }
    measureNav();
    updateActive();
    window.addEventListener('scroll', scheduleUpdate, { passive: true });
    window.addEventListener('resize', () => { measureNav(); scheduleUpdate(); });
    if ('ResizeObserver' in window && nav) new ResizeObserver(() => { measureNav(); scheduleUpdate(); }).observe(nav);

    document.querySelectorAll('.copy-email').forEach(button => {
        button.addEventListener('click', async () => {
            const contact = button.closest('.email-contact');
            const status = contact.querySelector('.copy-status');
            const email = button.dataset.email;
            try {
                await navigator.clipboard.writeText(email);
                status.textContent = 'Email copied';
            } catch {
                // The address is always visible and can be selected without clipboard permission.
                const range = document.createRange();
                range.selectNodeContents(contact.querySelector('.email-address'));
                const selection = window.getSelection();
                selection.removeAllRanges();
                selection.addRange(range);
                status.textContent = 'Address selected. Copy it with your device’s copy command.';
            }
        });
    });
})();
