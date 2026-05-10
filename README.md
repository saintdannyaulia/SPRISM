# ⭐ StarLive Group — Platform Documentation

> Multi-vertical digital platform untuk komunitas kreator, manajemen afiliasi, toko, galeri, dan sistem sosial terpadu — dibangun dalam satu file HTML mandiri.

---

## 📋 Daftar Isi

- [Gambaran Umum](#gambaran-umum)
- [Fitur Lengkap](#fitur-lengkap)
- [Akun Demo](#akun-demo)
- [Struktur Halaman](#struktur-halaman)
- [Sistem Data (localStorage)](#sistem-data-localstorage)
- [Migrasi ke Firestore](#migrasi-ke-firestore)
- [Struktur Koleksi Firestore](#struktur-koleksi-firestore)
- [Kode Pengganti DB Layer](#kode-pengganti-db-layer)
- [Firebase Storage untuk Media](#firebase-storage-untuk-media)
- [Realtime Chat dengan Firestore](#realtime-chat-dengan-firestore)
- [Tips Produksi](#tips-produksi)

---

## Gambaran Umum

StarLive Group adalah aplikasi web satu halaman (SPA) yang dibangun sepenuhnya dalam satu file `HTML` tanpa framework eksternal. Semua logika, tampilan, dan data dikelola lewat JavaScript murni. Saat ini menggunakan `localStorage` sebagai database lokal, dan panduan ini menjelaskan cara memigrasikannya ke **Cloud Firestore** agar data bersifat persisten dan bisa dibagikan antar perangkat/pengguna.

```
StarLiveGroup.html   ← Seluruh aplikasi ada di sini
README.md            ← Dokumentasi ini
```

---

## Fitur Lengkap

### 🏠 Home
- Slideshow hero interaktif (6 slide, swipe/drag, auto-play setiap 10 detik)
- Statistik komunitas (kreator, afiliasi, proyek, komunitas)
- Deskripsi perusahaan multi-bahasa

### 🤝 Affiliation
- 5 organisasi mitra: Polaris Academy, Zenith Prime Labs, Solstice Media Info, Nova Creative Studio, Stellaris Lounge
- Accordion **exclusive** — hanya satu tab terbuka dalam satu waktu
- Tombol Visit Portal ke URL masing-masing afiliasi

### 👨‍💻 Creator
- Grid kartu kreator dengan foto, role, fraction, tags, dan bio singkat
- Halaman profil lengkap: Bio, Pendidikan, Pencapaian, Hobby
- Upload foto profil kreator (Admin)
- Upload & download CV kreator (Admin)
- Modal kontak (email & telepon)

### 🚀 Project
- 4 proyek aktif dengan progress bar, budget, tim, status, dan tags
- Upload gambar proyek (Admin)

### 🖼️ Gallery
- Grid media (foto & video) dengan kategori
- Upload media baru (Admin)
- Modal preview media full-size

### 🛒 Store *(login required)*
- 6 produk dengan stok, harga, dan foto (Admin bisa edit)
- Keranjang belanja dengan quantity control
- Checkout via E-Wallet dengan cek saldo otomatis
- Top-up Wallet dari halaman checkout jika saldo kurang

### 🌐 Social
- Tautan ke 5 platform sosial (Instagram, Facebook, Twitter/X, YouTube, TikTok)
- Statistik followers

### 📊 Dashboard *(admin only)*
- Analytics: Revenue, Users, Engagement, Security (pie chart)
- Trending hashtags
- Manajemen semua user: lihat detail, adjust wallet, ubah role, **assign Fraction**

### 🔐 Vault *(admin only)*
- Penyimpanan data rahasia bisnis
- Kategori: Confidential, Financial, Legal, HR, Technical, Other
- Search by title / owner / kode
- CRUD entry dengan owner code

### 👤 My Account
- **Cover photo** — bisa diubah (upload gambar)
- **Foto profil** — bisa diubah (upload gambar)
- Edit nama dan bio
- **Wallet** — tampilkan saldo + modal Top-Up interaktif (quick amount + custom amount)
- **Fraction** — ditampilkan dari assignment Admin (Singularity Nexus / Protocol Zero / Shadow Syntax)
- Manajemen teman: kirim/terima/tolak/hapus friend request
- Pencarian user lain
- Profil publik user lain

### 💬 Chat
- **Tab Friends** — chat private dengan teman (perlu jadi teman dulu)
- **Tab Service** — pesan langsung ke Admin (complaint, suggestion, partnership, inquiry)
- **Badge notifikasi angka** pada tombol 💬 FAB — terbagi per tab (Friend / Service)
- Kirim teks & gambar
- Auto-refresh setiap 4 detik saat chat terbuka

### ⚙️ Settings *(login required)*
- **Theme**: Cyber Serenity, Institutional Future, Golden Autumn
- **Season**: Spring 🌸 / Summer ☀️ / Autumn 🍂 / Winter ❄️ — masing-masing mengubah efek partikel, elemen visual, dan background
- **Background**: 6 preset gradient + custom upload gambar/video (semua user yang login)
- **Language**: English, Indonesian, Japanese, Chinese, Korean, German

---

## Akun Demo

| Role  | Email                    | Password   |
|-------|--------------------------|------------|
| Admin | `admin@starlive.com`     | `admin123` |
| User  | `user@starlive.com`      | `user123`  |

> Admin memiliki akses ke Dashboard, Vault, edit Creator/Gallery/Store/Project, dan assign Fraction ke user.

---

## Struktur Halaman

```
/ (Home)
├── /affiliation        — Daftar afiliasi accordion
├── /creator            — Grid kreator
│   └── /profile        — Detail kreator
├── /project            — Daftar proyek aktif
├── /gallery            — Grid media
├── /store              — Toko merchandise [login]
├── /social             — Platform sosial
├── /dashboard          — Admin panel [admin]
├── /vault              — Data rahasia [admin]
├── /myaccount          — Profil & pengaturan akun [login]
│   └── /userprofile    — Profil publik user lain
```

---

## Sistem Data (localStorage)

Saat ini semua data disimpan di `localStorage` browser dengan prefix `sl5_`:

| Key localStorage      | Isi                                              |
|-----------------------|--------------------------------------------------|
| `sl5_users`           | Array semua user (profil, wallet, friends, dll.) |
| `sl5_creators`        | Array kreator                                    |
| `sl5_projects`        | Array proyek                                     |
| `sl5_gallery`         | Array item galeri                                |
| `sl5_products`        | Array produk toko                                |
| `sl5_vault`           | Array entry vault (admin)                        |
| `sl5_adminmsgs`       | Array pesan ke admin (support chat)              |
| `sl5_chat_{roomId}`   | Array pesan per room chat                        |

> **Batasan localStorage**: Data hanya ada di browser lokal — tidak dibagikan antar perangkat, tidak persisten jika browser di-clear, tidak real-time. Gunakan Firestore untuk produksi.

---

## Migrasi ke Firestore

### Langkah 1 — Buat Firebase Project

1. Buka [https://console.firebase.google.com](https://console.firebase.google.com)
2. Klik **Add Project** → beri nama (misal: `starlive-group`)
3. Nonaktifkan Google Analytics jika tidak diperlukan → **Create Project**
4. Di sidebar kiri: **Build → Firestore Database**
5. Klik **Create Database** → pilih mode **Production** → pilih region terdekat (misal: `asia-southeast1` untuk Indonesia)
6. Di sidebar kiri: **Build → Authentication** → **Get started** → aktifkan provider **Email/Password**

### Langkah 2 — Daftarkan Web App

1. Di Firebase Console → klik ikon `</>` (Web)
2. Beri nama app (misal: `starlive-web`) → klik **Register app**
3. Salin `firebaseConfig` yang muncul:

```javascript
const firebaseConfig = {
  apiKey: "AIza...",
  authDomain: "starlive-group.firebaseapp.com",
  projectId: "starlive-group",
  storageBucket: "starlive-group.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abc123"
};
```

### Langkah 3 — Tambahkan Firebase SDK ke HTML

Tambahkan di dalam `<head>` file HTML, **sebelum** tag `<script>` utama:

```html
<!-- Firebase SDK (modular v10+) -->
<script type="module">
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
  import {
    getFirestore, collection, doc,
    getDoc, getDocs, setDoc, updateDoc,
    addDoc, deleteDoc, query, where,
    orderBy, onSnapshot, serverTimestamp
  } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";
  import {
    getAuth, createUserWithEmailAndPassword,
    signInWithEmailAndPassword, signOut, onAuthStateChanged
  } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
  import {
    getStorage, ref, uploadString, getDownloadURL, deleteObject
  } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-storage.js";

  const firebaseConfig = {
    // paste config kamu di sini
  };

  const app  = initializeApp(firebaseConfig);
  window.db  = getFirestore(app);
  window.auth = getAuth(app);
  window.storage = getStorage(app);

  // Expose Firestore helpers ke global scope
  window.FS = {
    collection, doc, getDoc, getDocs, setDoc, updateDoc,
    addDoc, deleteDoc, query, where, orderBy, onSnapshot, serverTimestamp
  };
</script>
```

> ⚠️ Ubah tag `<script>` utama aplikasi menjadi `<script type="module">` juga agar bisa mengakses `window.db`.

---

## Struktur Koleksi Firestore

### `users/{email}`
```json
{
  "email": "user@starlive.com",
  "username": "Demo User",
  "role": "user",
  "wallet": 100,
  "avatar": null,
  "cover": null,
  "bio": "Hi! I just joined StarLive.",
  "joinDate": "2025-01-01T00:00:00.000Z",
  "friends": ["admin@starlive.com"],
  "friendRequests": [],
  "online": true,
  "lastSeen": "2025-01-01T12:00:00.000Z",
  "fraction": null
}
```

> 🔑 Gunakan email sebagai **Document ID** (titik dalam email perlu di-encode, misalnya ganti `.` dengan `_dot_`).

---

### `creators/{id}`
```json
{
  "id": 1,
  "name": "Aiden Voss",
  "role": "Lead Developer",
  "fraction": "Zenith Prime Labs",
  "bio": "...",
  "education": "...",
  "achievements": "...",
  "hobby": "Cyberpunk & synthwave",
  "tags": ["React", "Node.js", "Rust"],
  "email": "aiden@starlive.com",
  "phone": "+62 812 0001",
  "photo": null,
  "cvUrl": null
}
```

---

### `projects/{id}`
```json
{
  "id": 1,
  "name": "Project Aurora",
  "desc": "...",
  "team": ["Aiden Voss", "Marcus Chen"],
  "progress": 78,
  "budget": 450000,
  "status": "Active",
  "tags": ["Streaming", "SE Asia"],
  "image": null
}
```

---

### `gallery/{id}`
```json
{
  "id": "G1234567890",
  "type": "image",
  "title": "Nebula Conference 2025",
  "cat": "Event",
  "mediaUrl": "https://firebasestorage.googleapis.com/...",
  "createdAt": "2025-01-01T00:00:00.000Z"
}
```

---

### `products/{id}`
```json
{
  "id": 1,
  "name": "StarLive Hoodie",
  "price": 85,
  "cat": "Apparel",
  "desc": "Premium cyber-aesthetic hoodie",
  "stock": 50,
  "image": "https://firebasestorage.googleapis.com/..."
}
```

---

### `vault/{id}`
```json
{
  "id": "V1234567890",
  "title": "Q3 Financial Report",
  "category": "Financial",
  "owner": "Admin StarLive",
  "ownerCode": "V-ABC123",
  "content": "...",
  "tags": "finance, Q3",
  "createdBy": "admin@starlive.com",
  "createdAt": "timestamp",
  "updatedAt": "timestamp"
}
```

---

### `adminMessages/{id}`
```json
{
  "id": "M1234567890",
  "from": "user@starlive.com",
  "fromName": "Demo User",
  "msgType": "complaint",
  "text": "...",
  "time": "timestamp",
  "read": false,
  "replied": false,
  "reply": null,
  "replyRead": false
}
```

---

### `chats/{roomId}/messages/{msgId}`
```
roomId format: "emailA__emailB" (diurutkan alfabet)
```
```json
{
  "from": "user@starlive.com",
  "text": "Hello!",
  "img": null,
  "time": "timestamp",
  "read": false
}
```

---

## Kode Pengganti DB Layer

Ganti seluruh blok `const DB = { ... }` di aplikasi dengan versi Firestore berikut. Taruh di dalam `<script type="module">` setelah inisialisasi Firebase:

```javascript
// ── HELPER ────────────────────────────────────────────────────
// Encode email jadi Firestore-safe document ID
const encEmail = e => e.replace(/\./g, '_dot_').replace(/@/g, '_at_');

// ── DB (Firestore) ─────────────────────────────────────────────
const DB = {

  // ── USERS ────────────────────────────────────────────────────
  async getUsers() {
    const snap = await FS.getDocs(FS.collection(db, 'users'));
    return snap.docs.map(d => d.data());
  },
  async byEmail(email) {
    const snap = await FS.getDoc(FS.doc(db, 'users', encEmail(email)));
    return snap.exists() ? snap.data() : null;
  },
  async findUser(email, password) {
    // Autentikasi HARUS pakai Firebase Auth — jangan cek password di client!
    // Fungsi ini hanya dipakai saat migrasi; setelah pakai Auth, hapus ini.
    const u = await this.byEmail(email);
    return (u && u.password === password) ? u : null;
  },
  async updUser(email, data) {
    await FS.updateDoc(FS.doc(db, 'users', encEmail(email)), data);
  },
  async reg(email, password, username) {
    const existing = await this.byEmail(email);
    if (existing) return { ok: false, msg: 'Email already registered.' };
    const isAdmin = email === 'admin@starlive.com';
    const now = new Date().toISOString();
    const u = {
      email, password, username,
      role: isAdmin ? 'admin' : 'user',
      wallet: 0, avatar: null, cover: null,
      bio: 'Hi! I just joined StarLive.',
      joinDate: now, friends: [], friendRequests: [],
      online: true, lastSeen: now, fraction: null
    };
    await FS.setDoc(FS.doc(db, 'users', encEmail(email)), u);
    return { ok: true, user: u };
  },

  // ── FRIEND REQUESTS ───────────────────────────────────────────
  async sendFR(from, to) {
    const target = await this.byEmail(to);
    if (!target) return false;
    const reqs = target.friendRequests || [];
    const frns = target.friends || [];
    if (reqs.includes(from) || frns.includes(from)) return false;
    await FS.updateDoc(FS.doc(db, 'users', encEmail(to)), {
      friendRequests: [...reqs, from]
    });
    return true;
  },
  async acceptFR(me, from) {
    const [a, b] = await Promise.all([this.byEmail(me), this.byEmail(from)]);
    const aFriends = [...new Set([...(a.friends || []), from])];
    const bFriends = [...new Set([...(b.friends || []), me])];
    const aReqs = (a.friendRequests || []).filter(x => x !== from);
    await Promise.all([
      FS.updateDoc(FS.doc(db, 'users', encEmail(me)), { friends: aFriends, friendRequests: aReqs }),
      FS.updateDoc(FS.doc(db, 'users', encEmail(from)), { friends: bFriends })
    ]);
  },
  async rejectFR(me, from) {
    const u = await this.byEmail(me);
    const reqs = (u.friendRequests || []).filter(x => x !== from);
    await FS.updateDoc(FS.doc(db, 'users', encEmail(me)), { friendRequests: reqs });
  },
  async removeFriend(me, fe) {
    const [a, b] = await Promise.all([this.byEmail(me), this.byEmail(fe)]);
    await Promise.all([
      FS.updateDoc(FS.doc(db, 'users', encEmail(me)), { friends: (a.friends||[]).filter(x=>x!==fe) }),
      FS.updateDoc(FS.doc(db, 'users', encEmail(fe)), { friends: (b.friends||[]).filter(x=>x!==me) })
    ]);
  },

  // ── CHAT ─────────────────────────────────────────────────────
  async getMsgs(room) {
    const q = FS.query(
      FS.collection(db, 'chats', room, 'messages'),
      FS.orderBy('time', 'asc')
    );
    const snap = await FS.getDocs(q);
    return snap.docs.map(d => ({ id: d.id, ...d.data() }));
  },
  async addMsg(room, msg) {
    await FS.addDoc(FS.collection(db, 'chats', room, 'messages'), {
      ...msg,
      time: FS.serverTimestamp()
    });
  },
  async saveMsgs(room, msgs) {
    // Untuk update read status secara batch
    const batch = msgs.filter(m => m.id);
    await Promise.all(batch.map(m =>
      FS.updateDoc(FS.doc(db, 'chats', room, 'messages', m.id), { read: m.read })
    ));
  },

  // Real-time listener untuk chat
  listenChat(room, callback) {
    const q = FS.query(
      FS.collection(db, 'chats', room, 'messages'),
      FS.orderBy('time', 'asc')
    );
    return FS.onSnapshot(q, snap => {
      const msgs = snap.docs.map(d => ({ id: d.id, ...d.data() }));
      callback(msgs);
    });
  },

  // ── ADMIN MESSAGES ────────────────────────────────────────────
  async getAdminMsgs() {
    const q = FS.query(FS.collection(db, 'adminMessages'), FS.orderBy('time', 'desc'));
    const snap = await FS.getDocs(q);
    return snap.docs.map(d => ({ id: d.id, ...d.data() }));
  },
  async addAdminMsg(msg) {
    await FS.addDoc(FS.collection(db, 'adminMessages'), {
      ...msg,
      time: FS.serverTimestamp()
    });
  },
  async updAdminMsg(id, data) {
    await FS.updateDoc(FS.doc(db, 'adminMessages', id), data);
  },
  async markAdminRead(email, isAdmin) {
    const msgs = await this.getAdminMsgs();
    const updates = msgs.filter(m =>
      isAdmin ? !m.read : (m.from === email && m.reply && !m.replyRead)
    );
    await Promise.all(updates.map(m =>
      FS.updateDoc(FS.doc(db, 'adminMessages', m.id),
        isAdmin ? { read: true } : { replyRead: true }
      )
    ));
  },

  // ── CREATORS ─────────────────────────────────────────────────
  async getCreators() {
    const snap = await FS.getDocs(FS.collection(db, 'creators'));
    if (snap.empty) return JSON.parse(JSON.stringify(CDEF)); // fallback ke default
    return snap.docs.map(d => d.data());
  },
  async updCreator(id, data) {
    await FS.updateDoc(FS.doc(db, 'creators', String(id)), data);
  },

  // ── PROJECTS ─────────────────────────────────────────────────
  async getProjects() {
    const snap = await FS.getDocs(FS.collection(db, 'projects'));
    if (snap.empty) return JSON.parse(JSON.stringify(PDEF));
    return snap.docs.map(d => d.data());
  },
  async updProject(id, data) {
    await FS.updateDoc(FS.doc(db, 'projects', String(id)), data);
  },

  // ── GALLERY ───────────────────────────────────────────────────
  async getGallery() {
    const snap = await FS.getDocs(FS.collection(db, 'gallery'));
    if (snap.empty) return JSON.parse(JSON.stringify(GALDEF));
    return snap.docs.map(d => d.data());
  },
  async saveGallery(items) {
    // Dipakai saat hapus item — lebih baik pakai deleteDoc per item
    // Lihat catatan di bawah
  },
  async addGalleryItem(item) {
    const ref = await FS.addDoc(FS.collection(db, 'gallery'), item);
    return ref.id;
  },
  async deleteGalleryItem(id) {
    await FS.deleteDoc(FS.doc(db, 'gallery', id));
  },

  // ── PRODUCTS ─────────────────────────────────────────────────
  async getProducts() {
    const snap = await FS.getDocs(FS.collection(db, 'products'));
    if (snap.empty) return JSON.parse(JSON.stringify(PRODDEF));
    return snap.docs.map(d => d.data());
  },
  async updProduct(id, data) {
    await FS.updateDoc(FS.doc(db, 'products', String(id)), data);
  },

  // ── VAULT ─────────────────────────────────────────────────────
  async getVault() {
    const snap = await FS.getDocs(FS.collection(db, 'vault'));
    return snap.docs.map(d => ({ id: d.id, ...d.data() }));
  },
  async addVault(entry) {
    entry.createdAt = new Date().toISOString();
    const ref = await FS.addDoc(FS.collection(db, 'vault'), entry);
    return { ...entry, id: ref.id };
  },
  async updVault(id, data) {
    await FS.updateDoc(FS.doc(db, 'vault', id), {
      ...data,
      updatedAt: new Date().toISOString()
    });
  },
  async delVault(id) {
    await FS.deleteDoc(FS.doc(db, 'vault', id));
  },
};
```

> ⚠️ **Penting**: Karena Firestore bersifat async, semua fungsi rendering (`rMyAcct`, `rCreators`, dll.) perlu diubah menjadi `async` dan menggunakan `await` sebelum memanggil DB. Contoh:
> ```javascript
> async function rCreators() {
>   const creators = await DB.getCreators();
>   // lanjut render...
> }
> ```

---

## Firebase Storage untuk Media

Gambar dan video saat ini disimpan sebagai **base64 string** di localStorage — ini tidak cocok untuk Firestore karena batas dokumen 1MB. Gunakan **Firebase Storage**:

```javascript
// Upload gambar ke Firebase Storage
async function uploadToStorage(file, path) {
  const storageRef = ref(storage, path);
  // Upload sebagai base64 data URL
  const reader = new FileReader();
  return new Promise((resolve, reject) => {
    reader.onload = async (e) => {
      try {
        await uploadString(storageRef, e.target.result, 'data_url');
        const url = await getDownloadURL(storageRef);
        resolve(url);
      } catch (err) { reject(err); }
    };
    reader.readAsDataURL(file);
  });
}

// Contoh penggunaan untuk foto profil:
async function onFiAv(e) {
  const file = e.target.files[0];
  if (!file) return;
  const url = await uploadToStorage(file, `avatars/${S.user.email}`);
  await DB.updUser(S.user.email, { avatar: url });
  S.user.avatar = url;
  applyTheme(); rMyAcct();
  notif('✅ Profile photo updated!', 'success');
  e.target.value = '';
}

// Path yang disarankan per jenis file:
// avatars/{email}
// covers/{email}
// creators/{id}/photo
// creators/{id}/cv
// gallery/{timestamp}_{filename}
// products/{id}
// backgrounds/{email}
```

---

## Realtime Chat dengan Firestore

Ganti polling interval 4 detik dengan **real-time listener**:

```javascript
let chatUnsubscribe = null; // simpan fungsi unsubscribe

function openChatRoom(room) {
  // Hentikan listener lama jika ada
  if (chatUnsubscribe) { chatUnsubscribe(); chatUnsubscribe = null; }

  // Mulai listener baru
  chatUnsubscribe = DB.listenChat(room, (messages) => {
    // Update UI setiap ada pesan baru
    renderMessages(messages);
  });
}

// Saat chat ditutup:
function closeChat() {
  if (chatUnsubscribe) { chatUnsubscribe(); chatUnsubscribe = null; }
  S.cpopen = false;
}
```

---

## Firestore Security Rules

Salin rules ini ke **Firestore → Rules** di Firebase Console:

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {

    // User hanya bisa baca/edit data dirinya sendiri
    match /users/{userId} {
      allow read: if request.auth != null;
      allow write: if request.auth != null
        && request.auth.token.email.replace('.','_dot_').replace('@','_at_') == userId;
      // Admin bisa edit semua user
      allow write: if request.auth != null
        && get(/databases/$(database)/documents/users/$(request.auth.token.email.replace('.','_dot_').replace('@','_at_'))).data.role == 'admin';
    }

    // Konten publik — siapa saja yang login bisa baca
    match /creators/{id} {
      allow read: if request.auth != null;
      allow write: if isAdmin();
    }
    match /projects/{id} {
      allow read: if request.auth != null;
      allow write: if isAdmin();
    }
    match /gallery/{id} {
      allow read: if request.auth != null;
      allow write: if isAdmin();
    }
    match /products/{id} {
      allow read: if request.auth != null;
      allow write: if isAdmin();
    }

    // Vault — hanya admin
    match /vault/{id} {
      allow read, write: if isAdmin();
    }

    // Chat — user hanya bisa baca room yang melibatkan dirinya
    match /chats/{roomId}/messages/{msgId} {
      allow read, write: if request.auth != null
        && roomId.matches('.*' + request.auth.token.email.split('@')[0] + '.*');
    }

    // Pesan Admin — user kirim, admin baca semua
    match /adminMessages/{id} {
      allow create: if request.auth != null;
      allow read, update: if isAdmin() || resource.data.from == request.auth.token.email;
    }

    // Helper function
    function isAdmin() {
      return request.auth != null
        && get(/databases/$(database)/documents/users/$(request.auth.token.email.replace('.','_dot_').replace('@','_at_'))).data.role == 'admin';
    }
  }
}
```

---

## Tips Produksi

### Autentikasi yang Benar
Saat ini password disimpan di plaintext di database. Untuk produksi, **gunakan Firebase Authentication**:

```javascript
// Register
async function doRegister(email, password, username) {
  const cred = await createUserWithEmailAndPassword(auth, email, password);
  await DB.reg(email, null, username); // password tidak perlu disimpan
}

// Login
async function doLogin(email, password) {
  const cred = await signInWithEmailAndPassword(auth, email, password);
  const user = await DB.byEmail(email);
  // set state S.loggedIn, S.user, dll.
}

// Logout
async function doLogout() {
  await signOut(auth);
}

// Auto-restore session saat halaman dimuat
onAuthStateChanged(auth, async (fbUser) => {
  if (fbUser) {
    const user = await DB.byEmail(fbUser.email);
    S.loggedIn = true;
    S.isAdmin = user?.role === 'admin';
    S.user = user;
    applyTheme(); rPage();
  }
});
```

### Optimasi Gambar
- Kompres gambar sebelum upload ke Storage (gunakan `canvas.toBlob()` dengan quality 0.7–0.8)
- Batasi ukuran file: tolak jika > 5MB

### Caching
Simpan data yang jarang berubah (creators, products) ke `sessionStorage` untuk mengurangi pembacaan Firestore:
```javascript
async function getCreatorsCached() {
  const cached = sessionStorage.getItem('creators');
  if (cached) return JSON.parse(cached);
  const data = await DB.getCreators();
  sessionStorage.setItem('creators', JSON.stringify(data));
  return data;
}
```

### Hosting
Deploy file HTML ke **Firebase Hosting**:
```bash
npm install -g firebase-tools
firebase login
firebase init hosting
# pilih "public" folder, SPA: No (karena single file)
cp StarLiveGroup.html public/index.html
firebase deploy
```

---

## Ringkasan Alur Migrasi

```
localStorage (sekarang)          Firestore (target)
─────────────────────────────    ──────────────────────────────
sl5_users          ──────────►  /users/{encEmail}
sl5_creators       ──────────►  /creators/{id}
sl5_projects       ──────────►  /projects/{id}
sl5_gallery        ──────────►  /gallery/{id}
sl5_products       ──────────►  /products/{id}
sl5_vault          ──────────►  /vault/{id}
sl5_adminmsgs      ──────────►  /adminMessages/{id}
sl5_chat_{room}    ──────────►  /chats/{room}/messages/{id}

base64 images      ──────────►  Firebase Storage URLs
password auth      ──────────►  Firebase Authentication
polling interval   ──────────►  onSnapshot (real-time)
```

---

*StarLive Group — Platform Digital Multi-Vertikal*
*Dokumentasi ini dibuat untuk versi v2 (post-patch 9 perbaikan)*
