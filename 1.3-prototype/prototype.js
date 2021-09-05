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

// note: prilaku Object.create() mirip seperti pewarisan didalam konsep OOP yaitu untuk menghubungkan/mewarisi properti dan method yang ada pada objek lain. dalam JS konsep ini juga disebut prototyple inheritance
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

//masih ada cara yang lebih efektif dari cara diatas yaitu dengan menggunakan prototype / constructor function. 

//Constuctor function /prototype
function Mahasiswa4(nama, energi){

    //sebenarnya di belakang layar JS membuatkan variable this bertipe objek let this = Object.create(Mahasiswa4.prototype); & return this. jadi secara default constructor function sudah punya parent prototype
    this.nama = nama;
    this.energi = energi;
}

// cara membuat method menggunakan prototype/constructor function
Mahasiswa4.prototype.makan = function(porsi){
    this.energi += porsi;
    return `halo ${this.nama}, selamat makan`;
}

Mahasiswa4.prototype.main = function(jam){
    this.energi -= jam;
    return `halo ${this.nama}, selamat main`;
}

Mahasiswa4.prototype.tidur = function(jam){
    this.energi += jam * 2;
    return `halo ${this.nama}, selamat tidur`;
}

let andiSaputra = new Mahasiswa4("Andi", 10);


//versi Class
// Namun di belakang layar yang di jalankan adalah cersi yang di atas
class MahasiswaClass {
    constructor(nama, energi){
        this.nama = nama;
        this.energi = energi;
    }

    makan(porsi){
        this.energi += porsi;
        return `halo ${this.nama}, selamat makan`;
    }
    
    main(jam){
        this.energi -= jam;
        return `halo ${this.nama}, selamat main`;
    }
    
    tidur(jam){
        this.energi += jam * 2;
        return `halo ${this.nama}, selamat tidur`;
    }
}
let alifLubis = new MahasiswaClass("Alif", 10);

//Note : isi dari prototype adalah method method