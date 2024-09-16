const penumpang = [];
const tambahPenumpang = function (namaPenumpang, penumpang) {
    // Jika angkot kosong
    if (penumpang.length == 0) {
        // tambah penumpang diawal array
        penumpang.push(namaPenumpang);
        // kembalikan isi array & keluar dari function
        return penumpang;
    } else {
        //  telusuri seluruh kursi dari awal
        for (var i = 0; i < penumpang.length; i++) {
            //  jika ada kursi kosong
            if (penumpang[i] == undefined) {
                //  tambah penumpang dikursi  tersebut
                penumpang[i] = namaPenumpang;
                //  kembalikan isi array dan keluar dari fuction
                return penumpang;
            }
            // jika suda ada nama yang sama
            else if (penumpang[i] == namaPenumpang) {
                //  tampilkan pesan kesalahan
                console.log(namaPenumpang + " sudah ada didalam angkot.");
                // kembalikan isi array dan keluar dari fuction
            }
            // jika kursi terisi
            else if (i == penumpang.length - 1) {
                // tambah penumpang diakhir array
                penumpang.push(namaPenumpang);
                // kembalikan isi array dan keluar dari function
                return penumpang;
            }
        }
    }
};

const hapusPenumpang = function (namaPenumpang, penumpang) {
    // jika angkot kosong
    if (penumpang.length == 0) {
        // tampilkan pesan jika angkot kosong
        console.log("angkot masih kosong.");
        // dan tidak mungkin ada penumpang turun
        return penumpang;
        // kembalikan isi array & keluar dari function
    } else {
        // jika nama penumpang sesuai
        for (var i = 0; i < penumpang.length; i++) {
            //hapus penumpang dengan mengubah namanya
            if (penumpang[i] == namaPenumpang) {
                // menjadi undefined
                penumpang[i] = undefined;
                // kembalikan isi array dan keluar dari function
                return penumpang;
                // jika tiak ada nama yang sesuai
            } else if (i == penumpang.length - 1) {
                // tampilkan pessan kesalahan
                console.log(namaPenumpang + " Tidak ada di dalam angkot");
                //     kembalikan isi aray dan keluar dari function
                return penumpang;
            }
        }
    }
};
