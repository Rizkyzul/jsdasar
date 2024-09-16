// Membuat soal dengan angkot 1-6 beroprasi dan 7-10 tidak beroprasi dan 8 sedang lembur dengan else if(Pengkondisian)

// Mmebuat variabel
var jumlah_Angkot = 10,
    angkot_Beroprasi = 6,
    no_Angkot = 1;

//  Gunakan for/loop untuk memulai pengkondisian
for (no_Angkot; no_Angkot <= jumlah_Angkot; no_Angkot++) {
    if (no_Angkot <= 6) {
        console.log("Angkot No. " + no_Angkot + " beroprasi dengan baik"); // if Bernilai True
    } else if (no_Angkot === 8) {
        console.log("Angkot No. " + no_Angkot + " sedang lembur"); // else Bernilai False
    } else {
        console.log("Angkot No. " + no_Angkot + " sedang tidak beroprasi");
    }
}
