/**
Tugas: Pembuatan Objek Mahasiswa

Buatlah sebuah object function construction dengan nama Mahasiswa yang memiliki properti berikut:
    nama - string, menyimpan nama mahasiswa.
    nim - string, menyimpan nomor induk mahasiswa.
    jurusan - string, menyimpan jurusan mahasiswa.
    nilai - array, menyimpan nilai mata kuliah yang diambil mahasiswa (gunakan objek dengan properti mataKuliah dan nilai).
    tambahNilai - method untuk menambahkan nilai mata kuliah dan jumlah nilai (0-100).
    hitungRataRata - method untuk menghitung rata-rata nilai mahasiswa. */

// function mhs(nama, nim, jurusan, nilai) {
//     this.nama = nama;
//     this.nim = nim;
//     this.jurusan = jurusan;
//     this.nilai = nilai;
// }
// let mhs1 = new mhs("agus", 4123447, "teknik", [], ["fisika : 40", "kimia = 20"], []);

function Mahasiswa(nama, nim, jurusan, nilai) {
    this.nama = nama;
    this.nim = nim;
    this.jurusan = jurusan;
    this.nilai = nilai;

    this.tambahNilai = function (mataKuliah, nilai) {
        // Validasi nilai antara 0 dan 100
        if (nilai >= 0 && nilai <= 100) {
            this.nilai.push({ mataKuliah, nilai });
            console.log(`Nilai ${mataKuliah} ditambahkan.`);
        } else {
            console.log("Masukkan nilai antara 0 dan 100.");
        }
    };

    this.hitungRataRata = function () {
        let totalNilai = 0;

        for (let i = 0; i < this.nilai.length; i++) {
            totalNilai += this.nilai[i].nilai;
        }

        if (this.nilai.length > 0) {
            const rataRata = totalNilai / this.nilai.length;
            return rataRata.toFixed(2);
        } else {
            return "Tidak ada nilai untuk dihitung rata-rata.";
        }
    };
}

// Contoh penggunaan
let mhs1 = new Mahasiswa("Agus", 4123447, "Teknik", []);
mhs1.tambahNilai("Fisika", 40);
mhs1.tambahNilai("Kimia", 20);
console.log(mhs1.hitungRataRata());
