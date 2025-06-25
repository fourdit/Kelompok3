# Desain Antarmuka Pengguna: Watchers - Platform Komunitas Film

Repositori ini berisi implementasi antarmuka aplikasi **Watchers**, sebuah platform berbasis mobile untuk pecinta film yang memungkinkan pengguna berbagi ulasan, menemukan rekomendasi, dan mengelola preferensi menonton. Aplikasi ini dikembangkan menggunakan HTML dan CSS dengan pendekatan *mobile-first* (lebar layar maksimum 480px) serta memanfaatkan Bootstrap Icons untuk ikon-ikon interaktif. Selain itu, repositori ini mencakup desain Figma dan sketsa desain aplikasi untuk mendokumentasikan proses pengembangan antarmuka. Tugas ini disusun oleh Kelompok 3 yang beranggotakan:  
- Rifky Aditya Harun (245150400111002)  
- Alexandra Pritha Sari (245150401111006)  
- Cantika Zahna Brillianto Putri (245150407111001)  

## Struktur Folder

```
Kelompok3_DAMP/
├── Watchers/
│   ├── assets/
│   │   ├── css/
│   │   │   ├── opinionCollection.css
│   │   │   ├── opinionCollectionWibu.css
│   │   │   ├── writeOpinion.css
│   │   │   └── userProfile.css
│   │   └── images/
│   │       ├── [placeholder untuk gambar avatar, poster, dll.]
│   ├── opinionCollection.html
│   ├── opinionCollection1.html
│   ├── writeOpinion.html
│   ├── userProfile.html
│   ├── userProfileReviewed.html
│   ├── ranking.html
│   ├── watchlist.html
│   └── trending.html
├── Design Figma/
│   ├── [file desain Figma, misalnya Watchers_Design.fig]
├── Sketsa Design App/
│   ├── [file sketsa, misalnya Sketsa_Halaman_Koleksi_Opini.jpg, Sketsa_Profil_Pengguna.pdf, dll.]
```

- `Watchers/` → Berisi kode sumber aplikasi (HTML, CSS, dan gambar).  
  - `assets/css/` → Berisi file CSS untuk gaya antarmuka. Disusun oleh: Rifky Aditya Harun (Koleksi Opini, Tambah Opini, Profil Pengguna), Alexandra Pritha Sari dan Cantika Zahna Brillianto Putri (Ranking, Watchlist, Trending).  
  - `assets/images/` → Berisi gambar seperti avatar dan poster film (placeholder digunakan dalam kode).  
  - `opinionCollection.html` dan `opinionCollection1.html` → Tampilan *Halaman Koleksi Opini* dengan tab "For You" dan "Komunitas Wibu". Disusun oleh: Rifky Aditya Harun.  
  - `writeOpinion.html` → Tampilan *Halaman Tambah Opini* untuk menulis ulasan. Disusun oleh: Rifky Aditya Harun.  
  - `userProfile.html` dan `userProfileReviewed.html` → Tampilan *Halaman Profil Pengguna* dengan tab "Reviews" dan "Reviewed Films". Disusun oleh: Rifky Aditya Harun.  
  - `ranking.html` → Tampilan *Halaman Ranking* untuk peringkat film. Disusun oleh: Alexandra Pritha Sari.  
  - `watchlist.html` → Tampilan *Halaman Watchlist* untuk daftar film yang disimpan. Disusun oleh: Cantika Zahna Brillianto Putri.  
  - `trending.html` → Tampilan *Halaman Trending* untuk film populer. Disusun oleh: Cantika Zahna Brillianto Putri.  
- `Design Figma/` → Berisi file desain Figma untuk antarmuka aplikasi. Disusun oleh: Kelompok 3.  
- `Sketsa Design App/` → Berisi sketsa desain aplikasi dalam format gambar atau PDF. Disusun oleh: Kelompok 3.  

## Fitur Tampilan

Setiap halaman UI memiliki fitur berikut:  
- **Halaman Koleksi Opini** (`opinionCollection.html`, `opinionCollection1.html`):  
  - Menampilkan daftar ulasan film dengan poster, rating, dan teks ulasan.  
  - Tab "For You" untuk rekomendasi umum dan "Komunitas Wibu" untuk ulasan anime.  
  - Tombol interaksi (*like*, *comment*, *share*) dengan ikon Bootstrap.  
  - Tombol mengambang (ikon pena) untuk membuka *Halaman Tambah Opini*.  
- **Halaman Tambah Opini** (`writeOpinion.html`):  
  - Formulir dengan kolom pencarian film, textarea untuk ulasan, dan ikon bintang untuk rating.  
  - Tombol "Post" untuk menyimpan ulasan.  
- **Halaman Profil Pengguna** (`userProfile.html`, `userProfileReviewed.html`):  
  - Menampilkan informasi profil (nama, bio, tanggal bergabung) dan statistik (jumlah ulasan, film ditonton, jam menonton).  
  - Tab "Reviews" untuk ulasan pengguna dan "Reviewed Films" untuk daftar film yang diulas.  
- **Halaman Ranking** (`ranking.html`):  
  - Menampilkan daftar film dengan peringkat berdasarkan rating pengguna.  
  - Poster film, judul, dan skor rating untuk setiap entri.  
- **Halaman Watchlist** (`watchlist.html`):  
  - Menampilkan daftar film yang disimpan pengguna untuk ditonton nanti.  
  - Poster film, judul, dan opsi untuk menghapus dari *watchlist*.  
- **Halaman Trending** (`trending.html`):  
  - Menampilkan film populer berdasarkan aktivitas pengguna.  
  - Poster film, judul, dan jumlah interaksi (misalnya, *likes* atau *shares*).  

## Contoh Kode

Berikut adalah cuplikan kode untuk beberapa halaman utama:

### Halaman Koleksi Opini (`Watchers/opinionCollection.html`)

**HTML:**
```html
<div class="mobile-container">
    <div class="header-top">
        <a href="#" class="back-link"><i class="bi bi-arrow-left custom-thick-outline"></i></a>
        <h1>Opinions</h1>
        <a href="#" class="profile-link"><i class="bi bi-person custom-thick-outline"></i></a>
    </div>
    <div class="header-subtitle">
        <a href="#" class="community-link">For you</a>
        <a href="#" class="community-link">Komunitas Wibu</a>
        <div class="active-indicator"></div>
    </div>
    <div class="opinion-item">
        <div class="opinion-header">
            <img src="assets/images/..." alt="avatar" class="avatar">
            <div class="user-info">
                <div class="username">Ghozali</div>
                <div class="time">2 hours ago</div>
            </div>
            <div class="rating">★★★★☆<span class="rating-score">4.0/5</span></div>
        </div>
        <div class="opinion-content">
            <img src="assets/images/..." alt="poster" class="poster">
            <div class="text-content">
                <h4>COCO (2017)</h4>
                <p>Kalian sumpah harus nonton film ini...</p>
            </div>
        </div>
    </div>
    <button class="floating-btn"><i class="bi bi-pen"></i></button>
</div>
```

**CSS (`Watchers/assets/css/opinionCollection.css`):**
```css
.mobile-container {
    width: 480px;
    height: 940px;
    border: 1px solid #ddd;
    box-shadow: 0 0 0.625rem rgb(0 0 0 / 0.1);
}
.opinion-item {
    background: #ECF1FD;
    border-radius: 15px;
    padding: 10px;
    margin-bottom: 10px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}
.floating-btn {
    position: absolute;
    bottom: 90px;
    right: 20px;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background-color: #4169E1;
}
```

### Halaman Tambah Opini (`Watchers/writeOpinion.html`)

**HTML:**
```html
<div class="mobile-container">
    <div class="header-top">
        <a href="#" class="back-link"><i class="bi bi-arrow-left"></i></a>
        <h1>Write Your Own Opinion</h1>
    </div>
    <div class="form-container">
        <h6>Select Movie</h6>
        <div class="input-group">
            <input type="text" class="search-movie form-control">
        </div>
        <h6>What’s on your mind?</h6>
        <textarea class="opinion-text form-control"></textarea>
    </div>
    <div class="rating-section">
        <label>Your Rating :</label>
        <div class="stars">
            <i class="bi bi-star"></i>
            <i class="bi bi-star"></i>
            <i class="bi bi-star"></i>
            <i class="bi bi-star"></i>
            <i class="bi bi-star"></i>
        </div>
    </div>
    <button class="post-btn btn btn-primary">Post</button>
</div>
```

**CSS (`Watchers/assets/css/writeOpinion.css`):**
```css
.form-container {
    padding: 20px;
}
.search-movie, .opinion-text {
    background-color: #EDF1FD;
    border: none;
    border-radius: 10px;
    padding: 10px;
}
.post-btn {
    background-color: #4169E1;
    border: none;
    font-weight: bold;
    font-size: 1.2rem;
}
```

### Halaman Profil Pengguna (`Watchers/userProfile.html`)

**HTML:**
```html
<div class="mobile-container">
    <div class="header-top">
        <a href="#" class="back-link"><i class="bi bi-arrow-left custom-thick-outline"></i></a>
        <h1>Profile</h1>
    </div>
    <div class="profile-section">
        <img src="assets/images/..." alt="profile image" class="profile-img">
        <div>
            <div class="profile-name">UserWatchers9 <a href="#" class="profile-edit">edit</a></div>
            <div class="profile-join">Join since 2020</div>
            <div class="profile-bio">Pecinta genre Gore dan thriller.</div>
        </div>
    </div>
    <div class="profile-stats">
        <div><span class="count">2</span>Reviews</div>
        <div><span class="count">2</span>Watched Films</div>
        <div><span class="count">275</span>Hours</div>
    </div>
</div>
```

**CSS (`Watchers/assets/css/userProfile.css`):**
```css
.profile-section {
    padding: 10px 20px;
    display: flex;
    align-items: flex-start;
    gap: 20px;
}
.profile-img {
    width: 70px;
    height: 70px;
    border-radius: 50%;
}
.profile-stats {
    display: flex;
    justify-content: space-around;
    margin-top: 40px;
}
```

## Cara Menjalankan melalui Local File

1. Pastikan perangkat memiliki koneksi internet (untuk mengakses Bootstrap Icons via CDN).  
2. Klik tombol `Code` (warna hijau) di halaman repository, lalu pilih `Download ZIP`.  
3. Ekstrak ZIP yang telah diunduh ke folder pilihan.  
4. Masuk ke folder `Kelompok3_DAMP/Watchers/`.  
5. Klik dua kali salah satu file HTML (misalnya, `opinionCollection.html`, `writeOpinion.html`, `userProfile.html`, `ranking.html`, `watchlist.html`, atau `trending.html`) untuk membuka tampilan di browser.  

**Catatan:**  
- File HTML menggunakan path relatif untuk CSS dan gambar di folder `Watchers/assets/`. Pastikan struktur folder tidak diubah setelah ekstrak ZIP.  
- Jika ikon tidak muncul, periksa koneksi internet atau unduh Bootstrap Icons secara lokal dan sesuaikan path di file HTML.  
- File Figma di folder `Design Figma/` memerlukan aplikasi Figma untuk dibuka. Sketsa di folder `Sketsa Design App/` dapat dibuka dengan penampil gambar atau PDF standar.