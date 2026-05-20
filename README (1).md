# ⭐ StarLive Group

> **Platform web konglomerat digital multi-vertikal** — portal perusahaan, manajemen kreator, toko merchandise, sistem komunitas, dan dasbor admin dalam satu file HTML tanpa backend.

[![HTML](https://img.shields.io/badge/HTML-5-E34F26?style=flat-square&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS](https://img.shields.io/badge/CSS-3-1572B6?style=flat-square&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6%2B-F7DF1E?style=flat-square&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Storage](https://img.shields.io/badge/Storage-localStorage-4CAF50?style=flat-square)](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)
[![i18n](https://img.shields.io/badge/i18n-7%20bahasa-9C27B0?style=flat-square)](https://en.wikipedia.org/wiki/Internationalization_and_localization)
[![Version](https://img.shields.io/badge/versi-6.0-FAB715?style=flat-square)](CHANGELOG.md)

---

## Daftar Isi

- [Latar Belakang](#latar-belakang)
- [Cara Kerja](#cara-kerja)
- [Struktur Proyek](#struktur-proyek)
- [Instalasi & Menjalankan](#instalasi--menjalankan)
- [Akun Default](#akun-default)
- [Fitur Lengkap](#fitur-lengkap)
- [Arsitektur Kode](#arsitektur-kode)
- [Struktur Data localStorage](#struktur-data-localstorage)
- [Afiliasi StarLive](#afiliasi-starlive)
- [Stack Teknologi](#stack-teknologi)
- [Lisensi](#lisensi)

---

## Latar Belakang

StarLive Group mensimulasikan ekosistem konglomerat digital lengkap yang dapat berjalan sepenuhnya di browser — tanpa server, tanpa database eksternal, dan tanpa proses build. Proyek ini dibuat sebagai demonstrasi teknis bahwa sebuah platform komunitas penuh dapat dibangun hanya dengan HTML, CSS, dan Vanilla JavaScript.

Tujuan utama proyek:

1. Menyediakan portal terpusat untuk 5 afiliasi perusahaan StarLive.
2. Mengelola profil kreator, proyek aktif, galeri, dan toko merchandise.
3. Memfasilitasi interaksi komunitas via chat, pertemanan, dan sistem challenge.
4. Memberikan kontrol penuh kepada admin melalui dasbor dan brankas data.

---

## Cara Kerja

```
Pengguna membuka index.html di browser
              │
              ▼
┌─────────────────────────────┐
│       Loading Screen        │  ← inisialisasi state & tema
└─────────────┬───────────────┘
              │
              ▼
┌─────────────────────────────┐
│     Cek Session Login       │  ← baca S.loggedIn dari localStorage
│  (loggedIn / guest)         │
└──────┬──────────────┬───────┘
       │              │
  Tamu (guest)    User / Admin
       │              │
       ▼              ▼
┌────────────┐  ┌──────────────────┐
│ Halaman    │  │ Halaman + Fitur  │
│ Publik     │  │ Member + Admin   │
│ (Home,     │  │ (Chat, Store,    │
│  Gallery,  │  │  Dashboard,      │
│  Social)   │  │  Vault, dll.)    │
└────────────┘  └──────────────────┘
              │
              ▼
  Semua data disimpan ke localStorage
  dengan prefix sl5_*
```

Seluruh logika dikontrol dari `app.js` dan dibagi dalam dua file pendukung:

| File | Tanggung Jawab |
|---|---|
| `index.html` | Struktur DOM, semua elemen halaman dan modal |
| `style.css` | Seluruh styling: tema warna, animasi, layout responsif |
| `app.js` | State global, layer DB, render tiap halaman, autentikasi, chat, tema, i18n |

---

## Struktur Proyek

```
starlive-group/
│
├── index.html          # Struktur HTML utama + semua modal
├── style.css           # Styling global, animasi, tema
├── app.js              # Logika aplikasi lengkap (~1.900 baris)
│
└── README.md
```

> **Catatan:** Proyek ini semula adalah single-file (`StarLiveGroup_v6.html`). Setelah refactor, dipisah menjadi 3 file di atas agar lebih mudah dipelihara. Ketiga file harus berada dalam **satu folder yang sama**.

---

## Instalasi & Menjalankan

### Prasyarat

- Browser modern: **Chrome 110+**, Firefox 110+, Edge 110+, atau Safari 16+
- Tidak memerlukan Node.js, Python, atau server apapun

### Langkah

```bash
# 1. Clone repositori
git clone https://github.com/username/starlive-group.git
cd starlive-group

# 2. Buka langsung di browser
#    macOS
open index.html

#    Windows
start index.html

#    Linux
xdg-open index.html
```

### Menggunakan Live Server (direkomendasikan)

Untuk pengalaman terbaik, gunakan ekstensi **Live Server** di VS Code:

1. Install ekstensi [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) di VS Code
2. Klik kanan `index.html` → **Open with Live Server**
3. Browser akan otomatis terbuka di `http://127.0.0.1:5500`

> ⚠️ Membuka via `file://` langsung tetap berjalan, namun Live Server memberikan hot-reload dan menghindari potensi CORS pada beberapa browser.

---

## Akun Default

| Role | Email | Password | Akses |
|---|---|---|---|
| **Admin** | `admin@starlive.com` | `admin123` | Semua fitur + Dashboard + Vault |
| **User** | Daftar sendiri via Register | Bebas | Fitur member standar |

---

## Fitur Lengkap

### Halaman & Navigasi

| Halaman | Deskripsi |
|---|---|
| **Home** | Slideshow interaktif, statistik komunitas, dan deskripsi perusahaan |
| **Affiliation** | 5 afiliasi perusahaan dengan accordion detail & link portal |
| **Creator** | Kartu profil semua kreator, klik untuk melihat detail lengkap |
| **Project** | Daftar proyek aktif dengan progress bar dan status |
| **Gallery** | Grid foto/video dengan lightbox viewer dan upload |
| **Store** | Katalog merchandise dengan keranjang belanja & checkout |
| **Social** | Tautan ke semua platform komunitas StarLive |
| **Dashboard** | Statistik page views dan manajemen pengguna *(admin only)* |
| **Vault** | Penyimpanan data rahasia *(admin only)* |
| **Fraction** | Sistem divisi internal dengan ujian masuk |
| **Challenge** | Kuis interaktif berhadiah badge |

### Autentikasi & Akun

- Registrasi dan login via email/password
- Profil lengkap: avatar, cover photo, bio, badge
- Dua role: **User** dan **Admin**
- Sistem wallet dengan mekanisme top-up dan approval admin

### Sosial & Komunitas

- **Chat** — ruang obrolan global dan direct message antar pengguna
- **Friends** — kirim, terima, dan tolak permintaan pertemanan
- **Online status** — indikator online/offline real-time
- **Complaints** — sistem keluhan dan saran ke admin
- **Direct Message to Admin** — komunikasi langsung ke admin

### Toko & Transaksi

- Katalog produk dengan gambar, kategori, harga, dan stok
- Keranjang belanja dengan pengaturan jumlah item
- Alur checkout dengan ringkasan pesanan
- Manajemen produk penuh oleh admin (tambah/edit/hapus)

### Challenge & Gamifikasi

- Kuis pilihan ganda yang dapat dibuat oleh admin atau kreator
- Sistem skor dengan passing grade 60%
- Badge otomatis untuk setiap challenge yang diselesaikan
- Riwayat attempt per challenge

### Kustomisasi & UX

- **Multi-tema** — Dark, Gold, Ocean, Sakura, Matrix, dan lainnya
- **Multi-bahasa (i18n)** — English, Indonesian, Japanese, Chinese, Korean, German
- **Partikel animasi** — efek bintang/partikel yang dapat dikonfigurasi
- **Background kustom** — upload gambar atau video sebagai wallpaper
- **Sidebar collapsible** — bisa dilipat untuk tampilan lebih luas
- **Live clock** — jam dan tanggal real-time di sudut layar

---

## Arsitektur Kode

Seluruh logika dalam `app.js` diorganisasi ke dalam beberapa blok utama:

```
app.js
│
├── LANGS            ← Kamus terjemahan (7 bahasa)
├── DB               ← Layer abstraksi localStorage (get/set/update)
├── S                ← State global aplikasi (user, page, cart, tema)
│
├── Theme Engine     ← Sistem multi-tema dengan CSS variable
├── Particle Engine  ← Animasi partikel pada canvas
│
├── Page Renders
│   ├── rHome()      ← Slideshow + statistik
│   ├── rAffil()     ← Accordion afiliasi
│   ├── rCreators()  ← Grid kartu kreator
│   ├── rProjects()  ← Daftar proyek + progress bar
│   ├── rGallery()   ← Grid galeri + upload
│   ├── rStore()     ← Katalog produk + keranjang
│   ├── rDashboard() ← Statistik admin
│   └── ...dst
│
└── Modals
    ├── openAuthM()  ← Modal login/register
    ├── openEC()     ← Edit creator
    ├── openQuiz()   ← Quiz challenge
    ├── openCO()     ← Checkout
    └── ...dst
```

---

## Struktur Data localStorage

Semua data disimpan di browser menggunakan `localStorage` dengan prefix `sl5_`:

| Key | Tipe | Isi |
|---|---|---|
| `sl5_users` | `Array` | Data semua pengguna terdaftar |
| `sl5_creators` | `Array` | Profil kreator |
| `sl5_projects` | `Array` | Proyek aktif |
| `sl5_gallery` | `Array` | Koleksi foto & video |
| `sl5_products` | `Array` | Katalog produk toko |
| `sl5_challenges` | `Array` | Kuis & challenge |
| `sl5_topup_reqs` | `Array` | Permintaan top-up wallet |
| `sl5_adminmsgs` | `Array` | Pesan complaints & DM ke admin |
| `sl5_chat_<room>` | `Array` | Pesan per ruang obrolan |
| `sl5_pageviews` | `Object` | Statistik kunjungan per halaman |

> **Peringatan:** Data akan hilang jika pengguna menghapus cache browser. Untuk penyimpanan persisten, pertimbangkan [migrasi ke Supabase](SUPABASE_MIGRATION.md).

---

## Afiliasi StarLive

| # | Nama | Bidang |
|:---:|---|---|
| 1 | **StarLive Media** | Konten & hiburan digital |
| 2 | **StarLive Tech** | Solusi teknologi & software |
| 3 | **StarLive Academy** | Pendidikan & pelatihan digital |
| 4 | **StarLive Studios** | Produksi kreatif & desain |
| 5 | **StarLive Commerce** | E-commerce & marketplace |

---

## Stack Teknologi

| Kategori | Teknologi | Keterangan |
|---|---|---|
| **Markup** | HTML5 | Semantic elements, WAI-ARIA |
| **Styling** | CSS3 | Custom properties, backdrop-filter, keyframe |
| **Logika** | Vanilla JS ES6+ | Tanpa framework, tanpa bundler |
| **Storage** | Browser localStorage | Persistensi data sisi klien |
| **Build** | — | Zero build step, zero dependencies |

---

## Lisensi

Proyek ini dikembangkan untuk keperluan internal **StarLive Group**. Seluruh hak cipta dilindungi.

---

<p align="center"><em>⭐ Light up every corner of the digital universe. ⭐</em></p>
