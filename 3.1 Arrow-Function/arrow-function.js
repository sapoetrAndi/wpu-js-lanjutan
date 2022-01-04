/*
 "bentuk lain yang lebih ringkas dari function expression"
 --MDN--
 */

// function expresion/ SIAF (self invoking anonymous function)/ IIFE (immediatly invoked function expression)
// let x = function(){
//     console.log("ini adalah function expression");
// }

// (function(){
//  console.log("ini adalah SIAF/IIFE");
//  //SIAF otomatis di jalankan dan akan menganut function scope
// }());

//arrow function adalah bentuk lain yang lebih ringkas dari funciton expression 
// let tampilPesan = (nama, waktu) => {
//     //ini adalah funciton declaration
//     return `Selamat ${waktu}, ${nama}`;
// }

//jika paramater hanya satu dapat ditulis seperti ini 
// let tampilPesan = nama => { return `Selamat Pagi, ${nama}`; }

// //implisit return (tanpa menuliskan return jika hanya satu baris code)
// let tampilPesan = nama => `Selamat Pagi, ${nama}`; 

// //jika tanpa parameter wajib menuliskan ()
let tampilPesan = () => `Selamat Pagi`; 

// console.log(tampilPesan());


//jika kita hanya menggunakan satu parameter dan functionnya hanya berisi return kita bisa ringkas penulisannya seperti ini. penulisan seperti ini biasa disebut implisit return
let ringkasArrowFunct = nama => `Halo, ${nama}`;
//jika tanpa parameter
let ringkasArrowFunctionTanpaParam = () => `Hello World!`;


let mahasiswa = ['andi saputra', 'sandhika galih', 'erik'];
let jumlahHuruf = mahasiswa.map(function(nama){
    // memetakan array mahasiswa kedalam function
    return nama.length;
});
console.log(jumlahHuruf);

//meringkas jumlah huruf menjadi arrow funciton
let jumlahHuruf = mahasiswa.map( nama => nama.length);

//meringkas jumlah huruf menjadi arrow funciton dan mereturn object
let jumlahHuruf = mahasiswa.map( nama => ({ nama: nama, jmlHuruf: nama.length }));
console.table(jumlahHuruf)