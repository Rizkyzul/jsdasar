// popup box //

// Cara Alert //

alert("hallo"); // penulisan alert
alert("selamat datang!");
alert("di website ini cuyyyyyyy");

// Alert //

// cara prompt //

prompt("masukan nama anda?"); //prompt sintax
var nama = prompt("masukan nama anda?"); //prompt + var
alert(nama); // Hasil dari prompt + var yang muncul karena alert

// confirm (pesan konfirmasi)

confirm("kamu yakin?"); //penulisan confirm

var tes = confirm("kamu yakin?"); // confirm + var + alrt untuk mrmunculkan
alert(tes);

var tes = confirm("kamu yakin?");
if (tes === true) {
    alert("user menekan oke!");
} else {
    alert("user menekan cancel!");
}

// contoh dengan while

alert("selamat datang...");
var lagi = true;

while (lagi) {
    var nama = prompt("masukan nama:");
    alert("Haallo " + nama);

    lagi = confirm("mau coba lagi?");
}

alert("terimakasih! " + nama);
