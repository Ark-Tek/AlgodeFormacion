// ==========================================
// FILTRO DE CURSOS
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    const toggleBtns = document.querySelectorAll('.toggle-btn');
    const courseCards = document.querySelectorAll('.course-card');

    toggleBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove 'active' class from all buttons
            toggleBtns.forEach(b => b.classList.remove('active'));
            // Add 'active' class to clicked button
            btn.classList.add('active');

            // Get selected filter
            const filter = btn.getAttribute('data-filter');

            // Show/hide course cards
            courseCards.forEach(card => {
                if (filter === 'all') {
                    card.style.display = 'flex';
                } else {
                    const type = card.getAttribute('data-type');
                    if (type === filter) {
                        card.style.display = 'flex';
                    } else {
                        card.style.display = 'none';
                    }
                }
            });
        });
    });
});

// ==========================================
// NAVBAR SCROLL EFFECT
// ==========================================
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
    } else {
        navbar.style.boxShadow = 'none';
    }
});

// ==========================================
// ACCOUNT TABS
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    const accountTabs = document.querySelectorAll('.account-tab');
    const accountPanels = document.querySelectorAll('.account-panel');

    accountTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const targetTab = tab.getAttribute('data-tab');
            
            accountTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            
            accountPanels.forEach(panel => {
                panel.classList.remove('active');
                if (panel.id === `${targetTab}-panel`) {
                    panel.classList.add('active');
                }
            });
        });
    });
});

// ==========================================
// SMOOTH SCROLL
// ==========================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});
