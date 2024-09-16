/** 
 1 rute jalan
 2 kas atau uang yang disimpan sopir
 3 kekola penumpang
 4 penumpang naik
 5 penumpang turun*/

function Dataangkot(sopir, rute, penumpang, kas) {
    this.sopir = sopir;
    this.rute = rute;
    this.penumpang = penumpang;
    this.kas = kas;

    this.penumpangnaik = function (namaPenumpang) {
        this.penumpang.push(namaPenumpang);
        return this.penumpang;
    };

    this.penumpangTurun = function (namaPenumpang, bayar) {
        if (this.penumpang.length === 0) {
            console.log("angkot masih kosong!");
            return false;
        }
        for (let i = 0; i < this.penumpang.length; i++) {
            if (this.penumpang[i] == namaPenumpang) {
                this.penumpang[i] = undefined;
                this.kas += bayar;
                return this.penumpang;
            }
        }
    };
    // this.sopirJajan = function (jajan) {
    //     if (this.kas == kas - jajan) {
    //         console.log("sisa kas anda" + kas);
    //         return;
    //     }
    // };
}

let angkot1 = new Dataangkot("Rizky", ["Pegajahan", "Kasepunan"], [], 70000);
let angkot2 = new Dataangkot("indra", ["ciledug", "kuningan"], [], 0);
let angkot3 = new Dataangkot("agung", ["ciasem", "indramayu"], [], 0);
