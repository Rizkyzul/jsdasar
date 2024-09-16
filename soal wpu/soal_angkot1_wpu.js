// menggunakan while untuk data angkot beroprasi

var noAngkot = 1; //Buat VARIABEL awal mulai dari angka berapa
while (noAngkot <= 10) {
    //jika jumlah kurang dari 10 akan lanjut dan mentok di 10 karena 11 adalah false (tidak harus 500 bisa kurang atau lebih)
    console.log("Angkot No. " + noAngkot + " Beroprasi dengan baik"); // mencetak string diatas jika sudah false
    noAngkot++; // operasi yang membuat 1-500 jalan/increment
}

// atau dengan penulisan lain dengan tabel penerusuran

var JumlahAngkot = 10;
var noAngkot = 1;
while (noAngkot <= JumlahAngkot) {
    console.log("Angkot No. " + noAngkot + " Beroprasi dengan baik");
    noAngkot++;
}
