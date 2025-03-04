const cards = document.querySelectorAll('.info-card');

cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.classList.add('animate');
    });

    card.addEventListener('mouseleave', () => {
        card.classList.remove('animate');
    });
});

// Animation keyframes
const style = document.createElement('style');
style.innerHTML = `
    .info-card {
        transition: transform 0.3s ease, box-shadow 0.3s ease;
    }
    .info-card.animate {
        transform: scale(1.05);
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
    }
`;
document.head.appendChild(style);