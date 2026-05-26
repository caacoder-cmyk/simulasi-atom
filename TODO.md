# TODO - Per akun Progress Dashboard

- [x] Buat userKey unik dari kombinasi `nama + kelas` saat login.

- [x] Ubah semua storage progress/quiz dari key global menjadi key per-user (mis. `progress:<userKey>:1`, `nilai:<userKey>:1`).

- [x] Pastikan dashboard membaca progress/quiz per-user dan menampilkan jumlah + rata-rata yang benar.

- [x] Pastikan materi selesai dan quiz selesai menyimpan progress/score per-user.

- [ ] Test: login 2 siswa berbeda di browser yang sama → progress dashboard harus berbeda.
