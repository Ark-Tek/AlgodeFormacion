document.addEventListener('DOMContentLoaded', () => {
  const filters = document.querySelectorAll('.filter-check');
  const courseCards = document.querySelectorAll('#courseGrid .course-card');
  const clearBtn = document.getElementById('clearFilters');
  const resetLink = document.getElementById('resetLink');
  const resultCount = document.getElementById('resultCount');
  const noResults = document.querySelector('.no-results');

  // Function to evaluate and apply filters
  function applyFilters() {
    // 1. Gather active filters into an object
    const activeFilters = {
      modality: [],
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

    // 2. Loop through cards and show/hide based on matches
    courseCards.forEach(card => {
      // Skip the "No Results" div
      if (card.classList.contains('no-results')) return;

      const cModality = card.dataset.modality;
      const cSector = card.dataset.sector;
      const cDuration = card.dataset.duration;
      const cLevel = card.dataset.level;

      // Check if card matches active filters (if array is empty, it means "All" are accepted)
      const matchModality = activeFilters.modality.length === 0 || activeFilters.modality.includes(cModality);
      const matchSector = activeFilters.sector.length === 0 || activeFilters.sector.includes(cSector);
      const matchDuration = activeFilters.duration.length === 0 || activeFilters.duration.includes(cDuration);
      const matchLevel = activeFilters.level.length === 0 || activeFilters.level.includes(cLevel);

      if (matchModality && matchSector && matchDuration && matchLevel) {
        card.style.display = 'flex';
        visibleCount++;
      } else {
        card.style.display = 'none';
      }
    });

    // 3. Update UI text and empty state
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
