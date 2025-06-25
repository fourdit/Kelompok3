# Desain Antarmuka Pengguna: Watchers - Platform Komunitas Film
Repositori ini berisi implementasi antarmuka aplikasi Watchers, sebuah platform berbasis mobile untuk pecinta film yang memungkinkan pengguna berbagi ulasan, menemukan rekomendasi, dan mengelola preferensi menonton. Aplikasi ini dikembangkan menggunakan HTML dan CSS dengan pendekatan mobile-first (lebar layar maksimum 480px) serta memanfaatkan Bootstrap Icons untuk ikon-ikon interaktif. Tugas ini disusun oleh Kelompok 3 yang beranggotakan:  

Rifky Aditya Harun (245150400111002)  
Alexandra Pritha Sari (245150401111006)  
Cantika Zahna Brillianto Putri (245150407111001)

## Struktur Folder
Kelompok3_DAMP/
├── assets/
│   ├── css/
│   │   ├── opinionCollection.css
│   │   ├── opinionCollectionWibu.css
│   │   ├── writeOpinion.css
│   │   └── userProfile.css
│   └── images/
│       ├── [placeholder untuk gambar avatar, poster, dll.]
├── opinionCollection.html
├── opinionCollection1.html
├── writeOpinion.html
├── userProfile.html
├── userProfileReviewed.html
├── ranking.html
├── watchlist.html
└── trending.html


assets/css/ → Berisi file CSS untuk gaya antarmuka. Disusun oleh: Rifky Aditya Harun (Koleksi Opini, Tambah Opini, Profil Pengguna), Alexandra Pritha Sari dan Cantika Zahna Brillianto Putri (Ranking, Watchlist, Trending).  
opinionCollection.html dan opinionCollection1.html → Berisi tampilan Halaman Koleksi Opini dengan tab "For You" dan "Komunitas Wibu". Disusun oleh: Rifky Aditya Harun.  
writeOpinion.html → Berisi tampilan Halaman Tambah Opini untuk menulis ulasan. Disusun oleh: Rifky Aditya Harun.  
userProfile.html dan userProfileReviewed.html → Berisi tampilan Halaman Profil Pengguna dengan tab "Reviews" dan "Reviewed Films". Disusun oleh: Rifky Aditya Harun.  
ranking.html → Berisi tampilan Halaman Ranking untuk peringkat film. Disusun oleh: Alexandra Pritha Sari.  
watchlist.html → Berisi tampilan Halaman Watchlist untuk daftar film yang disimpan. Disusun oleh: Cantika Zahna Brillianto Putri.  
trending.html → Berisi tampilan Halaman Trending untuk film populer. Disusun oleh: Cantika Zahna Brillianto Putri.

## Fitur Tampilan
Setiap halaman UI memiliki fitur berikut:  

Halaman Koleksi Opini (opinionCollection.html, opinionCollection1.html):  
Menampilkan daftar ulasan film dengan poster, rating, dan teks ulasan.  
Tab "For You" untuk rekomendasi umum dan "Komunitas Wibu" untuk ulasan anime.  
Tombol interaksi (like, comment, share) dengan ikon Bootstrap.  
Tombol mengambang (ikon pena) untuk membuka Halaman Tambah Opini.


Halaman Tambah Opini (writeOpinion.html):  
Formulir dengan kolom pencarian film, textarea untuk ulasan, dan ikon bintang untuk rating.  
Tombol "Post" untuk menyimpan ulasan.


Halaman Profil Pengguna (userProfile.html, userProfileReviewed.html):  
Menampilkan informasi profil (nama, bio, tanggal bergabung) dan statistik (jumlah ulasan, film ditonton, jam menonton).  
Tab "Reviews" untuk ulasan pengguna dan "Reviewed Films" untuk daftar film yang diulas.


Halaman Ranking (ranking.html):  
Menampilkan daftar film dengan peringkat berdasarkan rating pengguna.  
Poster film, judul, dan skor rating untuk setiap entri.


Halaman Watchlist (watchlist.html):  
Menampilkan daftar film yang disimpan pengguna untuk ditonton nanti.  
Poster film, judul, dan opsi untuk menghapus dari watchlist.


Halaman Trending (trending.html):  
Menampilkan film populer berdasarkan aktivitas pengguna.  
Poster film, judul, dan jumlah interaksi (misalnya, likes atau shares).



## Cara Menjalankan melalui Local File

Pastikan perangkat memiliki koneksi internet (untuk mengakses Bootstrap Icons via CDN).  
Klik tombol Code (warna hijau) di halaman repository, lalu pilih Download ZIP.  
Ekstrak ZIP yang telah diunduh ke folder pilihan.  
Masuk ke folder Kelompok3_DAMP/.  
Klik dua kali salah satu file HTML (misalnya, opinionCollection.html, writeOpinion.html, userProfile.html, ranking.html, watchlist.html, atau trending.html) untuk membuka tampilan di browser.

## Catatan:  

File HTML menggunakan path relatif untuk CSS dan gambar di folder assets/. Pastikan struktur folder tidak diubah setelah ekstrak ZIP.  
Jika ikon tidak muncul, periksa koneksi internet atau unduh Bootstrap Icons secara lokal dan sesuaikan path di file HTML.
