var ulangi = "true";
while (ulangi) {
    var kesempatan = "3";
    while (kesempatan != 0) {
        var komputer = Math.floor(Math.random() * 10) + 1;
        var pemain = parseInt(prompt("Tebak ANGKA!\nMasukan Angka Pilihanmu dari 1-10\nKesempatan Anda " + kesempatan + "kali"));

        var hasil = "";
        pemain = isNaN(pemain) ? 0 : pemain;
        if (pemain != komputer) {
            hasil = pemain > komputer ? "Nilai Telalu tinggi" : "Nilai Terlalu rendah";
            kesempatan = kesempatan - 1;
        } else {
            hasil = "Benar, Nilai Sama!";
            kesempatan = 0;
        }
        alert("Nilai yang kamu pilih :" + pemain + "\nNilai yang Komputer Pilih :" + komputer + "\n\n" + hasil);
    }
    ulangi = confirm("Lagi?");
}
alert("Terimakasi Sudah bermain!");
