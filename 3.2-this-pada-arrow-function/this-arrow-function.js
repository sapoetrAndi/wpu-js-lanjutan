//konsep this pada arrow function

//constructor function

// const Mahasiswa = function (){
//     this.nama = 'Andi';
//     this.umur = '27';
//     //key word this akan mengacu pada objek-nya yaitu Mahasiswa
//     // console.log(this);
//     this.sayHello = function(){
//         console.log(`Halo, nama saya ${this.nama}, dan saya ${this.umur} tahun.`);
//     }
// }

// const andi = new Mahasiswa();


//arrow function
// constructor function tidak bisa dijadikan arrow function (hanya method yang bisa)
// const Mahasiswa = function (){
//     this.nama = 'Andi';
//     this.umur = '27';
//     //key word this akan mengacu pada objek-nya yaitu Mahasiswa
//     // console.log(this);
//     this.sayHello = () => {
//         console.log(`Halo, nama saya ${this.nama}, dan saya ${this.umur} tahun.`);
//     }
// }

// const andi = new Mahasiswa();
//note: pada arrow function tidak ada konteks this. ini akan terlihat jika kita membuat objek menggunakan objek literal

//contoh kasus 1
//object literal
// const mhs1 = {
//     nama: 'Andi',
//     umur: 27,
//     sayHello: () => {
//         //apabila menggunakan this dia akan mencari kelaur functionnya
//         console.log(`Halo, nama saya ${this.nama}, dan saya ${this.umur} tahun.`);
//     }
// }

// objek literal tidak perlu instansiasi menggunakan keyword new
//mhs1.sayHello() -> cara memanggil method pada objek literal


//contoh kasus 2
//constructor function

// const Mahasiswa = function (){
//     this.nama = 'Andi';
//     this.umur = '27';
//     //key word this akan mengacu pada objek-nya yaitu Mahasiswa
//     // console.log(this);
//     this.sayHello = function(){
//         console.log(`Halo, nama saya ${this.nama}, dan saya ${this.umur} tahun.`);
//     }

//     //jika kita menggunakan function ekspresion kita akan menyimpan fucntion kedalam variabel sehingga tidak kena hoisting, berbeda dengan function declaration yang akan di hoisting sehingga ketika memanggil this maka js akan mengecek keluar dari constructor function (global scope-nya) bukan ke lexical scopenya. maka dari itu untuk mengatasinya kita menggunakan arrow function

//     //before
//     setInterval(function(){
//         console.log(this.umur++);
//     }, 500);

//     //after
//     setInterval(() => {
//         console.log(this.umur++);
//     }, 500);
// }

// const andi = new Mahasiswa();

//contoh kasus 3

const box = document.querySelector('.box');

box.addEventListener('click', function(){
    let satu = 'size';
    let dua = 'caption';

    if(this.classList.contains(satu)){
        //syntax js untuk menukar isi variabel
        [satu, dua] = [dua, satu];

    }
    this.classList.toggle(satu);

    //menjalankan sbuah function setelah 600ms
    setTimeout(() => {
        //akan di hoisting karena function declaration berada didalam sebuah objek maka dari itu untuk mengatasinya kita harus menggunakan arrow function
        this.classList.toggle(dua);
    }, 600);
})