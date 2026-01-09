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
const trainModeGym = document.getElementById('trainModeGym');
const trainModeRun = document.getElementById('trainModeRun');
const trainGymPanel = document.getElementById('trainGymPanel');
const trainRunPanel = document.getElementById('trainRunPanel');
const runningDate = document.getElementById('runningDate');
const runningDurationHours = document.getElementById('runningDurationHours');
const runningDurationMinutes = document.getElementById('runningDurationMinutes');
const runningDurationSeconds = document.getElementById('runningDurationSeconds');
const runningDistance = document.getElementById('runningDistance');
const runningPace = document.getElementById('runningPace');
const runningNotes = document.getElementById('runningNotes');
const runningSave = document.getElementById('runningSave');
const runningError = document.getElementById('runningError');
const runningList = document.getElementById('runningList');
const runningTotalValue = document.getElementById('runningTotalValue');
const runningTotalMeta = document.getElementById('runningTotalMeta');
const runningAvgPaceValue = document.getElementById('runningAvgPaceValue');
const runningAvgPaceMeta = document.getElementById('runningAvgPaceMeta');
const runningLastValue = document.getElementById('runningLastValue');
const runningLastMeta = document.getElementById('runningLastMeta');

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
const weeklyPlanGrid = document.getElementById('weeklyPlanGrid');

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
const historyModeGym = document.getElementById('historyModeGym');
const historyModeRun = document.getElementById('historyModeRun');
const historyGymPanel = document.getElementById('historyGymPanel');
const historyRunPanel = document.getElementById('historyRunPanel');
const historyRunningList = document.getElementById('historyRunningList');
const recordsSearch = document.getElementById('recordsSearch');
const recordsCategoryFilter = document.getElementById('recordsCategoryFilter');
const recordsList = document.getElementById('recordsList');
const recordsTotalValue = document.getElementById('recordsTotalValue');
const recordsTotalMeta = document.getElementById('recordsTotalMeta');
const recordsBestValue = document.getElementById('recordsBestValue');
const recordsBestMeta = document.getElementById('recordsBestMeta');
const recordsLastValue = document.getElementById('recordsLastValue');
const recordsLastMeta = document.getElementById('recordsLastMeta');
const recordsModeGym = document.getElementById('recordsModeGym');
const recordsModeRun = document.getElementById('recordsModeRun');
const recordsGymPanel = document.getElementById('recordsGymPanel');
const recordsRunPanel = document.getElementById('recordsRunPanel');
const recordsRunningList = document.getElementById('recordsRunningList');
const recordsRunningTotalValue = document.getElementById('recordsRunningTotalValue');
const recordsRunningTotalMeta = document.getElementById('recordsRunningTotalMeta');
const recordsRunningPaceValue = document.getElementById('recordsRunningPaceValue');
const recordsRunningPaceMeta = document.getElementById('recordsRunningPaceMeta');
const recordsRunningLongestValue = document.getElementById('recordsRunningLongestValue');
const recordsRunningLongestMeta = document.getElementById('recordsRunningLongestMeta');
const friendEmail = document.getElementById('friendEmail');
const friendAdd = document.getElementById('friendAdd');
const friendError = document.getElementById('friendError');
const friendRequestsList = document.getElementById('friendRequestsList');
const friendsList = document.getElementById('friendsList');
const friendsNotificationsList = document.getElementById('friendsNotificationsList');
const friendsProfile = document.getElementById('friendsProfile');
const friendsProfileAvatar = document.getElementById('friendsProfileAvatar');
const friendsProfileName = document.getElementById('friendsProfileName');
const friendsProfileBio = document.getElementById('friendsProfileBio');
const friendsProfileStats = document.getElementById('friendsProfileStats');
const friendsProfileRecent = document.getElementById('friendsProfileRecent');
const friendsRemove = document.getElementById('friendsRemove');
const friendsBlock = document.getElementById('friendsBlock');
const friendsWave = document.getElementById('friendsWave');
const galleryPhotoInput = document.getElementById('galleryPhotoInput');
const galleryNote = document.getElementById('galleryNote');
const galleryAdd = document.getElementById('galleryAdd');
const galleryError = document.getElementById('galleryError');
const galleryList = document.getElementById('galleryList');
const galleryModal = document.getElementById('galleryModal');
const galleryModalBackdrop = document.getElementById('galleryModalBackdrop');
const galleryModalImage = document.getElementById('galleryModalImage');
const galleryModalDate = document.getElementById('galleryModalDate');
const galleryModalNote = document.getElementById('galleryModalNote');
const galleryModalClose = document.getElementById('galleryModalClose');
const profileMenu = document.getElementById('profileMenu');
const profileButton = document.getElementById('profileButton');
const settingsButton = document.getElementById('settingsButton');
const profileMenuName = document.getElementById('profileMenuName');
const profileMenuEmail = document.getElementById('profileMenuEmail');
const profileMenuGoal = document.getElementById('profileMenuGoal');
const profileLogout = document.getElementById('profileLogout');

const exportData = document.getElementById('exportData');
const importData = document.getElementById('importData');
const importFile = document.getElementById('importFile');
const forceRefresh = document.getElementById('forceRefresh');
const profileEmail = document.getElementById('profileEmail');
const profileName = document.getElementById('profileName');
const profileGoal = document.getElementById('profileGoal');
const profileExperience = document.getElementById('profileExperience');
const profileAge = document.getElementById('profileAge');
const profileSex = document.getElementById('profileSex');
const profileFrequency = document.getElementById('profileFrequency');
const profileHeight = document.getElementById('profileHeight');
const profileWeight = document.getElementById('profileWeight');
const profileNotes = document.getElementById('profileNotes');
const profileError = document.getElementById('profileError');
const saveProfile = document.getElementById('saveProfile');
const profileAvatarInput = document.getElementById('profileAvatarInput');
const profileAvatarLarge = document.getElementById('profileAvatarLarge');
const profileAvatar = document.getElementById('profileAvatar');
const cloudEmail = document.getElementById('cloudEmail');
const cloudPassword = document.getElementById('cloudPassword');
const cloudError = document.getElementById('cloudError');
const cloudSignupError = document.getElementById('cloudSignupError');
const signupName = document.getElementById('signupName');
const signupEmail = document.getElementById('signupEmail');
const signupPassword = document.getElementById('signupPassword');
const signupPasswordConfirm = document.getElementById('signupPasswordConfirm');
const recoveryPassword = document.getElementById('recoveryPassword');
const recoveryPasswordConfirm = document.getElementById('recoveryPasswordConfirm');
const recoveryError = document.getElementById('recoveryError');
const recoverySubmit = document.getElementById('recoverySubmit');
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
const ENABLE_SERVICE_WORKER = false;
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
const homeProfileCard = document.getElementById('homeProfileCard');
const homeProfileSummary = document.getElementById('homeProfileSummary');
const authTabs = document.querySelectorAll('[data-auth-tab]');
const authLoginPanel = document.getElementById('authLoginPanel');
const authSignupPanel = document.getElementById('authSignupPanel');
const authRecoveryPanel = document.getElementById('authRecoveryPanel');
const authTabsContainer = document.getElementById('authTabs');
const forgotPassword = document.getElementById('forgotPassword');
const resetModal = document.getElementById('resetModal');
const resetOverlay = document.getElementById('resetOverlay');
const resetEmail = document.getElementById('resetEmail');
const resetError = document.getElementById('resetError');
const resetCancel = document.getElementById('resetCancel');
const resetSend = document.getElementById('resetSend');

const STORAGE_DB = 'exercise-library-db';
const THEME_KEY = 'personal-pwa-theme';
const LAST_ROUTINE_DAY_KEY = 'last-routine-day-id';
const ENABLE_SEED = true;
const CLOUD_LOCAL_UPDATED_KEY = 'cloud-local-updated-at';
const CLOUD_LAST_UPLOADED_KEY = 'cloud-last-uploaded-at';
const CLOUD_POLL_INTERVAL_MS = 2000;
const CLOUD_SYNC_DELAY_MS = 100;
const CLOUD_SYNC_TIMEOUT_MS = 12000;
const CLOUD_SYNC_RETRY_MS = 5000;
const SUPABASE_URL = 'https://dcdaddtmftmudzzjlgfz.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_o2m4nokLGDJu3Z2qIXQhog_Hq-M63B9';
const APP_VERSION = '0.13.2';
const AUTH_REDIRECT_URL = 'https://josemiguel-dg.github.io/App_XCode/';
const FRIEND_STATUS = {
  PENDING: 'pending',
  ACCEPTED: 'accepted',
  REJECTED: 'rejected',
  BLOCKED: 'blocked',
};
const WEEK_DAYS = [
  { key: 'mon', label: 'Lunes' },
  { key: 'tue', label: 'Martes' },
  { key: 'wed', label: 'Miercoles' },
  { key: 'thu', label: 'Jueves' },
  { key: 'fri', label: 'Viernes' },
  { key: 'sat', label: 'Sabado' },
  { key: 'sun', label: 'Domingo' },
];

const getTodayWeekKey = () => {
  const day = new Date().getDay();
  const map = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
  return map[day] || 'mon';
};

const getWeekdayLabel = (key) => WEEK_DAYS.find((day) => day.key === key)?.label || '';

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
  recordsSearch: '',
  recordsCategoryFilter: 'all',
  trainMode: 'gym',
  runningPaceManual: false,
  historyMode: 'gym',
  recordsMode: 'gym',
  currentFriendId: null,
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
let cloudSyncInFlight = false;
let cloudPollTimer = null;
let cloudRealtimeChannel = null;
let isCloudImporting = false;
let isSeeding = false;
let cloudReady = false;
let cloudSyncPending = false;
let isAuthenticated = false;
let confirmResolver = null;
let currentProfileAvatar = '';
let friendsCache = {
  friendships: [],
  profiles: new Map(),
  notifications: [],
};

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
    await performCloudUpload();
  }, CLOUD_SYNC_DELAY_MS);
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
    const request = indexedDB.open(STORAGE_DB, 6);
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
      if (!db.objectStoreNames.contains('weeklyPlan')) {
        const weeklyStore = db.createObjectStore('weeklyPlan', { keyPath: 'id' });
        weeklyStore.createIndex('dayKey', 'dayKey', { unique: false });
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
      if (!db.objectStoreNames.contains('runningSessions')) {
        const runningStore = db.createObjectStore('runningSessions', { keyPath: 'id' });
        runningStore.createIndex('finishedAt', 'finishedAt', { unique: false });
        runningStore.createIndex('date', 'date', { unique: false });
      }
      if (!db.objectStoreNames.contains('progressPhotos')) {
        const photoStore = db.createObjectStore('progressPhotos', { keyPath: 'id' });
        photoStore.createIndex('createdAt', 'createdAt', { unique: false });
      }
      if (!db.objectStoreNames.contains('profile')) {
        db.createObjectStore('profile', { keyPath: 'id' });
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
        scheduleCloudSync();
      }
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
        scheduleCloudSync();
      }
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
        scheduleCloudSync();
      }
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
    await new Promise((resolve, reject) => {
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
    await weeklyPlanRepository.removeByRoutineDayId(id);
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

const weeklyPlanRepository = {
  async listAll() {
    return getAllFromStore('weeklyPlan');
  },
  async addItem(dayKey, routineDayId) {
    const item = {
      id: createId(),
      dayKey,
      routineDayId,
      createdAt: new Date().toISOString(),
    };
    await putInStore('weeklyPlan', item);
    return item;
  },
  async removeItem(id) {
    await deleteFromStore('weeklyPlan', id);
  },
  async removeByRoutineDayId(routineDayId) {
    const items = await this.listAll();
    const matches = items.filter((item) => item.routineDayId === routineDayId);
    await Promise.all(matches.map((item) => deleteFromStore('weeklyPlan', item.id)));
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

const runningRepository = {
  async createSession(data) {
    const session = {
      id: createId(),
      date: data.date,
      finishedAt: data.finishedAt,
      durationSeconds: data.durationSeconds,
      distanceKm: data.distanceKm,
      paceSeconds: data.paceSeconds,
      notes: data.notes || '',
      createdAt: new Date().toISOString(),
    };
    await putInStore('runningSessions', session);
    return session;
  },
  async listAllSessions() {
    return getAllFromStore('runningSessions');
  },
  async deleteSession(id) {
    await deleteFromStore('runningSessions', id);
  },
};

const galleryRepository = {
  async createPhoto(data) {
    const photo = {
      id: createId(),
      imageData: data.imageData,
      note: data.note || '',
      createdAt: new Date().toISOString(),
    };
    await putInStore('progressPhotos', photo);
    return photo;
  },
  async listPhotos() {
    return getAllFromStore('progressPhotos');
  },
  async deletePhoto(id) {
    await deleteFromStore('progressPhotos', id);
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

const seedRoutineData = async () => {};

const seedTrainingData = async () => {};

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
    setHistoryMode(state.historyMode || 'gym');
  }
  if (route === 'train') {
    setTrainMode(state.trainMode || 'gym');
  }
  if (route === 'records') {
    setRecordsMode(state.recordsMode || 'gym');
  }
  if (route === 'friends') {
    renderFriendsView();
  }
  if (route === 'gallery') {
    renderGallery();
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

const formatDuration = (seconds) => {
  if (seconds == null || Number.isNaN(seconds)) return '-';
  const hrs = Math.floor(seconds / 3600);
  const mins = Math.floor((seconds % 3600) / 60);
  const secs = Math.floor(seconds % 60);
  const parts = [hrs, mins, secs].map((value) => String(value).padStart(2, '0'));
  return hrs > 0 ? parts.join(':') : parts.slice(1).join(':');
};

const formatPace = (secondsPerKm) => {
  if (secondsPerKm == null || Number.isNaN(secondsPerKm)) return '-';
  const mins = Math.floor(secondsPerKm / 60);
  const secs = Math.round(secondsPerKm % 60);
  return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}/km`;
};

const formatPaceInput = (secondsPerKm) => {
  if (secondsPerKm == null || Number.isNaN(secondsPerKm)) return '';
  const mins = Math.floor(secondsPerKm / 60);
  const secs = Math.round(secondsPerKm % 60);
  return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
};

const buildRunningChip = (text, tone) => {
  const span = document.createElement('span');
  span.className = `running-chip running-chip--${tone}`;
  span.textContent = text;
  return span;
};

const buildRunningRow = (session, { withDelete, onDelete } = {}) => {
  const row = document.createElement('div');
  row.className = withDelete ? 'running-row running-row--action' : 'running-row';

  const grid = document.createElement('div');
  grid.className = withDelete ? 'running-grid running-grid--action' : 'running-grid';

  const dateText = session.finishedAt ? formatDate(session.finishedAt) : '-';
  const distanceText = `${formatNumber(session.distanceKm, 2)} km`;
  const durationText = formatDuration(session.durationSeconds);
  const paceText = formatPace(session.paceSeconds);

  const dateCell = document.createElement('div');
  dateCell.appendChild(buildRunningChip(dateText, 'date'));
  const distanceCell = document.createElement('div');
  distanceCell.appendChild(buildRunningChip(distanceText, 'distance'));
  const durationCell = document.createElement('div');
  durationCell.appendChild(buildRunningChip(durationText, 'time'));
  const paceCell = document.createElement('div');
  paceCell.appendChild(buildRunningChip(paceText, 'pace'));

  const notesCell = document.createElement('div');
  notesCell.className = 'running-note running-note--inline';
  notesCell.textContent = session.notes || '';

  grid.appendChild(dateCell);
  grid.appendChild(distanceCell);
  grid.appendChild(durationCell);
  grid.appendChild(paceCell);
  if (notesCell.textContent) {
    grid.appendChild(notesCell);
  }
  row.appendChild(grid);

  if (withDelete) {
    const action = document.createElement('button');
    action.className = 'running-action-button';
    action.type = 'button';
    action.textContent = 'X';
    action.setAttribute('aria-label', 'Eliminar sesion');
    action.addEventListener('click', () => onDelete?.(session));
    row.appendChild(action);
  }

  return row;
};

const getFriendshipFriendId = (row) =>
  row.requester_id === cloudUser?.id ? row.addressee_id : row.requester_id;

const fetchProfilesByIds = async (userIds) => {
  if (!supabaseClient || !cloudUser || userIds.length === 0) return [];
  const { data, error } = await supabaseClient
    .from('profiles')
    .select('user_id, email, display_name, bio, avatar_url')
    .in('user_id', userIds);
  if (error) {
    setCloudError(error.message);
    return [];
  }
  return data || [];
};

const fetchProfileByEmail = async (email) => {
  if (!supabaseClient) return null;
  const { data, error } = await supabaseClient.rpc('find_profile_by_email', {
    email_input: email,
  });
  if (error) {
    setCloudError(error.message);
    return null;
  }
  if (Array.isArray(data)) {
    return data[0] || null;
  }
  return data || null;
};

const fetchFriendUserData = async (userId) => {
  if (!supabaseClient) return null;
  const { data, error } = await supabaseClient
    .from('user_data')
    .select('data, updated_at')
    .eq('user_id', userId)
    .maybeSingle();
  if (error) {
    setCloudError(error.message);
    return null;
  }
  return data?.data || null;
};

const hydrateProfileFromCloudIfMissing = async () => {
  if (!supabaseClient || !cloudUser) return;
  const localProfile = await profileRepository.getProfile();
  if (localProfile) return;
  const payload = await fetchFriendUserData(cloudUser.id);
  const profileItems = payload?.data?.profile;
  if (!Array.isArray(profileItems) || profileItems.length === 0) return;
  const profile = profileItems.find((item) => item.id === 'profile') || profileItems[0];
  if (!profile) return;
  await putInStore('profile', profile);
  await renderProfile();
};

const buildFriendStats = (payload) => {
  const sessions = payload?.data?.trainingSessions || [];
  const running = payload?.data?.runningSessions || [];
  const finishedGym = sessions
    .filter((session) => session.finishedAt)
    .sort((a, b) => new Date(b.finishedAt) - new Date(a.finishedAt));
  const gymCount = finishedGym.length;
  const runningCount = running.length;
  const runningDistance = running.reduce((acc, session) => acc + (session.distanceKm || 0), 0);
  return [
    { label: 'Sesiones gym', value: gymCount ? `${gymCount}` : '0' },
    { label: 'Carreras', value: runningCount ? `${runningCount}` : '0' },
    { label: 'Km running', value: runningDistance ? `${formatNumber(runningDistance, 1)} km` : '0 km' },
    {
      label: 'Ultima sesion',
      value: finishedGym[0]?.finishedAt ? formatDate(finishedGym[0].finishedAt) : '-',
    },
  ];
};

const buildFriendRecent = (payload) => {
  const sessions = payload?.data?.trainingSessions || [];
  const running = payload?.data?.runningSessions || [];
  const routineDays = payload?.data?.routineDays || [];
  const routineMap = new Map(routineDays.map((day) => [day.id, day.name]));
  const gym = sessions
    .filter((session) => session.finishedAt)
    .map((session) => ({
      type: 'gym',
      date: session.finishedAt,
      session,
      routineName: routineMap.get(session.routineDayId) || 'Sesion gym',
    }));
  const runs = running.map((session) => ({ type: 'run', date: session.finishedAt, session }));
  return [...gym, ...runs]
    .filter((entry) => entry.date)
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 5);
};

const renderFriendProfile = async (friendId) => {
  if (!friendsProfile) return;
  const profile = friendsCache.profiles.get(friendId);
  if (!profile) {
    friendsProfile.hidden = true;
    return;
  }
  state.currentFriendId = friendId;
  friendsProfile.hidden = false;
  if (friendsProfileName) friendsProfileName.textContent = profile.display_name || 'Sin nombre';
  if (friendsProfileBio) friendsProfileBio.textContent = profile.bio || 'Sin bio.';
  if (friendsProfileAvatar) {
    friendsProfileAvatar.style.backgroundImage = profile.avatar_url
      ? `url('${profile.avatar_url}')`
      : '';
  }
  if (friendsProfileStats) {
    friendsProfileStats.innerHTML = '';
  }
  if (friendsProfileRecent) {
    friendsProfileRecent.innerHTML = '';
  }
  const payload = await fetchFriendUserData(friendId);
  if (friendsProfileStats) {
    const stats = buildFriendStats(payload);
    stats.forEach((stat) => {
      const card = document.createElement('div');
      card.className = 'friends-stat';
      const label = document.createElement('div');
      label.className = 'friends-stat__label';
      label.textContent = stat.label;
      const value = document.createElement('div');
      value.className = 'friends-stat__value';
      value.textContent = stat.value;
      card.appendChild(label);
      card.appendChild(value);
      friendsProfileStats.appendChild(card);
    });
  }
  if (friendsProfileRecent) {
    const recent = buildFriendRecent(payload);
    if (recent.length === 0) {
      const empty = document.createElement('div');
      empty.className = 'empty-state';
      empty.textContent = 'Sin actividad reciente.';
      friendsProfileRecent.appendChild(empty);
    } else {
      recent.forEach((entry) => {
        const item = document.createElement('div');
        item.className = 'friend-row';
        const info = document.createElement('div');
        info.className = 'friend-row__info';
        const title = document.createElement('div');
        title.className = 'friend-row__name';
        title.textContent =
          entry.type === 'gym'
            ? entry.routineName
            : `Running ${formatNumber(entry.session.distanceKm, 1)} km`;
        const meta = document.createElement('div');
        meta.className = 'friend-row__meta';
        meta.textContent = entry.date ? formatDateTime(entry.date) : '-';
        info.appendChild(title);
        info.appendChild(meta);
        item.appendChild(info);
        friendsProfileRecent.appendChild(item);
      });
    }
  }
};

const parseTimeToSeconds = (value) => {
  if (!value) return null;
  const normalized = value.trim();
  if (!normalized) return null;
  const parts = normalized.split(':').map((part) => Number(part));
  if (parts.some((part) => Number.isNaN(part))) return null;
  if (parts.length === 2) {
    return parts[0] * 60 + parts[1];
  }
  if (parts.length === 3) {
    return parts[0] * 3600 + parts[1] * 60 + parts[2];
  }
  return null;
};

const parsePaceToSeconds = (value) => {
  if (!value) return null;
  const parts = value.split(':').map((part) => Number(part));
  if (parts.length !== 2 || parts.some((part) => Number.isNaN(part))) return null;
  return parts[0] * 60 + parts[1];
};

const getRunningDurationSeconds = () => {
  const hours = Number(runningDurationHours?.value || 0);
  const minutes = Number(runningDurationMinutes?.value || 0);
  const seconds = Number(runningDurationSeconds?.value || 0);
  if ([hours, minutes, seconds].some((value) => Number.isNaN(value))) return null;
  const total = hours * 3600 + minutes * 60 + seconds;
  return total > 0 ? total : null;
};

const fillDurationSelect = (select, max, pad = 2) => {
  if (!select) return;
  select.innerHTML = '';
  for (let i = 0; i <= max; i += 1) {
    const option = document.createElement('option');
    option.value = String(i);
    option.textContent = String(i).padStart(pad, '0');
    select.appendChild(option);
  }
};

const initRunningDurationPicker = () => {
  fillDurationSelect(runningDurationHours, 9);
  fillDurationSelect(runningDurationMinutes, 59);
  fillDurationSelect(runningDurationSeconds, 59);
  if (runningDurationHours) runningDurationHours.value = '0';
  if (runningDurationMinutes) runningDurationMinutes.value = '0';
  if (runningDurationSeconds) runningDurationSeconds.value = '0';
};

const getTodayInputDate = () => new Date().toISOString().slice(0, 10);

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

  const [sessions, logs, exercises, routineDays, routineItems, weeklyPlan, profile] = await Promise.all([
    getAllFromStore('trainingSessions'),
    getAllFromStore('sessionExerciseLogs'),
    getAllFromStore('exercises'),
    getAllFromStore('routineDays'),
    getAllFromStore('routineItems'),
    getAllFromStore('weeklyPlan'),
    profileRepository.getProfile(),
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
    const todayKey = getTodayWeekKey();
    const todayLabel = getWeekdayLabel(todayKey);
    const dayAssignments = (weeklyPlan || [])
      .filter((item) => item.dayKey === todayKey)
      .sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
    const routineMap = new Map(routineDays.map((day) => [day.id, day]));
    const dayRoutines = dayAssignments
      .map((item) => routineMap.get(item.routineDayId))
      .filter(Boolean);

    const fallbackId = localStorage.getItem(LAST_ROUTINE_DAY_KEY);
    const fallback =
      routineDays.find((day) => day.id === fallbackId) || routineDays[0];

    homeNextSessionCard.hidden = false;
    homeNextSessionList.innerHTML = '';

    if (dayRoutines.length > 0) {
      homeNextSessionTitle.textContent = `Rutinas de hoy${todayLabel ? ` · ${todayLabel}` : ''}`;
      dayRoutines.forEach((routine) => {
        const block = document.createElement('div');
        const title = document.createElement('div');
        title.className = 'list__title';
        title.textContent = routine.name;
        const chips = document.createElement('div');
        chips.className = 'chip-row';
        const items = routineItems
          .filter((item) => item.routineDayId === routine.id)
          .sort((a, b) => a.order - b.order)
          .slice(0, 4);
        items.forEach((item) => {
          const exercise = exerciseMap.get(item.exerciseId);
          const chip = document.createElement('span');
          chip.className = 'chip';
          chip.textContent = exercise ? exercise.name : 'Ejercicio eliminado';
          chips.appendChild(chip);
        });
        block.appendChild(title);
        block.appendChild(chips);
        homeNextSessionList.appendChild(block);
      });
    } else {
      homeNextSessionTitle.textContent = fallback ? `Rutina sugerida: ${fallback.name}` : '';
      if (fallback) {
        const items = routineItems
          .filter((item) => item.routineDayId === fallback.id)
          .sort((a, b) => a.order - b.order)
          .slice(0, 3);
        items.forEach((item) => {
          const exercise = exerciseMap.get(item.exerciseId);
          const span = document.createElement('span');
          span.textContent = exercise ? exercise.name : 'Ejercicio eliminado';
          homeNextSessionList.appendChild(span);
        });
      }
    }
  } else {
    homeNextSessionCard.hidden = true;
  }

  if (homeProfileCard && homeProfileSummary) {
    const summaryParts = [];
    if (profile?.goal) summaryParts.push(profile.goal);
    if (profile?.experience) summaryParts.push(profile.experience);
    if (profile?.frequency) summaryParts.push(`${profile.frequency} dias/semana`);
    if (profile?.age) summaryParts.push(`${profile.age} anos`);
    if (profile?.height || profile?.weight) {
      const height = profile.height ? `${profile.height} cm` : '';
      const weight = profile.weight ? `${profile.weight} kg` : '';
      summaryParts.push([height, weight].filter(Boolean).join(' · '));
    }
    if (summaryParts.length > 0) {
      homeProfileCard.hidden = false;
      homeProfileSummary.textContent = summaryParts.join(' · ');
    } else {
      homeProfileCard.hidden = true;
    }
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

const renderHistoryRunningList = async () => {
  if (!historyRunningList) return;
  const sessions = await runningRepository.listAllSessions();
  const sorted = sessions
    .filter((session) => session.finishedAt)
    .sort((a, b) => new Date(b.finishedAt) - new Date(a.finishedAt));

  historyRunningList.innerHTML = '';
  if (sorted.length === 0) {
    const empty = document.createElement('div');
    empty.className = 'empty-state';
    empty.textContent = 'No hay sesiones de running.';
    historyRunningList.appendChild(empty);
    return;
  }

  sorted.forEach((session) => {
    const row = buildRunningRow(session, {
      withDelete: true,
      onDelete: async (current) => {
        const ok = await confirmDialog('Eliminar esta sesion de running?', {
          title: 'Eliminar sesion',
          confirmText: 'Eliminar',
          danger: true,
        });
        if (!ok) return;
        await runningRepository.deleteSession(current.id);
        await renderHistoryRunningList();
        await renderRunningRecords();
        await renderRunning();
      },
    });
    historyRunningList.appendChild(row);
  });
};

const renderFriendRequests = () => {
  if (!friendRequestsList) return;
  const requests = friendsCache.friendships.filter(
    (row) => row.status === FRIEND_STATUS.PENDING && row.addressee_id === cloudUser?.id
  );
  friendRequestsList.innerHTML = '';
  if (requests.length === 0) {
    const empty = document.createElement('div');
    empty.className = 'empty-state';
    empty.textContent = 'Sin solicitudes pendientes.';
    friendRequestsList.appendChild(empty);
    return;
  }
  requests.forEach((row) => {
    const friendId = getFriendshipFriendId(row);
    const profile = friendsCache.profiles.get(friendId);
    const item = document.createElement('div');
    item.className = 'friend-row';
    const avatar = document.createElement('div');
    avatar.className = 'friend-row__avatar';
    if (profile?.avatar_url) {
      avatar.style.backgroundImage = `url('${profile.avatar_url}')`;
    }
    const info = document.createElement('div');
    info.className = 'friend-row__info';
    const name = document.createElement('div');
    name.className = 'friend-row__name';
    name.textContent = profile?.display_name || profile?.email || 'Usuario';
    const meta = document.createElement('div');
    meta.className = 'friend-row__meta';
    meta.textContent = 'Solicitud recibida';
    const badge = document.createElement('span');
    badge.className = 'friend-row__badge';
    badge.textContent = 'Pendiente';
    info.appendChild(name);
    info.appendChild(meta);
    const actions = document.createElement('div');
    actions.className = 'friend-row__actions';
    const accept = document.createElement('button');
    accept.className = 'button button--primary';
    accept.textContent = 'Aceptar';
    accept.addEventListener('click', async () => {
      await respondToFriendRequest(row.id, true);
    });
    const reject = document.createElement('button');
    reject.className = 'button button--ghost';
    reject.textContent = 'Rechazar';
    reject.addEventListener('click', async () => {
      await respondToFriendRequest(row.id, false);
    });
    actions.appendChild(accept);
    actions.appendChild(reject);
    item.appendChild(avatar);
    item.appendChild(info);
    item.appendChild(badge);
    item.appendChild(actions);
    friendRequestsList.appendChild(item);
  });
};

const renderFriendsList = () => {
  if (!friendsList) return;
  const friends = friendsCache.friendships.filter((row) => row.status === FRIEND_STATUS.ACCEPTED);
  friendsList.innerHTML = '';
  if (friends.length === 0) {
    const empty = document.createElement('div');
    empty.className = 'empty-state';
    empty.textContent = 'Aun no tienes amigos.';
    friendsList.appendChild(empty);
    return;
  }
  friends.forEach((row) => {
    const friendId = getFriendshipFriendId(row);
    const profile = friendsCache.profiles.get(friendId);
    const item = document.createElement('div');
    item.className = 'friend-row';
    const avatar = document.createElement('div');
    avatar.className = 'friend-row__avatar';
    if (profile?.avatar_url) {
      avatar.style.backgroundImage = `url('${profile.avatar_url}')`;
    }
    const info = document.createElement('div');
    info.className = 'friend-row__info';
    const name = document.createElement('div');
    name.className = 'friend-row__name';
    name.textContent = profile?.display_name || profile?.email || 'Usuario';
    const meta = document.createElement('div');
    meta.className = 'friend-row__meta';
    meta.textContent = 'Ver perfil';
    info.appendChild(name);
    info.appendChild(meta);
    const actions = document.createElement('div');
    actions.className = 'friend-row__actions';
    const view = document.createElement('button');
    view.className = 'button button--ghost';
    view.textContent = 'Ver';
    view.addEventListener('click', () => renderFriendProfile(friendId));
    actions.appendChild(view);
    item.appendChild(avatar);
    item.appendChild(info);
    item.appendChild(actions);
    friendsList.appendChild(item);
  });
};

const renderFriendsNotifications = () => {
  if (!friendsNotificationsList) return;
  friendsNotificationsList.innerHTML = '';
  if (!friendsCache.notifications.length) {
    const empty = document.createElement('div');
    empty.className = 'empty-state';
    empty.textContent = 'Sin notificaciones.';
    friendsNotificationsList.appendChild(empty);
    return;
  }
  friendsCache.notifications.forEach((notification) => {
    const row = document.createElement('div');
    row.className = 'notification-row';
    const dot = document.createElement('span');
    dot.className = 'notification-row__dot';
    const text = document.createElement('div');
    text.className = 'notification-row__text';
    text.textContent = notification.message || 'Nueva notificacion';
    const time = document.createElement('div');
    time.className = 'notification-row__time';
    time.textContent = notification.created_at ? formatDateTime(notification.created_at) : '';
    row.appendChild(dot);
    row.appendChild(text);
    row.appendChild(time);
    friendsNotificationsList.appendChild(row);
  });
};

const loadFriendsData = async () => {
  if (!supabaseClient || !cloudUser) return;
  const { data: friendships, error } = await supabaseClient
    .from('friendships')
    .select('id, requester_id, addressee_id, status, created_at, updated_at')
    .or(`requester_id.eq.${cloudUser.id},addressee_id.eq.${cloudUser.id}`);
  if (error) {
    setCloudError(error.message);
    return;
  }
  friendsCache.friendships = friendships || [];
  const friendIds = friendsCache.friendships.map(getFriendshipFriendId);
  const profiles = await fetchProfilesByIds(friendIds);
  friendsCache.profiles = new Map(profiles.map((profile) => [profile.user_id, profile]));

  const { data: notifications, error: notificationError } = await supabaseClient
    .from('notifications')
    .select('id, message, created_at, read_at')
    .eq('user_id', cloudUser.id)
    .order('created_at', { ascending: false })
    .limit(10);
  if (!notificationError) {
    friendsCache.notifications = notifications || [];
  }
};

const renderFriendsView = async () => {
  if (!friendsList) return;
  await loadFriendsData();
  renderFriendRequests();
  renderFriendsList();
  renderFriendsNotifications();
  if (state.currentFriendId) {
    await renderFriendProfile(state.currentFriendId);
  } else if (friendsProfile) {
    friendsProfile.hidden = true;
  }
};

const sendFriendRequest = async (email) => {
  if (!supabaseClient || !cloudUser) {
    throw new Error('No autenticado.');
  }
  const profile = await fetchProfileByEmail(email);
  if (!profile?.user_id) {
    throw new Error('Usuario no encontrado.');
  }
  if (profile.user_id === cloudUser.id) {
    throw new Error('No puedes agregarte.');
  }
  const { data: existing } = await supabaseClient
    .from('friendships')
    .select('id, status, requester_id, addressee_id')
    .or(
      `and(requester_id.eq.${cloudUser.id},addressee_id.eq.${profile.user_id}),and(requester_id.eq.${profile.user_id},addressee_id.eq.${cloudUser.id})`
    )
    .maybeSingle();
  if (existing) {
    throw new Error('Ya existe una solicitud o amistad.');
  }
  const { error } = await supabaseClient.from('friendships').insert({
    requester_id: cloudUser.id,
    addressee_id: profile.user_id,
    status: FRIEND_STATUS.PENDING,
  });
  if (error) throw error;
  await supabaseClient.from('notifications').insert({
    user_id: profile.user_id,
    message: `Nueva solicitud de amistad`,
  });
};

const respondToFriendRequest = async (friendshipId, accept) => {
  if (!supabaseClient || !cloudUser) return;
  const status = accept ? FRIEND_STATUS.ACCEPTED : FRIEND_STATUS.REJECTED;
  const { data, error } = await supabaseClient
    .from('friendships')
    .update({ status })
    .eq('id', friendshipId)
    .select('requester_id, addressee_id')
    .maybeSingle();
  if (error) {
    setCloudError(error.message);
    return;
  }
  const targetId = data?.requester_id === cloudUser.id ? data?.addressee_id : data?.requester_id;
  if (targetId) {
    await supabaseClient.from('notifications').insert({
      user_id: targetId,
      message: accept ? 'Solicitud aceptada' : 'Solicitud rechazada',
    });
  }
  await renderFriendsView();
};

const removeFriendship = async (friendId) => {
  if (!supabaseClient || !cloudUser) return;
  const { error } = await supabaseClient
    .from('friendships')
    .delete()
    .or(
      `and(requester_id.eq.${cloudUser.id},addressee_id.eq.${friendId}),and(requester_id.eq.${friendId},addressee_id.eq.${cloudUser.id})`
    );
  if (error) {
    setCloudError(error.message);
    return;
  }
  state.currentFriendId = null;
  friendsProfile.hidden = true;
  await renderFriendsView();
};

const blockFriendship = async (friendId) => {
  if (!supabaseClient || !cloudUser) return;
  const { error } = await supabaseClient
    .from('friendships')
    .update({ status: FRIEND_STATUS.BLOCKED })
    .or(
      `and(requester_id.eq.${cloudUser.id},addressee_id.eq.${friendId}),and(requester_id.eq.${friendId},addressee_id.eq.${cloudUser.id})`
    );
  if (error) {
    setCloudError(error.message);
    return;
  }
  state.currentFriendId = null;
  friendsProfile.hidden = true;
  await renderFriendsView();
};

const sendFriendWave = async (friendId) => {
  if (!supabaseClient || !cloudUser) return;
  const { error } = await supabaseClient.from('notifications').insert({
    user_id: friendId,
    message: 'Te ha enviado un saludo 👋',
  });
  if (error) {
    setCloudError(error.message);
  }
};

const renderGallery = async () => {
  if (!galleryList) return;
  const photos = await galleryRepository.listPhotos();
  const sorted = photos.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  galleryList.innerHTML = '';
  if (!sorted.length) {
    const empty = document.createElement('div');
    empty.className = 'empty-state';
    empty.textContent = 'Aun no hay fotos.';
    galleryList.appendChild(empty);
    return;
  }
  sorted.forEach((photo) => {
    const card = document.createElement('div');
    card.className = 'gallery-card';

    const img = document.createElement('img');
    img.className = 'gallery-card__image';
    img.src = photo.imageData;
    img.alt = 'Foto progreso';
    img.addEventListener('click', () => openGalleryModal(photo));

    const body = document.createElement('div');
    body.className = 'gallery-card__body';

    const date = document.createElement('div');
    date.className = 'gallery-card__date';
    date.textContent = formatDate(photo.createdAt);

    const note = document.createElement('div');
    note.className = 'gallery-card__note';
    note.textContent = photo.note || 'Sin nota.';

    const actions = document.createElement('div');
    actions.className = 'gallery-card__actions';
    const remove = document.createElement('button');
    remove.className = 'button button--ghost';
    remove.textContent = 'Eliminar';
    remove.addEventListener('click', async () => {
      const ok = await confirmDialog('Eliminar esta foto?', {
        title: 'Eliminar foto',
        confirmText: 'Eliminar',
        danger: true,
      });
      if (!ok) return;
      await galleryRepository.deletePhoto(photo.id);
      await renderGallery();
    });
    actions.appendChild(remove);

    body.appendChild(date);
    body.appendChild(note);
    body.appendChild(actions);

    card.appendChild(img);
    card.appendChild(body);
    galleryList.appendChild(card);
  });
};

const openGalleryModal = (photo) => {
  if (!galleryModal || !galleryModalImage || !galleryModalDate || !galleryModalNote) return;
  galleryModalImage.src = photo.imageData;
  galleryModalDate.textContent = formatDate(photo.createdAt);
  galleryModalNote.textContent = photo.note || 'Sin nota.';
  galleryModal.hidden = false;
};

const closeGalleryModal = () => {
  if (!galleryModal) return;
  galleryModal.hidden = true;
};

const setHistoryMode = (mode) => {
  state.historyMode = mode;
  if (historyModeGym) historyModeGym.classList.toggle('is-active', mode === 'gym');
  if (historyModeRun) historyModeRun.classList.toggle('is-active', mode === 'run');
  if (historyGymPanel) historyGymPanel.hidden = mode !== 'gym';
  if (historyRunPanel) historyRunPanel.hidden = mode !== 'run';
  if (mode === 'gym') {
    renderHistoryList();
  } else {
    renderHistoryRunningList();
  }
};

const setTrainMode = (mode) => {
  state.trainMode = mode;
  if (trainModeGym) trainModeGym.classList.toggle('is-active', mode === 'gym');
  if (trainModeRun) trainModeRun.classList.toggle('is-active', mode === 'run');
  if (trainGymPanel) trainGymPanel.hidden = mode !== 'gym';
  if (trainRunPanel) trainRunPanel.hidden = mode !== 'run';
  if (mode === 'run') {
    renderRunning();
  }
};

const updateRunningPacePreview = () => {
  if (!runningPace) return;
  if (state.runningPaceManual && runningPace.value) return;
  const distance = parseNumber(runningDistance?.value || '');
  const durationSeconds = getRunningDurationSeconds();
  if (!distance || !durationSeconds) {
    runningPace.value = '';
    return;
  }
  const paceSeconds = durationSeconds / distance;
  runningPace.value = formatPaceInput(paceSeconds);
};

const renderRunningSummary = (sessions) => {
  const now = new Date();
  const cutoff = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
  const recent = sessions.filter((session) => session.finishedAt && new Date(session.finishedAt) >= cutoff);
  const totalDistance = recent.reduce((acc, session) => acc + (session.distanceKm || 0), 0);
  const totalDuration = recent.reduce((acc, session) => acc + (session.durationSeconds || 0), 0);
  const avgPace = totalDistance > 0 ? totalDuration / totalDistance : null;

  if (runningTotalValue) {
    runningTotalValue.textContent = totalDistance ? `${formatNumber(totalDistance, 2)} km` : '0 km';
  }
  if (runningTotalMeta) {
    runningTotalMeta.textContent = recent.length ? 'km acumulados' : 'Sin sesiones recientes';
  }
  if (runningAvgPaceValue) {
    runningAvgPaceValue.textContent = avgPace ? formatPace(avgPace) : '-';
  }
  if (runningAvgPaceMeta) {
    runningAvgPaceMeta.textContent = recent.length ? 'Ultimos 7 dias' : 'Sin datos';
  }

  const last = sessions
    .filter((session) => session.finishedAt)
    .sort((a, b) => new Date(b.finishedAt) - new Date(a.finishedAt))[0];
  if (runningLastValue) {
    runningLastValue.textContent = last ? formatDate(last.finishedAt) : '-';
  }
  if (runningLastMeta) {
    runningLastMeta.textContent = last
      ? `${formatNumber(last.distanceKm, 2)} km · ${formatPace(last.paceSeconds)}`
      : 'Sin datos';
  }
};

const renderRunningList = (sessions) => {
  if (!runningList) return;
  runningList.innerHTML = '';
  if (!sessions.length) {
    const empty = document.createElement('div');
    empty.className = 'empty-state';
    empty.textContent = 'Aun no hay sesiones de running.';
    runningList.appendChild(empty);
    return;
  }

  sessions.slice(0, 10).forEach((session) => {
    runningList.appendChild(buildRunningRow(session));
  });
};

const renderRunning = async () => {
  if (!runningList) return;
  if (runningDate && !runningDate.value) {
    runningDate.value = getTodayInputDate();
  }
  if (runningDurationHours && runningDurationHours.options.length === 0) {
    initRunningDurationPicker();
  }
  const sessions = await runningRepository.listAllSessions();
  const sorted = sessions
    .filter((session) => session.finishedAt)
    .sort((a, b) => new Date(b.finishedAt) - new Date(a.finishedAt));
  renderRunningSummary(sorted);
  renderRunningList(sorted);
  updateRunningPacePreview();
};

const renderRunningRecords = async () => {
  if (!recordsRunningList) return;
  const sessions = await runningRepository.listAllSessions();
  const sorted = sessions
    .filter((session) => session.finishedAt)
    .sort((a, b) => new Date(b.finishedAt) - new Date(a.finishedAt));

  const cutoff = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000);
  const recent = sorted.filter((session) => new Date(session.finishedAt) >= cutoff);
  const totalDistance = recent.reduce((acc, session) => acc + (session.distanceKm || 0), 0);
  const totalDuration = recent.reduce((acc, session) => acc + (session.durationSeconds || 0), 0);
  const avgPace = totalDistance > 0 ? totalDuration / totalDistance : null;
  const longest = sorted.reduce((best, session) => {
    if (!best) return session;
    return (session.distanceKm || 0) > (best.distanceKm || 0) ? session : best;
  }, null);

  if (recordsRunningTotalValue) {
    recordsRunningTotalValue.textContent = totalDistance
      ? `${formatNumber(totalDistance, 2)} km`
      : '0 km';
  }
  if (recordsRunningTotalMeta) {
    recordsRunningTotalMeta.textContent = recent.length ? 'km acumulados' : 'Sin sesiones recientes';
  }
  if (recordsRunningPaceValue) {
    recordsRunningPaceValue.textContent = avgPace ? formatPace(avgPace) : '-';
  }
  if (recordsRunningPaceMeta) {
    recordsRunningPaceMeta.textContent = recent.length ? 'Ultimos 30 dias' : 'Sin datos';
  }
  if (recordsRunningLongestValue) {
    recordsRunningLongestValue.textContent = longest
      ? `${formatNumber(longest.distanceKm, 2)} km`
      : '-';
  }
  if (recordsRunningLongestMeta) {
    recordsRunningLongestMeta.textContent = longest
      ? `${formatDate(longest.finishedAt)} · ${formatDuration(longest.durationSeconds)}`
      : 'Sin datos';
  }

  recordsRunningList.innerHTML = '';
  if (!sorted.length) {
    const empty = document.createElement('div');
    empty.className = 'empty-state';
    empty.textContent = 'Aun no hay sesiones de running.';
    recordsRunningList.appendChild(empty);
    return;
  }

  sorted.slice(0, 8).forEach((session) => {
    recordsRunningList.appendChild(buildRunningRow(session));
  });
};

const setRecordsMode = (mode) => {
  state.recordsMode = mode;
  if (recordsModeGym) recordsModeGym.classList.toggle('is-active', mode === 'gym');
  if (recordsModeRun) recordsModeRun.classList.toggle('is-active', mode === 'run');
  if (recordsGymPanel) recordsGymPanel.hidden = mode !== 'gym';
  if (recordsRunPanel) recordsRunPanel.hidden = mode !== 'run';
  if (mode === 'gym') {
    renderRecords();
  } else {
    renderRunningRecords();
  }
};

const buildRecordsDataset = async () => {
  const [exercises, categories, sessions, logs] = await Promise.all([
    exerciseRepository.listAllExercises(),
    exerciseRepository.listCategories(),
    trainingRepository.listAllSessions(),
    getAllFromStore('sessionExerciseLogs'),
  ]);
  if (!logs || logs.length === 0) return [];

  const exerciseMap = new Map(exercises.map((exercise) => [exercise.id, exercise]));
  const categoryMap = new Map(categories.map((category) => [category.id, category.name]));
  const sessionMap = new Map(sessions.map((session) => [session.id, session]));
  const recordsByExercise = new Map();

  logs.forEach((log) => {
    const exercise = exerciseMap.get(log.exerciseId);
    if (!exercise) return;
    const session = sessionMap.get(log.sessionId);
    const recordDate = session?.finishedAt || session?.startedAt || log.createdAt || null;
    let record = recordsByExercise.get(exercise.id);
    if (!record) {
      record = {
        exercise,
        categoryName: categoryMap.get(exercise.categoryId) || 'Sin categoria',
        maxWeight: null,
        maxWeightSet: null,
        maxWeightDate: null,
        sessionIds: new Set(),
        totalSets: 0,
        lastDate: null,
      };
      recordsByExercise.set(exercise.id, record);
    }

    (log.sets || []).forEach((set) => {
      const weight = typeof set.weight === 'number' ? set.weight : null;
      const reps = typeof set.reps === 'number' ? set.reps : null;
      if (weight == null) return;
      if (record.maxWeight == null || weight > record.maxWeight) {
        record.maxWeight = weight;
        record.maxWeightSet = { weight, reps, rir: set.rir ?? null };
        record.maxWeightDate = recordDate;
      }
      if (reps != null && reps > 0) {
        record.totalSets += 1;
      }
    });

    record.sessionIds.add(log.sessionId);
    if (recordDate) {
      if (!record.lastDate || new Date(recordDate) > new Date(record.lastDate)) {
        record.lastDate = recordDate;
      }
    }
  });

  return Array.from(recordsByExercise.values()).map((record) => ({
    ...record,
    sessionCount: record.sessionIds.size,
    prDate: record.maxWeightDate,
  }));
};

const fillRecordsCategoryFilter = async (selectedId) => {
  if (!recordsCategoryFilter) return;
  const categories = await exerciseRepository.listCategories();
  recordsCategoryFilter.innerHTML = '';
  const allOption = document.createElement('option');
  allOption.value = 'all';
  allOption.textContent = 'Todas las categorias';
  recordsCategoryFilter.appendChild(allOption);
  categories.forEach((category) => {
    const option = document.createElement('option');
    option.value = category.id;
    option.textContent = category.name;
    if (category.id === selectedId) {
      option.selected = true;
    }
    recordsCategoryFilter.appendChild(option);
  });
  recordsCategoryFilter.value = selectedId || 'all';
};

const renderRecords = async () => {
  if (!recordsList) return;
  if (recordsCategoryFilter && recordsCategoryFilter.options.length === 0) {
    await fillRecordsCategoryFilter(state.recordsCategoryFilter);
  }
  if (recordsSearch && recordsSearch.value !== state.recordsSearch) {
    recordsSearch.value = state.recordsSearch;
  }

  const allRecords = await buildRecordsDataset();
  const totalRecords = allRecords.length;
  const bestRecord = allRecords.reduce((best, record) => {
    const bestValue = best ? best.maxWeight ?? 0 : 0;
    const currentValue = record.maxWeight ?? 0;
    return currentValue > bestValue ? record : best;
  }, null);
  const latestRecord = allRecords.reduce((latest, record) => {
    if (!record.prDate) return latest;
    if (!latest?.prDate) return record;
    return new Date(record.prDate) > new Date(latest.prDate) ? record : latest;
  }, null);

  if (recordsTotalValue) recordsTotalValue.textContent = totalRecords ? `${totalRecords}` : '0';
  if (recordsTotalMeta) {
    recordsTotalMeta.textContent = totalRecords ? 'Ejercicios con PR' : 'Sin PRs registrados';
  }
  if (recordsBestValue) {
    recordsBestValue.textContent = bestRecord ? `${formatNumber(bestRecord.maxWeight)} kg` : '-';
  }
  if (recordsBestMeta) {
    recordsBestMeta.textContent = bestRecord
      ? `Mejor PR · ${bestRecord.exercise.name}`
      : 'Sin datos';
  }
  if (recordsLastValue) {
    recordsLastValue.textContent = latestRecord?.prDate ? formatDate(latestRecord.prDate) : '-';
  }
  if (recordsLastMeta) {
    recordsLastMeta.textContent = latestRecord
      ? `${latestRecord.exercise.name} · ${formatNumber(latestRecord.maxWeight ?? 0)} kg`
      : 'Sin datos';
  }

  const searchValue = state.recordsSearch.trim().toLowerCase();
  const categoryFilter = state.recordsCategoryFilter || 'all';
  const filtered = allRecords
    .filter((record) => {
      if (categoryFilter !== 'all' && record.exercise.categoryId !== categoryFilter) {
        return false;
      }
      if (!searchValue) return true;
      const exerciseName = record.exercise.name.toLowerCase();
      const categoryName = record.categoryName.toLowerCase();
      return exerciseName.includes(searchValue) || categoryName.includes(searchValue);
    })
    .sort((a, b) => {
      const aValue = a.maxE1rm ?? a.maxWeight ?? 0;
      const bValue = b.maxE1rm ?? b.maxWeight ?? 0;
      return bValue - aValue;
    });

  recordsList.innerHTML = '';
  if (filtered.length === 0) {
    const empty = document.createElement('div');
    empty.className = 'empty-state';
    empty.textContent = 'Aun no hay PRs registrados.';
    recordsList.appendChild(empty);
    return;
  }

  filtered.forEach((record) => {
    const row = document.createElement('div');
    row.className = 'records-row';

    const exerciseCell = document.createElement('div');
    const title = document.createElement('div');
    title.className = 'records-title';
    title.textContent = record.exercise.name;
    const meta = document.createElement('div');
    meta.className = 'records-meta';
    const tag = document.createElement('span');
    tag.className = 'records-tag';
    tag.textContent = record.categoryName;
    const last = document.createElement('span');
    last.className = 'records-sub';
    last.textContent = record.lastDate ? `Ultima: ${formatDate(record.lastDate)}` : 'Sin sesiones';
    meta.appendChild(tag);
    meta.appendChild(last);
    exerciseCell.appendChild(title);
    exerciseCell.appendChild(meta);

    const prCell = document.createElement('div');
  const prSet = record.maxWeightSet;
    const prValue = document.createElement('div');
    prValue.className = 'records-value';
    prValue.textContent = prSet
      ? `${formatNumber(prSet.weight)} kg x ${prSet.reps ?? '-'}`
      : '-';
    const prSub = document.createElement('div');
    prSub.className = 'records-sub';
    prSub.textContent = prSet?.rir != null ? `RIR ${prSet.rir}` : 'Mejor set';
    prCell.appendChild(prValue);
    prCell.appendChild(prSub);

    const dateCell = document.createElement('div');
    const dateValue = document.createElement('div');
    dateValue.className = 'records-value';
    dateValue.textContent = record.prDate ? formatDate(record.prDate) : '-';
    const dateSub = document.createElement('div');
    dateSub.className = 'records-sub';
    dateSub.textContent = record.prDate ? 'Fecha PR' : 'Sin fecha';
    dateCell.appendChild(dateValue);
    dateCell.appendChild(dateSub);

    const sessionsCell = document.createElement('div');
    const sessionsValue = document.createElement('div');
    sessionsValue.className = 'records-value';
    sessionsValue.textContent = `${record.sessionCount}`;
    const sessionsSub = document.createElement('div');
    sessionsSub.className = 'records-sub';
    sessionsSub.textContent = 'Sesiones';
    sessionsCell.appendChild(sessionsValue);
    sessionsCell.appendChild(sessionsSub);

    row.appendChild(exerciseCell);
    row.appendChild(prCell);
    row.appendChild(dateCell);
    row.appendChild(sessionsCell);
    recordsList.appendChild(row);
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
  await renderWeeklyPlan();
};

const renderWeeklyPlan = async () => {
  if (!weeklyPlanGrid) return;
  const [days, assignments] = await Promise.all([
    routineRepository.listRoutineDays(),
    weeklyPlanRepository.listAll(),
  ]);
  weeklyPlanGrid.innerHTML = '';
  const routineMap = new Map(days.map((day) => [day.id, day]));

  WEEK_DAYS.forEach((weekday) => {
    const wrapper = document.createElement('div');
    wrapper.className = 'weekly-day';

    const title = document.createElement('div');
    title.className = 'weekly-day__title';
    title.textContent = weekday.label;

    const list = document.createElement('div');
    list.className = 'weekly-day__list';
    const items = assignments.filter((item) => item.dayKey === weekday.key);
    if (items.length === 0) {
      const empty = document.createElement('div');
      empty.className = 'empty-state';
      empty.textContent = 'Sin rutinas asignadas.';
      list.appendChild(empty);
    } else {
      items.forEach((item) => {
        const row = document.createElement('div');
        row.className = 'weekly-day__item';
        const label = document.createElement('div');
        label.className = 'list__title';
        label.textContent = routineMap.get(item.routineDayId)?.name || 'Rutina eliminada';
        const remove = createIconButton({
          title: 'Quitar',
          className: 'icon-button icon-button--danger',
          paths: ICONS.trash,
        });
        remove.addEventListener('click', async () => {
          await weeklyPlanRepository.removeItem(item.id);
          await renderWeeklyPlan();
        });
        row.appendChild(label);
        row.appendChild(remove);
        list.appendChild(row);
      });
    }

    const actions = document.createElement('div');
    actions.className = 'weekly-day__actions';
    const select = document.createElement('select');
    select.className = 'form__input';
    const placeholder = document.createElement('option');
    placeholder.value = '';
    placeholder.textContent = 'Selecciona rutina';
    select.appendChild(placeholder);
    days.forEach((day) => {
      const option = document.createElement('option');
      option.value = day.id;
      option.textContent = day.name;
      select.appendChild(option);
    });
    const addButton = document.createElement('button');
    addButton.className = 'button button--primary';
    addButton.textContent = 'Agregar';
    addButton.addEventListener('click', async () => {
      if (!select.value) return;
      await weeklyPlanRepository.addItem(weekday.key, select.value);
      select.value = '';
      await renderWeeklyPlan();
    });
    actions.appendChild(select);
    actions.appendChild(addButton);

    wrapper.appendChild(title);
    wrapper.appendChild(list);
    wrapper.appendChild(actions);
    weeklyPlanGrid.appendChild(wrapper);
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
  const [days, weeklyPlan] = await Promise.all([
    routineRepository.listRoutineDays(),
    weeklyPlanRepository.listAll(),
  ]);
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
  const todayKey = getTodayWeekKey();
  const todayAssignments = (weeklyPlan || [])
    .filter((item) => item.dayKey === todayKey)
    .sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
  const todayRoutineId = todayAssignments.find((item) =>
    days.some((day) => day.id === item.routineDayId)
  )?.routineDayId;
  const last = localStorage.getItem(LAST_ROUTINE_DAY_KEY);
  const selected =
    days.find((day) => day.id === todayRoutineId) ||
    days.find((day) => day.id === last) ||
    days[0];
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

if (recordsSearch) {
  recordsSearch.addEventListener('input', async (event) => {
    state.recordsSearch = event.target.value.trim().toLowerCase();
    await renderRecords();
  });
}

if (recordsCategoryFilter) {
  recordsCategoryFilter.addEventListener('change', async (event) => {
    state.recordsCategoryFilter = event.target.value || 'all';
    await renderRecords();
  });
}

if (recordsModeGym) {
  recordsModeGym.addEventListener('click', () => setRecordsMode('gym'));
}

if (recordsModeRun) {
  recordsModeRun.addEventListener('click', () => setRecordsMode('run'));
}

if (friendAdd) {
  friendAdd.addEventListener('click', async () => {
    if (friendError) friendError.textContent = '';
    const email = friendEmail?.value.trim().toLowerCase();
    if (!email) {
      if (friendError) friendError.textContent = 'Introduce un email valido.';
      return;
    }
    try {
      await sendFriendRequest(email);
      if (friendEmail) friendEmail.value = '';
      await renderFriendsView();
    } catch (error) {
      if (friendError) friendError.textContent = error.message;
    }
  });
}

if (friendsRemove) {
  friendsRemove.addEventListener('click', async () => {
    if (!state.currentFriendId) return;
    const ok = await confirmDialog('Eliminar este amigo?', {
      title: 'Eliminar amigo',
      confirmText: 'Eliminar',
      danger: true,
    });
    if (!ok) return;
    await removeFriendship(state.currentFriendId);
  });
}

if (friendsBlock) {
  friendsBlock.addEventListener('click', async () => {
    if (!state.currentFriendId) return;
    const ok = await confirmDialog('Bloquear este amigo?', {
      title: 'Bloquear amigo',
      confirmText: 'Bloquear',
      danger: true,
    });
    if (!ok) return;
    await blockFriendship(state.currentFriendId);
  });
}

if (friendsWave) {
  friendsWave.addEventListener('click', async () => {
    if (!state.currentFriendId) return;
    await sendFriendWave(state.currentFriendId);
  });
}

if (galleryAdd) {
  galleryAdd.addEventListener('click', async () => {
    if (galleryError) galleryError.textContent = '';
    const file = galleryPhotoInput?.files?.[0];
    if (!file) {
      if (galleryError) galleryError.textContent = 'Selecciona una foto.';
      return;
    }
    const reader = new FileReader();
    reader.onload = async () => {
      const imageData = reader.result;
      if (typeof imageData !== 'string') return;
      await galleryRepository.createPhoto({
        imageData,
        note: galleryNote?.value.trim() || '',
      });
      if (galleryPhotoInput) galleryPhotoInput.value = '';
      if (galleryNote) galleryNote.value = '';
      await renderGallery();
    };
    reader.readAsDataURL(file);
  });
}

if (galleryModalBackdrop) {
  galleryModalBackdrop.addEventListener('click', closeGalleryModal);
}

if (galleryModalClose) {
  galleryModalClose.addEventListener('click', closeGalleryModal);
}

if (historyModeGym) {
  historyModeGym.addEventListener('click', () => setHistoryMode('gym'));
}

if (historyModeRun) {
  historyModeRun.addEventListener('click', () => setHistoryMode('run'));
}

if (trainModeGym) {
  trainModeGym.addEventListener('click', () => setTrainMode('gym'));
}

if (trainModeRun) {
  trainModeRun.addEventListener('click', () => setTrainMode('run'));
}

if (runningDistance) {
  runningDistance.addEventListener('input', updateRunningPacePreview);
}

if (runningDurationHours) {
  runningDurationHours.addEventListener('change', updateRunningPacePreview);
}

if (runningDurationMinutes) {
  runningDurationMinutes.addEventListener('change', updateRunningPacePreview);
}

if (runningDurationSeconds) {
  runningDurationSeconds.addEventListener('change', updateRunningPacePreview);
}

if (runningPace) {
  runningPace.addEventListener('input', (event) => {
    const value = event.target.value.trim();
    state.runningPaceManual = value.length > 0;
  });
}

if (runningSave) {
  runningSave.addEventListener('click', async () => {
    if (runningError) runningError.textContent = '';
    const distance = parseNumber(runningDistance?.value || '');
    const durationSeconds = getRunningDurationSeconds();
    if (!distance || distance <= 0) {
      if (runningError) runningError.textContent = 'Introduce una distancia valida.';
      return;
    }
    if (!durationSeconds || durationSeconds <= 0) {
      if (runningError) runningError.textContent = 'Introduce un tiempo valido.';
      return;
    }
    const dateValue = runningDate?.value || getTodayInputDate();
    const finishedAt = new Date(`${dateValue}T00:00:00`).toISOString();
    let paceSeconds = null;
    if (runningPace?.value) {
      paceSeconds = parsePaceToSeconds(runningPace.value.trim());
      if (!paceSeconds || paceSeconds <= 0) {
        if (runningError) runningError.textContent = 'Introduce un ritmo valido (mm:ss).';
        return;
      }
    } else {
      paceSeconds = durationSeconds / distance;
    }
    await runningRepository.createSession({
      date: dateValue,
      finishedAt,
      durationSeconds,
      distanceKm: distance,
      paceSeconds,
      notes: runningNotes?.value.trim() || '',
    });
    if (runningDurationHours) runningDurationHours.value = '0';
    if (runningDurationMinutes) runningDurationMinutes.value = '0';
    if (runningDurationSeconds) runningDurationSeconds.value = '0';
    if (runningDistance) runningDistance.value = '';
    if (runningPace) runningPace.value = '';
    if (runningNotes) runningNotes.value = '';
    state.runningPaceManual = false;
    updateRunningPacePreview();
    await renderRunning();
    await renderRunningRecords();
    await renderHistoryRunningList();
  });
}

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

const CLOUD_STORES = [
  'categories',
  'exercises',
  'routineDays',
  'routineItems',
  'weeklyPlan',
  'trainingSessions',
  'sessionExerciseLogs',
  'runningSessions',
  'progressPhotos',
  'profile',
];

const getExportPayload = async () => {
  const stores = CLOUD_STORES;
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
  for (const store of CLOUD_STORES) {
    await clearStore(store);
    const items = parsed.data[store] || [];
    for (const item of items) {
      await putInStore(store, item);
    }
  }
  await refreshTrainingHome();
  await renderCategories();
  await renderRoutineDayList();
  await renderProfile();
  await renderRecords();
  await renderRunningRecords();
  await renderRunning();
  await renderGallery();
  await renderHomeDashboard();
};

const clearCloudMetadata = () => {
  localStorage.removeItem(LAST_ROUTINE_DAY_KEY);
  localStorage.removeItem(CLOUD_LOCAL_UPDATED_KEY);
  localStorage.removeItem(CLOUD_LAST_UPLOADED_KEY);
};

const clearLocalUserData = async () => {
  try {
    isCloudImporting = true;
    for (const store of CLOUD_STORES) {
      await clearStore(store);
    }
    clearCloudMetadata();
  } finally {
    isCloudImporting = false;
  }
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

const renderProfile = async () => {
  const profile = await profileRepository.getProfile();
  if (profileEmail) {
    profileEmail.value = cloudUser?.email || '';
  }
  if (profileName) profileName.value = profile?.name || '';
  if (profileGoal) profileGoal.value = profile?.goal || '';
  if (profileExperience) profileExperience.value = profile?.experience || '';
  if (profileAge) profileAge.value = profile?.age ?? '';
  if (profileSex) profileSex.value = profile?.sex || '';
  if (profileFrequency) profileFrequency.value = profile?.frequency ?? '';
  if (profileHeight) profileHeight.value = profile?.height ?? '';
  if (profileWeight) profileWeight.value = profile?.weight ?? '';
  if (profileNotes) profileNotes.value = profile?.notes || '';
  currentProfileAvatar = profile?.avatar || '';
  if (profileAvatarLarge) {
    profileAvatarLarge.style.backgroundImage = currentProfileAvatar
      ? `url('${currentProfileAvatar}')`
      : '';
  }
  if (profileButton) {
    const avatar = profile?.avatar;
    const hasAvatar = Boolean(avatar);
    profileButton.classList.toggle('has-avatar', hasAvatar);
    if (profileAvatar) {
      profileAvatar.src = avatar || '';
      profileAvatar.alt = hasAvatar ? 'Avatar' : '';
    }
  }
  if (profileMenuName) {
    profileMenuName.textContent = profile?.name || 'Perfil';
  }
  if (profileMenuEmail) {
    profileMenuEmail.textContent = cloudUser?.email || '';
  }
  if (profileMenuGoal) {
    profileMenuGoal.textContent = profile?.goal ? `Objetivo: ${profile.goal}` : '';
  }
  if (profileError) profileError.textContent = '';
};

const profileRepository = {
  async getProfile() {
    return getFromStore('profile', 'profile');
  },
  async saveProfile(data) {
    const current = await this.getProfile();
    const now = Date.now();
    const profile = {
      id: 'profile',
      name: data.name || '',
      goal: data.goal || '',
      experience: data.experience || '',
      age: data.age ?? null,
      sex: data.sex || '',
      frequency: data.frequency ?? null,
      height: data.height ?? null,
      weight: data.weight ?? null,
      notes: data.notes || '',
      avatar: data.avatar || current?.avatar || '',
      createdAt: current?.createdAt || now,
      updatedAt: now,
    };
    await putInStore('profile', profile);
    return profile;
  },
};

const syncProfilePublic = async () => {
  if (!supabaseClient || !cloudUser) return;
  const profile = await profileRepository.getProfile();
  if (!profile) return;
  const payload = {
    user_id: cloudUser.id,
    email: cloudUser.email || '',
    display_name: profile.name || '',
    bio: profile.notes || '',
    avatar_url: profile.avatar || '',
    updated_at: new Date().toISOString(),
  };
  const { error } = await supabaseClient.from('profiles').upsert(payload, {
    onConflict: 'user_id',
  });
  if (error) {
    setCloudError(error.message);
  }
};

const setRecoveryError = (message) => {
  if (recoveryError) {
    recoveryError.textContent = message || '';
  }
};

const setAuthTab = (tab) => {
  if (!authLoginPanel || !authSignupPanel || !authTabs.length) return;
  const isLogin = tab === 'login';
  authLoginPanel.hidden = !isLogin;
  authSignupPanel.hidden = isLogin;
  if (authRecoveryPanel) {
    authRecoveryPanel.hidden = true;
  }
  authTabs.forEach((button) => {
    const isActive = button.dataset.authTab === tab;
    button.classList.toggle('is-active', isActive);
    button.setAttribute('aria-selected', isActive ? 'true' : 'false');
  });
};

const setRecoveryMode = (isRecovery) => {
  if (authLoginPanel) authLoginPanel.hidden = isRecovery;
  if (authSignupPanel) authSignupPanel.hidden = isRecovery;
  if (authRecoveryPanel) authRecoveryPanel.hidden = !isRecovery;
  if (authTabsContainer) {
    authTabsContainer.classList.toggle('is-hidden', isRecovery);
  }
  if (!isRecovery) {
    setAuthTab('login');
  }
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

const flashSyncIndicator = () => {
  if (!statusBadge) return;
  statusBadge.classList.add('is-sync');
  setTimeout(() => {
    statusBadge.classList.remove('is-sync');
  }, 800);
};

const withTimeout = (promise, ms) =>
  new Promise((resolve, reject) => {
    const timer = setTimeout(() => {
      reject(new Error('Tiempo de espera de sincronizacion.'));
    }, ms);
    promise
      .then((value) => {
        clearTimeout(timer);
        resolve(value);
      })
      .catch((error) => {
        clearTimeout(timer);
        reject(error);
      });
  });

const getLastUploadedAt = () => {
  const value = localStorage.getItem(CLOUD_LAST_UPLOADED_KEY);
  return value ? Date.parse(value) : null;
};

const setLastUploadedAt = (value) => {
  const iso = value instanceof Date ? value.toISOString() : value;
  if (iso) {
    localStorage.setItem(CLOUD_LAST_UPLOADED_KEY, iso);
  }
};

const hasPendingLocalChanges = () => {
  const localUpdatedAt = getLocalUpdatedAt();
  const lastUploadedAt = getLastUploadedAt();
  if (!localUpdatedAt) return false;
  if (!lastUploadedAt) return true;
  return localUpdatedAt > lastUploadedAt;
};

const performCloudUpload = async () => {
  if (!supabaseClient || !cloudUser || isCloudImporting || !cloudReady) return false;
  if (cloudSyncInFlight) return false;
  cloudSyncInFlight = true;
  try {
    if (!navigator.onLine) {
      setCloudStatus('Sin conexion. Pendiente de sincronizar...', 'warn');
      return false;
    }
    const payload = await getExportPayload();
    const uploadedAt = new Date().toISOString();
    const { error } = await withTimeout(
      supabaseClient.from('user_data').upsert(
        {
          user_id: cloudUser.id,
          data: payload,
          updated_at: uploadedAt,
        },
        { onConflict: 'user_id' }
      ),
      CLOUD_SYNC_TIMEOUT_MS
    );
    if (error) {
      setCloudError(error.message);
      setCloudStatus('Error al sincronizar. Reintentando...', 'error');
      setTimeout(() => scheduleCloudSync(), CLOUD_SYNC_RETRY_MS);
      return false;
    }
    cloudSyncPending = false;
    setLastUploadedAt(uploadedAt);
    setCloudStatus('Sincronizado.', 'ok');
    setCloudLastSync(`Ultima sincronizacion: ${formatDateTime(uploadedAt)}`);
    flashSyncIndicator();
    return true;
  } catch (error) {
    setCloudError(error.message);
    setCloudStatus('Error al sincronizar. Reintentando...', 'error');
    setTimeout(() => scheduleCloudSync(), CLOUD_SYNC_RETRY_MS);
    return false;
  } finally {
    cloudSyncInFlight = false;
  }
};

const fetchCloudPayload = async () => {
  if (!supabaseClient || !cloudUser) return null;
  const { data, error } = await supabaseClient
    .from('user_data')
    .select('data, updated_at')
    .eq('user_id', cloudUser.id)
    .maybeSingle();
  if (error) {
    setCloudError(error.message);
    return null;
  }
  if (!data || !data.data) {
    return null;
  }
  return data;
};

const syncFromCloudIfNewer = async () => {
  if (!supabaseClient || !cloudUser || isCloudImporting || !cloudReady) return;
  if (hasPendingLocalChanges()) {
    await performCloudUpload();
  }
  const cloudPayload = await fetchCloudPayload();
  if (!cloudPayload) return;
  const remoteUpdatedAt = cloudPayload.updated_at ? Date.parse(cloudPayload.updated_at) : null;
  const localUpdatedAt = getLocalUpdatedAt();
  const lastUploadedAt = getLastUploadedAt();
  const baseline = lastUploadedAt || localUpdatedAt;
  if (remoteUpdatedAt && (!baseline || remoteUpdatedAt > baseline)) {
    try {
      isCloudImporting = true;
    await importPayload(cloudPayload.data);
    setCloudStatus('Datos descargados.', 'ok');
    setLocalUpdatedAt(cloudPayload.updated_at);
    setLastUploadedAt(cloudPayload.updated_at);
    setCloudLastSync(`Ultima sincronizacion: ${formatDateTime(cloudPayload.updated_at)}`);
    flashSyncIndicator();
    await hydrateProfileFromCloudIfMissing();
  } catch (err) {
      setCloudError(err.message);
      setCloudStatus('Error al descargar.', 'error');
    } finally {
      isCloudImporting = false;
    }
  }
};

const startCloudPolling = () => {
  if (cloudPollTimer) {
    clearInterval(cloudPollTimer);
  }
  if (!supabaseClient || !cloudUser) return;
  cloudPollTimer = setInterval(() => {
    if (!isAuthenticated) return;
    if (document.hidden) return;
    syncFromCloudIfNewer();
  }, CLOUD_POLL_INTERVAL_MS);
};

const stopCloudPolling = () => {
  if (cloudPollTimer) {
    clearInterval(cloudPollTimer);
    cloudPollTimer = null;
  }
};

const startCloudRealtime = () => {
  if (!supabaseClient || !cloudUser) return;
  if (cloudRealtimeChannel) {
    cloudRealtimeChannel.unsubscribe();
    cloudRealtimeChannel = null;
  }
  cloudRealtimeChannel = supabaseClient
    .channel(`user-data-${cloudUser.id}`)
    .on(
      'postgres_changes',
      { event: '*', schema: 'public', table: 'user_data', filter: `user_id=eq.${cloudUser.id}` },
      () => {
        syncFromCloudIfNewer();
      }
    )
    .subscribe();
};

const stopCloudRealtime = () => {
  if (!cloudRealtimeChannel) return;
  cloudRealtimeChannel.unsubscribe();
  cloudRealtimeChannel = null;
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
    if (profileEmail) {
      profileEmail.value = user.email || '';
    }
    if (profileMenu) {
      profileMenu.hidden = false;
    }
    if (settingsButton) {
      settingsButton.hidden = false;
    }
    if (cloudSessionPanel) cloudSessionPanel.hidden = false;
    if (cloudAuthForm) cloudAuthForm.hidden = true;
    renderProfile();
    syncProfilePublic();
    startCloudPolling();
    startCloudRealtime();
    const route = location.hash.replace('#', '') || 'home';
    setView(route === 'auth' ? 'home' : route);
  } else {
    setCloudStatus('No autenticado.', 'warn');
    setCloudControls(false);
    stopCloudPolling();
    stopCloudRealtime();
    clearLocalUserData();
    friendsCache = { friendships: [], profiles: new Map(), notifications: [] };
    state.currentFriendId = null;
    if (profileMenu) {
      profileMenu.hidden = true;
    }
    if (settingsButton) {
      settingsButton.hidden = true;
    }
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
  const cloudPayload = await fetchCloudPayload();
  if (!cloudPayload) {
    await clearLocalUserData();
    setCloudStatus('No hay datos en la nube.', 'warn');
    return;
  }
  try {
    isCloudImporting = true;
    await importPayload(cloudPayload.data);
    setCloudStatus('Datos descargados.', 'ok');
    setLocalUpdatedAt(cloudPayload.updated_at);
    setLastUploadedAt(cloudPayload.updated_at);
    setCloudLastSync(`Ultima sincronizacion: ${formatDateTime(cloudPayload.updated_at)}`);
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
    if (_event === 'PASSWORD_RECOVERY') {
      setRecoveryMode(true);
    }
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
      setRecoveryError('');
    });
  });
}

if (forgotPassword) {
  forgotPassword.addEventListener('click', () => {
    if (resetError) resetError.textContent = '';
    if (resetEmail) {
      resetEmail.value = cloudEmail ? cloudEmail.value.trim() : '';
      resetEmail.focus();
    }
    if (resetModal) {
      resetModal.hidden = false;
    }
  });
}

if (resetCancel) {
  resetCancel.addEventListener('click', () => {
    if (resetModal) resetModal.hidden = true;
  });
}

if (resetOverlay) {
  resetOverlay.addEventListener('click', () => {
    if (resetModal) resetModal.hidden = true;
  });
}

if (resetSend) {
  resetSend.addEventListener('click', async () => {
    if (!supabaseClient) {
      if (resetError) resetError.textContent = 'Supabase no disponible.';
      return;
    }
    const email = resetEmail ? resetEmail.value.trim() : '';
    if (!email) {
      if (resetError) resetError.textContent = 'Introduce tu email.';
      return;
    }
    const { error } = await supabaseClient.auth.resetPasswordForEmail(email, {
      redirectTo: AUTH_REDIRECT_URL,
    });
    if (error) {
      if (resetError) resetError.textContent = error.message;
      return;
    }
    if (resetError) {
      resetError.textContent = 'Enlace enviado. Revisa tu correo.';
    }
  });
}

if (recoverySubmit) {
  recoverySubmit.addEventListener('click', async () => {
    if (!supabaseClient) {
      setRecoveryError('Supabase no disponible.');
      return;
    }
    const password = recoveryPassword ? recoveryPassword.value : '';
    const confirm = recoveryPasswordConfirm ? recoveryPasswordConfirm.value : '';
    if (!password || !confirm) {
      setRecoveryError('Completa los dos campos.');
      return;
    }
    if (password.length < 6) {
      setRecoveryError('La contrasena debe tener al menos 6 caracteres.');
      return;
    }
    if (password !== confirm) {
      setRecoveryError('Las contrasenas no coinciden.');
      return;
    }
    const { error } = await supabaseClient.auth.updateUser({ password });
    if (error) {
      setRecoveryError(error.message);
      return;
    }
    setRecoveryError('');
    setCloudStatus('Contrasena actualizada. Inicia sesion.', 'ok');
    await supabaseClient.auth.signOut();
    setRecoveryMode(false);
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
      options: {
        emailRedirectTo: AUTH_REDIRECT_URL,
        data: fullName ? { full_name: fullName } : undefined,
      },
    });
    if (error) {
      setSignupError(error.message);
      return;
    }
    setCloudStatus('Cuenta creada. Revisa tu correo para confirmarlo.', 'ok');
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
    if (route === 'profile') {
      renderProfile();
    }
    if (route === 'records') {
      renderRecords();
    }
    if (route === 'friends') {
      renderFriendsView();
    }
    if (route === 'gallery') {
      renderGallery();
    }
    if (profileMenu) {
      profileMenu.classList.remove('is-open');
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

if (saveProfile) {
  saveProfile.addEventListener('click', async () => {
    if (profileError) profileError.textContent = '';
    try {
      await profileRepository.saveProfile({
        name: profileName ? profileName.value.trim() : '',
        goal: profileGoal ? profileGoal.value.trim() : '',
        experience: profileExperience ? profileExperience.value : '',
        age: parseNumber(profileAge ? profileAge.value : ''),
        sex: profileSex ? profileSex.value : '',
        frequency: parseNumber(profileFrequency ? profileFrequency.value : ''),
        height: parseNumber(profileHeight ? profileHeight.value : ''),
        weight: parseNumber(profileWeight ? profileWeight.value : ''),
        notes: profileNotes ? profileNotes.value.trim() : '',
        avatar: currentProfileAvatar,
      });
      setCloudStatus('Perfil guardado.', 'ok');
      if (saveProfile) {
        saveProfile.classList.add('is-saving');
      }
      await renderProfile();
      await syncProfilePublic();
      await renderHomeDashboard();
      setTimeout(() => {
        if (saveProfile) {
          saveProfile.classList.remove('is-saving');
        }
        setView('home');
      }, 450);
    } catch (error) {
      if (profileError) profileError.textContent = error.message;
    }
  });
}

if (profileAvatarInput) {
  profileAvatarInput.addEventListener('change', async (event) => {
    const file = event.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      currentProfileAvatar = reader.result || '';
      if (profileAvatarLarge) {
        profileAvatarLarge.style.backgroundImage = currentProfileAvatar
          ? `url('${currentProfileAvatar}')`
          : '';
      }
      if (profileButton) {
        profileButton.classList.toggle('has-avatar', Boolean(currentProfileAvatar));
      }
      if (profileAvatar) {
        profileAvatar.src = currentProfileAvatar || '';
      }
    };
    reader.readAsDataURL(file);
  });
}

if (profileLogout) {
  profileLogout.addEventListener('click', async () => {
    if (!supabaseClient) return;
    await supabaseClient.auth.signOut();
  });
}

if (profileButton && profileMenu) {
  profileButton.addEventListener('click', (event) => {
    event.preventDefault();
    profileMenu.classList.toggle('is-open');
  });
}

document.addEventListener('click', (event) => {
  if (!profileMenu || !profileMenu.classList.contains('is-open')) return;
  if (profileMenu.contains(event.target)) return;
  profileMenu.classList.remove('is-open');
});

window.addEventListener('online', updateStatus);
window.addEventListener('offline', updateStatus);
window.addEventListener('online', () => {
  if (cloudSyncPending) {
    scheduleCloudSync();
  }
  if (isAuthenticated) {
    syncFromCloudIfNewer();
  }
});

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    if (!ENABLE_SERVICE_WORKER) {
      navigator.serviceWorker.getRegistrations().then((registrations) => {
        registrations.forEach((registration) => registration.unregister());
      });
      if (window.caches) {
        caches.keys().then((keys) => keys.forEach((key) => caches.delete(key)));
      }
      return;
    }
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

document.addEventListener('visibilitychange', () => {
  if (!document.hidden && isAuthenticated) {
    syncFromCloudIfNewer();
  }
});

window.addEventListener('focus', () => {
  if (isAuthenticated) {
    syncFromCloudIfNewer();
  }
});

const startApp = async () => {
  loadTheme();
  if (appVersion) {
    appVersion.textContent = APP_VERSION;
  }
  if (supabaseClient) {
    const hash = location.hash.startsWith('#') ? location.hash.slice(1) : '';
    if (hash.includes('type=recovery')) {
      const params = new URLSearchParams(hash);
      const accessToken = params.get('access_token');
      const refreshToken = params.get('refresh_token');
      if (accessToken && refreshToken) {
        const { error } = await supabaseClient.auth.setSession({
          access_token: accessToken,
          refresh_token: refreshToken,
        });
        if (!error) {
          setRecoveryMode(true);
          history.replaceState(null, '', `${location.pathname}${location.search}#auth`);
        }
      }
    }
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
    await renderProfile();
    await renderRunning();
    await renderGallery();
  } catch (error) {
    console.error('No se pudo inicializar la base local.', error);
    statusBadge.textContent = 'Error de datos';
    statusBadge.style.borderColor = 'var(--danger)';
    isSeeding = false;
  }
};

startApp();
