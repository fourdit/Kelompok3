# Desain Antarmuka Pengguna: Watchers - Platform Komunitas Film

Repositori ini berisi implementasi antarmuka aplikasi **Watchers**, sebuah platform berbasis mobile untuk pecinta film yang memungkinkan pengguna berbagi ulasan, menemukan rekomendasi, dan mengelola preferensi menonton. Aplikasi ini dikembangkan menggunakan HTML dan CSS dengan pendekatan *mobile-first* (lebar layar maksimum 480px) serta memanfaatkan Bootstrap Icons untuk ikon-ikon interaktif. Selain itu, repositori ini mencakup desain Figma dan sketsa desain aplikasi untuk mendokumentasikan proses pengembangan antarmuka. Tugas ini disusun oleh Kelompok 3 yang beranggotakan:  
- Rifky Aditya Harun (245150400111002)  
- Alexandra Pritha Sari (245150401111006)  
- Cantika Zahna Brillianto Putri (245150407111001)  

## Struktur Folder

- `Watchers/` → Berisi kode sumber aplikasi (HTML, CSS, dan gambar).  
  - `css/` → Berisi file CSS untuk gaya antarmuka. 
  - `images/` → Berisi gambar seperti avatar dan poster film (placeholder digunakan dalam kode).  
  - `bs/`  → Berisi file-file bootstrap css   
  - `GenreIcon/` → Berisi file icon-icon   
- `Sketsa Design App/` → Berisi sketsa desain aplikasi dalam format PDF.   

## Fitur Tampilan

Setiap halaman UI memiliki fitur berikut:  
- **Halaman Trending** (`homepage.html`):  
  - Menampilkan film populer berdasarkan aktivitas pengguna.  
  - Poster film, judul, dan jumlah interaksi (misalnya, *likes* atau *shares*). 
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


## Cara Menjalankan melalui Local File

1. Pastikan perangkat memiliki koneksi internet (untuk mengakses Bootstrap Icons via CDN).  
2. Klik tombol `Code` (warna hijau) di halaman repository, lalu pilih `Download ZIP`.  
3. Ekstrak ZIP yang telah diunduh ke folder pilihan.  
4. Buka folder di file editor Visual Studio Code
5. Jalankan server dengan klik "Go Live" di pojok kanan bawah layar
6. Anda akan dialihkan ke tampilan halaman untuk file tersebut dan bisa mengakses Watchers secara leluasa di dalamnya

**Catatan:**  
- File HTML menggunakan path relatif untuk CSS dan gambar di folder `Watchers/assets/`. Pastikan struktur folder tidak diubah setelah ekstrak ZIP.  
- Jika ikon tidak muncul, periksa koneksi internet atau unduh Bootstrap Icons secara lokal dan sesuaikan path di file HTML.  
- Sketsa di folder `Sketsa Design App/` dapat dibuka dengan penampil gambar atau PDF standar.
