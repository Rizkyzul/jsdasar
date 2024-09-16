// object Literal

let mhs1 = {
    Nama: "Muhammad",
    Prodi: "Teknik Informatika",
    Nim: "41236578",
};

// object Declaration
function mahasiswa(Nama, Prodi, Nim) {
    let mhs = {};
    mhs.Nama = Nama;
    mhs.Prodi = Prodi;
    mhs.Nim = Nim;
    return mhs;
}
let mhs2 = mahasiswa("Rio", "Teknik ", "123454543");

// object Function Constructor (keyword new)

function Mahasiswa(Nama, Prodi, Nim) {
    this.Nama = Nama;
    this.Prodi = Prodi;
    this.Nim = Nim;
}

let mhs3 = new Mahasiswa("Jurtak", "Kimia", "2684092");
let mhs4 = new Mahasiswa("KIko", "Adcom", "9000875");
// penggunaan object ini sangat disarqankan karena penggunaannya yang mudah

// konsep this
