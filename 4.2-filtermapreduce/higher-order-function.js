/*
4.1 Higher order function

"Function yang beroperasi pada function yang lain. baik itu digunakan dalam argument, maupun sebagai return value"
- https://eloquentjavascript.net

"javascript memperlakukan funciton sebagai object.
- sitepoint.com

Kenapa pakai Higher order function? 
1. Abstraksi (agar code yang di buat bisa lebih sederhana)
*/


// note: function yang disimpan sebagai argumen disebut callback sedangkan fucntion yang memeiliki callback sebagai argumen disebut higher order function
// function contohCallback(argumen, ini_adalah_callback){
// }

// contoh lain dari higher order function
// setTimeout(function(){
//     console.log("Hello World")
// }, 1000)

// function repeat(n, action){
//     for (let index = 0; index < n; index++) {
//         action(index);
//     }
// }

// repeat(10, console.log)

//Filter Map Reduce
const angka = [-1, 8, 9, 1, 4, -5, -4, 3, 2, 9];
const arrBaru = [];

//mencari angka yang >= 3
//for
// for (let index = 0; index < angka.length; index++) {
//     if(angka[index] >= 3){
//         arrBaru.push(angka[index])
//     }
// }

// console.log(arrBaru)

//filter
const newAngka = angka.filter(a => a >= 3)

console.log(newAngka)

//Map
//kalikan semua angka dengan 2
const newAngka2 = angka.map(a => a * 2)
console.log(newAngka2)

//Reduce
//jumlahkan seluruh elemen pada array
// 0 + -1 + 8 + 9 + 1 + 4 + -5 + -4 + 3 + 2 + 9
const newAngka3 = angka.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
// 0 pada parameter ke 2 adalah nilai awal pada reduce
console.log(newAngka3)

//method chaining
//cari angka > 5
//kalikan 3
//jumlahkan
const hasil = angka.filter(a => a > 5)//8, 9, 9
            .map(a => a * 3)// 24, 27, 27
            .map(a => a / 2)
            .reduce((acc, cVal) => acc + cVal);//78
console.log(hasil)