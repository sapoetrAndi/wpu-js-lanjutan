// Callback

//Synchronous callback
function halo(nama) {
    alert(`Halo, ${nama}`);
}

function tampilkanPesan(callback) {
    const nama = prompt('Masukan nama: ');
    callback(nama);
}

// bisa menggunakan function declaration
// tampilkanPesan(halo);
//bisa menggunakan anonymous function
// tampilkanPesan(nama => `Halo, ${nama}`);


const mhs = [
    {
        "nama" : "Andi saputra",
        "nrp" : "0123123123",
        "email" : "andi@gmail.com",
        "jurusan" : "Teknik informatika",
        "idDosenWali" : 1,
    },
    {
        "nama" : "Sandhika Galih",
        "nrp" : "0123123222",
        "email" : "Sandhika@gmail.com",
        "jurusan" : "Teknik informatika",
        "idDosenWali" : 2,
    },
    {
        "nama" : "Doddy",
        "nrp" : "0123123333",
        "email" : "Doddy@gmail.com",
        "jurusan" : "Teknik Mesin",
        "idDosenWali" : 2,
    },
];

// jika sebuah program berjalan secara synchronous
// console.log("mulai");
// mhs.forEach(m => {
//     for (let index = 0; index < 10000000; index++) {
//         let date = new Date();
//     }
//     console.log(m.nama)
// });
// console.log("selesai");

//Asynchronous callback
// function getDataMahasiswa(url, success, error) {
//     // jika kita mau melakukan request secara Asynchronous menggunakan ajax
//     let xhr = new XMLHttpRequest();

//     xhr.onreadystatechange = function () {
//         // xhr.readyState === 4 artinya jika statenya sudah siap. 4 adalah state terakhir jika sudah siap
//         // note perubahan state berubah dari 0 sampai 4 dan masing masing state punya keadaannya sendiri
//         if(xhr.readyState === 4){
//             // status 200 artinya OK
//             if(xhr.status === 200){
//                 success(xhr.response);
//             }else if(xhr.status === 404){
//                 error();
//             }
//         }
//     }

//     // ajax meenggunakan vanila js
//     xhr.open('get', url);
//     xhr.send();
// }

// console.log("mulai");
// getDataMahasiswa('data/mahasiswa.json', results => {
//     const msh = JSON.parse(results);
//     mhs.forEach(m => console.log(m.nama));
// }, () => {

// });

// JQuery
console.log("mulai");
$.ajax({
    url : "data/mahasiswa.json",
    success: (mhs) => {
        mhs.forEach(m => console.log(m.nama));
    },
    error: (e) => {
        console.log(e.responseText);
    }
})
console.log("selesai");
