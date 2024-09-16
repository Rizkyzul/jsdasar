var angka = [1, 2, 3, 4, 5, 6, 7, 8, 9],
    nama = ["ahmad", "zul", "karna", "eaaaa"];

// foreach
// menggunakan for biasa
for (i = 0; i < angka.length; i++) {
    console.log(angka[i]);
}

// foreach (untuk setiap elemen)
angka.forEach(function (e) {
    console.log(e);
});

// agar seperti for
nama.forEach(function (e, i) {
    console.log("mahasiswa " + (i + 1) + "adalah : " + e);
});

// map
var angka2 = angka.map(function (e) {
    return e * 2;
});
console.log(angka2.join(" - "));
// map lebih baik daro foreach karena mengembalikan array

// sort
var angkaSort = [1, 2, 7, 4, 5, 6, 8, 9, 3];
angkaSort.sort;
console.log(angkaSort.join(" - "));
// mengurutkan isi

// jika ada angka lebih dari 9
var angkaSort = [1, 20, 70, 4, 5, 6, 8, 9, 3];
angkaSort.sort(function (a, b) {
    return a - b;
});
console.log(angkaSort.join(" - "));

// filter
var angkafil = [1, 2, 7, 4, 5, 6, 8, 9, 3];
var angkafil2 = angka.filter(function (x) {
    return x > 5;
    g7;
});
console.log(angkaSort.join(" - "));
// dapat mengembalikan banyak nilai

// find
var angkafind2 = angka.find(function (x) {
    return x > 5;
});
console.log(angkaSort);
// hanya menemukan satu nilai
