/* built-in function (sudah dibuatkan oleh js tinggal memanggilnya)
umumnya alert confirm dan prompt.
*/
// - String juga bisa (chartAT, slice, split, tostring, tolowwerCase, toUpperCase, dan lainnya.....)
// contoh
let nama = "muhammad rizky zul";
console.log(nama.charAt(5));
// maka dengan ini akan muncul alfabet ke 5 yaitu M karena dimu;ai dari nol

/*
pada matematika (sin, cos ,tan, random, round,floor, ceil, log)
*/
let angka = math.random();
console.log(angka);
// maka akan menghasilak bilangan random 0 sampai 1

/*
user-difined function (fun yang dibuat sendiri)
 */

// fun declaration
function jumDuaBilangan(a, b) {
    let total = a + b;
    return total;
}

// fun expression
let jumDuaBilangan2 = function (a, b) {
    let total = a + b;
    return total;
};

alert(jumDuaBilangan2(3, 5));
alert(jumDuaBilangan2(30, 5));
