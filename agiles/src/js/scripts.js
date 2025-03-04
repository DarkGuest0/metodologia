document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.info-card');

    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.classList.add('animate');
        });

        card.addEventListener('mouseleave', () => {
            card.classList.remove('animate');
        });
    });
});