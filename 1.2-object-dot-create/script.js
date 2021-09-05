//cara untuk membuat Object pada javascript
// 1. Object Literal
// Problem : tidak efektif untuk membuat banyak object
let mahasiswa = {
    //ini adalah contoh object literal
    nama: "andi saputra",
    energy: 10,
    makan: function(porsi){
        //ini adalah method didalam object js
        //${variabel} berfungsi untuk memanggil variabel didalam literal string (``)
        this.energy = this.energy + porsi;
        console.log(`halo ${this.nama}, selamat makan`);
    }
}

//cara instansiasi jia menggunakan object literal
let mahasiswa2 = {
    //ini adalah contoh object literal
    nama: "alif",
    energy: 100,
    makan: function(porsi){
        //ini adalah method didalam object js
        //${variabel} berfungsi untuk memanggil variabel didalam literal string (``)
        this.energy = this.energy + porsi;
        console.log(`halo ${this.nama}, selamat makan`);
    }
}




// 2. Function Declaration
//nama function dibuat capital untuk menandakan dia adalah object
//dibawah ini adalah blueprint/template/ibarat class
//Problem : dibelakang layar akan di lakukan duplikasi seperti Object Literal maka dari itu solusinya kita akan menggunakan object.create() seperti dibawah ini.

const methodMahasiswa = {
    //contoh method di js
    makan : function(porsi){
        this.energi += porsi;
        console.log(`halo ${this.nama}, selamat makan`);
    },

    main : function(jam){
        this.energi -= jam;
        console.log(`halo ${this.nama}, selamat bermain`);
    },

    tidur : function(jam){
        this.energi += jam * 2;
        console.log(`halo ${this.nama}, selamat tidur`);
    }
}

// note: prilaku Object.create() mirip seperti pewarisan didalam konsep OOP yaitu untuk menghubungkan/mewarisi properti dan method yang ada pada objek lain
function Mahasiswa3(nama, energi){
    let mahasiswa = Object.create(methodMahasiswa);//deklarai untuk membuat object

    //contoh property di js
    mahasiswa.nama = nama;
    mahasiswa.energi = energi;

    //wajib return jika kita menggunakan function declaration
    return mahasiswa;
}

//cara instansiasi jika kita menggunakan function declaration
let andi = Mahasiswa3("andi", 20);
let alif = Mahasiswa3("alif", 30);

//masih ada cara yang lebih efektif dari cara diatas yaitu dengan menggunakan prototype. untuk lebih detail ada pada pertemuan 1.3