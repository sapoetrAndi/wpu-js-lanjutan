// function expresion/ SIAF (self invoking anonymous function)/ IIFE (immediatly invoked function expression)
let x = function(){
    console.log("ini adalah function expression");
}

(function(){
 console.log("ini adalah SIAF/IIFE");
 //SIAF otomatis di jalankan dan akan menganut function scope
}());

//arrow function adalah bentuk lain yang lebih ringkas dari funciton expression 
let tampilPesan = (nama, waktu) => {
    //ini adalah funciton declaration
    return `Selamat ${waktu}, ${nama}`;
}

console.log(tampilPesan('Andi', 'Pagi'));

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