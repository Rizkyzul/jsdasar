// pengulangan atau while
//  nulis hello word 10x tanpa console.log 10x

while (true) {
    console.log("hello wordl!");
} // looping forever
// infinite loop

// biar ga looping terus
var ulang = true;
while (ulang) {
    console.log("hello word");
    ulang = confirm("ulang lagi?");
}

// cara lainnya
var ulang = true;
while (ulang) {
    console.log("hello world");
    ulang = confirm("lagi ga gan?");
}

// cara berhentikan looping
var nilaiAwal = 1;
while (nilaiAwal <= 600) {
    // max 600 hello world , 601 sudah false
    console.log("hello word");
    nilaiAwal++;
}

// lainnya
var nilaiAwal = 1;
while (nilaiAwal <= 60) {
    console.log("hello word" + nilaiAwal + "x");
    nilaiAwal++;
}
