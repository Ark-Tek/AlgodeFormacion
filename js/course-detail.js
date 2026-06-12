document.addEventListener('DOMContentLoaded', () => {
  // 1. Get the course ID from the URL (e.g., ?id=01.12.01)
  const urlParams = new URLSearchParams(window.location.search);
  const courseId = urlParams.get('id');

  // 2. Find the course in our data array
  const course = coursesData.find(c => c.id === courseId);

  if (!course) {
    document.getElementById('courseTitle').textContent = "Curso no encontrado";
    document.getElementById('courseDesc').textContent = "Por favor, vuelve al catálogo para seleccionar un curso válido.";
    return;
  }

  // 3. Update Page Title
  document.title = `${course.title} | Algode Formación`;

  // 4. Inject Data into HTML
  document.getElementById('courseCode').textContent = course.code;
  document.getElementById('courseTitle').textContent = course.title;
  document.getElementById('courseDesc').textContent = course.description;
  document.getElementById('courseTarget').textContent = course.target;
  document.getElementById('courseObjectives').textContent = course.objectives;
  document.getElementById('courseDuration').textContent = course.duration;
  document.getElementById('courseModality').textContent = course.modality;
  document.getElementById('coursePrice').textContent = course.price;
  document.getElementById('courseCert').textContent = course.certification;
  document.getElementById('courseValidity').textContent = course.validity;
  document.getElementById('courseImage').src = course.image;
  document.getElementById('courseImage').alt = course.title;

  // 5. Build Syllabus List
  const syllabusList = document.getElementById('courseSyllabus');
  course.syllabus.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item;
    syllabusList.appendChild(li);
  });

  // 6. Build Practices List
  const practicesList = document.getElementById('coursePractices');
  course.practices.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item;
    practicesList.appendChild(li);
  });
});
