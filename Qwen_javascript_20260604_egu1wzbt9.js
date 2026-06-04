// --- INTERACTIVITY: FILTERING ---
document.addEventListener('DOMContentLoaded', () => {
    const toggleBtns = document.querySelectorAll('.toggle-btn');
    const courseCards = document.querySelectorAll('.course-card');

    toggleBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Update active state
            toggleBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            // Filter cards
            const filter = btn.getAttribute('data-filter');
            courseCards.forEach(card => {
                if (card.getAttribute('data-type') === filter) {
                    card.classList.remove('hidden');
                } else {
                    card.classList.add('hidden');
                }
            });
        });
    });
});