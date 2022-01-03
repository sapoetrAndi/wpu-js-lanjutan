/*
"closure adalah sebuah function ketika memiliki akses ke parent scopenya, meskipun parent scopenya sudah selesai di eksekusi"
-w3school

closure adalah function yang mereturn function

# lexical scope
function init(){
    let nama = 'Sandhika'; //local variabel
    function tampilNama(){ // inner function (closure*) ketika inner function membutuhkan variabel yang berada di luar scopenya maka disebut closure
        console.log(nama);
    }

    tampilNama();
    console.dir(tampilNama);
}
init();
*/

function init(){
    // let nama = 'Sandhika'; //local variabel
    // function tampilNama(){ // inner function (closure*) ketika inner function membutuhkan variabel yang berada di luar scopenya maka disebut closure
    //     console.log(nama);
    // }

    // tampilNama();
    // console.dir(tampilNama);
    // return tampilNama;

    // kode diatas dapat diringkas seperti dibawah ini

    return function(nama){
        console.log(nama);
    }
}
let panggilNama = init();
panggilNama('andi');
// hal diatas memungkinkan kita untuk dapat melakukan function factory

// alasan membuat closure
// - untuk membuat function factories
// - untuk membuat seolah olah kita mempunyai private method


function ucapkanSalam(waktu){
    return function(nama){
        console.log(`Halo ${nama}, selamat ${waktu}, semoga harimu menyenangkan!`);
    }
}

//ini adalah factory funciton (membuat function berdasarkan function lain)
let selamatPagi = ucapkanSalam('Pagi');
let selamatSiang = ucapkanSalam('Siang');
let selamatMalam = ucapkanSalam('Malam');


//immidetly invoke function supaya tidak menuliskan kode seperti let selamatMalam = ucapkanSalam('Malam');
//bertujuan agar seolah olah variabel counter menjadi private properties
let add = (function (){
    let counter = 0;
    return function(){
        return ++counter;
    }
})();

console.log(add());