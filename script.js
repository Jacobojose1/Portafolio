document.addEventListener('DOMContentLoaded', function () {
    // Smooth scroll para todos los <a href="#...">
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Email button
    const emailBtns = document.querySelectorAll('.email-btn');
    emailBtns.forEach(function (btn) {
        btn.addEventListener('click', function () {
            const email = btn.getAttribute('data-email');
            alert(`My email is: ${email}`);
        });
    });

    // Ya no necesitas esto si no usás .cta-button
    // const ctaButton = document.querySelector('.cta-button');
    // const gamesSection = document.querySelector('#games');
});
