# 🚀 Panduan Migrasi: localStorage → Supabase

Panduan lengkap untuk memindahkan semua data StarLive Group dari `localStorage` ke Supabase.

---

## 📋 Daftar Isi
1. [Apa itu Supabase?](#1-apa-itu-supabase)
2. [Setup Awal Supabase](#2-setup-awal-supabase)
3. [Buat Skema Database](#3-buat-skema-database)
4. [Install Supabase SDK](#4-install-supabase-sdk)
5. [Ganti Layer DB di app.js](#5-ganti-layer-db-di-appjs)
6. [Migrasi Autentikasi](#6-migrasi-autentikasi)
7. [Migrasi Chat ke Realtime](#7-migrasi-chat-ke-realtime)
8. [Migrasi File/Gambar ke Storage](#8-migrasi-filegaleri-ke-storage)
9. [Keamanan: Row Level Security](#9-keamanan-row-level-security-rls)
10. [Checklist Final](#10-checklist-final)

---

## 1. Apa itu Supabase?

Supabase adalah **backend-as-a-service** berbasis open source. Gratis untuk project kecil.

Yang kamu dapat:
- **PostgreSQL** — database SQL yang powerful, gantikan `localStorage`
- **Auth** — sistem login/register bawaan, gantikan logika autentikasi manual
- **Realtime** — chat benar-benar live via WebSocket
- **Storage** — simpan foto, avatar, gallery di cloud (bukan base64 di localStorage)
- **Auto REST API** — setiap tabel otomatis punya endpoint HTTP

---

## 2. Setup Awal Supabase

### Langkah 1 — Buat Project

1. Buka [https://supabase.com](https://supabase.com) → klik **Start your project**
2. Daftar/login dengan GitHub
3. Klik **New Project**
4. Isi:
   - **Name:** `starlive-group`
   - **Database Password:** buat password kuat, **simpan baik-baik!**
   - **Region:** pilih `Southeast Asia (Singapore)`
5. Tunggu ~2 menit sampai project siap

### Langkah 2 — Ambil Kredensial

Buka **Project Settings → API**, catat dua nilai ini:

```
Project URL  : https://xxxxxxxxxxxxxx.supabase.co
Anon Key     : eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

> ⚠️ **Jangan** pakai `service_role` key di frontend. Hanya `anon` key.

---

## 3. Buat Skema Database

Buka **SQL Editor** di dashboard Supabase, lalu jalankan SQL berikut satu per satu.

### Tabel: profiles (data user tambahan)
```sql
-- Tabel profiles melengkapi tabel auth.users bawaan Supabase
create table profiles (
  id          uuid references auth.users(id) on delete cascade primary key,
  username    text not null,
  role        text default 'user' check (role in ('user', 'admin')),
  wallet      integer default 0,
  avatar_url  text,
  cover_url   text,
  bio         text default 'Hi! I just joined StarLive.',
  online      boolean default false,
  last_seen   timestamptz default now(),
  friends     uuid[] default '{}',
  friend_reqs uuid[] default '{}',
  badges      text[] default '{}',
  created_at  timestamptz default now()
);
-- Aktifkan Row Level Security
alter table profiles enable row level security;
```

### Tabel: messages (chat)
```sql
create table messages (
  id         bigint generated always as identity primary key,
  room       text not null,        -- 'global' atau 'dm_<user1>_<user2>'
  sender_id  uuid references profiles(id) on delete cascade,
  content    text not null,
  created_at timestamptz default now()
);
alter table messages enable row level security;

-- Index untuk performa query chat
create index messages_room_idx on messages(room, created_at desc);
```

### Tabel: creators
```sql
create table creators (
  id          text primary key,
  name        text not null,
  role        text,
  affiliate   text,
  bio         text,
  photo_url   text,
  cover_url   text,
  tags        text[] default '{}',
  socials     jsonb default '{}',
  created_at  timestamptz default now()
);
alter table creators enable row level security;
```

### Tabel: projects
```sql
create table projects (
  id          text primary key,
  title       text not null,
  desc        text,
  status      text default 'active',
  progress    integer default 0 check (progress between 0 and 100),
  affiliate   text,
  lead        text,
  image_url   text,
  created_at  timestamptz default now()
);
alter table projects enable row level security;
```

### Tabel: gallery
```sql
create table gallery (
  id          bigint generated always as identity primary key,
  uploader_id uuid references profiles(id) on delete set null,
  url         text not null,
  type        text default 'image' check (type in ('image', 'video')),
  caption     text,
  created_at  timestamptz default now()
);
alter table gallery enable row level security;
```

### Tabel: products
```sql
create table products (
  id          bigint generated always as identity primary key,
  name        text not null,
  price       integer not null,
  stock       integer default 0,
  category    text,
  image_url   text,
  desc        text,
  created_at  timestamptz default now()
);
alter table products enable row level security;
```

### Tabel: topup_requests
```sql
create table topup_requests (
  id          bigint generated always as identity primary key,
  user_id     uuid references profiles(id) on delete cascade,
  amount      integer not null,
  method      text,
  proof_url   text,
  status      text default 'pending' check (status in ('pending','approved','rejected')),
  note        text,
  created_at  timestamptz default now(),
  updated_at  timestamptz default now()
);
alter table topup_requests enable row level security;
```

### Tabel: challenges
```sql
create table challenges (
  id          bigint generated always as identity primary key,
  title       text not null,
  desc        text,
  questions   jsonb not null default '[]',
  created_by  uuid references profiles(id) on delete set null,
  status      text default 'active',
  created_at  timestamptz default now()
);

create table challenge_attempts (
  id           bigint generated always as identity primary key,
  challenge_id bigint references challenges(id) on delete cascade,
  user_id      uuid references profiles(id) on delete cascade,
  score        integer,
  passed       boolean,
  created_at   timestamptz default now()
);
alter table challenges enable row level security;
alter table challenge_attempts enable row level security;
```

### Tabel: admin_messages (complaints & DM)
```sql
create table admin_messages (
  id          bigint generated always as identity primary key,
  from_id     uuid references profiles(id) on delete cascade,
  type        text default 'complaint' check (type in ('complaint','dm')),
  content     text not null,
  reply       text,
  read        boolean default false,
  reply_read  boolean default false,
  created_at  timestamptz default now()
);
alter table admin_messages enable row level security;
```

---

## 4. Install Supabase SDK

Karena proyek ini adalah single HTML file, cukup tambahkan CDN di `index.html` bagian `<head>`:

```html
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width,initial-scale=1.0"/>
  <title>StarLive Group</title>
  <link rel="stylesheet" href="style.css"/>

  <!-- Tambahkan ini -->
  <script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"></script>
</head>
```

---

## 5. Ganti Layer DB di app.js

### Langkah 1 — Inisialisasi Supabase

Tambahkan di paling atas `app.js`, **ganti `MASUKKAN_URL` dan `MASUKKAN_ANON_KEY`**:

```javascript
// ── SUPABASE CLIENT ───────────────────────────────────────────
const SUPABASE_URL  = 'https://MASUKKAN_URL.supabase.co';
const SUPABASE_KEY  = 'MASUKKAN_ANON_KEY';
const supa = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);
```

### Langkah 2 — Ganti Objek DB

Hapus seluruh blok `const DB = { ... }` yang lama, ganti dengan versi Supabase berikut.

> Semua method menggunakan `async/await`. Kamu perlu menambahkan `async` pada fungsi yang memanggilnya.

```javascript
// ── DB (Supabase) ─────────────────────────────────────────────
const DB = {

  // ── USERS / PROFILES ────────────────────────────────────────
  async getUsers() {
    const { data } = await supa.from('profiles').select('*');
    return data || [];
  },

  async byEmail(email) {
    // Cari user berdasarkan email via auth, lalu ambil profile
    const { data } = await supa
      .from('profiles')
      .select('*, auth_email:id(email)')
      .eq('email_lookup', email)  // perlu kolom helper, lihat catatan
      .single();
    return data;
  },

  async updUser(userId, updates) {
    const { error } = await supa
      .from('profiles')
      .update(updates)
      .eq('id', userId);
    if (error) console.error('updUser:', error);
  },

  // ── CREATORS ────────────────────────────────────────────────
  async getCreators() {
    const { data } = await supa.from('creators').select('*').order('name');
    return data || [];
  },

  async updCreator(id, updates) {
    await supa.from('creators').update(updates).eq('id', id);
  },

  async addCreator(creator) {
    const { data } = await supa.from('creators').insert(creator).select().single();
    return data;
  },

  // ── PROJECTS ────────────────────────────────────────────────
  async getProjects() {
    const { data } = await supa.from('projects').select('*').order('created_at', { ascending: false });
    return data || [];
  },

  async updProject(id, updates) {
    await supa.from('projects').update(updates).eq('id', id);
  },

  // ── GALLERY ─────────────────────────────────────────────────
  async getGallery() {
    const { data } = await supa.from('gallery').select('*').order('created_at', { ascending: false });
    return data || [];
  },

  async addGallery(item) {
    const { data } = await supa.from('gallery').insert(item).select().single();
    return data;
  },

  async deleteGallery(id) {
    await supa.from('gallery').delete().eq('id', id);
  },

  // ── PRODUCTS ────────────────────────────────────────────────
  async getProducts() {
    const { data } = await supa.from('products').select('*').order('name');
    return data || [];
  },

  async updProduct(id, updates) {
    await supa.from('products').update(updates).eq('id', id);
  },

  async addProduct(product) {
    const { data } = await supa.from('products').insert(product).select().single();
    return data;
  },

  async deleteProduct(id) {
    await supa.from('products').delete().eq('id', id);
  },

  // ── CHAT MESSAGES ───────────────────────────────────────────
  async getMsgs(room, limit = 100) {
    const { data } = await supa
      .from('messages')
      .select('*, sender:profiles(username, avatar_url)')
      .eq('room', room)
      .order('created_at', { ascending: true })
      .limit(limit);
    return data || [];
  },

  async addMsg(room, msg) {
    const { data } = await supa.from('messages').insert({
      room,
      sender_id: msg.senderId,
      content: msg.text
    }).select().single();
    return data;
  },

  // ── ADMIN MESSAGES ──────────────────────────────────────────
  async getAdminMsgs() {
    const { data } = await supa
      .from('admin_messages')
      .select('*, from:profiles(username)')
      .order('created_at', { ascending: false });
    return data || [];
  },

  async addAdminMsg(msg) {
    const { data } = await supa.from('admin_messages').insert(msg).select().single();
    return data;
  },

  async updAdminMsg(id, updates) {
    await supa.from('admin_messages').update(updates).eq('id', id);
  },

  // ── TOP-UP ──────────────────────────────────────────────────
  async getTopUpReqs() {
    const { data } = await supa
      .from('topup_requests')
      .select('*, user:profiles(username, wallet)')
      .order('created_at', { ascending: false });
    return data || [];
  },

  async addTopUpReq(req) {
    const { data } = await supa.from('topup_requests').insert(req).select().single();
    return data;
  },

  async updTopUpReq(id, updates) {
    await supa.from('topup_requests')
      .update({ ...updates, updated_at: new Date().toISOString() })
      .eq('id', id);
  },

  async getPendingTopUps() {
    const { data } = await supa
      .from('topup_requests')
      .select('*, user:profiles(username)')
      .eq('status', 'pending');
    return data || [];
  },

  // ── CHALLENGES ──────────────────────────────────────────────
  async getChallenges() {
    const { data } = await supa.from('challenges').select('*').order('created_at', { ascending: false });
    return data || [];
  },

  async addChallenge(challenge) {
    const { data } = await supa.from('challenges').insert(challenge).select().single();
    return data;
  },

  async updChallenge(id, updates) {
    await supa.from('challenges').update(updates).eq('id', id);
  },

  async delChallenge(id) {
    await supa.from('challenges').delete().eq('id', id);
  },

  async addAttempt(attempt) {
    const { data } = await supa.from('challenge_attempts').insert(attempt).select().single();
    return data;
  },

  // ── FRIENDS ─────────────────────────────────────────────────
  async sendFR(fromId, toId) {
    // Tambahkan fromId ke array friend_reqs milik toId
    const { data: target } = await supa.from('profiles').select('friend_reqs').eq('id', toId).single();
    if (!target) return false;
    const reqs = [...(target.friend_reqs || [])];
    if (reqs.includes(fromId)) return false;
    reqs.push(fromId);
    await supa.from('profiles').update({ friend_reqs: reqs }).eq('id', toId);
    return true;
  },

  async acceptFR(meId, fromId) {
    const [{ data: me }, { data: from }] = await Promise.all([
      supa.from('profiles').select('friends, friend_reqs').eq('id', meId).single(),
      supa.from('profiles').select('friends').eq('id', fromId).single(),
    ]);
    const myFriends  = [...new Set([...(me?.friends || []), fromId])];
    const myReqs     = (me?.friend_reqs || []).filter(x => x !== fromId);
    const theirFriends = [...new Set([...(from?.friends || []), meId])];
    await Promise.all([
      supa.from('profiles').update({ friends: myFriends, friend_reqs: myReqs }).eq('id', meId),
      supa.from('profiles').update({ friends: theirFriends }).eq('id', fromId),
    ]);
  },

  async rejectFR(meId, fromId) {
    const { data: me } = await supa.from('profiles').select('friend_reqs').eq('id', meId).single();
    const reqs = (me?.friend_reqs || []).filter(x => x !== fromId);
    await supa.from('profiles').update({ friend_reqs: reqs }).eq('id', meId);
  },

};
```

---

## 6. Migrasi Autentikasi

Hapus fungsi `DB.reg()` dan `DB.findUser()`. Ganti dengan Supabase Auth:

```javascript
// ── REGISTER ─────────────────────────────────────────────────
async function doRegister(email, password, username) {
  // 1. Daftarkan ke Supabase Auth
  const { data, error } = await supa.auth.signUp({ email, password });
  if (error) return { ok: false, msg: error.message };

  // 2. Buat profile di tabel profiles
  const isAdmin = email === 'admin@starlive.com';
  await supa.from('profiles').insert({
    id:       data.user.id,
    username: username,
    role:     isAdmin ? 'admin' : 'user',
    online:   true,
  });

  return { ok: true, user: data.user };
}

// ── LOGIN ─────────────────────────────────────────────────────
async function doLogin(email, password) {
  const { data, error } = await supa.auth.signInWithPassword({ email, password });
  if (error) return { ok: false, msg: error.message };

  // Ambil data profile lengkap
  const { data: profile } = await supa
    .from('profiles')
    .select('*')
    .eq('id', data.user.id)
    .single();

  // Update online status
  await supa.from('profiles').update({ online: true, last_seen: new Date().toISOString() }).eq('id', data.user.id);

  return { ok: true, user: { ...data.user, ...profile } };
}

// ── LOGOUT ───────────────────────────────────────────────────
async function doLogout() {
  if (S.user) {
    await supa.from('profiles').update({ online: false, last_seen: new Date().toISOString() }).eq('id', S.user.id);
  }
  await supa.auth.signOut();
  S.loggedIn = false;
  S.user = null;
  S.isAdmin = false;
}

// ── CEK SESSION SAAT APP LOAD ────────────────────────────────
async function checkSession() {
  const { data: { session } } = await supa.auth.getSession();
  if (session) {
    const { data: profile } = await supa
      .from('profiles')
      .select('*')
      .eq('id', session.user.id)
      .single();
    if (profile) {
      S.loggedIn  = true;
      S.user      = { ...session.user, ...profile };
      S.isAdmin   = profile.role === 'admin';
    }
  }
}
```

Panggil `await checkSession()` di fungsi `init()` saat aplikasi pertama load.

---

## 7. Migrasi Chat ke Realtime

Ini fitur paling keren Supabase — chat langsung live tanpa polling!

```javascript
// ── SUBSCRIBE REALTIME CHAT ───────────────────────────────────
let chatChannel = null;

function subscribeToRoom(room, onMessage) {
  // Hapus subscription lama kalau ada
  if (chatChannel) supa.removeChannel(chatChannel);

  chatChannel = supa
    .channel(`room:${room}`)
    .on(
      'postgres_changes',
      {
        event:  'INSERT',
        schema: 'public',
        table:  'messages',
        filter: `room=eq.${room}`,
      },
      async (payload) => {
        // Ambil data sender bersamaan
        const { data: sender } = await supa
          .from('profiles')
          .select('username, avatar_url')
          .eq('id', payload.new.sender_id)
          .single();

        onMessage({ ...payload.new, sender });
      }
    )
    .subscribe();
}

// Cara pakai di fungsi chat:
async function openChatRoom(room) {
  // Load pesan lama
  const messages = await DB.getMsgs(room);
  renderMessages(messages);

  // Subscribe pesan baru
  subscribeToRoom(room, (newMsg) => {
    appendMessage(newMsg);   // fungsi render kamu
  });
}

// Kirim pesan
async function sendMessage(room, text) {
  await DB.addMsg(room, {
    senderId: S.user.id,
    text: text,
  });
  // Tidak perlu refresh manual — Realtime akan trigger callback di atas
}
```

---

## 8. Migrasi File/Galeri ke Storage

Saat ini avatar, cover photo, dan galeri disimpan sebagai base64 di localStorage. Di Supabase, simpan ke **Storage Bucket**.

### Buat Bucket di Dashboard

1. Buka **Storage** di sidebar Supabase
2. Klik **New Bucket**
3. Buat dua bucket:
   - `avatars` — Public
   - `gallery` — Public

### Fungsi Upload

```javascript
// ── UPLOAD AVATAR ─────────────────────────────────────────────
async function uploadAvatar(file, userId) {
  const ext  = file.name.split('.').pop();
  const path = `${userId}/avatar.${ext}`;

  const { error } = await supa.storage
    .from('avatars')
    .upload(path, file, { upsert: true });

  if (error) { console.error(error); return null; }

  const { data } = supa.storage.from('avatars').getPublicUrl(path);
  // Simpan URL ke profile
  await supa.from('profiles').update({ avatar_url: data.publicUrl }).eq('id', userId);
  return data.publicUrl;
}

// ── UPLOAD GAMBAR GALERI ──────────────────────────────────────
async function uploadGallery(file, userId) {
  const ext      = file.name.split('.').pop();
  const filename = `${Date.now()}_${userId}.${ext}`;

  const { error } = await supa.storage
    .from('gallery')
    .upload(filename, file);

  if (error) { console.error(error); return null; }

  const { data } = supa.storage.from('gallery').getPublicUrl(filename);

  // Simpan ke tabel gallery
  await DB.addGallery({
    uploader_id: userId,
    url:         data.publicUrl,
    type:        file.type.startsWith('video') ? 'video' : 'image',
  });

  return data.publicUrl;
}
```

Ganti semua pemanggilan `onFiAv()`, `onFiGal()`, `onFiCp()` di `app.js` untuk menggunakan fungsi upload di atas.

---

## 9. Keamanan: Row Level Security (RLS)

Jalankan SQL ini di **SQL Editor** Supabase untuk mengatur siapa boleh akses apa:

```sql
-- ── PROFILES ────────────────────────────────────────────────
-- Semua user bisa lihat profile siapapun
create policy "Public profiles readable"
  on profiles for select using (true);

-- Hanya pemilik yang bisa update profile sendiri
create policy "Users update own profile"
  on profiles for update using (auth.uid() = id);

-- ── MESSAGES ─────────────────────────────────────────────────
-- User login bisa baca semua pesan
create policy "Logged in users read messages"
  on messages for select using (auth.role() = 'authenticated');

-- User login bisa kirim pesan sebagai dirinya sendiri
create policy "Users send own messages"
  on messages for insert with check (auth.uid() = sender_id);

-- ── GALLERY ──────────────────────────────────────────────────
-- Semua orang bisa lihat gallery
create policy "Gallery public read"
  on gallery for select using (true);

-- User login bisa upload
create policy "Authenticated can upload"
  on gallery for insert with check (auth.role() = 'authenticated');

-- Hanya uploader atau admin yang bisa hapus
create policy "Owner or admin delete gallery"
  on gallery for delete using (
    auth.uid() = uploader_id
    or exists (select 1 from profiles where id = auth.uid() and role = 'admin')
  );

-- ── PRODUCTS ─────────────────────────────────────────────────
-- Semua orang bisa lihat produk
create policy "Products public read"
  on products for select using (true);

-- Hanya admin yang bisa tambah/edit/hapus produk
create policy "Admin manages products"
  on products for all using (
    exists (select 1 from profiles where id = auth.uid() and role = 'admin')
  );

-- ── TOP-UP REQUESTS ───────────────────────────────────────────
-- User hanya bisa lihat request miliknya sendiri
create policy "Users see own topup"
  on topup_requests for select using (auth.uid() = user_id);

-- Admin bisa lihat semua
create policy "Admin sees all topup"
  on topup_requests for select using (
    exists (select 1 from profiles where id = auth.uid() and role = 'admin')
  );

-- User bisa buat request
create policy "Users create topup"
  on topup_requests for insert with check (auth.uid() = user_id);
```

---

## 10. Checklist Final

Sebelum go-live, pastikan semua ini sudah selesai:

### Setup
- [ ] Project Supabase sudah dibuat
- [ ] URL dan Anon Key sudah dicopy ke `app.js`
- [ ] CDN Supabase sudah ditambahkan ke `index.html`

### Database
- [ ] Semua tabel sudah dibuat via SQL Editor
- [ ] RLS policy sudah diaktifkan di setiap tabel
- [ ] Data awal (creators, projects) sudah di-insert manual atau via SQL

### Kode
- [ ] Blok `const DB = {...}` lama sudah dihapus
- [ ] Fungsi `DB.reg()` dan `DB.findUser()` sudah diganti dengan `doRegister()` dan `doLogin()`
- [ ] Semua pemanggilan `DB.*()` di halaman sudah ditambahkan `await` dan fungsinya jadi `async`
- [ ] `checkSession()` sudah dipanggil saat `init()`
- [ ] Chat sudah pakai `subscribeToRoom()` bukan polling

### Storage
- [ ] Bucket `avatars` dan `gallery` sudah dibuat (Public)
- [ ] Fungsi upload avatar sudah menggantikan simpan base64
- [ ] Fungsi upload gallery sudah menggantikan simpan base64

### Test
- [ ] Register akun baru berhasil
- [ ] Login berhasil dan session tersimpan
- [ ] Refresh halaman → masih login (session persistent)
- [ ] Chat bisa kirim & terima pesan realtime
- [ ] Upload foto berhasil & URL tersimpan
- [ ] Data tidak hilang setelah clear browser cache ✅

---

## ⚡ Tips Penting

**Semua fungsi DB sekarang async.** Artinya setiap fungsi yang memanggil `DB.*()` harus juga `async`, dan pemanggilannya harus `await`. Contoh:

```javascript
// ❌ Sebelum (sinkronus)
function rHome() {
  const creators = DB.getCreators();
  renderCreators(creators);
}

// ✅ Sesudah (async)
async function rHome() {
  const creators = await DB.getCreators();
  renderCreators(creators);
}
```

**Simpan data ke Supabase, bukan localStorage.** Hapus semua `localStorage.setItem` dan `localStorage.getItem` yang tersisa setelah migrasi.

---

*Dokumen ini dibuat untuk StarLive Group v6 — Migrasi ke Supabase*
