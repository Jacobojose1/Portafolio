document.addEventListener('DOMContentLoaded', function() {
    const ctaButton = document.querySelector('.cta-button');
    const gamesSection = document.querySelector('#games');
    
    ctaButton.addEventListener('click', function() {
        gamesSection.scrollIntoView({ behavior: 'smooth' });
    });
    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Email button
    const emailBtn = document.querySelector('.email-btn');
    if (emailBtn) {
        emailBtn.addEventListener('click', () => {
            const email = emailBtn.dataset.email;
            if (navigator.clipboard && navigator.clipboard.writeText) {
                navigator.clipboard.writeText(email).catch(() => {});
            }
            alert(`My email is: ${email} (copied to clipboard)`);
        });
    }
});
