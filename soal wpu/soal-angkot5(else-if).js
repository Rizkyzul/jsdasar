// Membuat soal dengan angkot 1-6 beroprasi dan 7 dan 9 tidak beroprasi dan 8 dan 10 sedang lembur dengan else if(Pengkondisian)

// Mmebuat variabel
var jumlah_Angkot = 10,
    angkot_Beroprasi = 6,
    no_Angkot = 1;

//  Gunakan for/loop untuk memulai pengkondisian
for (no_Angkot; no_Angkot <= jumlah_Angkot; no_Angkot++) {
    if (no_Angkot <= 7) {
        console.log("Angkot No. " + no_Angkot + " beroprasi dengan baik"); // if Bernilai True
    } else if (no_Angkot === 9) {
        console.log("Angkot No. " + no_Angkot + " sedang tidak beroprasi"); // else Bernilai False
    } else {
        console.log("Angkot No. " + no_Angkot + " sedang lembur");
    }
}
