// ==========================================
// FILTRO DE CURSOS (Presencial, Online, Mixta, Todos)
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    const toggleBtns = document.querySelectorAll('.toggle-btn');
    const courseCards = document.querySelectorAll('.course-card');

    toggleBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // 1. Quitar la clase 'active' de todos los botones
            toggleBtns.forEach(b => b.classList.remove('active'));
            // 2. Poner la clase 'active' solo en el botón clickeado
            btn.classList.add('active');

            // 3. Obtener el filtro seleccionado
            const filter = btn.getAttribute('data-filter');

            // 4. Mostrar u ocultar las tarjetas de cursos
            courseCards.forEach(card => {
                if (filter === 'all') {
                    card.style.display = 'flex'; // Mostrar todos
                } else {
                    const type = card.getAttribute('data-type');
                    if (type === filter) {
                        card.style.display = 'flex'; // Mostrar si coincide
                    } else {
                        card.style.display = 'none'; // Ocultar si no coincide
                    }
                }
            });
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

    // --- SCROLL SUAVE PARA ENLACES DEL MENÚ ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const target = document.querySelector(targetId);
            if (target) {
                e.preventDefault();
                const offset = 80; // Compensar navbar fija
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });

                // Actualizar enlace activo
                document.querySelectorAll('.nav-link').forEach(link => {
                    link.classList.remove('active-link');
                });
                if (this.classList.contains('nav-link')) {
                    this.classList.add('active-link');
                }
            }
        });
    });

    // --- TABS DE MI CUENTA (LOGIN / REGISTRO) ---
    const accountTabs = document.querySelectorAll('.account-tab');
    const accountPanels = document.querySelectorAll('.account-panel');

    accountTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const targetTab = tab.getAttribute('data-tab');
            
            accountTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            
            accountPanels.forEach(panel => panel.classList.remove('active'));
            document.getElementById(`${targetTab}-panel`).classList.add('active');
        });
    });

    // --- FORMULARIO DE CONTACTO ---
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('¡Mensaje enviado! Te contactaremos pronto.');
            contactForm.reset();
        });
    }
});
