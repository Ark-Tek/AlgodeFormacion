const form = document.getElementById('enrollmentForm');
if (form) {
  const steps = form.querySelectorAll('.form-step');
  const nextBtns = form.querySelectorAll('.btn-next');
  const prevBtns = form.querySelectorAll('.btn-prev');
  const progress = document.getElementById('progressFill');
  let currentStep = 1;

  function updateUI() {
    steps.forEach(step => step.classList.remove('active'));
    form.querySelector(`[data-step="${currentStep}"]`).classList.add('active');
    progress.style.width = `${(currentStep / steps.length) * 100}%`;
  }

  nextBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Basic validation could go here
      if (currentStep < steps.length) {
        currentStep++;
        updateUI();
      }
    });
  });

  prevBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      if (currentStep > 1) {
        currentStep--;
        updateUI();
      }
    });
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('¡Inscripción completada! Redirigiendo al pago seguro...');
    // window.location.href = 'pago.html';
  });
}
