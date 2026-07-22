import { initThemeModule } from './theme.js';
import { StorageEngine } from './storage.js';

document.addEventListener('DOMContentLoaded', () => {
  // Initialize Theme Engine
  initThemeModule();

  // Initialize Mobile Hamburger Menu
  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const navMenu = document.getElementById('navMenu');

  if (hamburgerBtn && navMenu) {
    hamburgerBtn.addEventListener('click', () => {
      navMenu.classList.toggle('open');
      hamburgerBtn.classList.toggle('is-active');
    });
  }

  // Delegate Favorite Toggle Events
  document.addEventListener('click', (e) => {
    if (e.target.classList.contains('favorite-btn')) {
      const formulaId = e.target.getAttribute('data-id');
      if (formulaId) {
        const isAdded = StorageEngine.toggleFavorite(formulaId);
        e.target.innerText = isAdded ? '★' : '☆';
        e.target.classList.toggle('active', isAdded);
      }
    }
  });

  console.log('⚡ Utilmint Phase 1 Architecture loaded successfully.');
});
