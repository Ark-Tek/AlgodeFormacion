document.addEventListener('DOMContentLoaded', () => {
  const filters = document.querySelectorAll('.filter-check');
  const courseCards = document.querySelectorAll('#courseGrid .course-card');
  const clearBtn = document.getElementById('clearFilters');
  const resetLink = document.getElementById('resetLink');
  const resultCount = document.getElementById('resultCount');
  const noResults = document.querySelector('.no-results');

  function applyFilters() {
    // 1. Recopilar filtros activos
    const activeFilters = {
      type: [],      // <-- Cambiado de 'modality' a 'type'
      sector: [],
      duration: [],
      level: []
    };

    filters.forEach(filter => {
      if (filter.checked) {
        activeFilters[filter.dataset.filter].push(filter.value);
      }
    });

    let visibleCount = 0;

    // 2. Evaluar tarjetas
    courseCards.forEach(card => {
      if (card.classList.contains('no-results')) return;

      const cType = card.dataset.type;      // <-- Lee el nuevo atributo
      const cSector = card.dataset.sector;
      const cDuration = card.dataset.duration;
      const cLevel = card.dataset.level;

      // Verifica coincidencias
      const matchType = activeFilters.type.length === 0 || activeFilters.type.includes(cType);
      const matchSector = activeFilters.sector.length === 0 || activeFilters.sector.includes(cSector);
      const matchDuration = activeFilters.duration.length === 0 || activeFilters.duration.includes(cDuration);
      const matchLevel = activeFilters.level.length === 0 || activeFilters.level.includes(cLevel);

      if (matchType && matchSector && matchDuration && matchLevel) {
        card.style.display = 'flex';
        visibleCount++;
      } else {
        card.style.display = 'none';
      }
    });

    // 3. Actualizar UI
    resultCount.textContent = `Mostrando ${visibleCount} curso${visibleCount !== 1 ? 's' : ''}`;
    
    if (visibleCount === 0) {
      noResults.classList.add('active');
    } else {
      noResults.classList.remove('active');
    }
  }

  // 4. Event Listeners
  filters.forEach(filter => filter.addEventListener('change', applyFilters));

  function resetAllFilters() {
    filters.forEach(f => f.checked = false);
    applyFilters();
  }

  if (clearBtn) clearBtn.addEventListener('click', resetAllFilters);
  if (resetLink) resetLink.addEventListener('click', (e) => { e.preventDefault(); resetAllFilters(); });
});
