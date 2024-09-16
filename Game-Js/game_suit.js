var Game = "true";
while (Game) {
    // Menangkap pilihan player

    var player = prompt("Pilih: Jentik, Jempol, atau Telunjuk");

    // Menangkap pilihan computer
    // Membangkitkan bilangan random
    var komputer = Math.random();

    if (komputer < 0.34) {
        komputer = "Jempol";
    } else if (komputer >= 0.34 && komputer <= 0.67) {
        komputer = "Telunjuk";
    } else {
        komputer = "Jentik";
    }

    var hasil = ""; //String kosong
    // Rules pada game
    if (player == komputer) {
        hasil = "Seri!";
    } else if (player == "Jempol") {
        // if (komputer == "Telunjuk") {
        //     hasil = "Menang!";
        // } else {
        //     hasil = "Kalah!";
        // }

        // diatas menggunakan If Else
        // ini mengunakan ternari
        hasil = komputer == "Telunjuk" ? "Menang!" : "kalah!";
    } else if (player == "Telunjuk") {
        hasil = komputer == "Jempol" ? "Kalah!" : "Menang!";
    } else if (player == "Jentik") {
        hasil = komputer == "Jempol" ? "Menang!" : "kalah!";
    } else {
        hasil = "Memasukan Pilihan yang salah!";
    }

    alert("kamu Memilih : " + player + " \nKomputer Memilih : " + komputer + "\nMaka Hasilnya : Kamu " + hasil);
    Game = confirm("Main lagi?");
}
alert("Terimakasi sudah barmain!");
// tampilkan hasil
