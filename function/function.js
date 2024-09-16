// Fanction jumlah V 2 kubus

// function jumlahDauKubus(a, b) {}

// function menggunakan Refactoring

var a = prompt("Masukan sisi kubus");
var b = prompt("Masukan sisi Kubus 2");
function jumlahVol2Kubus(a, b) {
    return a * a * a + b * b * b;
}

alert(jumlahVol2Kubus(a, b));

//  func membuat kode program yang digunakan berkali kali

function sayHelloWorld() {
    return "hello word";
}

function halloNama(firstName, lastName) {
    return `Hallo ${firstName} ${lastName}`;
}
