// let a = 1; //global scope

// function tes() {
//     let b = 2;
//     console.log(b);
// }
// tes();

// rekursif

function tampilAngka(n) {
    if (n === 0) return;

    console.log(n);
    return tampilAngka(n - 1);
}

tampilAngka(12);
//  ini tidak akan berhenti harus menggunakan base case di (if)

function faktorial(n) {
    if (n === 0) return 1;
    return n * faktorial(n - 1);
}

// ini menggunalkan looping
function faktorial2(n) {
    let hasil = 1;
    for (let i = n; i > 0; i--) {
        hasil *= i;
    }
    return hasil;
}
