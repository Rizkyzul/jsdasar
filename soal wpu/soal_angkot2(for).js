// Pertanyaan : membuat loop pengulangan dengan soal angkot 1-6 Beroprasi dengan baik, dan angkot 7-10 sedang tidak beroprasi
// manggunakan for dan while

var jumlah_Angkot = 10,
    angkot_Beroprasi = 6,
    no_Angkot = 1;

// Menggunakan while untuk angkot 1-6
while (no_Angkot <= angkot_Beroprasi) {
    console.log("Angkot No. " + no_Angkot + " beroprasi dengan baik.");
    no_Angkot++;
}

// menggunakan for untuk angkot 7-10
for (angkot_Beroprasi; angkot_Beroprasi <= jumlah_Angkot; angkot_Beroprasi++) {
    console.log("Angkot No. " + angkot_Beroprasi + " Sedang Tidak Beroprasi.");
}
