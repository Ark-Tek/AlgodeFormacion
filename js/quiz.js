const quizContainer = document.getElementById('courseQuiz');
if (quizContainer) {
  const steps = quizContainer.querySelectorAll('.quiz-step');
  const options = quizContainer.querySelectorAll('.quiz-opt');
  const resultText = document.getElementById('quizResultText');
  let answers = {};

  options.forEach(opt => {
    opt.addEventListener('click', (e) => {
      const currentStep = parseInt(e.target.closest('.quiz-step').dataset.step);
      const value = e.target.dataset.value;
      
      // Save answer
      if(currentStep === 1) answers.sector = value;
      if(currentStep === 2) answers.modality = value;

      // Visual feedback
      e.target.closest('.quiz-options').querySelectorAll('.quiz-opt').forEach(b => b.classList.remove('selected'));
      e.target.classList.add('selected');

      // Move to next step after short delay
      setTimeout(() => {
        if (currentStep < 3) {
          steps.forEach(s => s.classList.remove('active'));
          quizContainer.querySelector(`[data-step="${currentStep + 1}"]`).classList.add('active');
          
          if (currentStep === 2) {
            // Logic to determine result
            let courseName = "Operador de Carretilla Elevadora (Presencial)";
            if(answers.modality === 'online') courseName = "Gestión de Almacenes y Stock (Online)";
            resultText.innerHTML = `Basado en tu perfil en <strong>${answers.sector}</strong>, te recomendamos:<br><br><strong style="color: var(--teal); font-size: 1.2rem;">${courseName}</strong>`;
          }
        }
      }, 400);
    });
  });
}
