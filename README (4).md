# ⭐ StarLive Group

> **Multi-vertical technology & creative conglomerate** — operating at the intersection of media, technology, education, and culture.

![Version](https://img.shields.io/badge/version-6.0-FAB715?style=flat-square) ![Stack](https://img.shields.io/badge/stack-Vanilla%20HTML%2FJS-blue?style=flat-square) ![Storage](https://img.shields.io/badge/storage-localStorage-green?style=flat-square) ![i18n](https://img.shields.io/badge/i18n-7%20languages-orange?style=flat-square)

---

## 📖 Tentang Proyek

**StarLive Group** adalah platform web single-file yang menyimulasikan ekosistem konglomerat digital lengkap dengan portal perusahaan, manajemen creator, toko merchandise, sistem komunitas, dan dasbor admin — semuanya berjalan di dalam satu file HTML tanpa backend.

---

## ✨ Fitur Utama

### 🏠 Halaman & Navigasi
| Halaman | Deskripsi |
|---|---|
| **Home** | Slideshow interaktif, statistik komunitas, dan deskripsi perusahaan |
| **Affiliation** | 5 afiliasi perusahaan dengan accordion detail & link portal |
| **Creator** | Profil kartu semua kreator, bisa diklik untuk detail lengkap |
| **Project** | Daftar proyek aktif dengan progress bar dan status |
| **Gallery** | Grid foto/video upload dengan lightbox viewer |
| **Store** | Toko merchandise dengan keranjang belanja & checkout |
| **Social** | Link ke semua platform komunitas StarLive |
| **Dashboard** | Statistik page views, manajemen pengguna (admin) |
| **Vault** | Penyimpanan data rahasia khusus admin |
| **Fraction** | Sistem fraksi/divisi internal dengan ujian masuk |
| **Challenge** | Kuis interaktif berhadiah badge |

### 👤 Sistem Akun & Autentikasi
- Registrasi & login via email/password
- Profil pengguna dengan avatar, cover photo, dan bio
- Dua role: **User** dan **Admin** (admin@starlive.com / admin123)
- Sistem wallet & top-up dengan approval admin
- Badge sistem berdasarkan pencapaian

### 💬 Fitur Sosial
- **Chat** — obrolan langsung antar pengguna (global room & DM)
- **Friends** — kirim/terima permintaan pertemanan
- **Online status** — indikator online/offline real-time
- **Complaints** — sistem keluhan & saran ke admin
- **Direct Message to Admin** — komunikasi langsung ke admin

### 🛍️ Toko & Transaksi
- Katalog produk dengan gambar, kategori, harga & stok
- Keranjang belanja dengan quantity control
- Proses checkout dengan ringkasan pesanan
- Manajemen produk oleh admin (tambah/edit/hapus)

### 🏆 Challenge & Gamifikasi
- Kuis multiple-choice buatan creator/admin
- Sistem skor dengan passing grade 60%
- Badge otomatis untuk challenge yang berhasil diselesaikan
- Leaderboard attempt per challenge

### ⚙️ Kustomisasi & UX
- **Multi-tema** — Dark, Gold, Ocean, Sakura, Matrix, dan lainnya
- **Multi-bahasa (i18n)** — 7 bahasa: English, Indonesian, Japanese, Chinese, Korean, German, dan lainnya
- **Partikel animasi** — efek bintang/partikel yang bisa dikonfigurasi
- **Background kustom** — upload gambar atau video sebagai wallpaper
- **Sidebar collapsible** — bisa dilipat untuk tampilan lebih luas
- **Live clock** — jam & tanggal real-time di sudut layar
- **Responsif** — mendukung tampilan mobile

---

## 🚀 Cara Menjalankan

Tidak perlu instalasi. Cukup buka file di browser:

```bash
# Langsung buka di browser
double-click StarLiveGroup_v6.html

# Atau via terminal
open StarLiveGroup_v6.html        # macOS
start StarLiveGroup_v6.html       # Windows
xdg-open StarLiveGroup_v6.html   # Linux
```

> ⚠️ **Catatan:** Gunakan browser modern (Chrome, Firefox, Edge, Safari terbaru). Semua data disimpan di `localStorage` browser.

---

## 🔐 Akun Default

| Role | Email | Password |
|---|---|---|
| **Admin** | `admin@starlive.com` | `admin123` |
| **User** | Daftar sendiri via Register | Bebas |

---

## 🗂️ Struktur Data (localStorage)

Semua data disimpan lokal di browser dengan prefix `sl5_`:

| Key | Isi |
|---|---|
| `sl5_users` | Data semua pengguna terdaftar |
| `sl5_creators` | Profil kreator |
| `sl5_projects` | Data proyek aktif |
| `sl5_gallery` | Koleksi foto & video |
| `sl5_products` | Katalog produk toko |
| `sl5_challenges` | Data kuis & challenge |
| `sl5_topup_reqs` | Permintaan top-up wallet |
| `sl5_adminmsgs` | Pesan complaints & saran |
| `sl5_chat_*` | Pesan chat per room |
| `sl5_pageviews` | Statistik kunjungan halaman |

---

## 🛠️ Stack Teknologi

| Kategori | Detail |
|---|---|
| **Runtime** | Vanilla JavaScript (ES6+) |
| **UI** | Pure HTML + CSS (no framework) |
| **Storage** | Browser `localStorage` |
| **Styling** | CSS custom properties, backdrop-filter, keyframe animations |
| **Build** | Single-file, zero dependencies, zero bundler |

---

## 📂 Arsitektur File

```
StarLiveGroup_v6.html
├── <style>          — Semua CSS (animasi, layout, komponen)
├── <body>
│   ├── #ls          — Loading screen
│   ├── #app
│   │   ├── #sidebar — Navigasi collapsible
│   │   ├── #mc      — Area konten utama (12 halaman)
│   │   ├── #cfab    — Floating chat button
│   │   └── #sfab    — Floating settings button
│   └── Modals       — Auth, gallery, quiz, vault, dll.
└── <script>
    ├── LANGS        — Kamus i18n (7 bahasa)
    ├── DB           — Layer abstraksi localStorage
    ├── S            — State aplikasi global
    ├── Theme engine — Manajemen tema warna
    ├── Page renders — rHome, rAffil, rCreators, dst.
    └── Modals       — openEC, openQuiz, openCO, dst.
```

---

## 👥 Afiliasi StarLive

1. **StarLive Media** — Konten & hiburan digital
2. **StarLive Tech** — Solusi teknologi & software
3. **StarLive Academy** — Pendidikan & pelatihan digital
4. **StarLive Studios** — Produksi kreatif & desain
5. **StarLive Commerce** — E-commerce & marketplace

---

## 📊 Statistik Platform

- 🌏 Pan-Asian presence
- 🤝 5 Affiliates aktif
- 🚀 Berdiri sejak 2020
- 💡 Digital-first approach
- 👥 12K+ komunitas

---

## 📝 Lisensi

Proyek ini dikembangkan untuk keperluan internal **StarLive Group**. Seluruh hak cipta dilindungi.

---

<div align="center">
  <strong>⭐ STARLIVE GROUP ⭐</strong><br>
  <em>Light up every corner of the digital universe.</em>
</div>
