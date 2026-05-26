console.log("APP READY 🔥");

// =======================
// LOGIN
// =======================
function login() {
  let nama = document.getElementById("nama").value;
  let kelas = document.getElementById("kelas").value;

  if (nama === "" || kelas === "") {
    alert("Isi dulu!");
    return;
  }

  localStorage.setItem("nama", nama);
  localStorage.setItem("kelas", kelas);

  // userKey unik per kombinasi nama + kelas
  const userKey = makeUserKey(nama, kelas);
  localStorage.setItem("userKey", userKey);

  window.location.href = "dashboard.html";
}

function normalize(str) {
  return String(str).trim().toLowerCase().replace(/\s+/g, "_");
}

function makeUserKey(nama, kelas) {
  const n = normalize(nama);
  const k = normalize(kelas);
  return `user:${n}|${k}`;
}

function getUserKey() {
  // kalau belum login, fallback tetap jalan
  return localStorage.getItem("userKey") || "user:explorer|default";
}

// =======================
// GLOBAL LOAD
// =======================
function loadUser() {
  const el = document.getElementById("welcomeUser");
  if (!el) return;

  let nama = localStorage.getItem("nama") || "Explorer";
  let kelas = localStorage.getItem("kelas") || "-";

  let kelasClean = String(kelas).trim();

  if (!kelasClean || kelasClean === "-") {
    el.innerHTML = `Welcome ${nama} ⚛️`;
  } else {
    el.innerHTML = `Welcome ${nama} (${kelasClean}) ⚛️`;
  }
}
window.addEventListener("focus", () => {
  location.reload();
});
// Ambil/materi aktif, default ke 1
function getMateriAktif() {
  const m = parseInt(localStorage.getItem("materiAktif"), 10);
  return Number.isFinite(m) && m > 0 ? m : 1;
}

// ===================
// LOAD MATERI
// ===================
const judul = document.getElementById("judulMateri");
const isi = document.getElementById("isiMateri");

if (judul && isi) {
  const materi = localStorage.getItem("materiAktif");

  if (materi == 1) {
    judul.innerText = `Pertemuan ${materi}: Perkembangan Teori Atom`;

    isi.innerHTML = `

      ${section(
        "A. Teori Atom Yunani (Democritus)",
        `
        <p>
      Pada sekitar abad ke-5 sebelum Masehi, seorang filsuf Yunani bernama 
      <b>Democritus</b> menyatakan bahwa semua benda di alam tersusun atas 
      partikel yang sangat kecil dan tidak dapat dibagi lagi.
    </p>

    <p>
      Ia menamakan partikel tersebut <b>atomos</b>, yang berarti 
      <i>“tidak dapat dipotong”</i> atau <i>“tidak dapat dibagi”</i>.
    </p>

    <div class="highlight">
      Teori Democritus menyatakan bahwa materi tersusun dari partikel terkecil 
      yang tidak dapat dibagi lagi, yaitu atom.
    </div>

    <p>
      Meskipun teori ini masih bersifat sederhana dan belum didukung oleh 
      percobaan ilmiah, gagasan Democritus menjadi dasar penting dalam 
      perkembangan teori atom modern.
    </p>

  </div>
</div>
        `,
        "democritus.png",
      )}

      ${section(
        "B. Teori Atom Dalton",
        `
        Tahun 1808, ilmuan asal Inggris Bernama John Dalton, ia bahwa materi tersusun atas
partikel-partikel kecil yang disebut atom Berdasarkan Hukum Perbandingan Tetap dan
Hukum Kekekalan Massa. Teori Dalton menjadi tonggak awal lahirnya kimia sebagai ilmu
yang berbasis pada eksperimen.
        `,
        "dalton.png",
        `
        <p><b>Pokok pokok teori Dalton dapat dirangkum sebagai berikut:</b></p>
        <ul class="list-materi">
          <li>Semua unsur tersusun atas partikel yang sangat kecil yang disebut atom.</li>
          <li>Atom atom dari unsur yang sama memiliki ukuran, massa, dan sifat yang sama. Atom suatu unsur berbeda dari atom unsur lainnya</li>
          <li>Senyawa terbentuk dari gabungan atom atom dari dua atau lebih unsur dengan perbandingan jumlah yang tetap dan sederhana</li>
          <li>Dalam reaksi kimia, atom hanya mengalami penggabungan, pemisahan, atau penataan
ulang. Atom tidak dapat diciptakan maupun dimusnahkan..</li>
        </ul>

          <p><b>Pokok pokok teori Dalton dapat dirangkum sebagai berikut:</b></p>
          <ul class="list-materi">
            <li>menganggap atom sebagai partikel terkecil yang tidak dapat dibagi lagi.</li>
            <li>juga tidak mampu menjelaskan keberadaan isotop, yaitu atom-atom dari unsur yang
sama tetapi memiliki massa berbeda.</li>
            <li>Dalton juga berpendapat bahwa atom-atom dari unsur yang sama memiliki massa dan
sifat yang identik, padahal kenyataannya terdapat variasi massa pada isotop.</li>
</ul>
        `,
      )}

      ${section(
        "C. Teori Atom Thomson",
        ` Akhir abad ke-19 banyak ilmuwan meneliti tentang radiasi, yaitu energi yang merambat
        dalam bentuk gelombang. Salah satu alat yang digunakan dalam penelitian tersebut adalah
        tabung sinar katoda. Tabung sinar katoda merupakan tabung kaca yang hampir seluruh
        udaranya telah dikeluarkan. Di dalam tabung terdapat dua lempeng logam yang dihubungkan
        dengan sumber tegangan tinggi. Lempeng bermuatan negatif disebut katoda, sedangkan
        lempeng bermuatan positif disebut anoda.`,
        "Thomson.png",
        `
        <p><b>Berdasarkan percobaan tersebut, Josep John Thomson menyatakan bahwa:</b></p>
        <ul class="list-materi">
        <li>Atom mengandung elektron yang bermuatan negative yang tersebar merata di dalam seluruh atom.</li>
          <li>Atom bersifat netral, artinya jumlah muatan positif dan negatifnya sama.</li>
          <li>model atom yang dikenal sebagai model roti kismis. Dalam model ini, atom
digambarkan sebagai bola bermuatan positif yang di dalamnya tersebar elektron seperti
kismis di dalam roti.</li>
          <li>Muatan positif dianggap tersebar merata di seluruh bagian atom..</li>
          </ul>
        `,
        "Thomson kismis.png",
      )}

      ${section(
        "D. Teori Atom Rutherford",
        `Pada tahun 1909, Ernest Rutherford bersama asistennya, Hans Geiger, melakukan
        percobaan untuk mempelajari struktur bagian dalam atom. Percobaan ini dikenal sebagai
        percobaan hamburan partikel alfa. Saat itu, model atom yang berlaku adalah model atom
        Thomson (model roti kismis), yang menyatakan bahwa muatan positif tersebar merata
        dalam atom dan elektron tersebar di dalamnya.`,
        "rutherford.png",
        `
        <p><b>Berdasarkan hasil percobaan partikel alfa, pada tahun 1911 Rutherford mengemukakan
model atom baru yang disebut dengan model atom inti (nuklir). Model ini menyatakan
bahwa :</b></p>
<ul class="list materi">
<li>Atom tersusun atas inti atom yang bermuatan posistif dan negative.</li>
<li>Sebagian besar massa atom dan seluruh muatan positifnya terkonsentrasi pada bagian
yang sangat kecil di pusat atom yang disebut inti (nucleus/neutron).</li>
<li>Sebagian besar ruang dalam atom merupakan ruang kosong.</li>
<li>Elektron bergerak mengelilingi inti atom.</li>

<p><b>Kekurangan teori atom Rutherford :</b></p>
<ul class="list materi">
<li>Tidak dapat menjelaskan kenapa electron tidak pernah jatuh ke inti atom sesuai teori
fisika klasik.</li>
<li>Tidak dapat menjelaskan spektrum garis pada atom Hidrogen.</li>
`,
        "penemuan rutherford.png",
      )}

      ${section(
        "E. Teori Atom Bohr",
        `Pada tahun 1913, seorang fisikawan Denmark bernama Niels Bohr menjelaskan spektrum
garis atom hidrogen menggunakan konsep teori kuantum. Sebelum Bohr, atom dibayangkan
seperti tata surya kecil, di mana elektron bergerak mengelilingi inti seperti planet
mengelilingi Matahari. Namun, menurut hukum fisika klasik, elektron yang bergerak
seharusnya kehilangan energi dan akhirnya jatuh ke inti. Kenyataannya, atom tetap stabil.
Hal ini belum dapat dijelaskan saat itu.`,
        "neils bohr.png",
        `
        <p><b>Untuk menjawab masalah tersebut, Bohr mengemukakan gagasan bahwa:</b></p>
<ul class="list materi">
<li>Elektron hanya dapat bergerak pada lintasan tertentu yang disebut tingkat energi auatu
juga disebut kulit atu orbit.</li>
<li>Setiap lintasan memiliki energi tertentu dan tetap.</li>
<li>Selama berada pada lintasan tersebut, elektron tidak memancarkan energi.</li>
<li>Elektron dapat berpindah dari satu lintasan ke lintasan lain dengan menyerap atau
melepaskan energi dalam bentuk cahaya (foton).</li>

<p><b>Kekurangan Atom Bohr:</b></p>
        `,
        "teori bohr.png",
      )}

      ${section(
        "F. Mekanika Kuantum",
        `<p><b>Ilmuan yang berperan diantaranya:</b></p>
<ul class="list materi">
<li>Louis De Broglie (Dualisme Partikel Elektron), Ia mengemukakan bahwa elektron
tidak hanya bersifat sebagai partikel, tetapi juga memiliki sifat gelombang.</li>
<li>Heinsberg (Prinsip Ketidakpastian), Menurut prinsip ini, posisi dan kecepatan (atau
momentum) suatu partikel yang sangat kecil, seperti elektron, tidak dapat diketahui
secara bersamaan dengan tepat. Jika posisi elektron diukur dengan sangat teliti, maka
kecepatannya menjadi tidak pasti. Sebaliknya, jika kecepatannya diukur dengan sangat
teliti, maka posisinya menjadi tidak pasti.</li>
<li>Erwin Schodinger (Persamaan Gelombang), Persamaan Schrödinger menunjukkan
bahwa elektron hanya dapat menempati tingkat energi tertentu, seperti yang telah
dijelaskan oleh Bohr. Namun, berbeda dengan model Bohr yang menggambarkan
elektron bergerak pada lintasan melingkar (orbit).</li>
`,
        "mekanika kuantum.png",
        `Sehingga melahirkan teori atom modern yaitu Mekanika kuantum menggambarkan
elektron berada pada suatu daerah ruang tertentu yang disebut orbital. Orbital bukanlah
lintasan, melainkan daerah di sekitar inti atom yang memiliki kemungkinan terbesar untuk
ditempati elektron.</ul>`,
      )}
      `;
  } else if (materi == 2) {
    judul.innerText = `Pertemuan ${materi}: Perkembangan Teori Atom`;

    isi.innerHTML = `

      ${section(
        "A. Nomor Atom, Nomor Massa dan Notasi Atom",
        `
        Setiap atom dapat dibedakan berdasarkan jumlah partikel penyusunnya, terutama
jumlah proton dan neutron yang terdapat di dalam inti atom.”

<p><b>1. Nomor Atom (Z)</b></p>

        Nomor atom adalah jumlah proton yang terdapat dalam inti suatu atom. Dalam atom
yang bersifat netral, jumlah proton sama dengan jumlah elektron. Oleh karena itu,
nomor atom juga menunjukkan jumlah elektron dalam atom netral. Nomor atom
menentukan identitas suatu unsur".
        `,
        "democritus.png",
        `
<ul class="list-materi">
          <li>Unsur nitrogen memiliki nomor atom 7. Artinya, setiap atom nitrogen netral
memiliki 7 proton dan 7 elektron.</li>
          <li>Setiap atom yang memiliki 7 proton pasti merupakan unsur nitrogen. Jadi, identitas
suatu unsur ditentukan oleh jumlah protonnya.</li>
        </ul>

        <div class="materi-text">
    <h3>2. Nomor Massa (A)</h3>

    <p>
      Nomor massa adalah jumlah total proton dan neutron dalam inti atom.
      Nomor massa dilambangkan dengan huruf A.
    </p>

    <div class="highlight">
      Secara matematis:<br><br>
      <strong>Nomor massa (A) = jumlah proton + jumlah neutron</strong>
    </div>

    <p>
      Karena jumlah proton sama dengan nomor atom (Z), maka:
    </p>

    <div class="highlight">
      <strong>A = Z + jumlah neutron</strong>
    </div>

    <p>
      Untuk menentukan jumlah neutron, digunakan rumus:
    </p>

    <div class="highlight">
      <strong>Jumlah neutron = A − Z</strong>
    </div>

    <p><strong>Contoh:</strong> Gambar Fluorin no atom 9</p>

    <ul class="list-materi">
      <li>Nomor atom (Z) = 9</li>
      <li>Nomor massa (A) = 19</li>
    </ul>

    <div class="highlight">
      Maka jumlah neutronnya adalah: 19 − 9 = 10 neutron
    </div>

    <p>
      Semua nilai nomor atom, nomor massa, dan jumlah neutron selalu berupa
      bilangan bulat positif.
    </p>

  </div>

</div>

  <div class="materi-text">
    <h3>3. Notasi Atom</h3>

    <p>
      Suatu atom biasanya dituliskan dalam bentuk notasi berikut:
    </p>

    <div class="highlight" style="text-align:center; font-size:20px;">
      <span style="position: relative; display:inline-block;">
  <span style="position:absolute; top:-10px; left:-8px; font-size:14px;">A</span>
  <span style="position:absolute; bottom:-10px; left:-8px; font-size:14px;">Z</span>
  X
</span>
    </div>

    <h4>Keterangan:</h4>

    <ul class="list-materi">
      <li>X = lambang unsur</li>
      <li>Z = nomor atom (jumlah proton)</li>
      <li>A = nomor massa (jumlah proton + neutron)</li>
    </ul>

    <h4>Contoh notasi fluorin:</h4>

    <div class="highlight" style="text-align:center; font-size:20px;">
      19<br>
      9&nbsp;&nbsp;F
    </div>

    <h4>Artinya:</h4>

    <ul class="list-materi">
      <li>Nomor atom = 9</li>
      <li>Nomor massa = 19</li>
      <li>Jumlah neutron = 19 − 9 = 10</li>
    </ul>

  </div>

</div>
`,
      )}

      ${section(
        "B. Isotop",
        `

    <p>
      Isotop adalah atom-atom dari unsur yang sama yang memiliki:
    </p>

    <ul class="list-materi">
      <li>Nomor atom (Z) sama → jumlah proton sama</li>
      <li>Nomor massa (A) berbeda → jumlah neutron berbeda</li>
    </ul>

    <p>
      Karena nomor atomnya sama, maka isotop tetap merupakan unsur yang sama.
      Perbedaannya hanya pada jumlah neutronnya.
    </p>

    <div class="highlight">
      Isotop memiliki sifat kimia yang sama, tetapi dapat memiliki sifat fisika yang berbeda.
    </div>

    <p>
      Sebagai contoh, atom hidrogen memiliki 3 jenis isotop:
    </p>

    <!-- ISOTOP 1 -->
    
      <strong>1. Protium (¹H)</strong>
      <div class="highlight">
      <ul class="list-materi">
        <li>1 proton</li>
        <li>0 neutron</li>
        <li>Merupakan bentuk hidrogen yang paling umum</li>
      </ul>
    </div>

    <!-- ISOTOP 2 -->
    
      <strong>2. Deuterium (²H) atau (D)</strong>
      <div class="highlight">
      <ul class="list-materi">
        <li>1 proton</li>
        <li>1 neutron</li>
        <li>Disebut juga hidrogen berat dan bersifat stabil</li>
      </ul>
    </div>

  </div>

   <!-- ISOTOP 3 -->
   
      <strong>3.  Tritium (³₁H) atau (T)</strong>
      <div class="highlight">
      <ul class="list-materi">
      <li>1 proton</li>
      <li>2 neutron</li>
      <li>Hidrogen ini disebut Tritium yang bersifat radioaktif dan sangat langka di alam, dengan waktu paruh sekitar 12 tahun.</li>
    </ul>
    </div>
     <p>
      Ketiga atom tersebut memiliki 1 proton (nomor atom = 1), sehingga tetap disebut
hidrogen. Yang membedakan adalah jumlah neutronnya. Contoh lainnya bisa kita
temukan pada atom Uranium (U), dua isotop uranium yang umum adalah:</b>.
    </p>

<div class="highlight">
    <ul class="list-materi">
      <li>Uranium-235</li>
      <li>Uranium-238</li>
    </ul>
</div>
    <div class="highlight">
      Isotop = sama proton ⚛️, beda neutron 🔬
    </div>
  

    <p>
      Perbedaannya terletak pada jumlah neutronnya. Uranium-235 digunakan dalam reaktor
nuklir dan senjata nuklir sedangkan, Uranium-238 tidak memiliki sifat fisi yang sama
seperti uranium-235. Penamaan isotop (selain hidrogen) biasanya menggunakan
format:
    </p>

    <div class="highlight">
      Nama unsur – nomor massa
    </div>

    <ul class="list-materi">
      <li>Uranium-235 → dibaca "Uranium dua tiga lima"</li>
      <li>Uranium-238 → dibaca "Uranium dua tiga delapan"</li>
    </ul>

    <h3 style="margin-top: 25px;">Sifat Kimia Isotop</h3>

    <p>
      Kenapa sifat kimianya sama, karena Sifat kimia suatu unsur ditentukan oleh jumlah
proton, jumlah elektron (konfigurasi elektron) dan neutron tidak berperan langsung
dalam reaksi kimia biasa karena isotop memiliki jumlah proton sama dan jumlah
elektron sama. Maka isotop-isotop suatu unsur memiliki sifat kimia yang sama,
membentuk senyawa yang sama, kereaktifan yang hampir sama dan yang berbeda
biasanya adalah massa atom dan kestabilan inti (beberapa isotop bersifat radioaktif).
    </p>


    <div class="highlight">
      Perbedaan utama isotop hanya terletak pada massa atom dan kestabilan inti.
      Beberapa isotop bersifat radioaktif.
    </div>

        `,
      )}

      ${section(
        "C. Isobar ",
        ` <p>
      Isobar adalah atom-atom dari unsur yang berbeda yang memiliki nomor massa (A) sama,
tetapi nomor atom (Z) berbeda. Karena nomor atomnya berbeda, maka jumlah protonnya
juga berbeda, sehingga unsur tersebut tetap merupakan unsur yang berbeda. Sebagai
contoh :</b>.
    </p>

    <h3>Contoh:</h3>

    <!-- NOTASI -->
    <div class="highlight" style="text-align:center; font-size:20px;">
      <span style="position: relative; display:inline-block;">
  <span style="position:absolute; top:-10px; left:-8px; font-size:14px;">14</span>
  <span style="position:absolute; bottom:-10px; left:-8px; font-size:14px;">6</span>
  C
</span>
</div>
    <div class="highlight" style="text-align:center; font-size:20px;">
      <span style="position: relative; display:inline-block;">
  <span style="position:absolute; top:-10px; left:-8px; font-size:14px;">14</span>
  <span style="position:absolute; bottom:-10px; left:-8px; font-size:14px;">7</span>
  N
</span>
</div>
    </div>

    <ul class="list-materi">
      <li>Karbon-14 (C)</li>
      <li>Nitrogen-14 (N)</li>
    </ul>

    <p>
      karbon-14 dan nitrogen-14 memiliki nomor massa yang sama, yaitu 14, tetapi nomor
atomnya berbeda. Karbon memiliki nomor atom 6, sedangkan nitrogen memiliki nomor
atom 7. Artinya, jumlah proton pada kedua atom tersebut berbeda, walaupun jumlah total
proton dan neutronnya sama. Perbedaan ini dapat dijelaskan dari hubungan:
    </p>

    <div class="highlight">
      Rumus hubungan:
      <br><br>
      <b>A = Z + jumlah neutron</b>
    </div>

    <p>
      Pada isobar, nilai A sama, tetapi nilai Z berbeda.
      Akibatnya, jumlah neutron pada masing-masing atom juga berbeda
      agar nomor massanya tetap sama.
    </p
  </div>
  </div>`,
      )}
  
      ${section(
        "D. Isoton ",
        ` <p>
      Isoton adalah atom-atom dari unsur yang berbeda yang memiliki jumlah neutron yang
sama, tetapi memiliki nomor atom (jumlah proton) yang berbeda. Karena jumlah
protonnya berbeda, maka unsur-unsur tersebut tetap merupakan unsur yang berbeda.
Namun, jumlah neutron di dalam inti atomnya sama. Secara matematis dapat dipahami
dari hubungan:
    </p>

    <div class="highlight">
      Rumus:
      <br><br>
      <b>Jumlah neutron = nomor massa (A) − nomor atom (Z)</b>
    </div>

    <h3>Contoh:</h3>

    <!-- NOTASI -->
    </div>
    <div class="highlight" style="text-align:center; font-size:20px;">
      <span style="position: relative; display:inline-block;">
  <span style="position:absolute; top:-10px; left:-8px; font-size:14px;">14</span>
  <span style="position:absolute; bottom:-10px; left:-8px; font-size:14px;">6</span>
  C
</span>

     </div>
    <div class="highlight" style="text-align:center; font-size:20px;">
      <span style="position: relative; display:inline-block;">
  <span style="position:absolute; top:-10px; left:-8px; font-size:14px;">15</span>
  <span style="position:absolute; bottom:-10px; left:-8px; font-size:14px;">7</span>
  N
</span>
    </div>

    <ul class="list-materi">
      <li>Karbon-14 → 6 proton, 8 neutron</li>
      <li>Nitrogen-15 → 7 proton, 8 neutron</li>
    </ul>

    <p>
      Pada isoton, meskipun nilai A dan Z berbeda untuk masing-masing unsur, selisihnya
(jumlah neutron) bernilai sama. Sebagai contoh, karbon-14 dan nitrogen-15:
    </p>

    <div class="highlight">
      Isoton = neutron sama ⚛️, proton beda 🔬
    </div>

  </div>
</div>`,
      )}
      `;
  } else if (materi == 3) {
    judul.innerText = `Pertemuan ${materi}: Perkembangan Teori Atom`;

    isi.innerHTML = `

      ${section(
        "A. Bilangan Kuantum",
        `
  Dalam model atom mekanika kuantum yang dikembangkan oleh Erwin Schrödinger dan Max Born, posisi dan keadaan elektron dalam atom dijelaskan menggunakan bilangan kuantum. Bilangan kuantum membantu menentukan tingkat energi, bentuk, dan arah orbital elektron dalam atom. Terdapat empat bilangan kuantum utama, yaitu:
  
  <br><br>
  <b>1. Bilangan Kuantum Utama (n)</b><br><br>
  
  Bilangan kuantum utama dilambangkan dengan huruf <b>n</b>, nilai n adalah nilai bilangan bulat positif yaitu, n = 1, 2, 3, 4 dan seterusnya. Bilangan kuantum utama menunjukkan:
  
  <ul class="list-materi">
    <li>Tingkat energi elektron</li>
    <li>Ukuran orbital</li>
    <li>Jarak rata-rata elektron dari inti atom.</li>
  </ul>

  <p><b>Pengaruh bilangan kuantum utama antara lain:</b></p>

  <p><b>a. Pengaruh n terhadap energi orbital</b></p>
  <p>
  Pada atom hidrogen, energi orbital hanya dipengaruhi oleh bilangan kuantum utama (n).
  Oleh karena itu, orbital yang memiliki nilai n sama akan mempunyai energi yang sama.
  Sedangkan pada atom yang memiliki lebih dari satu elektron, energi orbital dipengaruhi
  oleh bilangan kuantum utama (n) dan bilangan kuantum azimut (l). Hal ini terjadi karena
  adanya gaya tolak-menolak antar elektron yang memengaruhi energi setiap orbital.
  </p>

  <p><b>b. Pengaruh n terhadap ukuran orbital</b></p>
  <p>
  Bilangan kuantum utama juga menentukan ukuran orbital. Semakin besar nilai n,
  maka ukuran orbital akan semakin besar, elektron berada lebih jauh dari inti atom,
  dan energi elektronnya semakin tinggi. Dengan demikian, semakin besar nilai n,
  semakin jauh jarak rata-rata elektron terhadap inti atom.
  </p>

  <p><b>C. Hubungan n dengan kulit elektron</b></p>
  <p>Elektron-elektron yang memiliki nilai n sama akan menempati kulit elektron yang sama.
  Hubungan antara n dan nama kulit adalah:</p>

  <ul class="list-materi">
    <li>n = 1 → kulit K</li>
    <li>n = 2 → kulit L</li>
    <li>n = 3 → kulit M</li>
    <li>n = 4 → kulit N</li>
  </ul>

  <p>
  Semakin besar nilai n, semakin luar posisi kulit tersebut dari inti.
  </p>

  <table class="tabel-materi">
    <tr>
      <th>Bilangan Kuantum Utama (n)</th>
      <th>1</th>
      <th>2</th>
      <th>3</th>
      <th>4</th>
      <th>5</th>
      <th>6</th>
      <th>7</th>
    </tr>
    <tr>
      <td>Kulit</td>
      <td>K</td>
      <td>L</td>
      <td>M</td>
      <td>N</td>
      <td>O</td>
      <td>P</td>
      <td>Q</td>
    </tr>
  </table>

  <br><br>
  <b>2. Bilangan Kuantum Azimut (l)</b><br><br>
  
  <p>
  Bilangan kuantum momentum sudut atau bilangan kuantum azimut (l) menyatakan bentuk orbital atom.
  Nilai l bergantung pada bilangan kuantum utama (n). Untuk setiap nilai n tertentu,
  nilai l adalah bilangan bulat yang berkisar dari l = 0 sampai (n - 1).
  </p>

  <p><b>Artinya:</b></p>
  <ul class="list-materi">
    <li>Jika n = 1 → l = 0</li>
    <li>Jika n = 2 → l = 0 dan 1</li>
    <li>Jika n = 3 → l = 0, 1, dan 2</li>
    <li>Jika n = 4 → l = 0, 1, 2, dan 3</li>
  </ul>

  <p>
  Semakin besar nilai n, semakin banyak kemungkinan nilai l, sehingga semakin banyak bentuk orbital yang mungkin.
  </p>

  <p><b>a. Pengaruh Nilai l dengan Jenis Orbital</b></p>

  <p>Setiap nilai l dilambangkan dengan huruf tertentu:</p>

  <ul class="list-materi">
    <li>l = 0 → orbital s</li>
    <li>l = 1 → orbital p</li>
    <li>l = 2 → orbital d</li>
    <li>l = 3 → orbital f</li>
  </ul>

  <p><b>Masing-masing memiliki bentuk khas:</b></p>

  <ul class="list-materi">
    <li>Orbital s berbentuk bola</li>
    <li>Orbital p berbentuk dua cuping (dumbbell)</li>
    <li>Orbital d umumnya berbentuk seperti daun semanggi</li>
    <li>Orbital f memiliki bentuk yang lebih kompleks</li>
  </ul>

  
   <p><b>b. Shell dan Subshell</b></p>
  <p>
  Sekumpulan orbital yang memiliki nilai n sama disebut kulit (shell). 
  Sedangkan sekumpulan orbital yang memiliki nilai n dan l yang sama disebut subkulit (subshell).
  </p>

  <p><b>Contoh:</b></p>
  <p>
  Untuk n = 2, nilai l yang mungkin adalah 0 dan 1. Artinya, kulit ke-2 terdiri dari dua subkulit:
  </p>

  <ul class="list-materi">
    <li>2s (n = 2, l = 0)</li>
    <li>2p (n = 2, l = 1)</li>
  </ul>

  <p>
  Angka 2 menunjukkan nilai n (kulit), sedangkan huruf s dan p menunjukkan nilai l (bentuk orbital).
  </p>

  <p>
  Jadi, bilangan kuantum azimut (l) menentukan bentuk orbital, bergantung pada nilai bilangan kuantum utama (n) dan menentukan jumlah dan jenis subkulit dalam suatu kulit.
  </p>

  <p>
  Semakin besar n, semakin banyak kemungkinan nilai l, sehingga semakin beragam bentuk orbital dalam kulit tersebut.
  </p>
<br><br>
  <b>3. Bilangan Kuantum Magnetik (m)</b><br><br>
  <p>
  Bilangan kuantum magnetik dilambangkan dengan m. Bilangan ini menyatakan orientasi orbital dalam ruang,
  yaitu arah kedudukan suatu orbital terhadap sumbu x, y, dan z.
  Nilai bilangan kuantum magnetik bergantung pada nilai bilangan kuantum azimut (l).
  Untuk setiap nilai l tertentu, nilai m berkisar dari -l sampai +l, termasuk nol.
  </p>

  <p><b>Secara umum:</b></p>
  <p>m = -l, ..., 0, ..., +l</p>

  <p>
  Artinya, jumlah kemungkinan nilai m adalah (2l + 1), yang juga menunjukkan jumlah orbital dalam satu subkulit.
  Berikut adalah hubungan nilai l dengan m:
  </p>

  <ul class="list-materi">
    <li>Jika l = 0 (orbital s), maka m = 0 → terdapat 1 orientasi orbital</li>
    <li>Jika l = 1 (orbital p), maka m = -1, 0, +1 → terdapat 3 orientasi (px, py, pz)</li>
    <li>Jika l = 2 (orbital d), maka m = -2, -1, 0, +1, +2 → terdapat 5 orientasi orbital</li>
    <li>Jika l = 3 (orbital f), maka m = -3, -2, -1, 0, +1, +2, +3 → terdapat 7 orientasi orbital</li>
  </ul>

  <p>
  Jadi, dapat disimpulkan bahwa bilangan kuantum magnetik (m) menentukan orientasi orbital dalam ruang,
  bergantung pada bilangan kuantum azimut (l), serta menentukan jumlah orbital dalam suatu subkulit melalui rumus (2l + 1).
  Semakin besar nilai l, semakin banyak kemungkinan orientasi orbital dalam ruang.
  </p>
<br><br>
  <b>4. Bilangan Kuantum Spin (s)</b><br><br>
  <p>
  Spin elektron adalah sifat dasar elektron yang berhubungan dengan arah putaran elektron secara kuantum.
  Spin bukan berarti elektron benar-benar berputar seperti benda biasa, tetapi merupakan sifat alami elektron.
  Spin elektron dilambangkan dengan s, sedangkan bilangan kuantum spin dilambangkan dengan ms.
  </p>

  <p><b>Nilai spin elektron selalu tetap, yaitu:</b></p>
  <p>s = 1/2</p>

  <p><b>Bilangan kuantum spin memiliki dua kemungkinan arah, yaitu:</b></p>
  <p>ms = +1/2 atau ms = -1/2</p>

  <p><b>Kedua arah spin tersebut dapat ditulis sebagai:</b></p>
  <ul class="list-materi">
    <li>tanda (+) dan (−)</li>
    <li>spin up dan spin down</li>
    <li>simbol ↑ dan ↓</li>
  </ul>

  <p>
  Bilangan kuantum spin digunakan untuk melengkapi penjelasan keadaan elektron bersama tiga bilangan kuantum lainnya,
  yaitu n, l, dan m. Spin elektron juga memengaruhi sifat magnetik atom.
  </p>

  <ul class="list-materi">
    <li>Jika semua elektron berpasangan, atom bersifat diamagnetik (tidak tertarik magnet)</li>
    <li>Jika ada elektron yang tidak berpasangan, atom bersifat paramagnetik (dapat tertarik magnet)</li>
  </ul>
  `,
      )}
${section(
  "B. Konfigurasi Elektron",
  `
  
  <p>
  Konfigurasi elektron menggambarkan bagaimana elektron-elektron tersusun dalam orbital,
  dimulai dari orbital berenergi paling rendah menuju orbital berenergi lebih tinggi.
  Pengisian ini mengikuti prinsip bahwa elektron akan menempati orbital dengan energi terendah terlebih dahulu.
  </p>

  <p><b>1. Muatan Inti Efektif (Zeff)</b></p>

  <p>
  Muatan inti efektif adalah gaya tarik bersih yang dirasakan oleh elektron terhadap inti atom.
  Secara sederhana dirumuskan sebagai:
  </p>

  <p><b>Zeff = Z − S</b></p>

  <p><b>Keterangan:</b></p>
  <ul class="list-materi">
    <li>Z = jumlah proton dalam inti (nomor atom)</li>
    <li>S = jumlah elektron perisai (elektron kulit dalam)</li>
  </ul>

  <p>
  Elektron kulit dalam berfungsi sebagai perisai (shielding effect) yang mengurangi gaya tarik inti terhadap elektron terluar.
  </p>
  `,
  "Atom.png", // 👉 NAMA GAMBAR LU (samain sama file assets)
  `
  <p style="font-size: 13px; opacity: 0.7;">
  Sumber: id.wikipedia.org
  </p>

  <p>
  Efek perisai tidak hanya menetralkan sebagian muatan positif inti, tetapi juga
menimbulkan tolakan antar elektron. Jika efek perisai besar, maka energi orbital
menjadi lebih tinggi karena elektron kurang terikat kuat oleh inti.
  </p>

  <br><br>
  <b>2. Bentuk Orbital</b><br><br>
  <p>
  Selain muatan inti efektif, bentuk orbital juga memengaruhi tingkat energi.
  Hal ini berkaitan dengan kemampuan orbital untuk "menembus" (penetrasi) mendekati inti.
  </p>

  <p><b>Urutan kemampuan penetrasi orbital adalah:</b></p>
  <p><b>s > p > d > f</b></p>

  <p><b>Artinya:</b> semakin ke kiri, orbital semakin dekat ke inti.</p>

  <p style="font-size: 13px; opacity: 0.7;">
  Sumber: ilustrasi orbital (referensi: shutterstock / internet)
  </p>

  <p>
  Orbital s berbentuk bola, orbital p berbentuk dua cuping (dumbbell),
  orbital d memiliki bentuk yang lebih kompleks, dan orbital f lebih kompleks lagi.
  </p>

   <ul class="list-materi">
    <li>Orbital s berbentuk bola dan memiliki probabilitas terbesar berada dekat inti, sehingga energinya paling rendah.</li>
    <li>Orbital p berbentuk dua cuping (dumbbell), penetrasinya lebih kecil dibanding s.</li>
    <li>Orbital d (seperti daun semanggi) lebih sulit menembus inti dibanding p.</li>
    <li>Orbital f memiliki penetrasi paling kecil.</li>
  </ul>

  <p>
  Karena itu, dalam satu tingkat n yang sama:
  </p>

  <p><b>Energi:</b></p>
  <p>s < p < d < f</p>

  <p>
  Contoh: Energi 3s lebih rendah daripada 3p, dan 3p lebih rendah daripada 3d.
  </p>

  <br><br>
  <b>3. Sub Kulit</b><br><br>
  <p>
  Elektron dalam atom tidak bergerak secara bebas, tetapi menempati daerah tertentu di sekitar inti atom yang disebut tingkat energi atau kulit elektron. Elektron yang berada pada tingkat energi tertentu berada dalam keadaan stabil.
  </p>

  <p>
  Setiap tingkat energi memiliki bagian yang lebih kecil yang disebut subtingkat energi (subkulit). Subtingkat energi dilambangkan dengan huruf: <b>s, p, d, dan f</b>.
  </p>

  <p>
  Setiap subtingkat memiliki kapasitas maksimum elektron yang berbeda, yaitu:
  </p>

  <ul class="list-materi">
    <li>s dapat menampung maksimal 2 elektron</li>
    <li>p dapat menampung maksimal 6 elektron</li>
    <li>d dapat menampung maksimal 10 elektron</li>
    <li>f dapat menampung maksimal 14 elektron</li>
  </ul>
  <p>Subtingkat energi terdiri atas bagian yang lebih spesifik lagi yang disebut orbital. Setiap orbital hanya dapat diisi maksimal dua elektron dengan arah spin yang berlawanan.</p>

  <p>Elektron akan mengisi orbital dimulai dari tingkat energi terendah menuju tingkat energi yang lebih tinggi. Urutan pengisian elektron adalah:</p>

  <p><b>1s → 2s → 2p → 3s → 3p → 4s → 3d → 4p → 5s → 4d → 5p → 6s → 4f → 5d → 6p → 7s → 5f → 6d → 7p</b></p>
  
  <p>Urutan tersebut digunakan untuk menentukan konfigurasi elektron suatu atom.</p>

  <p><b>Contoh:</b></p>
  <p>4p<sup>6</sup></p>

  <ul class="list-materi">
    <li>Angka 4 menyatakan letak kulit</li>
    <li>Huruf p menyatakan subkulit</li>
    <li>Angka 6 menyatakan jumlah elektron</li>
  </ul>
  
  <p>Ada 3 aturan dalam penulisan konfigurasi elektron:</p>

  <p><b>1. Prinsip Aufbau</b></p>

  <p>
  Asas Aufbau adalah prinsip yang menjelaskan bahwa elektron akan mengisi 
  orbital mulai dari tingkat energi paling rendah terlebih dahulu, kemudian ke 
  tingkat energi yang lebih tinggi. Setiap orbital maksimal dapat ditempati oleh 
  dua elektron dengan spin berlawanan. Konfigurasi elektron disusun secara bertahap 
  sesuai urutan kenaikan energi orbital.
  </p>

  <p>
  Asas Aufbau bekerja dengan baik terutama pada 18 unsur pertama dalam tabel periodik. Namun, pada unsur transisi dan unsur berat dapat terjadi penyimpangan karena interaksi antar elektron yang lebih kompleks.
  </p>

  <p>
  Bentuk modern asas Aufbau dijelaskan melalui kaidah Madelung yang dikemukakan oleh Erwin Madelung pada tahun 1936. Menurut kaidah Madelung, urutan pengisian orbital ditentukan oleh aturan berikut:
  </p>

  <ol class="list-materi">
    <li>Orbital diisi berdasarkan kenaikan nilai (n + l), yaitu jumlah bilangan kuantum utama (n) dan bilangan kuantum azimut (l).</li>
    <li>Jika terdapat dua orbital dengan nilai (n + l) yang sama, maka orbital dengan nilai n yang lebih kecil akan diisi terlebih dahulu.</li>
  </ol>
  <p>
  Berdasarkan aturan tersebut, urutan pengisian orbital adalah:
  </p>

  <p><b>
  1s < 2s < 2p < 3s < 3p < 4s < 3d < 4p < 5s < 4d < 5p < 6s < 4f < 5d < 6p < 7s < 5f < 6d < 7p
  </b></p>
  
  
  <p>
  Diagram di atas menunjukkan arah pengisian elektron berdasarkan kaidah Madelung (aturan n + l).
  </p>

  <p>
  Elektron akan mengikuti arah panah dari atas ke bawah untuk menentukan urutan energi orbital.
  </p>

  <br><br>
  <b>2. Larangan Pauli</b><br><br>
  
  <p>
  Asas Larangan Pauli dikemukakan oleh Wolfgang Pauli pada tahun 1925. Asas ini menyatakan bahwa tidak ada dua elektron dalam satu atom yang memiliki keempat bilangan kuantum yang sama, yaitu n, l, ml, dan ms.
  </p>

  <p>
  Akibatnya, setiap orbital hanya dapat ditempati maksimal dua elektron. Jika terdapat dua elektron dalam satu orbital, maka keduanya harus memiliki arah spin yang berlawanan.
  </p>

  <p class="rumus">
  m<sub>s</sub> = +1/2 &nbsp;&nbsp; dan &nbsp;&nbsp; m<sub>s</sub> = -1/2
  </p>

  <p>
  Pasangan elektron dengan spin berlawanan disebut pasangan elektron.
  </p>

  <p>
  Contohnya pada atom klorin (Cl) dengan nomor atom 17, konfigurasi elektronnya adalah:
  </p>

  <p class="rumus">
  1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> 3s<sup>2</sup> 3p<sup>5</sup>
  </p>

  <br><br>
  <b>3. Asas Hund</b><br><br>
  
  <p>
  Kaidah Hund menyatakan bahwa elektron akan mengisi orbital-orbital yang memiliki energi sama secara satu per satu terlebih dahulu sebelum berpasangan.
  </p>

  <p>
  Elektron yang mengisi orbital tersebut juga memiliki arah spin yang sejajar. Artinya, pada subkulit seperti p, d, atau f, setiap orbital akan diisi satu elektron terlebih dahulu sebelum ada pasangan elektron dalam orbital yang sama.
  </p>

  <p>
  Contohnya pada atom klorin (Cl) dengan konfigurasi elektron:
  </p>

  <p class="rumus">
  1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> 3s<sup>2</sup> 3p<sup>5</sup>
  </p>
  
  <p>
  Subkulit 3p memiliki tiga orbital dengan energi yang sama. Sesuai kaidah Hund, elektron akan mengisi ketiga orbital tersebut satu per satu terlebih dahulu, kemudian elektron berikutnya mulai berpasangan.
  </p>

  <p>Akibatnya, pada konfigurasi 3p5 masih terdapat satu elektron yang tidak
berpasangan. Keberadaan elektron yang tidak berpasangan ini menyebabkan atom
klorin bersifat paramagnetik. Kaidah Hund membantu menjelaskan pola pengisian
elektron dalam orbital serta sifat magnetik suatu atom.</p>
  `,
)}
      `;
  }
  setTimeout(initScrollAnim, 200);
}

// =======================
// DATA QUIZ
// =======================
const quizData = {
  1: [
    {
      soal: "Siapa yang pertama kali bilang atom tidak bisa dibagi?",
      opsi: ["Dalton", "Democritus", "Bohr", "Rutherford"],
      benar: "Democritus",
      clue: "Filsuf Yunani kuno 👀",
    },
    {
      soal: "Teori atom pertama berbasis eksperimen dikemukakan oleh?",
      opsi: ["Thomson", "Dalton", "Bohr", "Einstein"],
      benar: "Dalton",
      clue: "Tahun 1800-an 🔬",
    },
    {
      soal: "Model 'roti kismis' itu teorinya siapa?",
      opsi: ["Rutherford", "Bohr", "Thomson", "Dalton"],
      benar: "Thomson",
      clue: "Elektron kayak kismis 🍞",
    },
    {
      soal: "Siapa yang menemukan inti atom?",
      opsi: ["Bohr", "Dalton", "Rutherford", "Thomson"],
      benar: "Rutherford",
      clue: "Percobaan emas 😏",
    },
    {
      soal: "Elektron pindah lintasan sambil menyerap energi itu teori siapa?",
      opsi: ["Bohr", "Dalton", "Thomson", "Democritus"],
      benar: "Bohr",
      clue: "Orbit & energi ⚡",
    },
  ],

  2: [
    {
      soal: "Subkulit p maksimal menampung berapa elektron?",
      opsi: ["2", "6", "10", "14"],
      benar: "6",
      clue: "s=2, p=?, d=10 😏",
    },
    {
      soal: "Orbital dengan energi paling rendah adalah?",
      opsi: ["p", "d", "s", "f"],
      benar: "s",
      clue: "Paling dekat inti 👀",
    },
    {
      soal: "Bentuk orbital p itu kayak apa?",
      opsi: ["Bola", "Dumbbell", "Kotak", "Segitiga"],
      benar: "Dumbbell",
      clue: "Kayak barbel 🏋️",
    },
    {
      soal: "Subkulit d maksimal menampung?",
      opsi: ["2", "6", "10", "14"],
      benar: "10",
      clue: "2, 6, ?, 14",
    },
    {
      soal: "Urutan energi orbital yang benar?",
      opsi: [
        "s > p > d > f",
        "s < p < d < f",
        "p < s < d < f",
        "f < d < p < s",
      ],
      benar: "s < p < d < f",
      clue: "s paling rendah 😏",
    },
  ],

  3: [
    {
      soal: "Elektron isi satu-satu dulu sebelum berpasangan disebut?",
      opsi: ["Pauli", "Hund", "Bohr", "Dalton"],
      benar: "Hund",
      clue: "🐶",
    },
    {
      soal: "Maksimal elektron dalam 1 orbital?",
      opsi: ["1", "2", "3", "4"],
      benar: "2",
      clue: "Pauli rule 😏",
    },
    {
      soal: "Bilangan kuantum utama dilambangkan dengan?",
      opsi: ["l", "m", "n", "s"],
      benar: "n",
      clue: "Tingkat energi ⚡",
    },
    {
      soal: "Bilangan kuantum azimut menentukan?",
      opsi: ["Energi", "Jumlah proton", "Bentuk orbital", "Spin"],
      benar: "Bentuk orbital",
      clue: "s p d f 👀",
    },
    {
      soal: "Spin elektron punya berapa kemungkinan?",
      opsi: ["1", "2", "3", "4"],
      benar: "2",
      clue: "+½ dan -½ 😏",
    },
  ],
};

// =======================
// QUIZ LOGIC
// =======================
let index = 0;
let score = 0;

function enableBtn() {
  document.querySelector(".submit-btn").disabled = false;
}
function loadQuiz() {
  const materi = getMateriAktif();
  const data = quizData[materi][index];

  document.getElementById("soal").innerText = data.soal;

  let html = "";
  data.opsi.forEach((opt) => {
    html += `
    <label>
      <input type="radio" name="q" value="${opt}" onchange="enableBtn()">
      ${opt}
    </label><br>
  `;
  });

  document.getElementById("pilihan").innerHTML = html;

  document.getElementById("clue").innerText = "💡 " + data.clue;
}

function nextSoal() {
  const materi = getMateriAktif();
  const data = quizData[materi][index];

  const jawab = document.querySelector('input[name="q"]:checked');

  if (!jawab) {
    alert("Pilih dulu 😭");
    return;
  }

  if (jawab.value === data.benar) {
    score += 20;
  }

  index++;

  if (index < quizData[materi].length) {
    loadQuiz();
  } else {
    // skor tidak disimpan lagi karena kamu tidak pakai progres/performa
    window.location.href = "dashboard.html";
  }
}

// =======================
// AUTO LOAD
// =======================
document.addEventListener("DOMContentLoaded", function () {
  loadUser();
  const btn = document.querySelector(".submit-btn");
  if (btn) btn.disabled = true;

  // Reset state quiz tiap buka halaman quiz
  index = 0;
  score = 0;

  if (document.getElementById("soal")) {
    loadQuiz();
  }
  document.querySelector(".submit-btn").disabled = true;
});
// =======================
// SECTION FLEX (INI KUNCI 🔥)
// =======================
function section(judul, isiAtas, gambar1 = "", isiBawah = "", gambar2 = "") {
  return `
    <div class="materi-section">

      <h2>${judul}</h2>

      <div class="materi-text">
        ${isiAtas}
      </div>

      ${gambar1 ? `<img src="../assets/${gambar1}" class="materi-img">` : ""}

      ${isiBawah ? `<div class="materi-text bawah">${isiBawah}</div>` : ""}

      ${gambar2 ? `<img src="../assets/${gambar2}" class="materi-img">` : ""}

    </div>
  `;
}

// =======================
// ANIMASI SCROLL
// =======================
function initScrollAnim() {
  const sections = document.querySelectorAll(".materi-section");

  function reveal() {
    sections.forEach((sec) => {
      const top = sec.getBoundingClientRect().top;
      const trigger = window.innerHeight - 100;

      if (top < trigger) {
        sec.classList.add("show");
      }
    });
  }

  window.addEventListener("scroll", reveal);
  reveal();
}

// =======================
// NAVIGASI
// =======================
function bukaMateri(id) {
  localStorage.setItem("materiAktif", id);
  // simpan juga di session agar saat reload tetap konsisten
  sessionStorage.setItem("materiAktif", id);
  window.location.href = "materi.html";
}

function goBack() {
  window.history.back();
}

function selesaiMateri() {
  window.location.href = "quiz.html";
}

// =======================
// ATOM INTERAKTIF
// =======================
document.addEventListener("click", function (e) {
  if (e.target.classList.contains("electron")) {
    showInfo("Elektron", "Partikel bermuatan negatif.");
  }

  if (e.target.classList.contains("nucleus")) {
    showInfo("Inti Atom", "Pusat atom (proton + neutron).");
  }
});

function showInfo(judul, isi) {
  const popup = document.createElement("div");
  popup.className = "popup-info";
  popup.innerHTML = `
    <div class="popup-box">
      <h3>${judul}</h3>
      <p>${isi}</p>
      <button onclick="this.parentElement.parentElement.remove()">Tutup</button>
    </div>
  `;
  document.body.appendChild(popup);
}

// ================= RIPPLE EFFECT =================
document.addEventListener("click", function (e) {
  const ripple = document.createElement("div");
  ripple.className = "ripple";

  ripple.style.left = e.clientX + "px";
  ripple.style.top = e.clientY + "px";

  document.body.appendChild(ripple);

  setTimeout(() => ripple.remove(), 600);
});

// ================= PARTICLE GENERATOR =================
for (let i = 0; i < 40; i++) {
  const p = document.createElement("div");
  p.className = "particle";

  p.style.left = Math.random() * 100 + "vw";
  p.style.animationDuration = 10 + Math.random() * 20 + "s";
  p.style.opacity = Math.random();

  document.body.appendChild(p);
}
const materiAktif = localStorage.getItem("materiAktif") || 1;

/*memperindah card dashboard*/

// ANIMASI ANGKA NAIK
function animateValue(id, start, end, duration, suffix = "") {
  let obj = document.getElementById(id);
  let range = end - start;
  let startTime = null;

  function step(timestamp) {
    if (!startTime) startTime = timestamp;
    let progress = timestamp - startTime;
    let value = Math.min(start + (range * progress) / duration, end);

    obj.innerHTML = Math.floor(value) + suffix;

    if (progress < duration) {
      requestAnimationFrame(step);
    }
  }

  requestAnimationFrame(step);
}

// JALANIN (angka animasi statis dihapus agar dashboard akurat per user)
// animateValue("quizCount", 0, 3, 800);
// animateValue("score", 0, 78, 1000, "%");

// PROGRESS BAR DELAY BIAR SMOOTH
setTimeout(() => {
  document.getElementById("progressBar").style.width = "10%";
}, 300);

// Catatan: dashboard di sini awalnya mencoba baca key lama (materi/quiz/score).
// UI utama dashboard sekarang diisi oleh loop progress per-user di loadUser().
