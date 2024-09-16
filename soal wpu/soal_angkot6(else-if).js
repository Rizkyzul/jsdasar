// Membuat soal dengan angkot 1-6 beroprasi dan 7-8 tidak beroprasi dan 5,8,10 sedang lembur dengan else if(Pengkondisian)

// Mmebuat variabel
var jumlah_Angkot = 10,
    angkot_Beroprasi = 6,
    no_Angkot = 1;

//  Gunakan for/loop untuk memulai pengkondisian jawaban saya
for (no_Angkot; no_Angkot <= jumlah_Angkot; no_Angkot++) {
    if (no_Angkot <= 4 || no_Angkot === 6) {
        console.log("Angkot No. " + no_Angkot + " beroprasi dengan baik"); // if Bernilai True
    } else if (no_Angkot === 5 || no_Angkot === 8 || no_Angkot === 10) {
        console.log("Angkot No. " + no_Angkot + " sedang lembur"); // 5,8,10 berada di else if
    } else {
        console.log("Angkot No. " + no_Angkot + " sedang tidak beroprasi");
    }
}

// Jawaban WPU
for (no_Angkot; no_Angkot <= jumlah_Angkot; no_Angkot++) {
    if (no_Angkot <= 6 && no_Angkot !== 5) {
        console.log("Angkot No. " + no_Angkot + " beroprasi dengan baik"); // if Bernilai True
    } else if (no_Angkot === 5 || no_Angkot === 8 || no_Angkot === 10) {
        console.log("Angkot No. " + no_Angkot + " sedang lembur"); // 5,8,10 berada di else if
    } else {
        console.log("Angkot No. " + no_Angkot + " sedang tidak beroprasi");
    }
}
