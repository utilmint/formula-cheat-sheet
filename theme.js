import { StorageEngine } from './storage.js';

export function initThemeModule() {
  const themeToggleBtn = document.getElementById('themeToggleBtn');
  const rootElement = document.documentElement;

  function applyTheme(theme) {
    if (theme === 'system') {
      const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      rootElement.setAttribute('data-theme', systemDark ? 'dark' : 'light');
    } else {
      rootElement.setAttribute('data-theme', theme);
    }
  }

  // Initial Load
  const currentTheme = StorageEngine.getTheme();
  applyTheme(currentTheme);

  // Toggle Action
  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const activeTheme = rootElement.getAttribute('data-theme');
      const newTheme = activeTheme === 'dark' ? 'light' : 'dark';
      StorageEngine.setTheme(newTheme);
      applyTheme(newTheme);
    });
  }

  // System Preference Listener
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (StorageEngine.getTheme() === 'system') {
      applyTheme('system');
    }
  });
}
