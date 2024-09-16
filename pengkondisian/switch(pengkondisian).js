// contoh

var angka = prompt("Masukan Angka :");

switch (angka) {
    case "1":
        alert("anda memasukan angka 1");
        break;
    case "2":
        alert("anda memasukan angka 2");
        break;
    case "3":
        alert("anda memasukan angka 3");
        break;
    default:
        alert("Angka yang anda masukan salah");
        break;
}

// contoh lainnya saat memilih makanan sehat atau tidak
var item = prompt("masukan nama makanan atau minuman :  (contoh:Daging, Nasi, Susu, Seblak, Es)");

switch (item) {
    case "Nasi":
        alert(" makanan sehat");
        break;
    case "Daging":
        alert(" makanan sehat");
        break;
    case "Susu":
        alert("  makanan sehat");
        break;
    case "Seblak":
        alert(" makanan tidak sehat");
        break;
    case "Es":
        alert("  makanan tidak sehat");
        break;
    default:
        alert("Nama minuman tidak ada dalam contoh");
        break;
}

// Atau bisa menggunakan tanpa break asal alert relevan

var item = prompt("masukan nama makanan atau minuman :  (contoh:Daging, Nasi, Susu, Seblak, Es)");

switch (item) {
    case "Nasi":
    case "Daging":
    case "Susu":
        alert("  makanan sehat");
        break;
    case "Seblak":
    case "Es":
        alert("  makanan tidak sehat");
        break;
    default:
        alert("Nama minuman tidak ada dalam contoh");
        break;
}
