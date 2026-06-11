// Accordion Logic (Used in FAQ and Course Detail)
document.querySelectorAll('.accordion-header').forEach(header => {
  header.addEventListener('click', () => {
    const content = header.nextElementSibling;
    const icon = header.querySelector('span');
    
    // Close others
    document.querySelectorAll('.accordion-content').forEach(c => {
      if (c !== content) c.classList.remove('open');
    });
    document.querySelectorAll('.accordion-header span').forEach(i => {
      if (i !== icon) i.textContent = '+';
    });

    // Toggle current
    content.classList.toggle('open');
    icon.textContent = content.classList.contains('open') ? '−' : '+';
  });
});

// Exit Intent Modal
const exitModal = document.getElementById('exitModal');
const closeModal = document.getElementById('closeModal');
let modalShown = false;

document.addEventListener('mouseout', (e) => {
  if (e.clientY < 10 && !modalShown) {
    exitModal.classList.add('active');
    modalShown = true;
  }
});

if(closeModal) {
  closeModal.addEventListener('click', () => exitModal.classList.remove('active'));
  exitModal.addEventListener('click', (e) => {
    if(e.target === exitModal) exitModal.classList.remove('active');
  });
}
