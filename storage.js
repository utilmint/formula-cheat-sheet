/**
 * UTILMINT STORAGE ENGINE
 * Manages all local state, preferences, bookmarks, and user activity.
 */

const STORAGE_KEYS = {
  THEME: 'utilmint_theme',
  FAVORITES: 'utilmint_favorites',
  RECENTS: 'utilmint_recents',
  SEARCH_HISTORY: 'utilmint_search_history',
  SETTINGS: 'utilmint_settings'
};

export const StorageEngine = {
  // Theme Management
  getTheme() {
    return localStorage.getItem(STORAGE_KEYS.THEME) || 'system';
  },
  setTheme(theme) {
    localStorage.setItem(STORAGE_KEYS.THEME, theme);
  },

  // Favorites (Formula IDs)
  getFavorites() {
    return JSON.parse(localStorage.getItem(STORAGE_KEYS.FAVORITES)) || [];
  },
  toggleFavorite(formulaId) {
    const favorites = this.getFavorites();
    const index = favorites.indexOf(formulaId);
    if (index === -1) {
      favorites.push(formulaId);
    } else {
      favorites.splice(index, 1);
    }
    localStorage.setItem(STORAGE_KEYS.FAVORITES, JSON.stringify(favorites));
    return index === -1; // returns true if added, false if removed
  },
  isFavorite(formulaId) {
    return this.getFavorites().includes(formulaId);
  },

  // Recently Viewed Formulas
  getRecents() {
    return JSON.parse(localStorage.getItem(STORAGE_KEYS.RECENTS)) || [];
  },
  addRecent(item) {
    let recents = this.getRecents();
    recents = recents.filter(r => r.id !== item.id); // Deduplicate
    recents.unshift({ ...item, viewedAt: new Date().toISOString() });
    if (recents.length > 50) recents.pop(); // Limit to 50 items
    localStorage.setItem(STORAGE_KEYS.RECENTS, JSON.stringify(recents));
  },
  clearRecents() {
    localStorage.removeItem(STORAGE_KEYS.RECENTS);
  },

  // Search History
  getSearchHistory() {
    return JSON.parse(localStorage.getItem(STORAGE_KEYS.SEARCH_HISTORY)) || [];
  },
  addSearchQuery(query) {
    if (!query.trim()) return;
    let history = this.getSearchHistory();
    history = history.filter(q => q.toLowerCase() !== query.toLowerCase());
    history.unshift(query);
    if (history.length > 20) history.pop();
    localStorage.setItem(STORAGE_KEYS.SEARCH_HISTORY, JSON.stringify(history));
  }
};
