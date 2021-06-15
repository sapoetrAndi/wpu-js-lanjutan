// javascript menganut function scope

//funciton declaration
function tampilPesan(nama){
    //ini adalah funciton declaration
    alert('halo'+ nama);
}
//cara panggil function declaration
tampilPesan("andi");

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
