document.addEventListener('DOMContentLoaded', () => {
    // --- FILTRADO DE CURSOS ---
    const toggleBtns = document.querySelectorAll('.toggle-btn');
    const courseCards = document.querySelectorAll('.course-card');

    toggleBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            toggleBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

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

    // --- EFECTO NAVBAR AL HACER SCROLL ---
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 20) {
            navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.boxShadow = 'none';
        }
    });
});
