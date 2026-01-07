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

const routineDaySelect = document.getElementById('routineDaySelect');
const routineDaySelectError = document.getElementById('routineDaySelectError');
const routineDayName = document.getElementById('routineDayName');
const routineDayNotes = document.getElementById('routineDayNotes');
const routineDayItems = document.getElementById('routineDayItems');
const startSessionButton = document.getElementById('startSessionButton');
const resumeSessionButton = document.getElementById('resumeSessionButton');
const finishSessionFromHome = document.getElementById('finishSessionFromHome');

const newRoutineDayButton = document.getElementById('newRoutineDayButton');
const routineDayForm = document.getElementById('routineDayForm');
const routineDayNameInput = document.getElementById('routineDayNameInput');
const routineDayNotesInput = document.getElementById('routineDayNotesInput');
const routineDayError = document.getElementById('routineDayError');
const cancelRoutineDay = document.getElementById('cancelRoutineDay');
const routineDayList = document.getElementById('routineDayList');
const routineEditor = document.getElementById('routineEditor');
const routineEditorTitle = document.getElementById('routineEditorTitle');
const routineEditorMeta = document.getElementById('routineEditorMeta');
const routineDayEditName = document.getElementById('routineDayEditName');
const routineDayEditNotes = document.getElementById('routineDayEditNotes');
const routineEditorError = document.getElementById('routineEditorError');
const saveRoutineDayEdits = document.getElementById('saveRoutineDayEdits');
const duplicateRoutineDay = document.getElementById('duplicateRoutineDay');
const deleteRoutineDay = document.getElementById('deleteRoutineDay');
const routineItemList = document.getElementById('routineItemList');
const routineEditFields = document.getElementById('routineEditFields');
const toggleRoutineEditFields = document.getElementById('toggleRoutineEditFields');
const routineExerciseSearch = document.getElementById('routineExerciseSearch');
const routineCategoryFilter = document.getElementById('routineCategoryFilter');
const routineExerciseSelect = document.getElementById('routineExerciseSelect');
const addRoutineItem = document.getElementById('addRoutineItem');

const backToTrain = document.getElementById('backToTrain');
const workoutTitle = document.getElementById('workoutTitle');
const workoutMeta = document.getElementById('workoutMeta');
const workoutError = document.getElementById('workoutError');
const workoutExerciseList = document.getElementById('workoutExerciseList');
const finishSessionButton = document.getElementById('finishSessionButton');
const cancelSessionButton = document.getElementById('cancelSessionButton');
const historyList = document.getElementById('historyList');
const historyDetail = document.getElementById('historyDetail');
const historyBack = document.getElementById('historyBack');
const historyDelete = document.getElementById('historyDelete');
const historyDetailTitle = document.getElementById('historyDetailTitle');
const historyDetailMeta = document.getElementById('historyDetailMeta');
const historyDetailList = document.getElementById('historyDetailList');

const exportData = document.getElementById('exportData');
const importData = document.getElementById('importData');
const importFile = document.getElementById('importFile');
const forceRefresh = document.getElementById('forceRefresh');
const cloudEmail = document.getElementById('cloudEmail');
const cloudPassword = document.getElementById('cloudPassword');
const cloudError = document.getElementById('cloudError');
const cloudSignupError = document.getElementById('cloudSignupError');
const signupName = document.getElementById('signupName');
const signupEmail = document.getElementById('signupEmail');
const signupPassword = document.getElementById('signupPassword');
const signupPasswordConfirm = document.getElementById('signupPasswordConfirm');
const cloudStatus = document.getElementById('cloudStatus');
const cloudStatusDot = document.getElementById('cloudStatusDot');
const cloudStatusUnauthed = document.getElementById('cloudStatusUnauthed');
const cloudStatusDotUnauthed = document.getElementById('cloudStatusDotUnauthed');
const cloudSessionPanel = document.getElementById('cloudSessionPanel');
const cloudSessionEmail = document.getElementById('cloudSessionEmail');
const cloudLastSync = document.getElementById('cloudLastSync');
const cloudAuthForm = document.getElementById('cloudAuthForm');
const cloudLogin = document.getElementById('cloudLogin');
const cloudSignup = document.getElementById('cloudSignup');
const cloudLogout = document.getElementById('cloudLogout');
const cloudUpload = document.getElementById('cloudUpload');
const cloudDownload = document.getElementById('cloudDownload');
const appContainer = document.querySelector('.app');
const homeGoTrain = document.getElementById('homeGoTrain');
const updateToast = document.getElementById('updateToast');
const updateNow = document.getElementById('updateNow');
const appVersion = document.getElementById('appVersion');
const confirmModal = document.getElementById('confirmModal');
const confirmTitle = document.getElementById('confirmTitle');
const confirmMessage = document.getElementById('confirmMessage');
const confirmCancel = document.getElementById('confirmCancel');
const confirmOk = document.getElementById('confirmOk');
const AUTO_SW_UPDATE = true;
const homeConsistencyCard = document.getElementById('homeConsistencyCard');
const homeConsistencyValue = document.getElementById('homeConsistencyValue');
const homeConsistencyBar = document.getElementById('homeConsistencyBar');
const homeVolumeCard = document.getElementById('homeVolumeCard');
const homeVolumeValue = document.getElementById('homeVolumeValue');
const homeVolumeDelta = document.getElementById('homeVolumeDelta');
const homePrsCard = document.getElementById('homePrsCard');
const homePrsValue = document.getElementById('homePrsValue');
const homePrsDelta = document.getElementById('homePrsDelta');
const homeChartCard = document.getElementById('homeChartCard');
const homeSparkline = document.getElementById('homeSparkline');
const homeNextSessionCard = document.getElementById('homeNextSessionCard');
const homeNextSessionTitle = document.getElementById('homeNextSessionTitle');
const homeNextSessionList = document.getElementById('homeNextSessionList');
const authTabs = document.querySelectorAll('[data-auth-tab]');
const authLoginPanel = document.getElementById('authLoginPanel');
const authSignupPanel = document.getElementById('authSignupPanel');

const STORAGE_DB = 'exercise-library-db';
const THEME_KEY = 'personal-pwa-theme';
const LAST_ROUTINE_DAY_KEY = 'last-routine-day-id';
const ENABLE_SEED = true;
const CLOUD_LOCAL_UPDATED_KEY = 'cloud-local-updated-at';
const SUPABASE_URL = 'https://dcdaddtmftmudzzjlgfz.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_o2m4nokLGDJu3Z2qIXQhog_Hq-M63B9';
const APP_VERSION = '0.9.0';

const state = {
  theme: 'dark',
  currentCategoryId: null,
  exerciseSearch: '',
  currentRoutineDayId: null,
  routineExerciseSearch: '',
  routineCategoryFilter: 'all',
  activeSessionId: null,
  expandedRoutineItemId: null,
  currentHistorySessionId: null,
};

const createId = () =>
  typeof crypto !== 'undefined' && crypto.randomUUID
    ? crypto.randomUUID()
    : `id-${Date.now()}-${Math.random().toString(16).slice(2)}`;

const supabaseClient =
  typeof window !== 'undefined' && window.supabase
    ? window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY)
    : null;
let cloudUser = null;
let cloudSyncTimer = null;
let isCloudImporting = false;
let isSeeding = false;
let cloudReady = false;
let cloudSyncPending = false;
let isAuthenticated = false;
let confirmResolver = null;

const scheduleCloudSync = () => {
  if (!supabaseClient || !cloudUser || isCloudImporting || !cloudReady) return;
  if (cloudSyncTimer) {
    clearTimeout(cloudSyncTimer);
  }
  cloudSyncPending = true;
  setCloudStatus(
    navigator.onLine ? 'Pendiente de sincronizar...' : 'Sin conexion. Pendiente de sincronizar...',
    'warn'
  );
  cloudSyncTimer = setTimeout(async () => {
    try {
      if (!navigator.onLine) {
        setCloudStatus('Sin conexion. Pendiente de sincronizar...', 'warn');
        return;
      }
      const payload = await getExportPayload();
      const { error } = await supabaseClient.from('user_data').upsert(
        {
          user_id: cloudUser.id,
          data: payload,
          updated_at: new Date().toISOString(),
        },
        { onConflict: 'user_id' }
      );
      if (error) {
        setCloudError(error.message);
        setCloudStatus('Error al sincronizar. Pendiente de reintento.', 'error');
        return;
      }
      cloudSyncPending = false;
      setCloudStatus('Sincronizado.', 'ok');
      setCloudLastSync(`Ultima sincronizacion: ${formatDateTime(new Date().toISOString())}`);
    } catch (error) {
      setCloudError(error.message);
      setCloudStatus('Error al sincronizar. Pendiente de reintento.', 'error');
    }
  }, 1200);
};

const ICONS = {
  chevron: ['M6 9l6 6 6-6'],
  edit: ['M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 3 21l.5-4.5L17 3z'],
  duplicate: ['M7 7h10v12H7z', 'M5 5h10v2H5z'],
  trash: ['M3 6h18', 'M8 6V4h8v2', 'M6 6l1 14h10l1-14'],
  up: ['M12 5l-5 5', 'M12 5l5 5', 'M12 5v14'],
  down: ['M12 19l-5-5', 'M12 19l5-5', 'M12 19V5'],
};

const createIconButton = ({ title, className, paths }) => {
  const button = document.createElement('button');
  button.type = 'button';
  button.className = className;
  button.title = title;
  button.setAttribute('aria-label', title);

  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.setAttribute('viewBox', '0 0 24 24');
  svg.setAttribute('aria-hidden', 'true');
  svg.setAttribute('focusable', 'false');

  paths.forEach((d) => {
    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute('d', d);
    path.setAttribute('fill', 'none');
    path.setAttribute('stroke', 'currentColor');
    path.setAttribute('stroke-width', '2');
    path.setAttribute('stroke-linecap', 'round');
    path.setAttribute('stroke-linejoin', 'round');
    svg.appendChild(path);
  });

  button.appendChild(svg);
  return button;
};

const updateStatus = () => {
  const online = navigator.onLine;
  statusBadge.textContent = online ? 'Online' : 'Offline';
  statusBadge.style.borderColor = online ? 'var(--accent)' : 'var(--danger)';
};

const openDatabase = () =>
  new Promise((resolve, reject) => {
    const request = indexedDB.open(STORAGE_DB, 2);
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
      if (!db.objectStoreNames.contains('routineDays')) {
        const routineDayStore = db.createObjectStore('routineDays', { keyPath: 'id' });
        routineDayStore.createIndex('nameLower', 'nameLower', { unique: false });
      }
      if (!db.objectStoreNames.contains('routineItems')) {
        const routineItemStore = db.createObjectStore('routineItems', { keyPath: 'id' });
        routineItemStore.createIndex('routineDayId', 'routineDayId', { unique: false });
      }
      if (!db.objectStoreNames.contains('trainingSessions')) {
        const sessionStore = db.createObjectStore('trainingSessions', { keyPath: 'id' });
        sessionStore.createIndex('routineDayId', 'routineDayId', { unique: false });
        sessionStore.createIndex('finishedAt', 'finishedAt', { unique: false });
        sessionStore.createIndex('routineDayId_finishedAt', ['routineDayId', 'finishedAt'], {
          unique: false,
        });
      }
      if (!db.objectStoreNames.contains('sessionExerciseLogs')) {
        const logStore = db.createObjectStore('sessionExerciseLogs', { keyPath: 'id' });
        logStore.createIndex('sessionId', 'sessionId', { unique: false });
        logStore.createIndex('exerciseId', 'exerciseId', { unique: false });
      }
    };
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });

const createDbPromise = () => {
  try {
    return openDatabase();
  } catch (error) {
    console.error('IndexedDB no disponible.', error);
    return Promise.reject(error);
  }
};

const dbPromise = createDbPromise();

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
    transaction.oncomplete = () => {
      if (!isCloudImporting && !isSeeding) {
        setLocalUpdatedAt(new Date());
      }
      scheduleCloudSync();
    };
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
    transaction.oncomplete = () => {
      if (!isCloudImporting && !isSeeding) {
        setLocalUpdatedAt(new Date());
      }
      scheduleCloudSync();
    };
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
    transaction.oncomplete = () => {
      if (!isCloudImporting && !isSeeding) {
        setLocalUpdatedAt(new Date());
      }
      scheduleCloudSync();
    };
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

const routineRepository = {
  async listRoutineDays() {
    const days = await getAllFromStore('routineDays');
    return days.sort((a, b) => a.name.localeCompare(b.name, 'es'));
  },
  async getRoutineDay(id) {
    return getFromStore('routineDays', id);
  },
  async createRoutineDay(data) {
    const trimmed = data.name.trim();
    if (!trimmed) {
      throw new Error('El nombre es obligatorio.');
    }
    const lower = trimmed.toLowerCase();
    const days = await this.listRoutineDays();
    if (days.some((day) => day.nameLower === lower)) {
      throw new Error('Ya existe un dia con ese nombre.');
    }
    const now = Date.now();
    const day = {
      id: createId(),
      name: trimmed,
      nameLower: lower,
      notes: data.notes || '',
      createdAt: now,
      updatedAt: now,
    };
    await putInStore('routineDays', day);
    return day;
  },
  async updateRoutineDay(id, updates) {
    const day = await this.getRoutineDay(id);
    if (!day) {
      throw new Error('Dia no encontrado.');
    }
    const newName = updates.name ? updates.name.trim() : day.name;
    if (!newName) {
      throw new Error('El nombre es obligatorio.');
    }
    const lower = newName.toLowerCase();
    const days = await this.listRoutineDays();
    if (days.some((item) => item.id !== id && item.nameLower === lower)) {
      throw new Error('Ya existe un dia con ese nombre.');
    }
    const updated = {
      ...day,
      name: newName,
      nameLower: lower,
      notes: updates.notes ?? day.notes,
      updatedAt: Date.now(),
    };
    await putInStore('routineDays', updated);
    return updated;
  },
  async deleteRoutineDay(id) {
    const db = await dbPromise;
    return new Promise((resolve, reject) => {
      const transaction = db.transaction(['routineDays', 'routineItems'], 'readwrite');
      transaction.objectStore('routineDays').delete(id);
      const itemStore = transaction.objectStore('routineItems');
      const index = itemStore.index('routineDayId');
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
  async duplicateRoutineDay(id) {
    const day = await this.getRoutineDay(id);
    if (!day) {
      throw new Error('Dia no encontrado.');
    }
    const days = await this.listRoutineDays();
    const baseName = `${day.name} copia`;
    let newName = baseName;
    let counter = 2;
    while (days.some((item) => item.nameLower === newName.toLowerCase())) {
      newName = `${baseName} ${counter}`;
      counter += 1;
    }
    const items = await routineItemRepository.listItemsByRoutineDay(id);
    const duplicate = await this.createRoutineDay({
      name: newName,
      notes: day.notes,
    });
    for (const item of items) {
      await routineItemRepository.createRoutineItem({
        routineDayId: duplicate.id,
        exerciseId: item.exerciseId,
        order: item.order,
        targetSets: item.targetSets,
        targetRepsMin: item.targetRepsMin,
        targetRepsMax: item.targetRepsMax,
        restSeconds: item.restSeconds,
        targetRIR: item.targetRIR,
        notes: item.notes,
      });
    }
    return duplicate;
  },
};

const routineItemRepository = {
  async listItemsByRoutineDay(routineDayId) {
    const db = await dbPromise;
    return new Promise((resolve, reject) => {
      const transaction = db.transaction('routineItems', 'readonly');
      const store = transaction.objectStore('routineItems');
      const index = store.index('routineDayId');
      const request = index.getAll(IDBKeyRange.only(routineDayId));
      request.onsuccess = () => {
        const results = request.result || [];
        resolve(results.sort((a, b) => a.order - b.order));
      };
      request.onerror = () => reject(request.error);
    });
  },
  async getRoutineItem(id) {
    return getFromStore('routineItems', id);
  },
  async createRoutineItem(data) {
    const now = Date.now();
    const items = await this.listItemsByRoutineDay(data.routineDayId);
    const nextOrder =
      typeof data.order === 'number'
        ? data.order
        : items.length > 0
          ? items[items.length - 1].order + 1
          : 1;
    const item = {
      id: createId(),
      routineDayId: data.routineDayId,
      exerciseId: data.exerciseId,
      order: nextOrder,
      targetSets: data.targetSets ?? 3,
      targetRepsMin: data.targetRepsMin ?? 6,
      targetRepsMax: data.targetRepsMax ?? 10,
      restSeconds: data.restSeconds ?? null,
      targetRIR: data.targetRIR ?? null,
      notes: data.notes || '',
      createdAt: now,
      updatedAt: now,
    };
    await putInStore('routineItems', item);
    return item;
  },
  async updateRoutineItem(id, updates) {
    const item = await this.getRoutineItem(id);
    if (!item) {
      throw new Error('Item no encontrado.');
    }
    const updated = {
      ...item,
      ...updates,
      updatedAt: Date.now(),
    };
    await putInStore('routineItems', updated);
    return updated;
  },
  async deleteRoutineItem(id) {
    await deleteFromStore('routineItems', id);
  },
};

const trainingRepository = {
  async createSession(routineDayId) {
    const now = new Date().toISOString();
    const session = {
      id: createId(),
      routineDayId,
      startedAt: now,
      finishedAt: null,
      sessionNotes: '',
    };
    await putInStore('trainingSessions', session);
    return session;
  },
  async getSession(id) {
    return getFromStore('trainingSessions', id);
  },
  async updateSession(id, updates) {
    const session = await this.getSession(id);
    if (!session) {
      throw new Error('Sesion no encontrada.');
    }
    const updated = { ...session, ...updates };
    await putInStore('trainingSessions', updated);
    return updated;
  },
  async deleteSession(id) {
    await deleteFromStore('trainingSessions', id);
  },
  async listActiveSessionsByRoutineDay(routineDayId) {
    if (!routineDayId) return [];
    const db = await dbPromise;
    return new Promise((resolve, reject) => {
      const transaction = db.transaction('trainingSessions', 'readonly');
      const store = transaction.objectStore('trainingSessions');
      const index = store.index('routineDayId');
      const request = index.getAll(IDBKeyRange.only(routineDayId));
      request.onsuccess = () => {
        const results = (request.result || []).filter((session) => !session.finishedAt);
        resolve(results);
      };
      request.onerror = () => reject(request.error);
    });
  },
  async listAllSessions() {
    return getAllFromStore('trainingSessions');
  },
};

const sessionLogRepository = {
  async listLogsBySession(sessionId) {
    const db = await dbPromise;
    return new Promise((resolve, reject) => {
      const transaction = db.transaction('sessionExerciseLogs', 'readonly');
      const store = transaction.objectStore('sessionExerciseLogs');
      const index = store.index('sessionId');
      const request = index.getAll(IDBKeyRange.only(sessionId));
      request.onsuccess = () => resolve(request.result || []);
      request.onerror = () => reject(request.error);
    });
  },
  async listLogsByExercise(exerciseId) {
    const db = await dbPromise;
    return new Promise((resolve, reject) => {
      const transaction = db.transaction('sessionExerciseLogs', 'readonly');
      const store = transaction.objectStore('sessionExerciseLogs');
      const index = store.index('exerciseId');
      const request = index.getAll(IDBKeyRange.only(exerciseId));
      request.onsuccess = () => resolve(request.result || []);
      request.onerror = () => reject(request.error);
    });
  },
  async getLog(id) {
    return getFromStore('sessionExerciseLogs', id);
  },
  async getLogForSessionExercise(sessionId, exerciseId) {
    const logs = await this.listLogsBySession(sessionId);
    return logs.find((log) => log.exerciseId === exerciseId) || null;
  },
  async saveLog(log) {
    await putInStore('sessionExerciseLogs', log);
    return log;
  },
  async deleteLog(id) {
    await deleteFromStore('sessionExerciseLogs', id);
  },
  async deleteLogsBySession(sessionId) {
    const db = await dbPromise;
    return new Promise((resolve, reject) => {
      const transaction = db.transaction('sessionExerciseLogs', 'readwrite');
      const store = transaction.objectStore('sessionExerciseLogs');
      const index = store.index('sessionId');
      const request = index.openCursor(IDBKeyRange.only(sessionId));
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
};

const seedData = async () => {
  if (!ENABLE_SEED) return;
  const categories = await exerciseRepository.listCategories();
  if (categories.length > 0) return;

  const categoryNames = ['Pecho', 'Espalda', 'Pierna', 'Hombro', 'Brazos', 'Core', 'Trapecio'];
  const categoryMap = new Map();
  for (const name of categoryNames) {
    const created = await exerciseRepository.createCategory(name);
    categoryMap.set(name, created.id);
  }

  const exercises = [
    {
      category: 'Pecho',
      name: 'Maquina contractora (fly)',
      description: 'Apertura en maquina para aislar el pecho.',
      primaryMuscleGroup: 'Pecho',
      equipment: 'Maquina',
      tags: ['aislamiento'],
    },
    {
      category: 'Pecho',
      name: 'Press banca con barra',
      description: 'Press principal de fuerza para pectoral.',
      primaryMuscleGroup: 'Pecho',
      equipment: 'Barra',
      tags: ['fuerza', 'basico'],
    },
    {
      category: 'Pecho',
      name: 'Press banca con mancuernas',
      description: 'Press plano con recorrido amplio.',
      primaryMuscleGroup: 'Pecho',
      equipment: 'Mancuernas',
      tags: ['hipertrofia'],
    },
    {
      category: 'Pecho',
      name: 'Press inclinado con mancuernas',
      description: 'Enfocado en parte superior.',
      primaryMuscleGroup: 'Pecho',
      equipment: 'Mancuernas',
      tags: ['hipertrofia'],
    },
    {
      category: 'Pecho',
      name: 'Press inclinado con barra',
      description: 'Press inclinado con barra ligera.',
      primaryMuscleGroup: 'Pecho',
      equipment: 'Barra',
      tags: ['fuerza'],
    },
    {
      category: 'Pecho',
      name: 'Maquina de pecho horizontal',
      description: 'Maquina convergente u horizontal.',
      primaryMuscleGroup: 'Pecho',
      equipment: 'Maquina',
      tags: ['hipertrofia'],
    },
    {
      category: 'Pecho',
      name: 'Cruce en polea',
      description: 'Apertura con poleas y tension continua.',
      primaryMuscleGroup: 'Pecho',
      equipment: 'Polea',
      tags: ['aislamiento'],
    },
    {
      category: 'Pecho',
      name: 'Aperturas con mancuernas',
      description: 'Apertura en banco plano.',
      primaryMuscleGroup: 'Pecho',
      equipment: 'Mancuernas',
      tags: ['aislamiento'],
    },
    {
      category: 'Hombro',
      name: 'Press militar con barra',
      description: 'Press vertical para deltoide anterior.',
      primaryMuscleGroup: 'Hombro',
      equipment: 'Barra',
      tags: ['fuerza'],
    },
    {
      category: 'Hombro',
      name: 'Press militar con mancuernas',
      description: 'Press vertical con mancuernas.',
      primaryMuscleGroup: 'Hombro',
      equipment: 'Mancuernas',
      tags: ['hipertrofia'],
    },
    {
      category: 'Hombro',
      name: 'Elevaciones laterales',
      description: 'Aislamiento del deltoide medio.',
      primaryMuscleGroup: 'Hombro',
      equipment: 'Mancuernas',
      tags: ['aislamiento'],
    },
    {
      category: 'Hombro',
      name: 'Pajaro (deltoide posterior)',
      description: 'Aislamiento del deltoide posterior.',
      primaryMuscleGroup: 'Hombro',
      equipment: 'Mancuernas',
      tags: ['aislamiento'],
    },
    {
      category: 'Hombro',
      name: 'Face pull',
      description: 'Trabajo tecnico de hombro y escapulas.',
      primaryMuscleGroup: 'Hombro',
      equipment: 'Polea',
      tags: ['tecnica'],
    },
    {
      category: 'Espalda',
      name: 'Dominadas asistidas',
      description: 'Trabajo de dorsal y fuerza general.',
      primaryMuscleGroup: 'Espalda',
      equipment: 'Maquina',
      tags: ['fuerza'],
    },
    {
      category: 'Espalda',
      name: 'Jalon al pecho agarre abierto',
      description: 'Enfocado en dorsal ancho.',
      primaryMuscleGroup: 'Espalda',
      equipment: 'Polea',
      tags: ['hipertrofia'],
    },
    {
      category: 'Espalda',
      name: 'Jalon unilateral en polea',
      description: 'Control y recorrido unilateral.',
      primaryMuscleGroup: 'Espalda',
      equipment: 'Polea',
      tags: ['hipertrofia'],
    },
    {
      category: 'Espalda',
      name: 'Remo en maquina sentado',
      description: 'Remo con agarre cerrado.',
      primaryMuscleGroup: 'Espalda',
      equipment: 'Maquina',
      tags: ['hipertrofia'],
    },
    {
      category: 'Espalda',
      name: 'Remo en maquina acostado',
      description: 'Chest supported row.',
      primaryMuscleGroup: 'Espalda',
      equipment: 'Maquina',
      tags: ['hipertrofia'],
    },
    {
      category: 'Espalda',
      name: 'Remo con barra',
      description: 'Remo libre para espalda media.',
      primaryMuscleGroup: 'Espalda',
      equipment: 'Barra',
      tags: ['fuerza'],
    },
    {
      category: 'Espalda',
      name: 'Remo con mancuerna',
      description: 'Remo unilateral con mancuerna.',
      primaryMuscleGroup: 'Espalda',
      equipment: 'Mancuernas',
      tags: ['hipertrofia'],
    },
    {
      category: 'Espalda',
      name: 'Remo en T',
      description: 'Remo con barra en T.',
      primaryMuscleGroup: 'Espalda',
      equipment: 'Barra',
      tags: ['hipertrofia'],
    },
    {
      category: 'Pierna',
      name: 'Sentadilla trasera',
      description: 'Movimiento compuesto para tren inferior.',
      primaryMuscleGroup: 'Pierna',
      equipment: 'Barra',
      tags: ['basico'],
    },
    {
      category: 'Pierna',
      name: 'Sentadilla goblet',
      description: 'Sentadilla con mancuerna al pecho.',
      primaryMuscleGroup: 'Pierna',
      equipment: 'Mancuernas',
      tags: ['tecnica'],
    },
    {
      category: 'Pierna',
      name: 'Prensa de piernas',
      description: 'Prensa en maquina.',
      primaryMuscleGroup: 'Pierna',
      equipment: 'Maquina',
      tags: ['hipertrofia'],
    },
    {
      category: 'Pierna',
      name: 'Prensa unilateral',
      description: 'Prensa a una pierna.',
      primaryMuscleGroup: 'Pierna',
      equipment: 'Maquina',
      tags: ['hipertrofia'],
    },
    {
      category: 'Pierna',
      name: 'Sentadilla isometrica en pared',
      description: 'Trabajo isometrico controlado.',
      primaryMuscleGroup: 'Pierna',
      equipment: 'Peso corporal',
      tags: ['rehab'],
    },
    {
      category: 'Pierna',
      name: 'Curl femoral tumbado',
      description: 'Aislamiento de isquiotibiales.',
      primaryMuscleGroup: 'Pierna',
      equipment: 'Maquina',
      tags: ['aislamiento'],
    },
    {
      category: 'Pierna',
      name: 'Curl femoral sentado',
      description: 'Aislamiento de isquiotibiales.',
      primaryMuscleGroup: 'Pierna',
      equipment: 'Maquina',
      tags: ['aislamiento'],
    },
    {
      category: 'Pierna',
      name: 'Peso muerto rumano',
      description: 'Cadena posterior y gluteo.',
      primaryMuscleGroup: 'Pierna',
      equipment: 'Barra',
      tags: ['fuerza'],
    },
    {
      category: 'Pierna',
      name: 'Hip thrust',
      description: 'Empuje de cadera para gluteo.',
      primaryMuscleGroup: 'Pierna',
      equipment: 'Barra',
      tags: ['hipertrofia'],
    },
    {
      category: 'Pierna',
      name: 'Zancadas',
      description: 'Trabajo unilateral de pierna.',
      primaryMuscleGroup: 'Pierna',
      equipment: 'Mancuernas',
      tags: ['hipertrofia'],
    },
    {
      category: 'Pierna',
      name: 'Step up',
      description: 'Subida al banco.',
      primaryMuscleGroup: 'Pierna',
      equipment: 'Mancuernas',
      tags: ['tecnica'],
    },
    {
      category: 'Pierna',
      name: 'Aductores en maquina',
      description: 'Aislamiento de aductores.',
      primaryMuscleGroup: 'Pierna',
      equipment: 'Maquina',
      tags: ['aislamiento'],
    },
    {
      category: 'Pierna',
      name: 'Abduccion con banda',
      description: 'Activacion de gluteo medio.',
      primaryMuscleGroup: 'Pierna',
      equipment: 'Banda',
      tags: ['activacion'],
    },
    {
      category: 'Pierna',
      name: 'Gemelos de pie',
      description: 'Elevaciones de talon.',
      primaryMuscleGroup: 'Pierna',
      equipment: 'Maquina',
      tags: ['aislamiento'],
    },
    {
      category: 'Pierna',
      name: 'Soleo sentado',
      description: 'Gemelos en maquina sentado.',
      primaryMuscleGroup: 'Pierna',
      equipment: 'Maquina',
      tags: ['aislamiento'],
    },
    {
      category: 'Brazos',
      name: 'Curl martillo',
      description: 'Biceps y braquial.',
      primaryMuscleGroup: 'Brazos',
      equipment: 'Mancuernas',
      tags: ['hipertrofia'],
    },
    {
      category: 'Brazos',
      name: 'Curl con barra Z',
      description: 'Curl con agarre comodo.',
      primaryMuscleGroup: 'Brazos',
      equipment: 'Barra Z',
      tags: ['hipertrofia'],
    },
    {
      category: 'Brazos',
      name: 'Curl en maquina',
      description: 'Curl guiado.',
      primaryMuscleGroup: 'Brazos',
      equipment: 'Maquina',
      tags: ['aislamiento'],
    },
    {
      category: 'Brazos',
      name: 'Curl en polea baja',
      description: 'Curl con tension constante.',
      primaryMuscleGroup: 'Brazos',
      equipment: 'Polea',
      tags: ['aislamiento'],
    },
    {
      category: 'Brazos',
      name: 'Press cerrado',
      description: 'Press enfocado en triceps.',
      primaryMuscleGroup: 'Brazos',
      equipment: 'Barra',
      tags: ['fuerza'],
    },
    {
      category: 'Brazos',
      name: 'Rompecraneos con barra Z',
      description: 'Extension de triceps tumbado.',
      primaryMuscleGroup: 'Brazos',
      equipment: 'Barra Z',
      tags: ['aislamiento'],
    },
    {
      category: 'Brazos',
      name: 'Fondos asistidos',
      description: 'Fondos en maquina asistida.',
      primaryMuscleGroup: 'Brazos',
      equipment: 'Maquina',
      tags: ['fuerza'],
    },
    {
      category: 'Brazos',
      name: 'Extension de triceps en polea',
      description: 'Empuje en polea alta.',
      primaryMuscleGroup: 'Brazos',
      equipment: 'Polea',
      tags: ['aislamiento'],
    },
    {
      category: 'Brazos',
      name: 'Curl de muneca',
      description: 'Antebrazo en banco.',
      primaryMuscleGroup: 'Brazos',
      equipment: 'Mancuernas',
      tags: ['antebrazo'],
    },
    {
      category: 'Brazos',
      name: 'Curl inverso',
      description: 'Antebrazo con agarre prono.',
      primaryMuscleGroup: 'Brazos',
      equipment: 'Barra',
      tags: ['antebrazo'],
    },
    {
      category: 'Trapecio',
      name: 'Encogimientos',
      description: 'Trapecio superior.',
      primaryMuscleGroup: 'Trapecio',
      equipment: 'Mancuernas',
      tags: ['aislamiento'],
    },
    {
      category: 'Core',
      name: 'Plancha',
      description: 'Estabilidad de core.',
      primaryMuscleGroup: 'Core',
      equipment: 'Peso corporal',
      tags: ['estabilidad'],
    },
    {
      category: 'Core',
      name: 'Bird-dog',
      description: 'Estabilidad lumbar.',
      primaryMuscleGroup: 'Core',
      equipment: 'Peso corporal',
      tags: ['estabilidad'],
    },
    {
      category: 'Core',
      name: 'Dead bug',
      description: 'Control del core en supino.',
      primaryMuscleGroup: 'Core',
      equipment: 'Peso corporal',
      tags: ['estabilidad'],
    },
    {
      category: 'Core',
      name: 'Ab wheel',
      description: 'Rueda abdominal.',
      primaryMuscleGroup: 'Core',
      equipment: 'Rueda',
      tags: ['fuerza'],
    },
    {
      category: 'Core',
      name: 'Pallof press',
      description: 'Antirotacion con polea o banda.',
      primaryMuscleGroup: 'Core',
      equipment: 'Polea',
      tags: ['estabilidad'],
    },
  ];

  for (const item of exercises) {
    const categoryId = categoryMap.get(item.category);
    if (!categoryId) continue;
    await exerciseRepository.createExercise({
      categoryId,
      name: item.name,
      description: item.description,
      primaryMuscleGroup: item.primaryMuscleGroup,
      equipment: item.equipment,
      tags: item.tags,
    });
  }
};

const seedRoutineData = async () => {
  if (!ENABLE_SEED) return;
  const routineDays = await routineRepository.listRoutineDays();
  if (routineDays.length > 0) return;

  const exercises = await exerciseRepository.listAllExercises();
  const exerciseMap = new Map(exercises.map((exercise) => [exercise.nameLower, exercise]));
  const pecho = exerciseMap.get('press banca con barra');
  const inclinado = exerciseMap.get('press inclinado con mancuerna');
  const remo = exerciseMap.get('remo con barra');

  const routineDay = await routineRepository.createRoutineDay({
    name: 'Pecho',
    notes: 'Rutina base para pecho.',
  });

  const seedItems = [
    pecho && { exerciseId: pecho.id, targetSets: 4, targetRepsMin: 6, targetRepsMax: 10 },
    inclinado && { exerciseId: inclinado.id, targetSets: 3, targetRepsMin: 8, targetRepsMax: 12 },
    remo && { exerciseId: remo.id, targetSets: 3, targetRepsMin: 8, targetRepsMax: 12 },
  ].filter(Boolean);

  for (const [index, item] of seedItems.entries()) {
    await routineItemRepository.createRoutineItem({
      routineDayId: routineDay.id,
      exerciseId: item.exerciseId,
      order: index + 1,
      targetSets: item.targetSets,
      targetRepsMin: item.targetRepsMin,
      targetRepsMax: item.targetRepsMax,
      restSeconds: 90,
      targetRIR: 2,
      notes: '',
    });
  }
};

const seedTrainingData = async () => {
  if (!ENABLE_SEED) return;
  const sessions = await trainingRepository.listAllSessions();
  if (sessions.length > 0) return;
  const days = await routineRepository.listRoutineDays();
  if (days.length === 0) return;
  const routineDay = days[0];
  const items = await routineItemRepository.listItemsByRoutineDay(routineDay.id);
  if (items.length === 0) return;

  const session = await trainingRepository.createSession(routineDay.id);
  await trainingRepository.updateSession(session.id, {
    finishedAt: new Date().toISOString(),
  });

  for (const item of items) {
    const log = {
      id: createId(),
      sessionId: session.id,
      exerciseId: item.exerciseId,
      sets: [
        {
          setNumber: 1,
          weight: 60,
          reps: 10,
          rir: 2,
          isDone: true,
          createdAt: new Date().toISOString(),
        },
      ],
      createdAt: new Date().toISOString(),
    };
    await sessionLogRepository.saveLog(log);
  }
};

const loadTheme = () => {
  const stored = localStorage.getItem(THEME_KEY);
  state.theme = stored || 'dark';
  document.documentElement.dataset.theme = state.theme;
};

const toggleTheme = () => {
  state.theme = state.theme === 'light' ? 'dark' : 'light';
  document.documentElement.dataset.theme = state.theme;
  localStorage.setItem(THEME_KEY, state.theme);
};

const setView = (route) => {
  if (!isAuthenticated && route !== 'auth') {
    route = 'auth';
  }
  views.forEach((view) => {
    view.hidden = view.dataset.view !== route;
  });
  navButtons.forEach((button) => {
    button.classList.toggle('active', button.dataset.route === route);
  });
  history.replaceState(null, '', `#${route}`);
  if (route === 'home') {
    renderHomeDashboard();
  }
  if (route === 'history') {
    renderHistoryList();
  }
  if (route === 'routines') {
    routineEditor.hidden = true;
    state.expandedRoutineItemId = null;
    if (routineEditFields) {
      routineEditFields.hidden = true;
    }
    if (toggleRoutineEditFields) {
      toggleRoutineEditFields.classList.remove('is-open');
      toggleRoutineEditFields.setAttribute('aria-label', 'Mostrar edicion');
      toggleRoutineEditFields.title = 'Mostrar edicion';
    }
  }
};

const formatTarget = (item) => {
  const reps =
    item.targetRepsMin && item.targetRepsMax
      ? `${item.targetRepsMin}-${item.targetRepsMax}`
      : item.targetRepsMin || item.targetRepsMax
        ? `${item.targetRepsMin || item.targetRepsMax}`
        : '-';
  const sets = item.targetSets ? `${item.targetSets}x` : '';
  const rest = item.restSeconds ? ` | Descanso ${item.restSeconds}s` : '';
  const rir = item.targetRIR ? ` | RIR ${item.targetRIR}` : '';
  return `${sets}${reps}${rest}${rir}`.trim();
};

const parseNumber = (value) => {
  if (value === '' || value === null || value === undefined) return null;
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : null;
};

const formatDateTime = (iso) => {
  if (!iso) return '';
  const date = new Date(iso);
  return date.toLocaleString('es', { hour: '2-digit', minute: '2-digit', day: '2-digit', month: 'short' });
};

const formatDate = (iso) => {
  if (!iso) return '';
  const date = new Date(iso);
  return date.toLocaleDateString('es', { day: '2-digit', month: 'short', year: '2-digit' });
};

const formatNumber = (value, maximumFractionDigits = 1) =>
  new Intl.NumberFormat('es', { maximumFractionDigits }).format(value);

const confirmDialog = (message, options = {}) => {
  if (!confirmModal || !confirmMessage || !confirmCancel || !confirmOk) {
    return Promise.resolve(window.confirm(message));
  }
  const {
    title = 'Confirmar',
    confirmText = 'Confirmar',
    cancelText = 'Cancelar',
    danger = false,
  } = options;

  confirmTitle.textContent = title;
  confirmMessage.textContent = message;
  confirmCancel.textContent = cancelText;
  confirmOk.textContent = confirmText;
  confirmOk.classList.toggle('button--danger', danger);
  confirmOk.classList.toggle('button--primary', !danger);

  confirmModal.hidden = false;
  confirmOk.focus();

  return new Promise((resolve) => {
    confirmResolver = resolve;
  });
};

const closeConfirm = (result) => {
  if (!confirmModal) return;
  confirmModal.hidden = true;
  if (confirmResolver) {
    confirmResolver(result);
    confirmResolver = null;
  }
};

if (confirmModal) {
  confirmModal.addEventListener('click', (event) => {
    const target = event.target;
    if (target instanceof Element && target.dataset.action === 'cancel') {
      closeConfirm(false);
    }
  });
}

if (confirmCancel) {
  confirmCancel.addEventListener('click', () => closeConfirm(false));
}

if (confirmOk) {
  confirmOk.addEventListener('click', () => closeConfirm(true));
}

window.addEventListener('keydown', (event) => {
  if (!confirmModal || confirmModal.hidden) return;
  if (event.key === 'Escape') {
    event.preventDefault();
    closeConfirm(false);
  }
});

const renderHomeDashboard = async () => {
  if (!isAuthenticated) return;
  if (
    !homeConsistencyCard ||
    !homeVolumeCard ||
    !homePrsCard ||
    !homeChartCard ||
    !homeNextSessionCard
  ) {
    return;
  }

  const [sessions, logs, exercises, routineDays, routineItems] = await Promise.all([
    getAllFromStore('trainingSessions'),
    getAllFromStore('sessionExerciseLogs'),
    getAllFromStore('exercises'),
    getAllFromStore('routineDays'),
    getAllFromStore('routineItems'),
  ]);

  const exerciseMap = new Map(exercises.map((exercise) => [exercise.id, exercise]));
  const sessionsById = new Map(sessions.map((session) => [session.id, session]));
  const finishedSessions = sessions.filter((session) => session.finishedAt);

  const volumeBySession = new Map();
  logs.forEach((log) => {
    const session = sessionsById.get(log.sessionId);
    if (!session || !session.finishedAt) return;
    const volume = (log.sets || []).reduce((acc, set) => {
      if (set.weight == null || set.reps == null) return acc;
      return acc + set.weight * set.reps;
    }, 0);
    if (!volume) return;
    volumeBySession.set(log.sessionId, (volumeBySession.get(log.sessionId) || 0) + volume);
  });

  const now = Date.now();
  const weekMs = 7 * 24 * 60 * 60 * 1000;
  const weekStart = now - weekMs;
  const prevWeekStart = now - 2 * weekMs;

  const sessionsThisWeek = finishedSessions.filter(
    (session) => new Date(session.finishedAt).getTime() >= weekStart
  );
  const sessionsPrevWeek = finishedSessions.filter((session) => {
    const ts = new Date(session.finishedAt).getTime();
    return ts >= prevWeekStart && ts < weekStart;
  });

  if (sessionsThisWeek.length > 0) {
    homeConsistencyCard.hidden = false;
    homeConsistencyValue.textContent = `${sessionsThisWeek.length}`;
    const ratio = Math.min(sessionsThisWeek.length / 7, 1);
    homeConsistencyBar.style.width = `${Math.round(ratio * 100)}%`;
  } else {
    homeConsistencyCard.hidden = true;
  }

  const volumeThisWeek = sessionsThisWeek.reduce(
    (acc, session) => acc + (volumeBySession.get(session.id) || 0),
    0
  );
  const volumePrevWeek = sessionsPrevWeek.reduce(
    (acc, session) => acc + (volumeBySession.get(session.id) || 0),
    0
  );
  if (volumeThisWeek > 0) {
    homeVolumeCard.hidden = false;
    if (volumeThisWeek >= 1000) {
      homeVolumeValue.textContent = `${formatNumber(volumeThisWeek / 1000, 1)}k kg`;
    } else {
      homeVolumeValue.textContent = `${formatNumber(volumeThisWeek, 0)} kg`;
    }
    if (volumePrevWeek > 0 && homeVolumeDelta) {
      const delta = ((volumeThisWeek - volumePrevWeek) / volumePrevWeek) * 100;
      const sign = delta >= 0 ? '+' : '';
      homeVolumeDelta.textContent = `${sign}${formatNumber(delta, 0)}% vs semana pasada`;
    } else if (homeVolumeDelta) {
      homeVolumeDelta.textContent = '';
    }
  } else {
    homeVolumeCard.hidden = true;
  }

  const logsByExercise = new Map();
  logs.forEach((log) => {
    const session = sessionsById.get(log.sessionId);
    if (!session || !session.finishedAt) return;
    const bestWeight = (log.sets || []).reduce((max, set) => {
      if (set.weight == null) return max;
      return Math.max(max, set.weight);
    }, 0);
    if (!bestWeight) return;
    const list = logsByExercise.get(log.exerciseId) || [];
    list.push({ bestWeight, finishedAt: session.finishedAt });
    logsByExercise.set(log.exerciseId, list);
  });

  const prs = [];
  logsByExercise.forEach((entries, exerciseId) => {
    if (entries.length < 2) return;
    entries.sort((a, b) => new Date(a.finishedAt) - new Date(b.finishedAt));
    const latest = entries[entries.length - 1].bestWeight;
    const prevBest = Math.max(...entries.slice(0, -1).map((entry) => entry.bestWeight));
    if (latest > prevBest) {
      const exercise = exerciseMap.get(exerciseId);
      prs.push(exercise ? exercise.name : 'Ejercicio');
    }
  });

  if (prs.length > 0) {
    homePrsCard.hidden = false;
    homePrsValue.textContent = `${prs.length}`;
    homePrsDelta.textContent = prs.slice(0, 3).join(', ');
  } else {
    homePrsCard.hidden = true;
  }

  const dayBuckets = [];
  for (let i = 13; i >= 0; i -= 1) {
    const day = new Date(now - i * 24 * 60 * 60 * 1000);
    day.setHours(0, 0, 0, 0);
    dayBuckets.push({ day, total: 0 });
  }
  const bucketIndex = new Map(dayBuckets.map((bucket, idx) => [bucket.day.getTime(), idx]));
  finishedSessions.forEach((session) => {
    const day = new Date(session.finishedAt);
    day.setHours(0, 0, 0, 0);
    const index = bucketIndex.get(day.getTime());
    if (index == null) return;
    dayBuckets[index].total += volumeBySession.get(session.id) || 0;
  });
  const totals = dayBuckets.map((bucket) => bucket.total);
  const maxTotal = Math.max(...totals, 0);
  if (maxTotal > 0 && homeSparkline) {
    homeChartCard.hidden = false;
    const width = 240;
    const height = 80;
    const padding = 6;
    const points = totals
      .map((total, idx) => {
        const x = padding + (idx * (width - padding * 2)) / (totals.length - 1);
        const y =
          height - padding - (total / maxTotal) * (height - padding * 2);
        return `${x.toFixed(1)},${y.toFixed(1)}`;
      })
      .join(' ');
    homeSparkline.setAttribute('points', points);
  } else {
    homeChartCard.hidden = true;
  }

  if (routineDays.length > 0) {
    const lastId = localStorage.getItem(LAST_ROUTINE_DAY_KEY);
    const selected =
      routineDays.find((day) => day.id === lastId) || routineDays[0];
    homeNextSessionCard.hidden = false;
    homeNextSessionTitle.textContent = selected ? `Rutina sugerida: ${selected.name}` : '';
    homeNextSessionList.innerHTML = '';
    if (selected) {
      const items = routineItems
        .filter((item) => item.routineDayId === selected.id)
        .sort((a, b) => a.order - b.order)
        .slice(0, 3);
      items.forEach((item) => {
        const exercise = exerciseMap.get(item.exerciseId);
        const span = document.createElement('span');
        span.textContent = exercise ? exercise.name : 'Ejercicio eliminado';
        homeNextSessionList.appendChild(span);
      });
    }
  } else {
    homeNextSessionCard.hidden = true;
  }
};

const getSessionVolume = (logs) =>
  logs.reduce((total, log) => {
    const sets = log.sets || [];
    const volume = sets.reduce((acc, set) => {
      if (set.weight == null || set.reps == null) return acc;
      return acc + set.weight * set.reps;
    }, 0);
    return total + volume;
  }, 0);

const renderHistoryList = async () => {
  if (!historyList) return;
  const [sessions, routineDays] = await Promise.all([
    trainingRepository.listAllSessions(),
    routineRepository.listRoutineDays(),
  ]);
  const finished = sessions.filter((session) => session.finishedAt);
  historyList.innerHTML = '';
  if (historyDetail) historyDetail.hidden = true;
  state.currentHistorySessionId = null;

  if (finished.length === 0) {
    const empty = document.createElement('li');
    empty.className = 'empty-state';
    empty.textContent = 'No hay sesiones finalizadas.';
    historyList.appendChild(empty);
    return;
  }

  const routineMap = new Map(routineDays.map((day) => [day.id, day]));
  finished
    .sort((a, b) => new Date(b.finishedAt) - new Date(a.finishedAt))
    .forEach((session) => {
      const item = document.createElement('li');
      item.className = 'list__item';

      const row = document.createElement('div');
      row.className = 'list__row';

      const info = document.createElement('div');
      const title = document.createElement('div');
      title.className = 'list__title';
      const routine = routineMap.get(session.routineDayId);
      title.textContent = routine ? routine.name : 'Sesion';

      const meta = document.createElement('div');
      meta.className = 'list__meta';
      meta.textContent = `Finalizado: ${formatDateTime(session.finishedAt)}`;

      info.appendChild(title);
      info.appendChild(meta);

      const actions = document.createElement('div');
      actions.className = 'list__actions';
      const viewButton = document.createElement('button');
      viewButton.className = 'button button--primary';
      viewButton.textContent = 'Ver';
      viewButton.addEventListener('click', () => openHistorySession(session.id));
      actions.appendChild(viewButton);

      row.appendChild(info);
      row.appendChild(actions);
      item.appendChild(row);
      historyList.appendChild(item);
    });
};

const openHistorySession = async (sessionId) => {
  if (!historyDetail || !historyDetailList) return;
  const session = await trainingRepository.getSession(sessionId);
  if (!session) return;
  state.currentHistorySessionId = sessionId;
  const [routine, logs, exerciseMap] = await Promise.all([
    routineRepository.getRoutineDay(session.routineDayId),
    sessionLogRepository.listLogsBySession(sessionId),
    getExerciseMap(),
  ]);

  historyDetail.hidden = false;
  historyDetailTitle.textContent = routine ? routine.name : 'Sesion';
  const volume = getSessionVolume(logs);
  historyDetailMeta.textContent = `${formatDateTime(session.finishedAt)} · Volumen ${formatNumber(
    volume,
    0
  )} kg`;

  historyDetailList.innerHTML = '';
  if (logs.length === 0) {
    const empty = document.createElement('div');
    empty.className = 'empty-state';
    empty.textContent = 'Sin registros.';
    historyDetailList.appendChild(empty);
    return;
  }

  logs.forEach((log) => {
    const exercise = exerciseMap.get(log.exerciseId);
    const card = document.createElement('div');
    card.className = 'workout-card';

    const header = document.createElement('div');
    header.className = 'workout-card__header';
    const title = document.createElement('div');
    title.className = 'workout-card__title';
    title.textContent = exercise ? exercise.name : 'Ejercicio eliminado';
    header.appendChild(title);

    const meta = document.createElement('div');
    meta.className = 'workout-card__meta';
    meta.textContent = `${(log.sets || []).length} sets`;

    const list = document.createElement('div');
    list.className = 'set-list';
    (log.sets || []).forEach((set, index) => {
      const row = document.createElement('div');
      row.className = 'set-row';
      const label = document.createElement('div');
      label.className = 'set-row__label';
      label.textContent = `#${index + 1}`;
      const weight = document.createElement('div');
      weight.className = 'set-row__label';
      weight.textContent = `${set.weight ?? '-'} kg`;
      const reps = document.createElement('div');
      reps.className = 'set-row__label';
      reps.textContent = `${set.reps ?? '-'} reps`;
      const rir = document.createElement('div');
      rir.className = 'set-row__label';
      rir.textContent = `RIR ${set.rir ?? '-'}`;
      row.appendChild(label);
      row.appendChild(weight);
      row.appendChild(reps);
      row.appendChild(rir);
      list.appendChild(row);
    });

    card.appendChild(header);
    card.appendChild(meta);
    card.appendChild(list);
    historyDetailList.appendChild(card);
  });
};

const getExerciseMap = async () => {
  const exercises = await exerciseRepository.listAllExercises();
  return new Map(exercises.map((exercise) => [exercise.id, exercise]));
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
      const ok = await confirmDialog('¿Eliminar este ejercicio?', {
        title: 'Eliminar ejercicio',
        confirmText: 'Eliminar',
        danger: true,
      });
      if (!ok) return;
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

const clearRoutineDayForm = () => {
  routineDayNameInput.value = '';
  routineDayNotesInput.value = '';
  routineDayError.textContent = '';
};

const showRoutineDayForm = () => {
  routineDayForm.hidden = false;
  routineDayNameInput.focus();
};

const hideRoutineDayForm = () => {
  routineDayForm.hidden = true;
  clearRoutineDayForm();
};

const setRoutineEditorError = (message) => {
  routineEditorError.textContent = message;
};

const renderRoutineDayList = async () => {
  const days = await routineRepository.listRoutineDays();
  routineDayList.innerHTML = '';
  if (days.length === 0) {
    const empty = document.createElement('li');
    empty.className = 'empty-state';
    empty.textContent = 'Crea tu primer dia para entrenar.';
    routineDayList.appendChild(empty);
    routineEditor.hidden = true;
    return;
  }

  days.forEach((day) => {
    const item = document.createElement('li');
    item.className = 'list__item';

    const row = document.createElement('div');
    row.className = 'list__row';

    const info = document.createElement('div');
    const title = document.createElement('div');
    title.className = 'list__title';
    title.textContent = day.name;

    const meta = document.createElement('div');
    meta.className = 'list__meta';
    meta.textContent = day.notes || 'Sin notas.';

    info.appendChild(title);
    info.appendChild(meta);

    const actions = document.createElement('div');
    actions.className = 'list__actions';
    const editButton = createIconButton({
      title: 'Editar',
      className: 'icon-button',
      paths: ICONS.edit,
    });
    editButton.addEventListener('click', () => openRoutineDayEditor(day.id));
    actions.appendChild(editButton);

    row.appendChild(info);
    row.appendChild(actions);
    item.appendChild(row);
    routineDayList.appendChild(item);
  });
};

const fillRoutineCategoryFilter = async () => {
  const categories = await exerciseRepository.listCategories();
  routineCategoryFilter.innerHTML = '';
  const allOption = document.createElement('option');
  allOption.value = 'all';
  allOption.textContent = 'Todas las categorias';
  routineCategoryFilter.appendChild(allOption);
  categories.forEach((category) => {
    const option = document.createElement('option');
    option.value = category.id;
    option.textContent = category.name;
    routineCategoryFilter.appendChild(option);
  });
  routineCategoryFilter.value = state.routineCategoryFilter || 'all';
};

const updateRoutineExerciseOptions = async () => {
  const exercises = await exerciseRepository.listAllExercises();
  const filtered = exercises.filter((exercise) => {
    const matchesSearch =
      !state.routineExerciseSearch ||
      exercise.nameLower.includes(state.routineExerciseSearch);
    const matchesCategory =
      state.routineCategoryFilter === 'all' || exercise.categoryId === state.routineCategoryFilter;
    return matchesSearch && matchesCategory;
  });
  routineExerciseSelect.innerHTML = '';
  if (filtered.length === 0) {
    const empty = document.createElement('option');
    empty.textContent = 'Sin resultados';
    empty.value = '';
    routineExerciseSelect.appendChild(empty);
    return;
  }
  filtered.forEach((exercise) => {
    const option = document.createElement('option');
    option.value = exercise.id;
    option.textContent = exercise.name;
    routineExerciseSelect.appendChild(option);
  });
};

const renderRoutineItems = async () => {
  if (!state.currentRoutineDayId) return;
  const [items, exerciseMap] = await Promise.all([
    routineItemRepository.listItemsByRoutineDay(state.currentRoutineDayId),
    getExerciseMap(),
  ]);
  routineItemList.innerHTML = '';
  if (items.length === 0) {
    const empty = document.createElement('li');
    empty.className = 'empty-state';
    empty.textContent = 'Agrega ejercicios para crear la rutina.';
    routineItemList.appendChild(empty);
    state.expandedRoutineItemId = null;
    return;
  }

  items.forEach((item, index) => {
    const exercise = exerciseMap.get(item.exerciseId);
    const itemEl = document.createElement('li');
    itemEl.className = 'list__item';

    const header = document.createElement('div');
    header.className = 'list__row';

    const title = document.createElement('div');
    title.className = 'list__title';
    title.textContent = exercise ? exercise.name : 'Ejercicio eliminado';

    const actions = document.createElement('div');
    actions.className = 'list__actions';

    const isExpanded = item.id === state.expandedRoutineItemId;
    const toggleButton = createIconButton({
      title: isExpanded ? 'Contraer' : 'Expandir',
      className: 'icon-button icon-button--toggle',
      paths: ICONS.chevron,
    });
    if (isExpanded) {
      toggleButton.classList.add('is-open');
    }
    toggleButton.addEventListener('click', async () => {
      state.expandedRoutineItemId = isExpanded ? null : item.id;
      await renderRoutineItems();
    });

    const upButton = createIconButton({
      title: 'Subir',
      className: 'icon-button',
      paths: ICONS.up,
    });
    upButton.disabled = index === 0;
    upButton.addEventListener('click', async () => {
      if (index === 0) return;
      await routineItemRepository.updateRoutineItem(item.id, { order: items[index - 1].order });
      await routineItemRepository.updateRoutineItem(items[index - 1].id, { order: item.order });
      await renderRoutineItems();
      await renderRoutineDayPreview();
    });

    const downButton = createIconButton({
      title: 'Bajar',
      className: 'icon-button',
      paths: ICONS.down,
    });
    downButton.disabled = index === items.length - 1;
    downButton.addEventListener('click', async () => {
      if (index === items.length - 1) return;
      await routineItemRepository.updateRoutineItem(item.id, { order: items[index + 1].order });
      await routineItemRepository.updateRoutineItem(items[index + 1].id, { order: item.order });
      await renderRoutineItems();
      await renderRoutineDayPreview();
    });

    const deleteButton = createIconButton({
      title: 'Eliminar',
      className: 'icon-button icon-button--danger',
      paths: ICONS.trash,
    });
    deleteButton.addEventListener('click', async () => {
      const ok = await confirmDialog('Eliminar este ejercicio de la rutina?', {
        title: 'Eliminar ejercicio',
        confirmText: 'Eliminar',
        danger: true,
      });
      if (!ok) return;
      await routineItemRepository.deleteRoutineItem(item.id);
      await renderRoutineItems();
      await renderRoutineDayPreview();
    });

    actions.appendChild(toggleButton);
    actions.appendChild(upButton);
    actions.appendChild(downButton);
    actions.appendChild(deleteButton);

    header.appendChild(title);
    header.appendChild(actions);

    const targets = document.createElement('div');
    targets.className = 'form__grid';
    targets.hidden = !isExpanded;

    const fields = [
      { label: 'Series', value: item.targetSets, key: 'targetSets', min: 1 },
      { label: 'Reps min', value: item.targetRepsMin, key: 'targetRepsMin', min: 1 },
      { label: 'Reps max', value: item.targetRepsMax, key: 'targetRepsMax', min: 1 },
      { label: 'Descanso (s)', value: item.restSeconds, key: 'restSeconds', min: 0 },
      { label: 'RIR', value: item.targetRIR, key: 'targetRIR', min: 0 },
    ];

    fields.forEach((field) => {
      const wrapper = document.createElement('div');
      wrapper.className = 'form__field';
      const label = document.createElement('label');
      label.className = 'form__label';
      label.textContent = field.label;
      const input = document.createElement('input');
      input.className = 'form__input';
      input.type = 'number';
      if (typeof field.min === 'number') {
        input.min = field.min;
      }
      input.value = field.value ?? '';
      input.addEventListener('change', async (event) => {
        const value = parseNumber(event.target.value);
        await routineItemRepository.updateRoutineItem(item.id, { [field.key]: value });
        await renderRoutineDayPreview();
      });
      wrapper.appendChild(label);
      wrapper.appendChild(input);
      targets.appendChild(wrapper);
    });

    const notesField = document.createElement('div');
    notesField.className = 'form__field';
    const notesLabel = document.createElement('label');
    notesLabel.className = 'form__label';
    notesLabel.textContent = 'Notas';
    const notesInput = document.createElement('textarea');
    notesInput.className = 'form__input form__input--textarea';
    notesInput.rows = 2;
    notesInput.value = item.notes || '';
    notesInput.addEventListener('change', async (event) => {
      await routineItemRepository.updateRoutineItem(item.id, { notes: event.target.value.trim() });
      await renderRoutineDayPreview();
    });
    notesField.appendChild(notesLabel);
    notesField.appendChild(notesInput);

    targets.appendChild(notesField);

    itemEl.appendChild(header);
    itemEl.appendChild(targets);
    routineItemList.appendChild(itemEl);
  });
};

const openRoutineDayEditor = async (routineDayId) => {
  state.currentRoutineDayId = routineDayId;
  const day = await routineRepository.getRoutineDay(routineDayId);
  if (!day) {
    routineEditor.hidden = true;
    return;
  }
  routineEditor.hidden = false;
  routineEditorTitle.textContent = day.name;
  routineEditorMeta.textContent = day.notes || 'Sin notas.';
  routineDayEditName.value = day.name;
  routineDayEditNotes.value = day.notes || '';
  setRoutineEditorError('');
  state.expandedRoutineItemId = null;
  routineEditFields.hidden = true;
  if (toggleRoutineEditFields) {
    toggleRoutineEditFields.classList.remove('is-open');
    toggleRoutineEditFields.setAttribute('aria-label', 'Mostrar edicion');
    toggleRoutineEditFields.title = 'Mostrar edicion';
  }
  await fillRoutineCategoryFilter();
  await updateRoutineExerciseOptions();
  await renderRoutineItems();
};

const renderRoutineDaySelect = async () => {
  const days = await routineRepository.listRoutineDays();
  routineDaySelect.innerHTML = '';
  if (days.length === 0) {
    const option = document.createElement('option');
    option.textContent = 'Sin rutinas';
    option.value = '';
    routineDaySelect.appendChild(option);
    state.currentRoutineDayId = null;
    routineDaySelect.disabled = true;
    return;
  }
  routineDaySelect.disabled = false;
  const last = localStorage.getItem(LAST_ROUTINE_DAY_KEY);
  const selected = days.find((day) => day.id === last) || days[0];
  days.forEach((day) => {
    const option = document.createElement('option');
    option.value = day.id;
    option.textContent = day.name;
    if (day.id === selected.id) option.selected = true;
    routineDaySelect.appendChild(option);
  });
  state.currentRoutineDayId = selected.id;
  localStorage.setItem(LAST_ROUTINE_DAY_KEY, selected.id);
};

const renderRoutineDayPreview = async () => {
  routineDayItems.innerHTML = '';
  routineDaySelectError.textContent = '';
  if (!state.currentRoutineDayId) {
    routineDayName.textContent = 'Sin rutina';
    routineDayNotes.textContent = 'Crea una rutina para empezar.';
    startSessionButton.disabled = true;
    return;
  }
  const [day, items, exerciseMap] = await Promise.all([
    routineRepository.getRoutineDay(state.currentRoutineDayId),
    routineItemRepository.listItemsByRoutineDay(state.currentRoutineDayId),
    getExerciseMap(),
  ]);
  if (!day) {
    routineDayName.textContent = 'Dia eliminado';
    routineDayNotes.textContent = '';
    startSessionButton.disabled = true;
    return;
  }
  routineDayName.textContent = day.name;
  routineDayNotes.textContent = day.notes || 'Sin notas.';
  if (items.length === 0) {
    const empty = document.createElement('li');
    empty.className = 'empty-state';
    empty.textContent = 'Sin ejercicios en este dia.';
    routineDayItems.appendChild(empty);
  } else {
    items.forEach((item) => {
      const exercise = exerciseMap.get(item.exerciseId);
      const listItem = document.createElement('li');
      listItem.className = 'list__item';
      const title = document.createElement('div');
      title.className = 'list__title';
      title.textContent = exercise ? exercise.name : 'Ejercicio eliminado';
      const meta = document.createElement('div');
      meta.className = 'list__meta';
      meta.textContent = formatTarget(item);
      listItem.appendChild(title);
      listItem.appendChild(meta);
      routineDayItems.appendChild(listItem);
    });
  }
  startSessionButton.disabled = false;
};

const updateTrainingActions = async () => {
  if (!state.currentRoutineDayId) {
    resumeSessionButton.hidden = true;
    finishSessionFromHome.hidden = true;
    return;
  }
  const activeSessions = await trainingRepository.listActiveSessionsByRoutineDay(
    state.currentRoutineDayId
  );
  const active = activeSessions.sort((a, b) => b.startedAt.localeCompare(a.startedAt))[0];
  if (active) {
    state.activeSessionId = active.id;
    resumeSessionButton.hidden = false;
    finishSessionFromHome.hidden = false;
  } else {
    state.activeSessionId = null;
    resumeSessionButton.hidden = true;
    finishSessionFromHome.hidden = true;
  }
};

const getOrCreateSessionLog = async (sessionId, exerciseId) => {
  const existing = await sessionLogRepository.getLogForSessionExercise(sessionId, exerciseId);
  if (existing) return existing;
  const log = {
    id: createId(),
    sessionId,
    exerciseId,
    sets: [],
    createdAt: new Date().toISOString(),
  };
  await sessionLogRepository.saveLog(log);
  return log;
};

const getLastPerformance = async (exerciseId, currentSessionId) => {
  const logs = await sessionLogRepository.listLogsByExercise(exerciseId);
  const filtered = logs.filter((log) => log.sessionId !== currentSessionId);
  if (filtered.length === 0) return null;
  const sessions = await Promise.all(
    filtered.map(async (log) => ({
      log,
      session: await trainingRepository.getSession(log.sessionId),
    }))
  );
  const valid = sessions.filter((entry) => entry.session);
  if (valid.length === 0) return null;
  valid.sort((a, b) => b.session.startedAt.localeCompare(a.session.startedAt));
  const latest = valid[0];
  const sets = latest.log.sets || [];
  if (sets.length === 0) return null;
  const lastSet = sets[sets.length - 1];
  if (!lastSet) return null;
  return {
    summary: `${lastSet.weight ?? '-'}kg x ${lastSet.reps ?? '-'}`,
    date: latest.session.startedAt,
  };
};

const getExercisePR = async (exerciseId, currentSessionId) => {
  const logs = await sessionLogRepository.listLogsByExercise(exerciseId);
  const filtered = logs.filter((log) => log.sessionId !== currentSessionId);
  if (filtered.length === 0) return null;
  let maxWeight = null;
  let maxDate = null;
  filtered.forEach((log) => {
    (log.sets || []).forEach((set) => {
      if (set.weight == null) return;
      if (maxWeight == null || set.weight > maxWeight) {
        maxWeight = set.weight;
        maxDate = log.createdAt || null;
      }
    });
  });
  return maxWeight == null ? null : { weight: maxWeight, date: maxDate };
};

const renderWorkoutView = async (sessionId) => {
  workoutError.textContent = '';
  const session = await trainingRepository.getSession(sessionId);
  if (!session) {
    workoutError.textContent = 'Sesion no encontrada.';
    return;
  }
  state.activeSessionId = session.id;
  const day = await routineRepository.getRoutineDay(session.routineDayId);
  workoutTitle.textContent = day ? day.name : 'Dia eliminado';
  workoutMeta.textContent = `Inicio: ${formatDateTime(session.startedAt)}`;
  const [items, exerciseMap] = await Promise.all([
    routineItemRepository.listItemsByRoutineDay(session.routineDayId),
    getExerciseMap(),
  ]);
  workoutExerciseList.innerHTML = '';
  if (items.length === 0) {
    const empty = document.createElement('div');
    empty.className = 'empty-state';
    empty.textContent = 'No hay ejercicios en este dia.';
    workoutExerciseList.appendChild(empty);
    return;
  }

  for (const item of items) {
    const exercise = exerciseMap.get(item.exerciseId);
    const log = await getOrCreateSessionLog(session.id, item.exerciseId);
    const card = document.createElement('div');
    card.className = 'workout-card';

    const header = document.createElement('div');
    header.className = 'workout-card__header';
    const title = document.createElement('div');
    title.className = 'workout-card__title';
    title.textContent = exercise ? exercise.name : 'Ejercicio eliminado';
    const target = document.createElement('span');
    target.className = 'pill';
    target.textContent = formatTarget(item) || 'Objetivo';
    header.appendChild(title);
    header.appendChild(target);

    const meta = document.createElement('div');
    meta.className = 'workout-card__meta';
    meta.textContent = item.notes ? `Notas: ${item.notes}` : 'Sin notas.';

    const lastPerformance = document.createElement('div');
    lastPerformance.className = 'workout-card__meta';
    lastPerformance.textContent = 'Ultimo: ...';
    const last = await getLastPerformance(item.exerciseId, session.id);
    const pr = await getExercisePR(item.exerciseId, session.id);
    if (last) {
      const prText = pr ? ` · <strong>PR: ${pr.weight} kg (${formatDate(pr.date)})</strong>` : '';
      lastPerformance.innerHTML = `Ultimo: ${last.summary}${prText}`;
    } else {
      lastPerformance.textContent = 'Ultimo: sin registros';
    }

    const setList = document.createElement('div');
    setList.className = 'set-list';

    const renderSetRows = () => {
      setList.innerHTML = '';
      (log.sets || []).forEach((set, index) => {
        const row = document.createElement('div');
        row.className = 'set-row';

        const label = document.createElement('div');
        label.className = 'set-row__label';
        label.textContent = `#${index + 1}`;

        const weightInput = document.createElement('input');
        weightInput.className = 'set-input';
        weightInput.type = 'number';
        weightInput.placeholder = 'kg';
        weightInput.value = set.weight ?? '';
        weightInput.addEventListener('input', async (event) => {
          set.weight = parseNumber(event.target.value);
          await sessionLogRepository.saveLog(log);
        });

        const repsInput = document.createElement('input');
        repsInput.className = 'set-input';
        repsInput.type = 'number';
        repsInput.placeholder = 'reps';
        repsInput.value = set.reps ?? '';
        repsInput.addEventListener('input', async (event) => {
          set.reps = parseNumber(event.target.value);
          await sessionLogRepository.saveLog(log);
        });

        const rirInput = document.createElement('input');
        rirInput.className = 'set-input';
        rirInput.type = 'number';
        rirInput.placeholder = 'rir';
        rirInput.value = set.rir ?? '';
        rirInput.addEventListener('input', async (event) => {
          set.rir = parseNumber(event.target.value);
          await sessionLogRepository.saveLog(log);
        });

        row.appendChild(label);
        row.appendChild(weightInput);
        row.appendChild(repsInput);
        row.appendChild(rirInput);
        setList.appendChild(row);
      });
    };

    renderSetRows();

    const addSetButton = document.createElement('button');
    addSetButton.className = 'button button--primary';
    addSetButton.textContent = '+ Anadir set';
    addSetButton.addEventListener('click', async () => {
      const nextNumber = (log.sets || []).length + 1;
      log.sets.push({
        setNumber: nextNumber,
        weight: null,
        reps: null,
        rir: null,
        createdAt: new Date().toISOString(),
      });
      await sessionLogRepository.saveLog(log);
      renderSetRows();
    });

    card.appendChild(header);
    card.appendChild(meta);
    card.appendChild(lastPerformance);
    card.appendChild(setList);
    card.appendChild(addSetButton);
    workoutExerciseList.appendChild(card);
  }
};

const refreshTrainingHome = async () => {
  await renderRoutineDaySelect();
  await renderRoutineDayPreview();
  await updateTrainingActions();
};

const updateRoutineSelection = async () => {
  state.currentRoutineDayId = routineDaySelect.value || null;
  if (state.currentRoutineDayId) {
    localStorage.setItem(LAST_ROUTINE_DAY_KEY, state.currentRoutineDayId);
  }
  await renderRoutineDayPreview();
  await updateTrainingActions();
};

const isExerciseUsed = async (exerciseId) => {
  const [items, logs] = await Promise.all([
    getAllFromStore('routineItems'),
    sessionLogRepository.listLogsByExercise(exerciseId),
  ]);
  return items.some((item) => item.exerciseId === exerciseId) || logs.length > 0;
};

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
  const ok = await confirmDialog('¿Eliminar la categoría y todos sus ejercicios?', {
    title: 'Eliminar categoria',
    confirmText: 'Eliminar',
    danger: true,
  });
  if (!ok) return;
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

newRoutineDayButton.addEventListener('click', () => {
  showRoutineDayForm();
});

cancelRoutineDay.addEventListener('click', hideRoutineDayForm);

routineDayForm.addEventListener('submit', async (event) => {
  event.preventDefault();
  routineDayError.textContent = '';
  try {
    const day = await routineRepository.createRoutineDay({
      name: routineDayNameInput.value,
      notes: routineDayNotesInput.value.trim(),
    });
    hideRoutineDayForm();
    await renderRoutineDayList();
    await openRoutineDayEditor(day.id);
    await refreshTrainingHome();
  } catch (error) {
    routineDayError.textContent = error.message;
  }
});

saveRoutineDayEdits.addEventListener('click', async (event) => {
  event.preventDefault();
  if (!state.currentRoutineDayId) return;
  setRoutineEditorError('');
  try {
    const updated = await routineRepository.updateRoutineDay(state.currentRoutineDayId, {
      name: routineDayEditName.value,
      notes: routineDayEditNotes.value.trim(),
    });
    routineEditorTitle.textContent = updated.name;
    routineEditorMeta.textContent = updated.notes || 'Sin notas.';
    await renderRoutineDayList();
    await refreshTrainingHome();
  } catch (error) {
    setRoutineEditorError(error.message);
  }
});

duplicateRoutineDay.addEventListener('click', async (event) => {
  event.preventDefault();
  if (!state.currentRoutineDayId) return;
  try {
    const copy = await routineRepository.duplicateRoutineDay(state.currentRoutineDayId);
    await renderRoutineDayList();
    await openRoutineDayEditor(copy.id);
    await refreshTrainingHome();
  } catch (error) {
    setRoutineEditorError(error.message);
  }
});

deleteRoutineDay.addEventListener('click', async (event) => {
  event.preventDefault();
  if (!state.currentRoutineDayId) return;
  const ok = await confirmDialog('Eliminar este dia y sus ejercicios?', {
    title: 'Eliminar dia',
    confirmText: 'Eliminar',
    danger: true,
  });
  if (!ok) return;
  await routineRepository.deleteRoutineDay(state.currentRoutineDayId);
  state.currentRoutineDayId = null;
  routineEditor.hidden = true;
  await renderRoutineDayList();
  await refreshTrainingHome();
});

routineExerciseSearch.addEventListener('input', async (event) => {
  state.routineExerciseSearch = event.target.value.trim().toLowerCase();
  await updateRoutineExerciseOptions();
});

routineCategoryFilter.addEventListener('change', async (event) => {
  state.routineCategoryFilter = event.target.value;
  await updateRoutineExerciseOptions();
});

addRoutineItem.addEventListener('click', async (event) => {
  event.preventDefault();
  if (!state.currentRoutineDayId) return;
  if (!routineExerciseSelect.value) return;
  await routineItemRepository.createRoutineItem({
    routineDayId: state.currentRoutineDayId,
    exerciseId: routineExerciseSelect.value,
  });
  state.expandedRoutineItemId = null;
  await renderRoutineItems();
  await renderRoutineDayPreview();
});

if (toggleRoutineEditFields && routineEditFields) {
  toggleRoutineEditFields.addEventListener('click', (event) => {
    event.preventDefault();
    const shouldShow = routineEditFields.hidden;
    routineEditFields.hidden = !shouldShow;
    toggleRoutineEditFields.classList.toggle('is-open', shouldShow);
    toggleRoutineEditFields.setAttribute('aria-label', shouldShow ? 'Ocultar edicion' : 'Mostrar edicion');
    toggleRoutineEditFields.title = shouldShow ? 'Ocultar edicion' : 'Mostrar edicion';
    if (shouldShow) {
      routineDayEditName.focus();
    }
  });
}

routineDaySelect.addEventListener('change', updateRoutineSelection);

startSessionButton.addEventListener('click', async () => {
  routineDaySelectError.textContent = '';
  if (!state.currentRoutineDayId) {
    routineDaySelectError.textContent = 'Selecciona un dia.';
    return;
  }
  if (state.activeSessionId) {
    await renderWorkoutView(state.activeSessionId);
    setView('workout');
    return;
  }
  const items = await routineItemRepository.listItemsByRoutineDay(state.currentRoutineDayId);
  if (items.length === 0) {
    routineDaySelectError.textContent = 'Este dia no tiene ejercicios.';
    return;
  }
  const session = await trainingRepository.createSession(state.currentRoutineDayId);
  state.activeSessionId = session.id;
  await updateTrainingActions();
  await renderWorkoutView(session.id);
  setView('workout');
});

resumeSessionButton.addEventListener('click', async () => {
  if (!state.activeSessionId) return;
  await renderWorkoutView(state.activeSessionId);
  setView('workout');
});

finishSessionFromHome.addEventListener('click', async () => {
  if (!state.activeSessionId) return;
  const ok = await confirmDialog('Finalizar la sesion activa?', {
    title: 'Finalizar sesion',
    confirmText: 'Finalizar',
  });
  if (!ok) return;
  await trainingRepository.updateSession(state.activeSessionId, {
    finishedAt: new Date().toISOString(),
  });
  state.activeSessionId = null;
  await updateTrainingActions();
  await renderHomeDashboard();
  if (historyList) {
    await renderHistoryList();
  }
});

backToTrain.addEventListener('click', async () => {
  setView('train');
  await refreshTrainingHome();
});

finishSessionButton.addEventListener('click', async () => {
  if (!state.activeSessionId) return;
  const ok = await confirmDialog('Finalizar la sesion?', {
    title: 'Finalizar sesion',
    confirmText: 'Finalizar',
  });
  if (!ok) return;
  await trainingRepository.updateSession(state.activeSessionId, {
    finishedAt: new Date().toISOString(),
  });
  state.activeSessionId = null;
  setView('train');
  await refreshTrainingHome();
  await renderHomeDashboard();
  if (historyList) {
    await renderHistoryList();
  }
});

cancelSessionButton.addEventListener('click', async () => {
  if (!state.activeSessionId) return;
  const ok = await confirmDialog('Cancelar esta sesion y borrar sus registros?', {
    title: 'Cancelar sesion',
    confirmText: 'Cancelar sesion',
    danger: true,
  });
  if (!ok) return;
  await trainingRepository.deleteSession(state.activeSessionId);
  await sessionLogRepository.deleteLogsBySession(state.activeSessionId);
  state.activeSessionId = null;
  setView('train');
  await refreshTrainingHome();
});

const getExportPayload = async () => {
  const stores = [
    'categories',
    'exercises',
    'routineDays',
    'routineItems',
    'trainingSessions',
    'sessionExerciseLogs',
  ];
  const payload = { exportedAt: new Date().toISOString(), version: 2, data: {} };
  for (const store of stores) {
    payload.data[store] = await getAllFromStore(store);
  }
  return payload;
};

const importPayload = async (parsed) => {
  if (!parsed || !parsed.data) {
    throw new Error('Formato incorrecto.');
  }
  const stores = [
    'categories',
    'exercises',
    'routineDays',
    'routineItems',
    'trainingSessions',
    'sessionExerciseLogs',
  ];
  for (const store of stores) {
    await clearStore(store);
    const items = parsed.data[store] || [];
    for (const item of items) {
      await putInStore(store, item);
    }
  }
  await refreshTrainingHome();
  await renderCategories();
  await renderRoutineDayList();
};

const setCloudError = (message) => {
  if (cloudError) {
    cloudError.textContent = message || '';
  }
};

const setSignupError = (message) => {
  if (cloudSignupError) {
    cloudSignupError.textContent = message || '';
  }
};

const setAuthTab = (tab) => {
  if (!authLoginPanel || !authSignupPanel || !authTabs.length) return;
  const isLogin = tab === 'login';
  authLoginPanel.hidden = !isLogin;
  authSignupPanel.hidden = isLogin;
  authTabs.forEach((button) => {
    const isActive = button.dataset.authTab === tab;
    button.classList.toggle('is-active', isActive);
    button.setAttribute('aria-selected', isActive ? 'true' : 'false');
  });
};

const setCloudStatus = (message, tone = 'idle') => {
  const targets = [
    { text: cloudStatus, dot: cloudStatusDot },
    { text: cloudStatusUnauthed, dot: cloudStatusDotUnauthed },
  ];
  targets.forEach(({ text, dot }) => {
    if (text) {
      text.textContent = message || '';
    }
    if (dot) {
      dot.classList.remove('is-ok', 'is-warn', 'is-error');
      if (tone === 'ok') dot.classList.add('is-ok');
      if (tone === 'warn') dot.classList.add('is-warn');
      if (tone === 'error') dot.classList.add('is-error');
    }
  });
};

const setCloudLastSync = (label) => {
  if (cloudLastSync) {
    cloudLastSync.textContent = label || '';
  }
};

const cleanupEmptySessions = async () => {
  const sessions = await trainingRepository.listAllSessions();
  const active = sessions.filter((session) => !session.finishedAt);
  if (active.length === 0) return;
  for (const session of active) {
    const logs = await sessionLogRepository.listLogsBySession(session.id);
    const hasData = logs.some((log) =>
      (log.sets || []).some(
        (set) => set.weight !== null || set.reps !== null || set.rir !== null
      )
    );
    if (!hasData) {
      await trainingRepository.deleteSession(session.id);
      await sessionLogRepository.deleteLogsBySession(session.id);
    }
  }
};

const setCloudControls = (isAuthed) => {
  if (!cloudLogin || !cloudSignup || !cloudLogout || !cloudUpload || !cloudDownload) return;
  cloudLogin.hidden = isAuthed;
  cloudSignup.hidden = isAuthed;
  cloudLogout.hidden = !isAuthed;
  cloudUpload.hidden = !isAuthed;
  cloudDownload.hidden = !isAuthed;
};

const updateCloudUI = (user) => {
  cloudUser = user || null;
  isAuthenticated = Boolean(user);
  if (appContainer) {
    appContainer.classList.toggle('app--auth', !isAuthenticated);
  }
  if (user) {
    setCloudStatus(`Conectado: ${user.email || 'usuario'}`, 'ok');
    setCloudControls(true);
    if (cloudSessionEmail) {
      cloudSessionEmail.textContent = user.email || 'usuario';
    }
    if (cloudSessionPanel) cloudSessionPanel.hidden = false;
    if (cloudAuthForm) cloudAuthForm.hidden = true;
    const route = location.hash.replace('#', '') || 'home';
    setView(route === 'auth' ? 'home' : route);
  } else {
    setCloudStatus('No autenticado.', 'warn');
    setCloudControls(false);
    if (cloudSessionPanel) cloudSessionPanel.hidden = true;
    if (cloudAuthForm) cloudAuthForm.hidden = false;
    setCloudLastSync('');
    setAuthTab('login');
    setView('auth');
  }
};

const getLocalUpdatedAt = () => {
  const value = localStorage.getItem(CLOUD_LOCAL_UPDATED_KEY);
  return value ? Date.parse(value) : null;
};

const setLocalUpdatedAt = (value) => {
  const iso = value instanceof Date ? value.toISOString() : value;
  if (iso) {
    localStorage.setItem(CLOUD_LOCAL_UPDATED_KEY, iso);
  }
};

const maybeAutoDownload = async (user) => {
  if (!supabaseClient || !user) return;
  const { data, error } = await supabaseClient
    .from('user_data')
    .select('data, updated_at')
    .eq('user_id', user.id)
    .maybeSingle();
  if (error) {
    setCloudError(error.message);
    return;
  }
  if (!data || !data.data) {
    setCloudStatus('No hay datos en la nube.', 'warn');
    return;
  }

  try {
    isCloudImporting = true;
    await importPayload(data.data);
    setCloudStatus('Datos descargados.', 'ok');
    setLocalUpdatedAt(data.updated_at);
    setCloudLastSync(`Ultima sincronizacion: ${formatDateTime(data.updated_at)}`);
  } catch (err) {
    setCloudError(err.message);
    setCloudStatus('Error al descargar.', 'error');
  } finally {
    isCloudImporting = false;
  }
};

const initCloudAuth = async () => {
  if (!supabaseClient) {
    setCloudStatus('Supabase no disponible.', 'error');
    setCloudControls(false);
    cloudReady = true;
    return;
  }
  const session = await supabaseClient.auth.getSession();
  const sessionUser = session.data.session ? session.data.session.user : null;
  updateCloudUI(sessionUser);
  if (sessionUser) {
    await maybeAutoDownload(sessionUser);
  }
  cloudReady = true;
  supabaseClient.auth.onAuthStateChange(async (_event, newSession) => {
    const user = newSession ? newSession.user : null;
    updateCloudUI(user);
    if (user) {
      await maybeAutoDownload(user);
    }
  });
};

exportData.addEventListener('click', async () => {
  const payload = await getExportPayload();
  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `gym-backup-${Date.now()}.json`;
  link.click();
  URL.revokeObjectURL(url);
});

importData.addEventListener('click', () => {
  importFile.click();
});

importFile.addEventListener('change', async (event) => {
  const file = event.target.files[0];
  if (!file) return;
  const text = await file.text();
  let parsed;
  try {
    parsed = JSON.parse(text);
  } catch (error) {
    alert('Archivo invalido.');
    return;
  }
  try {
    await importPayload(parsed);
  } catch (error) {
    alert(error.message);
    return;
  }
  importFile.value = '';
  alert('Datos importados.');
});

if (authTabs.length) {
  authTabs.forEach((button) => {
    button.addEventListener('click', () => {
      const tab = button.dataset.authTab;
      setAuthTab(tab);
      setCloudError('');
      setSignupError('');
    });
  });
}

if (cloudLogin) {
  cloudLogin.addEventListener('click', async (event) => {
    event.preventDefault();
    setCloudError('');
    setSignupError('');
    if (!supabaseClient) {
      setCloudError('Supabase no disponible.');
      return;
    }
    const email = cloudEmail.value.trim();
    const password = cloudPassword.value;
    if (!email || !password) {
      setCloudError('Completa email y contrasena.');
      return;
    }
    const { error } = await supabaseClient.auth.signInWithPassword({ email, password });
    if (error) {
      setCloudError(error.message);
    }
  });
}

if (cloudSignup) {
  cloudSignup.addEventListener('click', async (event) => {
    event.preventDefault();
    setCloudError('');
    setSignupError('');
    if (!supabaseClient) {
      setSignupError('Supabase no disponible.');
      return;
    }
    const email = signupEmail ? signupEmail.value.trim() : '';
    const password = signupPassword ? signupPassword.value : '';
    const confirm = signupPasswordConfirm ? signupPasswordConfirm.value : '';
    const fullName = signupName ? signupName.value.trim() : '';
    if (!email || !password) {
      setSignupError('Completa email y contrasena.');
      return;
    }
    if (password.length < 6) {
      setSignupError('La contrasena debe tener al menos 6 caracteres.');
      return;
    }
    if (password !== confirm) {
      setSignupError('Las contrasenas no coinciden.');
      return;
    }
    const { error } = await supabaseClient.auth.signUp({
      email,
      password,
      options: fullName ? { data: { full_name: fullName } } : undefined,
    });
    if (error) {
      setSignupError(error.message);
      return;
    }
    setCloudStatus('Cuenta creada. Revisa tu correo si pide confirmacion.', 'ok');
    setAuthTab('login');
    if (cloudEmail) {
      cloudEmail.value = email;
    }
  });
}

if (cloudLogout) {
  cloudLogout.addEventListener('click', async (event) => {
    event.preventDefault();
    setCloudError('');
    if (!supabaseClient) {
      setCloudError('Supabase no disponible.');
      return;
    }
    const { error } = await supabaseClient.auth.signOut();
    if (error) {
      setCloudError(error.message);
    }
  });
}

if (cloudUpload) {
  cloudUpload.addEventListener('click', async (event) => {
    event.preventDefault();
    setCloudError('');
    if (!supabaseClient) {
      setCloudError('Supabase no disponible.');
      return;
    }
    const { data: userData, error: userError } = await supabaseClient.auth.getUser();
    if (userError || !userData.user) {
      setCloudError('Debes iniciar sesion.');
      return;
    }
    const payload = await getExportPayload();
    const { error } = await supabaseClient.from('user_data').upsert(
      {
        user_id: userData.user.id,
        data: payload,
        updated_at: new Date().toISOString(),
      },
      { onConflict: 'user_id' }
    );
    if (error) {
      setCloudError(error.message);
      return;
    }
    setCloudStatus('Datos subidos.', 'ok');
    setCloudLastSync(`Ultima sincronizacion: ${formatDateTime(new Date().toISOString())}`);
  });
}

if (cloudDownload) {
  cloudDownload.addEventListener('click', async (event) => {
    event.preventDefault();
    setCloudError('');
    if (!supabaseClient) {
      setCloudError('Supabase no disponible.');
      return;
    }
    const { data: userData, error: userError } = await supabaseClient.auth.getUser();
    if (userError || !userData.user) {
      setCloudError('Debes iniciar sesion.');
      return;
    }
    const { data, error } = await supabaseClient
      .from('user_data')
      .select('data')
      .eq('user_id', userData.user.id)
      .maybeSingle();
    if (error) {
      setCloudError(error.message);
      return;
    }
    if (!data || !data.data) {
      setCloudStatus('No hay datos en la nube.', 'warn');
      return;
    }
    const ok = await confirmDialog('Esto reemplazara tus datos locales. Continuar?', {
      title: 'Reemplazar datos',
      confirmText: 'Reemplazar',
      danger: true,
    });
    if (!ok) {
      return;
    }
    try {
      isCloudImporting = true;
      await importPayload(data.data);
      setCloudStatus('Datos descargados.', 'ok');
      setLocalUpdatedAt(data.updated_at);
      setCloudLastSync(`Ultima sincronizacion: ${formatDateTime(data.updated_at)}`);
    } catch (err) {
      setCloudError(err.message);
      setCloudStatus('Error al descargar.', 'error');
    } finally {
      isCloudImporting = false;
    }
  });
}

if (homeGoTrain) {
  homeGoTrain.addEventListener('click', async () => {
    setView('train');
    await refreshTrainingHome();
  });
}

if (historyBack) {
  historyBack.addEventListener('click', () => {
    if (historyDetail) historyDetail.hidden = true;
    state.currentHistorySessionId = null;
  });
}

if (historyDelete) {
  historyDelete.addEventListener('click', async () => {
    if (!state.currentHistorySessionId) return;
    const sessionTitle = historyDetailTitle ? historyDetailTitle.textContent : 'sesion';
    const ok = await confirmDialog(`Eliminar ${sessionTitle} y sus registros?`, {
      title: 'Eliminar sesion',
      confirmText: 'Eliminar',
      danger: true,
    });
    if (!ok) return;
    await trainingRepository.deleteSession(state.currentHistorySessionId);
    await sessionLogRepository.deleteLogsBySession(state.currentHistorySessionId);
    state.currentHistorySessionId = null;
    await renderHistoryList();
    await refreshTrainingHome();
  });
}

navButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const route = button.dataset.route;
    setView(route);
    if (route === 'train') {
      refreshTrainingHome();
    }
    if (route === 'routines') {
      renderRoutineDayList();
    }
  });
});

themeToggle.addEventListener('click', toggleTheme);

resetLibrary.addEventListener('click', async () => {
  const ok = await confirmDialog('¿Eliminar toda la biblioteca local?', {
    title: 'Eliminar biblioteca',
    confirmText: 'Eliminar',
    danger: true,
  });
  if (!ok) return;
  await exerciseRepository.resetAll();
  await seedData();
  await renderCategories();
  state.currentCategoryId = null;
  setView('exercises');
});

if (forceRefresh) {
  forceRefresh.addEventListener('click', async () => {
    const ok = await confirmDialog(
      'Esto limpiara la cache de la app y recargara la pagina con la ultima version.',
      { title: 'Forzar actualizacion', confirmText: 'Actualizar' }
    );
    if (!ok) return;
    try {
      if ('serviceWorker' in navigator) {
        const registrations = await navigator.serviceWorker.getRegistrations();
        await Promise.all(registrations.map((registration) => registration.unregister()));
      }
      if (window.caches) {
        const cacheNames = await caches.keys();
        await Promise.all(cacheNames.map((name) => caches.delete(name)));
      }
    } catch (error) {
      console.error('No se pudo limpiar la cache.', error);
    } finally {
      window.location.reload();
    }
  });
}

window.addEventListener('online', updateStatus);
window.addEventListener('offline', updateStatus);
window.addEventListener('online', () => {
  if (cloudSyncPending) {
    scheduleCloudSync();
  }
});

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./service-worker.js').then((registration) => {
      const applyUpdate = () => {
        if (!registration.waiting) return;
        if (sessionStorage.getItem('sw-updating')) return;
        sessionStorage.setItem('sw-updating', '1');
        registration.waiting.postMessage({ type: 'SKIP_WAITING' });
      };

      registration.update();
      setInterval(() => registration.update(), 30 * 60 * 1000);

      if (registration.waiting) {
        if (AUTO_SW_UPDATE) {
          applyUpdate();
        } else if (updateToast) {
          updateToast.hidden = false;
        }
      }

      registration.addEventListener('updatefound', () => {
        const newWorker = registration.installing;
        if (!newWorker) return;
        newWorker.addEventListener('statechange', () => {
          if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
            if (AUTO_SW_UPDATE) {
              applyUpdate();
            } else if (updateToast) {
              updateToast.hidden = false;
            }
          }
        });
      });
    });
  });
}

if (updateNow) {
  updateNow.addEventListener('click', () => {
    if (!navigator.serviceWorker) {
      window.location.reload();
      return;
    }
    navigator.serviceWorker.getRegistration().then((registration) => {
      if (!registration || !registration.waiting) {
        window.location.reload();
        return;
      }
      sessionStorage.setItem('sw-updating', '1');
      registration.waiting.postMessage({ type: 'SKIP_WAITING' });
    });
  });
}

navigator.serviceWorker?.addEventListener('controllerchange', () => {
  if (sessionStorage.getItem('sw-updating')) {
    sessionStorage.removeItem('sw-updating');
  }
  window.location.reload();
});

const startApp = async () => {
  loadTheme();
  if (appVersion) {
    appVersion.textContent = APP_VERSION;
  }
  await initCloudAuth();
  const hashRoute = location.hash.replace('#', '');
  const initialRoute = isAuthenticated ? (hashRoute || 'home') : 'auth';
  setView(initialRoute === 'category' ? 'exercises' : initialRoute);
  updateStatus();
  try {
    isSeeding = true;
    await seedData();
    await seedRoutineData();
    await seedTrainingData();
    isSeeding = false;
    await cleanupEmptySessions();
    await renderCategories();
    await renderRoutineDayList();
    await refreshTrainingHome();
  } catch (error) {
    console.error('No se pudo inicializar la base local.', error);
    statusBadge.textContent = 'Error de datos';
    statusBadge.style.borderColor = 'var(--danger)';
    isSeeding = false;
  }
};

startApp();
