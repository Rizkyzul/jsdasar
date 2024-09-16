// ingin mencetak  *(bintang)

//agar memiliki 5 bintang sejajar
var s = ""; // s sebagai string
for (var i = 0; i < 5; i++) {
    //i  sebagai index
    s += "*";
}
console.log(s);

// bintang turun satu baris setiap diceatak
var s = ""; // s sebagai string
for (var i = 0; i < 5; i++) {
    //i  sebagai index
    s += "*";
    s += "\n"; // \n sebagai garis baru
}
console.log(s);

// // setiap baris 10 bintangnya 5
var s = "";
for (var i = 0; i < 10; i++) {
    for (var j = 0; j < 5; j++) {
        s += "*"; //for disini untuk tanda bintang
    }
    s += "\n";
}
console.log(s);

// // agar berurut baris ke 1 bintang 1 sampai baris ke 5 bintang 5
var s = "";
for (var i = 0; i < 5; i++) {
    for (var j = 0; j <= i; j++) {
        s += "*";
    }
    s += "\n";
}
console.log(s);

// agar baris 1 banyak bintang, baris bawahnya makin dikit
var s = "";
for (var i = 10; i > 0; i--) {
    for (var j = 0; j < i; j++) {
        s += "*";
    }
    s += "\n";
}
console.log(s);
