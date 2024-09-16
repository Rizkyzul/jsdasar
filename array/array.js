// Buat ARRAY

var binatang = [],
    angka = [],
    boolean = [];
binatang = ["Koala", "Sapi", "kerbau", "kucing", "ular", "Anjing"]; //koala dihitung dari 0(nol)
angka = [10, 20, 30, 40, 50]; //Angka di array bersifat integer tanpa kutip
boolean = [True, false];
console.log(binatang.length);
console.log(angka[3]);

// eLement pada array bole beda type
// Array Multidimensi

var hari = ["Senin", "selasa", "Rabu"],
    mhs = ["Muhammad", "Rizky", "Zulkarnaen"],
    angka = [1, 2, 3, 4, 5],
    myArr = ["text", 2, false];
var myFunc = function () {
    alert("Hello World!");
};
var myArr2 = ["text", 2, false, myFunc];
var myArr3 = ["text", 2, false, myFunc, [4, 5, 6]];
