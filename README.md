# ⭐ StarLive Platform, Repository, Intelligence & Social Matrix

[![HTML](https://img.shields.io/badge/HTML-E34F26?logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS](https://img.shields.io/badge/CSS-1572B6?logo=css&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Supabase](https://img.shields.io/badge/Supabase-3FCF8E?logo=supabase&logoColor=white)](https://supabase.com)
[![VS Code](https://img.shields.io/badge/VS%20Code-007ACC?logo=vscodium&logoColor=white)](https://code.visualstudio.com)

---

## Directory

- [Overview](#overview)
- [Features & Tech Stack](#features--tech-stack)
- [System Workflow](#system-workflow)
- [User Guide](#user-guide)
  - [Equipment](#equipment)
  - [Installation](#installation)
  - [Configuration](#configuration)
  - [Troubleshooting](#troubleshooting)
- [Development Notes](#development-notes)
  - [Arsitektur Kode](#arsitektur-kode)
  - [Struktur Data localStorage](#struktur-data-localstorage)
  - [Limitations](#limitations)
  - [Future Development](#future-development)
- [Author](#author)

---

## Overview

**StarLive SPRISM** adalah platform web digital multifungsi untuk informasi dan komunikasi **StarLive Group** — sebuah simulasi ekosistem konglomerat digital lengkap yang berjalan sepenuhnya di browser tanpa server, tanpa database eksternal, dan tanpa proses build.

Proyek ini membuktikan bahwa sebuah platform komunitas penuh dapat dibangun hanya dengan HTML, CSS, dan Vanilla JavaScript, mencakup portal terpusat untuk 5 afiliasi perusahaan StarLive, manajemen kreator dan proyek, sistem sosial & chat, toko merchandise, hingga dasbor admin.

**5 Afiliasi StarLive Group:**

| # | Nama | Bidang |
|:---:|---|---|
| 1 | **StarLive Media** | Konten & hiburan digital |
| 2 | **StarLive Tech** | Solusi teknologi & software |
| 3 | **StarLive Academy** | Pendidikan & pelatihan digital |
| 4 | **StarLive Studios** | Produksi kreatif & desain |
| 5 | **StarLive Commerce** | E-commerce & marketplace |

> **📝 Notes**
> <!-- Tambahkan catatan tambahan, konteks proyek, atau informasi relevan lainnya di sini -->
> <!-- Contoh: versi aktif, link demo, atau kondisi khusus yang perlu diketahui -->

---

## Features & Tech Stack

### Features

**Halaman & Navigasi**

| Halaman | Deskripsi |
|---|---|
| **Home** | Slideshow interaktif, statistik komunitas, dan deskripsi perusahaan |
| **Affiliation** | 5 afiliasi dengan accordion detail & link portal |
| **Creator** | Kartu profil kreator dengan detail lengkap |
| **Project** | Daftar proyek aktif dengan progress bar dan status |
| **Gallery** | Grid foto/video dengan lightbox viewer dan upload |
| **Store** | Katalog merchandise dengan keranjang & checkout |
| **Social** | Tautan ke semua platform komunitas StarLive |
| **Dashboard** | Statistik page views & manajemen pengguna *(admin only)* |
| **Vault** | Penyimpanan data rahasia *(admin only)* |
| **Fraction** | Sistem divisi internal dengan ujian masuk |
| **Challenge** | Kuis interaktif berhadiah badge |

**Sosial & Komunitas**

- Chat global dan direct message antar pengguna
- Sistem pertemanan: kirim, terima, dan tolak permintaan
- Indikator online/offline real-time
- Sistem keluhan & saran ke admin

**Toko & Transaksi**

- Katalog produk dengan gambar, kategori, harga, dan stok
- Keranjang belanja dengan pengaturan jumlah item
- Alur checkout dengan ringkasan pesanan
- Manajemen produk penuh oleh admin

**Gamifikasi & Kustomisasi**

- Kuis pilihan ganda dengan sistem badge otomatis
- Multi-tema: Dark, Gold, Ocean, Sakura, Matrix, dan lainnya
- Multi-bahasa (i18n): Indonesia, English, Japanese, Chinese, Korean, German
- Background kustom: upload gambar atau video sebagai wallpaper
- Partikel animasi dan live clock

### Tech Stack

| Kategori | Teknologi | Keterangan |
|---|---|---|
| Markup | HTML5 | Semantic elements, WAI-ARIA |
| Styling | CSS3 | Custom properties, backdrop-filter, keyframe |
| Logika | Vanilla JS ES6+ | Tanpa framework, tanpa bundler |
| Storage | Browser localStorage | Persistensi data sisi klien (prefix `sl5_`) |
| Migration path | Supabase | Target migrasi storage ke cloud *(opsional)* |
| Build | — | Zero build step, zero dependencies |

---

## System Workflow

### Flowchart

```
┌──────────────────────┐     ┌─────────────────────────┐     ┌──────────────────────┐
│  Buka index.html     │     │  Inisialisasi           │     │  Cek Session Login   │
│  di browser          │────▶│  state & tema           │────▶│  baca S.loggedIn     │
│                      │     │  Loading Screen         │     │  dari localStorage   │
└──────────────────────┘     └─────────────────────────┘     └──────────┬───────────┘
                                                                          │
                                                            ┌─────────────┴─────────────┐
                                                            │                           │
                                                            ▼                           ▼
┌──────────────────────┐                        ┌──────────────────┐     ┌─────────────────────────┐
│  Semua data          │                        │  Tamu (guest)    │     │  User / Admin           │
│  disimpan ke         │◀───────────────────────│  Halaman publik  │     │  Halaman + fitur member │
│  localStorage sl5_*  │                        │  Home, Gallery,  │     │  Chat, Store, Dashboard │
└──────────────────────┘                        │  Social          │     │  Vault, dll.            │
                                                └──────────────────┘     └─────────────────────────┘
```

### Explanation

| Langkah | Proses | Keterangan |
|---|---|---|
| 1 | Buka `index.html` | Tidak memerlukan server — bisa via `file://` atau Live Server |
| 2 | Loading Screen | Inisialisasi state global `S`, tema, dan partikel |
| 3 | Cek session | Baca `S.loggedIn` dari localStorage — tentukan role user |
| 4 | Render halaman | Tamu mendapat akses publik; member/admin mendapat akses penuh |
| 5 | Simpan data | Semua interaksi ditulis ke localStorage dengan prefix `sl5_` |

---

## User Guide

### Equipment

Pastikan hal berikut tersedia sebelum memulai:

- Browser modern: **Chrome 110+**, Firefox 110+, Edge 110+, atau Safari 16+
- Tidak memerlukan Node.js, Python, server, atau dependensi apapun
- Ekstensi **Live Server** di VS Code *(opsional tapi direkomendasikan)*

---

### Installation

#### 1. Clone Repositori

```bash
git clone https://github.com/username/starlive-group.git
cd starlive-group
```

#### 2. Buka di Browser

**Langsung via file:**

```bash
open index.html        # macOS
start index.html       # Windows
xdg-open index.html    # Linux
```

**Via Live Server (direkomendasikan):**

1. Install ekstensi [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) di VS Code
2. Klik kanan `index.html` → **Open with Live Server**
3. Browser otomatis terbuka di `http://127.0.0.1:5500`

> Live Server memberikan hot-reload dan menghindari potensi CORS pada beberapa browser.

> **Catatan:** Ketiga file (`index.html`, `style.css`, `app.js`) harus berada dalam **satu folder yang sama**.

---

### Configuration

**Akun Default:**

| Role | Email | Password | Akses |
|---|---|---|---|
| **Admin** | `admin@starlive.com` | `admin123` | Semua fitur + Dashboard + Vault |
| **User** | Daftar sendiri via Register | Bebas | Fitur member standar |

**Kustomisasi tema** — tersedia langsung dari antarmuka:

| Opsi | Cara Akses |
|---|---|
| Tema warna | Menu pengaturan → pilih tema (Dark, Gold, Ocean, Sakura, Matrix, dll.) |
| Bahasa | Menu pengaturan → pilih bahasa (6 bahasa tersedia) |
| Background | Upload gambar atau video dari menu pengaturan |
| Partikel animasi | Toggle on/off dari menu pengaturan |

---

### Troubleshooting

| Masalah | Kemungkinan Penyebab | Solusi |
|---|---|---|
| Halaman kosong / tidak muncul | File tidak dalam satu folder | Pastikan `index.html`, `style.css`, `app.js` satu direktori |
| Data hilang setelah reload | Cache browser dihapus | Wajar — localStorage bersifat persisten per browser, bukan per akun |
| Fitur chat tidak muncul | Belum login | Login terlebih dahulu — chat hanya tersedia untuk member |
| Admin menu tidak ada | Login sebagai user biasa | Gunakan akun `admin@starlive.com` untuk akses admin |
| CORS error di browser | Buka via `file://` pada browser tertentu | Gunakan Live Server di VS Code |

---

## Development Notes

### Arsitektur Kode

Seluruh logika dalam `app.js` (~1.900 baris) diorganisasi ke dalam blok-blok berikut:

| Blok | Isi |
|---|---|
| `LANGS` | Kamus terjemahan 6 bahasa |
| `DB` | Layer abstraksi localStorage (get/set/update) |
| `S` | State global aplikasi (user, page, cart, tema) |
| Theme Engine | Sistem multi-tema dengan CSS variable |
| Particle Engine | Animasi partikel pada canvas |
| Page Renders | `rHome()`, `rAffil()`, `rCreators()`, `rProjects()`, `rGallery()`, `rStore()`, `rDashboard()`, dll. |
| Modals | `openAuthM()`, `openEC()`, `openQuiz()`, `openCO()`, dll. |

**Struktur file:**

```
starlive-group/
├── index.html      # Struktur DOM + semua modal
├── style.css       # Styling global, animasi, tema
├── app.js          # Logika aplikasi (~1.900 baris)
└── README.md
```

> Proyek ini semula adalah single-file (`StarLiveGroup_v6.html`). Setelah refactor dipisah menjadi 3 file agar lebih mudah dipelihara.

---

### Struktur Data localStorage

Semua data disimpan di browser dengan prefix `sl5_`:

| Key | Tipe | Isi |
|---|---|---|
| `sl5_users` | Array | Data semua pengguna terdaftar |
| `sl5_creators` | Array | Profil kreator |
| `sl5_projects` | Array | Proyek aktif |
| `sl5_gallery` | Array | Koleksi foto & video |
| `sl5_products` | Array | Katalog produk toko |
| `sl5_challenges` | Array | Kuis & challenge |
| `sl5_topup_reqs` | Array | Permintaan top-up wallet |
| `sl5_adminmsgs` | Array | Pesan complaints & DM ke admin |
| `sl5_chat_<room>` | Array | Pesan per ruang obrolan |
| `sl5_pageviews` | Object | Statistik kunjungan per halaman |

---

### Limitations

| Komponen | Batasan |
|---|---|
| Storage | Data hilang jika pengguna menghapus cache browser — tidak ada backup cloud |
| Skalabilitas | localStorage dibatasi ~5–10 MB per origin — tidak cocok untuk data besar |
| Multi-device | Data tidak tersinkronisasi antar perangkat atau browser berbeda |
| Keamanan | Password disimpan di localStorage — tidak cocok untuk deployment production |

### Future Development

Beberapa pengembangan yang dapat dilakukan ke depan:

- [ ] **Migrasi ke Supabase** — gantikan localStorage dengan database cloud untuk persistensi lintas perangkat
- [ ] **Autentikasi aman** — implementasi hashing password dan session token yang proper
- [ ] **PWA support** — tambahkan service worker agar dapat diinstal dan berjalan offline
- [ ] **Notifikasi real-time** — integrasi WebSocket atau Supabase Realtime untuk chat dan status online
- [ ] **Export/import data** — fitur backup dan restore data pengguna secara manual

---

<p align="center">
  <b>Pengembangan dari tim StarLive SAINT</b>
</p>

<p align="center"><i>Danny Aulia · Said Hasan Hanafiah · Noah Von Nobelius · Arvian Raveindra Pradana</i></p>
