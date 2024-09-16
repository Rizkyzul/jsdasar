// control flow menggunakan For

alert("mulai");
for (var i = 0; i < 5; i++) {
    alert("hello world!");
}
alert("selesai");

// pengkondisian/Percabangan  (if, if...else, if.. else if...else, switch)
var angka = prompt("Masukan angka :");
if (angka % 2 === 0) {
    alert(angka + " adalah bilangan GENAP");
} else {
    alert(angka + " adalah bilangan GANJIL");
}
