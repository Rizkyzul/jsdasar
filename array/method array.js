var arr = ["muhammad", "rizky", "Zul", "Bambang"];

// length
for (var i = 0; i < arr.length; i++) {
    console.log("Mahasiswa ke- " + (i + 1) + " : " + arr[i]);
}
// length digunakan untuk mengitung jumlah array

// Join
console.log(arr.join(" - "));
//join adalah Menggabungkan seluruh isi array menjadi string

// push
arr.push("doddy"); //push dapat menambah beberapa elemen
// Menambah elemen array diakhir array

// pop
arr.pop(); //pop harus menggunakan satu persatu
// menghapus elemen diakhir

// unshift
arr.unshift("doni");
// Menambah elemen pertama

// sift
arr.shift();
// menghapus di elemen pertama

// slice
// slice(index awal' index akhir)
var arr = ["muhammad", "rizky", "Zul", "Bambang", "adul"];
var arr2 = arr.slice(1, 3);
console.log(arr2.join(" - "));
// mengiris array // slice menghasilkan array baru

// splice
// spice(index awal, mau di hapus berapa(opsional), mau ditambah berapa(dapat lebih dari 1))
arr.splice(2, 0, "jude"); //tanpa menghapus elemen
arr.splice(1, 2, "anjay"); //menghapus 2 elemen
// menyambung atau menambah elemen ditengah
