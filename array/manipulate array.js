// Menambah elemen pada array
var arr = [];
(arr[0] = "Rzky"), (arr[1] = "Zul"), (arr[2] = "muh");
console.log(arr);

// // Menghapus
var arr = ["muhammad", "rizky", "Zul"];
arr[1] = undefined; //ini adalah cara manual/
console.log(arr);

// Menampilkan
var arr = ["muhammad", "rizky", "Zul", "Bambang"];
for (var i = 0; i < arr.length; i++) {
    console.log("Mahasiswa ke- " + (i + 1) + " : " + arr[i]);
}
// length digunakan untuk mengitung jumlah array
