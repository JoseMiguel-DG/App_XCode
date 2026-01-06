const views = document.querySelectorAll('[data-view]');
const navButtons = document.querySelectorAll('[data-route]');
const statusBadge = document.getElementById('statusBadge');
const themeToggle = document.getElementById('themeToggle');
const resetLibrary = document.getElementById('resetLibrary');

const newCategoryButton = document.getElementById('newCategoryButton');
const categoryForm = document.getElementById('categoryForm');
const categoryNameInput = document.getElementById('categoryName');
const categoryError = document.getElementById('categoryError');
const cancelCategory = document.getElementById('cancelCategory');
const categoryList = document.getElementById('categoryList');

const backToCategories = document.getElementById('backToCategories');
const categoryTitle = document.getElementById('categoryTitle');
const categoryMeta = document.getElementById('categoryMeta');
const categoryDetailError = document.getElementById('categoryDetailError');
const renameCategory = document.getElementById('renameCategory');
const deleteCategory = document.getElementById('deleteCategory');

const exerciseSearch = document.getElementById('exerciseSearch');
const newExerciseButton = document.getElementById('newExerciseButton');
const exerciseForm = document.getElementById('exerciseForm');
const exerciseFormTitle = document.getElementById('exerciseFormTitle');
const exerciseIdInput = document.getElementById('exerciseId');
const exerciseNameInput = document.getElementById('exerciseName');
const exerciseDescriptionInput = document.getElementById('exerciseDescription');
const exercisePrimaryMuscleInput = document.getElementById('exercisePrimaryMuscle');
const exerciseEquipmentInput = document.getElementById('exerciseEquipment');
const exerciseTagsInput = document.getElementById('exerciseTags');
const exerciseCategorySelect = document.getElementById('exerciseCategorySelect');
const exerciseError = document.getElementById('exerciseError');
const cancelExercise = document.getElementById('cancelExercise');
const exerciseList = document.getElementById('exerciseList');

const STORAGE_DB = 'exercise-library-db';
const THEME_KEY = 'personal-pwa-theme';
const ENABLE_SEED = true;

const state = {
  theme: 'light',
  currentCategoryId: null,
  exerciseSearch: '',
};

const createId = () =>
  typeof crypto !== 'undefined' && crypto.randomUUID
    ? crypto.randomUUID()
    : `id-${Date.now()}-${Math.random().toString(16).slice(2)}`;

const updateStatus = () => {
  const online = navigator.onLine;
  statusBadge.textContent = online ? 'Online' : 'Offline';
  statusBadge.style.borderColor = online ? 'var(--accent)' : 'var(--danger)';
};

const openDatabase = () =>
  new Promise((resolve, reject) => {
    const request = indexedDB.open(STORAGE_DB, 1);
    request.onupgradeneeded = () => {
      const db = request.result;
      if (!db.objectStoreNames.contains('categories')) {
        const categoryStore = db.createObjectStore('categories', { keyPath: 'id' });
        categoryStore.createIndex('nameLower', 'nameLower', { unique: false });
      }
      if (!db.objectStoreNames.contains('exercises')) {
        const exerciseStore = db.createObjectStore('exercises', { keyPath: 'id' });
        exerciseStore.createIndex('categoryId', 'categoryId', { unique: false });
        exerciseStore.createIndex('nameLower', 'nameLower', { unique: false });
      }
    };
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });

const dbPromise = openDatabase();

const getAllFromStore = async (storeName) => {
  const db = await dbPromise;
  return new Promise((resolve, reject) => {
    const transaction = db.transaction(storeName, 'readonly');
    const store = transaction.objectStore(storeName);
    const request = store.getAll();
    request.onsuccess = () => resolve(request.result || []);
    request.onerror = () => reject(request.error);
  });
};

const getFromStore = async (storeName, id) => {
  const db = await dbPromise;
  return new Promise((resolve, reject) => {
    const transaction = db.transaction(storeName, 'readonly');
    const store = transaction.objectStore(storeName);
    const request = store.get(id);
    request.onsuccess = () => resolve(request.result || null);
    request.onerror = () => reject(request.error);
  });
};

const putInStore = async (storeName, value) => {
  const db = await dbPromise;
  return new Promise((resolve, reject) => {
    const transaction = db.transaction(storeName, 'readwrite');
    const store = transaction.objectStore(storeName);
    const request = store.put(value);
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
};

const deleteFromStore = async (storeName, id) => {
  const db = await dbPromise;
  return new Promise((resolve, reject) => {
    const transaction = db.transaction(storeName, 'readwrite');
    const store = transaction.objectStore(storeName);
    const request = store.delete(id);
    request.onsuccess = () => resolve();
    request.onerror = () => reject(request.error);
  });
};

const clearStore = async (storeName) => {
  const db = await dbPromise;
  return new Promise((resolve, reject) => {
    const transaction = db.transaction(storeName, 'readwrite');
    const store = transaction.objectStore(storeName);
    const request = store.clear();
    request.onsuccess = () => resolve();
    request.onerror = () => reject(request.error);
  });
};

const exerciseRepository = {
  async listCategories() {
    const categories = await getAllFromStore('categories');
    return categories.sort((a, b) => a.name.localeCompare(b.name, 'es'));
  },
  async listAllExercises() {
    const exercises = await getAllFromStore('exercises');
    return exercises.sort((a, b) => a.name.localeCompare(b.name, 'es'));
  },
  async getCategory(id) {
    return getFromStore('categories', id);
  },
  async getExercise(id) {
    return getFromStore('exercises', id);
  },
  async createCategory(name) {
    const trimmed = name.trim();
    if (!trimmed) {
      throw new Error('El nombre es obligatorio.');
    }
    const lower = trimmed.toLowerCase();
    const categories = await this.listCategories();
    if (categories.some((category) => category.nameLower === lower)) {
      throw new Error('Ya existe una categoría con ese nombre.');
    }
    const now = Date.now();
    const category = {
      id: createId(),
      name: trimmed,
      nameLower: lower,
      createdAt: now,
      updatedAt: now,
    };
    await putInStore('categories', category);
    return category;
  },
  async renameCategory(id, name) {
    const trimmed = name.trim();
    if (!trimmed) {
      throw new Error('El nombre es obligatorio.');
    }
    const lower = trimmed.toLowerCase();
    const categories = await this.listCategories();
    if (categories.some((category) => category.id !== id && category.nameLower === lower)) {
      throw new Error('Ya existe una categoría con ese nombre.');
    }
    const category = await this.getCategory(id);
    if (!category) {
      throw new Error('Categoría no encontrada.');
    }
    const updated = {
      ...category,
      name: trimmed,
      nameLower: lower,
      updatedAt: Date.now(),
    };
    await putInStore('categories', updated);
    return updated;
  },
  async deleteCategory(id) {
    const db = await dbPromise;
    return new Promise((resolve, reject) => {
      const transaction = db.transaction(['categories', 'exercises'], 'readwrite');
      const categoryStore = transaction.objectStore('categories');
      const exerciseStore = transaction.objectStore('exercises');
      categoryStore.delete(id);
      const index = exerciseStore.index('categoryId');
      const request = index.openCursor(IDBKeyRange.only(id));
      request.onsuccess = (event) => {
        const cursor = event.target.result;
        if (cursor) {
          cursor.delete();
          cursor.continue();
        }
      };
      transaction.oncomplete = () => resolve();
      transaction.onerror = () => reject(transaction.error);
    });
  },
  async listExercisesByCategory(categoryId) {
    const db = await dbPromise;
    return new Promise((resolve, reject) => {
      const transaction = db.transaction('exercises', 'readonly');
      const store = transaction.objectStore('exercises');
      const index = store.index('categoryId');
      const request = index.getAll(IDBKeyRange.only(categoryId));
      request.onsuccess = () => {
        const results = request.result || [];
        resolve(results.sort((a, b) => a.name.localeCompare(b.name, 'es')));
      };
      request.onerror = () => reject(request.error);
    });
  },
  async createExercise(data) {
    const trimmed = data.name.trim();
    if (!trimmed) {
      throw new Error('El nombre es obligatorio.');
    }
    const lower = trimmed.toLowerCase();
    const existing = await this.listExercisesByCategory(data.categoryId);
    if (existing.some((exercise) => exercise.nameLower === lower)) {
      throw new Error('Ya existe un ejercicio con ese nombre en esta categoría.');
    }
    const now = Date.now();
    const exercise = {
      id: createId(),
      categoryId: data.categoryId,
      name: trimmed,
      nameLower: lower,
      description: data.description || '',
      primaryMuscleGroup: data.primaryMuscleGroup || '',
      equipment: data.equipment || '',
      tags: data.tags || [],
      createdAt: now,
      updatedAt: now,
    };
    await putInStore('exercises', exercise);
    return exercise;
  },
  async updateExercise(id, updates) {
    const exercise = await this.getExercise(id);
    if (!exercise) {
      throw new Error('Ejercicio no encontrado.');
    }
    const newName = updates.name ? updates.name.trim() : exercise.name;
    if (!newName) {
      throw new Error('El nombre es obligatorio.');
    }
    const newCategoryId = updates.categoryId || exercise.categoryId;
    const lower = newName.toLowerCase();
    const existing = await this.listExercisesByCategory(newCategoryId);
    if (existing.some((item) => item.id !== id && item.nameLower === lower)) {
      throw new Error('Ya existe un ejercicio con ese nombre en esa categoría.');
    }
    const updated = {
      ...exercise,
      categoryId: newCategoryId,
      name: newName,
      nameLower: lower,
      description: updates.description ?? exercise.description,
      primaryMuscleGroup: updates.primaryMuscleGroup ?? exercise.primaryMuscleGroup,
      equipment: updates.equipment ?? exercise.equipment,
      tags: updates.tags ?? exercise.tags,
      updatedAt: Date.now(),
    };
    await putInStore('exercises', updated);
    return updated;
  },
  async deleteExercise(id) {
    await deleteFromStore('exercises', id);
  },
  async resetAll() {
    await clearStore('categories');
    await clearStore('exercises');
  },
};

const seedData = async () => {
  if (!ENABLE_SEED) return;
  const categories = await exerciseRepository.listCategories();
  if (categories.length > 0) return;

  const pecho = await exerciseRepository.createCategory('Pecho');
  const espalda = await exerciseRepository.createCategory('Espalda');
  const pierna = await exerciseRepository.createCategory('Pierna');

  await exerciseRepository.createExercise({
    categoryId: pecho.id,
    name: 'Press banca con barra',
    description: 'Ejercicio básico para fuerza en pecho.',
    primaryMuscleGroup: 'Pecho',
    equipment: 'Barra',
    tags: ['fuerza', 'básico'],
  });
  await exerciseRepository.createExercise({
    categoryId: pecho.id,
    name: 'Press inclinado con mancuerna',
    description: 'Enfocado en porción superior del pectoral.',
    primaryMuscleGroup: 'Pecho',
    equipment: 'Mancuernas',
    tags: ['hipertrofia'],
  });
  await exerciseRepository.createExercise({
    categoryId: espalda.id,
    name: 'Remo con barra',
    description: 'Trabaja dorsal y espalda media.',
    primaryMuscleGroup: 'Espalda',
    equipment: 'Barra',
    tags: ['fuerza'],
  });
  await exerciseRepository.createExercise({
    categoryId: pierna.id,
    name: 'Sentadilla trasera',
    description: 'Movimiento compuesto para tren inferior.',
    primaryMuscleGroup: 'Pierna',
    equipment: 'Barra',
    tags: ['básico'],
  });
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

const setView = (route) => {
  views.forEach((view) => {
    view.hidden = view.dataset.view !== route;
  });
  navButtons.forEach((button) => {
    button.classList.toggle('active', button.dataset.route === route);
  });
  history.replaceState(null, '', `#${route}`);
};

const clearCategoryForm = () => {
  categoryNameInput.value = '';
  categoryError.textContent = '';
};

const showCategoryForm = () => {
  categoryForm.hidden = false;
  categoryNameInput.focus();
};

const hideCategoryForm = () => {
  categoryForm.hidden = true;
  clearCategoryForm();
};

const setCategoryDetailError = (message) => {
  categoryDetailError.textContent = message;
};

const renderCategories = async () => {
  const [categories, exercises] = await Promise.all([
    exerciseRepository.listCategories(),
    exerciseRepository.listAllExercises(),
  ]);
  const counts = exercises.reduce((acc, exercise) => {
    acc[exercise.categoryId] = (acc[exercise.categoryId] || 0) + 1;
    return acc;
  }, {});

  categoryList.innerHTML = '';
  if (categories.length === 0) {
    const empty = document.createElement('li');
    empty.className = 'empty-state';
    empty.textContent = 'Crea tu primera categoría para empezar.';
    categoryList.appendChild(empty);
    return;
  }

  categories.forEach((category) => {
    const item = document.createElement('li');
    item.className = 'list__item';

    const row = document.createElement('div');
    row.className = 'list__row';

    const info = document.createElement('div');

    const title = document.createElement('div');
    title.className = 'list__title';
    title.textContent = category.name;

    const meta = document.createElement('div');
    meta.className = 'list__meta';
    meta.textContent = `${counts[category.id] || 0} ejercicios`;

    info.appendChild(title);
    info.appendChild(meta);

    const action = document.createElement('button');
    action.className = 'button button--primary';
    action.textContent = 'Abrir';
    action.addEventListener('click', () => openCategory(category.id));

    row.appendChild(info);
    row.appendChild(action);
    item.appendChild(row);
    categoryList.appendChild(item);
  });
};

const resetExerciseForm = () => {
  exerciseIdInput.value = '';
  exerciseFormTitle.textContent = 'Nuevo ejercicio';
  exerciseNameInput.value = '';
  exerciseDescriptionInput.value = '';
  exercisePrimaryMuscleInput.value = '';
  exerciseEquipmentInput.value = '';
  exerciseTagsInput.value = '';
  exerciseError.textContent = '';
};

const showExerciseForm = () => {
  exerciseForm.hidden = false;
  exerciseNameInput.focus();
};

const hideExerciseForm = () => {
  exerciseForm.hidden = true;
  resetExerciseForm();
};

const fillCategorySelect = async (selectedId) => {
  const categories = await exerciseRepository.listCategories();
  exerciseCategorySelect.innerHTML = '';
  categories.forEach((category) => {
    const option = document.createElement('option');
    option.value = category.id;
    option.textContent = category.name;
    if (category.id === selectedId) {
      option.selected = true;
    }
    exerciseCategorySelect.appendChild(option);
  });
};

const openCategory = async (categoryId) => {
  state.currentCategoryId = categoryId;
  exerciseSearch.value = '';
  state.exerciseSearch = '';
  hideExerciseForm();
  await renderCategoryDetail();
  setView('category');
};

const renderExerciseList = (exercises) => {
  exerciseList.innerHTML = '';
  if (exercises.length === 0) {
    const empty = document.createElement('li');
    empty.className = 'empty-state';
    empty.textContent = 'No hay ejercicios en esta categoría.';
    exerciseList.appendChild(empty);
    return;
  }

  exercises.forEach((exercise) => {
    const item = document.createElement('li');
    item.className = 'list__item';

    const header = document.createElement('div');
    header.className = 'list__row';

    const title = document.createElement('div');
    title.className = 'list__title';
    title.textContent = exercise.name;

    const actions = document.createElement('div');
    actions.className = 'list__actions';

    const editButton = document.createElement('button');
    editButton.className = 'button button--ghost';
    editButton.textContent = 'Editar';
    editButton.addEventListener('click', async () => {
      resetExerciseForm();
      exerciseFormTitle.textContent = 'Editar ejercicio';
      exerciseIdInput.value = exercise.id;
      exerciseNameInput.value = exercise.name;
      exerciseDescriptionInput.value = exercise.description || '';
      exercisePrimaryMuscleInput.value = exercise.primaryMuscleGroup || '';
      exerciseEquipmentInput.value = exercise.equipment || '';
      exerciseTagsInput.value = (exercise.tags || []).join(', ');
      await fillCategorySelect(exercise.categoryId);
      showExerciseForm();
    });

    const deleteButton = document.createElement('button');
    deleteButton.className = 'button button--danger';
    deleteButton.textContent = 'Eliminar';
    deleteButton.addEventListener('click', async () => {
      if (!confirm('¿Eliminar este ejercicio?')) return;
      await exerciseRepository.deleteExercise(exercise.id);
      await renderCategoryDetail();
    });

    actions.appendChild(editButton);
    actions.appendChild(deleteButton);

    header.appendChild(title);
    header.appendChild(actions);

    const meta = document.createElement('div');
    meta.className = 'list__meta';
    const details = [exercise.primaryMuscleGroup, exercise.equipment]
      .filter(Boolean)
      .join(' · ');
    meta.textContent = details || 'Sin detalles adicionales.';

    item.appendChild(header);
    item.appendChild(meta);

    if (exercise.description) {
      const description = document.createElement('div');
      description.className = 'list__meta';
      description.textContent = exercise.description;
      item.appendChild(description);
    }

    if (exercise.tags && exercise.tags.length > 0) {
      const tagList = document.createElement('div');
      tagList.className = 'tag-list';
      exercise.tags.forEach((tag) => {
        const span = document.createElement('span');
        span.className = 'tag';
        span.textContent = tag;
        tagList.appendChild(span);
      });
      item.appendChild(tagList);
    }

    exerciseList.appendChild(item);
  });
};

const renderCategoryDetail = async () => {
  const category = await exerciseRepository.getCategory(state.currentCategoryId);
  if (!category) {
    setCategoryDetailError('Categoría no encontrada.');
    return;
  }
  categoryTitle.textContent = category.name;
  setCategoryDetailError('');
  await fillCategorySelect(category.id);
  const exercises = await exerciseRepository.listExercisesByCategory(category.id);
  const filtered = exercises.filter((exercise) =>
    exercise.name.toLowerCase().includes(state.exerciseSearch)
  );
  categoryMeta.textContent = `${exercises.length} ejercicios en total`;
  renderExerciseList(filtered);
};

const parseTags = (value) =>
  value
    .split(',')
    .map((tag) => tag.trim())
    .filter(Boolean);

const getExercisePayload = () => ({
  name: exerciseNameInput.value,
  description: exerciseDescriptionInput.value.trim(),
  primaryMuscleGroup: exercisePrimaryMuscleInput.value.trim(),
  equipment: exerciseEquipmentInput.value.trim(),
  tags: parseTags(exerciseTagsInput.value),
  categoryId: exerciseCategorySelect.value || state.currentCategoryId,
});

newCategoryButton.addEventListener('click', () => {
  showCategoryForm();
});

cancelCategory.addEventListener('click', hideCategoryForm);

categoryForm.addEventListener('submit', async (event) => {
  event.preventDefault();
  categoryError.textContent = '';
  try {
    await exerciseRepository.createCategory(categoryNameInput.value);
    hideCategoryForm();
    await renderCategories();
  } catch (error) {
    categoryError.textContent = error.message;
  }
});

backToCategories.addEventListener('click', () => {
  hideExerciseForm();
  setView('exercises');
});

renameCategory.addEventListener('click', async () => {
  const current = await exerciseRepository.getCategory(state.currentCategoryId);
  if (!current) return;
  const name = prompt('Nuevo nombre de la categoría:', current.name);
  if (name === null) return;
  try {
    await exerciseRepository.renameCategory(current.id, name);
    await renderCategories();
    await renderCategoryDetail();
  } catch (error) {
    setCategoryDetailError(error.message);
  }
});

deleteCategory.addEventListener('click', async () => {
  if (!confirm('¿Eliminar la categoría y todos sus ejercicios?')) return;
  await exerciseRepository.deleteCategory(state.currentCategoryId);
  state.currentCategoryId = null;
  await renderCategories();
  setView('exercises');
});

newExerciseButton.addEventListener('click', async () => {
  resetExerciseForm();
  await fillCategorySelect(state.currentCategoryId);
  showExerciseForm();
});

cancelExercise.addEventListener('click', hideExerciseForm);

exerciseForm.addEventListener('submit', async (event) => {
  event.preventDefault();
  exerciseError.textContent = '';
  try {
    if (exerciseIdInput.value) {
      await exerciseRepository.updateExercise(exerciseIdInput.value, getExercisePayload());
    } else {
      const payload = getExercisePayload();
      payload.categoryId = state.currentCategoryId;
      await exerciseRepository.createExercise(payload);
    }
    hideExerciseForm();
    await renderCategoryDetail();
    await renderCategories();
  } catch (error) {
    exerciseError.textContent = error.message;
  }
});

exerciseSearch.addEventListener('input', async (event) => {
  state.exerciseSearch = event.target.value.trim().toLowerCase();
  await renderCategoryDetail();
});

navButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const route = button.dataset.route;
    setView(route);
  });
});

themeToggle.addEventListener('click', toggleTheme);

resetLibrary.addEventListener('click', async () => {
  if (!confirm('¿Eliminar toda la biblioteca local?')) return;
  await exerciseRepository.resetAll();
  await seedData();
  await renderCategories();
  state.currentCategoryId = null;
  setView('exercises');
});

window.addEventListener('online', updateStatus);
window.addEventListener('offline', updateStatus);

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./service-worker.js');
  });
}

const startApp = async () => {
  loadTheme();
  await seedData();
  await renderCategories();
  const initialRoute = location.hash.replace('#', '') || 'exercises';
  setView(initialRoute === 'category' ? 'exercises' : initialRoute);
  updateStatus();
};

startApp();
