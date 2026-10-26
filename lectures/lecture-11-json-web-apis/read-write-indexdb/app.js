const DB_NAME = "AppDatabase";
const DB_VERSION = 1;
const STORE_NAME = "users";

// ----------------------------------------------------
// 1. OPEN DATABASE (once, connection is reused)
// ----------------------------------------------------
function openDatabase() {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, DB_VERSION);

    request.onupgradeneeded = (event) => {
      const db = event.target.result;
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        // 'id' is the primary key Path
        db.createObjectStore(STORE_NAME, {
          keyPath: "id",
          autoIncrement: true,
        });
      }
    };

    request.onsuccess = () => {
      const db = request.result;
      // Close cleanly if another tab upgrades the schema
      db.onversionchange = () => {
        db.close();
        dbPromise = null;
      };
      resolve(db);
    };
    request.onerror = () => reject(request.error);
  });
}

// Cached connection promise: open once, reuse everywhere
let dbPromise = null;
function getDb() {
  if (!dbPromise) {
    dbPromise = openDatabase().catch((err) => {
      dbPromise = null; // allow retry after a failure
      throw err;
    });
  }
  return dbPromise;
}

// ----------------------------------------------------
// 2. ADD OR UPDATE (WRITE) RECORD
//    Resolves only after the transaction has committed.
// ----------------------------------------------------
async function saveUser(userObject) {
  const db = await getDb();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(STORE_NAME, "readwrite");
    const store = tx.objectStore(STORE_NAME);

    let key;
    let request;
    if (userObject.id !== undefined && userObject.id !== null) {
      // UPDATE: store.put() replaces existing record matching keyPath 'id'
      request = store.put(userObject);
    } else {
      // INSERT: Remove 'id' property so autoIncrement generates a new key
      delete userObject.id;
      request = store.add(userObject);
    }
    request.onsuccess = () => {
      key = request.result;
    };

    tx.oncomplete = () => resolve(key);
    tx.onerror = () => reject(tx.error);
    tx.onabort = () => reject(tx.error);
  });
}

// ----------------------------------------------------
// 3. READ ALL RECORDS
// ----------------------------------------------------
async function getAllUsers() {
  const db = await getDb();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(STORE_NAME, "readonly");
    const store = tx.objectStore(STORE_NAME);
    const request = store.getAll();

    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

// ----------------------------------------------------
// 4. READ SINGLE RECORD BY ID
// ----------------------------------------------------
async function getUserById(id) {
  const db = await getDb();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(STORE_NAME, "readonly");
    const store = tx.objectStore(STORE_NAME);
    const request = store.get(id);

    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

// ----------------------------------------------------
// 5. DELETE RECORD BY ID
//    Resolves only after the transaction has committed.
// ----------------------------------------------------
async function deleteUser(id) {
  const db = await getDb();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(STORE_NAME, "readwrite");
    const store = tx.objectStore(STORE_NAME);

    store.delete(id);

    tx.oncomplete = () => resolve();
    tx.onerror = () => reject(tx.error);
    tx.onabort = () => reject(tx.error);
  });
}

// ----------------------------------------------------
// UI & DOM CONTROLLERS
// ----------------------------------------------------
const userForm = document.getElementById("userForm");
const userIdInput = document.getElementById("userId");
const userNameInput = document.getElementById("userName");
const userEmailInput = document.getElementById("userEmail");
const userRoleInput = document.getElementById("userRole");
const btnSubmit = document.getElementById("btnSubmit");
const btnCancel = document.getElementById("btnCancel");
const userTableBody = document.getElementById("userTableBody");
const errorMessage = document.getElementById("errorMessage");

// Build a button with a click handler (no inline HTML / onclick)
function makeButton(label, handler) {
  const btn = document.createElement("button");
  btn.type = "button";
  btn.textContent = label;
  btn.addEventListener("click", handler);
  return btn;
}

// Render all rows to table from fresh database reads
async function renderTable() {
  try {
    const users = await getAllUsers();
    userTableBody.replaceChildren();

    users.forEach((user) => {
      const tr = document.createElement("tr");

      // textContent prevents user-supplied values from being parsed as HTML
      [user.id, user.name, user.email, user.role].forEach((val) => {
        const td = document.createElement("td");
        td.textContent = val;
        tr.appendChild(td);
      });

      const actions = document.createElement("td");
      actions.className = "actions";
      actions.appendChild(makeButton("Edit", () => onEdit(user.id)));
      actions.appendChild(makeButton("Delete", () => onDelete(user.id)));
      tr.appendChild(actions);

      userTableBody.appendChild(tr);
    });
  } catch (err) {
    showError(`Failed to fetch records: ${err.message || err}`);
  }
}

// Handle Form Submit (Insert or Update)
userForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  clearError();

  const userObject = {
    name: userNameInput.value.trim(),
    email: userEmailInput.value.trim(),
    role: userRoleInput.value.trim(),
  };

  // Assign numeric primary key when updating
  if (userIdInput.value !== "") {
    userObject.id = parseInt(userIdInput.value, 10);
  }

  try {
    await saveUser(userObject);
    resetForm();
    await renderTable();
  } catch (err) {
    console.error("IndexedDB Save Failed:", err);
    showError(`Save failed: ${err.message || err}`);
  }
});

// Populate form fields for record modification
async function onEdit(id) {
  clearError();
  try {
    const user = await getUserById(id);
    if (user) {
      userIdInput.value = user.id;
      userNameInput.value = user.name;
      userEmailInput.value = user.email;
      userRoleInput.value = user.role;

      btnSubmit.textContent = "Update User";
      btnCancel.style.display = "inline-block";
    }
  } catch (err) {
    showError(`Failed to load record: ${err.message || err}`);
  }
}

// Handle Delete
async function onDelete(id) {
  clearError();
  try {
    await deleteUser(id);
    // If the deleted record was being edited, leave edit mode
    if (userIdInput.value === String(id)) {
      resetForm();
    }
    await renderTable();
  } catch (err) {
    showError(`Failed to delete record: ${err.message || err}`);
  }
}

// Reset UI back to create mode
btnCancel.addEventListener("click", resetForm);

function resetForm() {
  userIdInput.value = "";
  userForm.reset();
  btnSubmit.textContent = "Add User";
  btnCancel.style.display = "none";
  clearError();
}

function showError(msg) {
  errorMessage.textContent = msg;
}

function clearError() {
  errorMessage.textContent = "";
}

// Initial table render
renderTable();
