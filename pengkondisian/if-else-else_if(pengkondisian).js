var angka = prompt("masukan Angka: ");
if (angka % 2 == 0) {
    alert(angka + " Adalah bilangan GENAP");
} else {
    alert(angka + " angka adalah bilangan GANJIL");
}
//  Didalam Statement diatas masil salah karena jika user menulis alfabet maka otomatis bernilai false atau else, jadi bagaimana solusinya ?
//  kita menggunakan else if

var angka = prompt("masukan Angka: ");
if (angka % 2 == 0) {
    alert(angka + " Adalah bilangan GENAP");
} else if (angka % 2 == 1) {
    alert(angka + " angka adalah bilangan GANJIL");
} else {
    alert("yang anda Masukan Bukan Angka!");
}

// Jadi si Else if digunakan menjadi aksi 1 dan else biasa digunakan untuk aksi 3 jika aksi 1-2 tidak valid atau false
