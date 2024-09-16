// This sebuah key spesial secara otomatis di definisikan setiap function
//  windows === this
// properti = var yang ada di dalam object
//  method = function yang ada di dalam object

// cara pertama menggunakan function declaration
function hallo() {
    console.log(this);
    console.log("hallo");
}
this.hallo();
// this mengembalikan objek global

// cara menggunakan object literal
var obj = { a: 30, nama: "koko" }; //ini yang dikembalikan
obj.hallo = function () {
    console.log(this);
    console.log("hallo");
};
obj.hallo();
//this disini mengembalikan objectnya

// menggunakan constructor
function halo() {
    console(this);
    console.log("halo");
}
let obj = new halo(); //ini yang dikembalikan
// disini mengembalikan object yang baru dibuat berbeda dengan literal
