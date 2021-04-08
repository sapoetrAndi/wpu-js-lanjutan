//cara untuk membuat Object pada javascript
// 1. Object Literal
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
function Mahasiswa3(nama, energi){
    let mahasiswa = {};//deklarai untuk membuat object

    //contoh property di js
    mahasiswa.nama = nama;
    mahasiswa.energi = energi;

    //contoh method di js
    mahasiswa.makan = function(){
        this.energi += porsi;
        console.log(`halo ${this.nama}, selamat makan`);
    }

    mahasiswa.main = function(jam){
        this.energi -= jam;
        console.log(`halo ${this.nama}, selamat bermain`);
    }

    //wajib return jika kita menggunakan function declaration
    return mahasiswa;
}

//cara instansiasi jika kita menggunakan function declaration
let andi = Mahasiswa3("andi", 20);
let alif = Mahasiswa3("alif", 30);



// 3. Constructor Function
/* Constructor Function sama seperti function declaration hanya saja kita tidak perlu menuliskan let mahasiswa = {}; & return mahasiswa, karena sudah otomatis dibuatkan. namun kita harus menggunakan  keyword this setiap membuat properti dan method*/
function Mahasiswa4(nama, energi){

    //contoh property di js
    this.nama = nama;
    this.energi = energi;

    //contoh method di js
    this.makan = function(){
        this.energi += porsi;
        console.log(`halo ${this.nama}, selamat makan`);
    }

    this.main = function(jam){
        this.energi -= jam;
        console.log(`halo ${this.nama}, selamat bermain`);
    }

}

//untuk menginstansiasi constructor function kita wajib menggnaan keyword new karena kalau tida maka akan dianggap funciton declaration
let sukarno = new Mahasiswa4("sukarno", 1000);


// 4. Object.create
