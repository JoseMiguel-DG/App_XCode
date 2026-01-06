const views = document.querySelectorAll('[data-view]');
const navButtons = document.querySelectorAll('[data-route]');
const statusBadge = document.getElementById('statusBadge');
const noteForm = document.getElementById('noteForm');
const noteInput = document.getElementById('noteInput');
const noteList = document.getElementById('noteList');
const nextNote = document.getElementById('nextNote');
const themeToggle = document.getElementById('themeToggle');
const clearNotes = document.getElementById('clearNotes');

const STORAGE_KEY = 'personal-pwa-notes';
const THEME_KEY = 'personal-pwa-theme';

const state = {
  notes: [],
  theme: 'light',
};

const createId = () =>
  typeof crypto !== 'undefined' && crypto.randomUUID
    ? crypto.randomUUID()
    : `note-${Date.now()}-${Math.random().toString(16).slice(2)}`;

const updateStatus = () => {
  const online = navigator.onLine;
  statusBadge.textContent = online ? 'Online' : 'Offline';
  statusBadge.style.borderColor = online ? 'var(--accent)' : 'var(--danger)';
};

const saveNotes = () => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state.notes));
};

const loadNotes = () => {
  const stored = localStorage.getItem(STORAGE_KEY);
  state.notes = stored ? JSON.parse(stored) : [];
};

const renderNotes = () => {
  noteList.innerHTML = '';
  if (state.notes.length === 0) {
    const empty = document.createElement('li');
    empty.className = 'note-list__item';
    empty.textContent = 'Sin notas todavía.';
    noteList.appendChild(empty);
    nextNote.textContent = 'Crea una nota para verla aquí.';
    return;
  }

  const sorted = [...state.notes].sort((a, b) => b.createdAt - a.createdAt);
  sorted.forEach((note) => {
    const item = document.createElement('li');
    item.className = 'note-list__item';

    const text = document.createElement('div');
    text.className = 'note-list__text';
    text.textContent = note.text;

    const time = document.createElement('div');
    time.className = 'note-list__time';
    time.textContent = new Date(note.createdAt).toLocaleDateString('es-ES');

    item.appendChild(text);
    item.appendChild(time);
    noteList.appendChild(item);
  });

  nextNote.textContent = sorted[0].text;
};

const setView = (route) => {
  views.forEach((view) => {
    view.hidden = view.dataset.view !== route;
  });
  navButtons.forEach((button) => {
    button.classList.toggle('active', button.dataset.route === route);
  });
  history.replaceState(null, '', `#${route}`);
};

const loadTheme = () => {
  const stored = localStorage.getItem(THEME_KEY);
  state.theme = stored || 'light';
  document.documentElement.dataset.theme = state.theme;
};

const toggleTheme = () => {
  state.theme = state.theme === 'light' ? 'dark' : 'light';
  document.documentElement.dataset.theme = state.theme;
  localStorage.setItem(THEME_KEY, state.theme);
};

noteForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const text = noteInput.value.trim();
  if (!text) return;
  state.notes.push({
    id: createId(),
    text,
    createdAt: Date.now(),
  });
  noteInput.value = '';
  saveNotes();
  renderNotes();
});

navButtons.forEach((button) => {
  button.addEventListener('click', () => {
    setView(button.dataset.route);
  });
});

themeToggle.addEventListener('click', toggleTheme);

clearNotes.addEventListener('click', () => {
  if (confirm('¿Seguro que quieres borrar todas las notas?')) {
    state.notes = [];
    saveNotes();
    renderNotes();
  }
});

window.addEventListener('online', updateStatus);
window.addEventListener('offline', updateStatus);

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./service-worker.js');
  });
}

const initialRoute = location.hash.replace('#', '') || 'home';
loadTheme();
loadNotes();
renderNotes();
setView(initialRoute);
updateStatus();
