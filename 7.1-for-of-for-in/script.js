// for..of
const arr = ['index satu', 'index dua', 'index tiga'];

// jika pakai forEach
arr.forEach(m => console.log(m));

// jika pakai for..of
for (const iterator of arr) {
    console.log(iterator);
}

// String
const nama = "andi saputra";

for (const n of nama) {
    console.log(n);
}

const mhs = ['andi', 'alif', 'obama'];

for (const [i, m] of mhs.entries()){
    console.log(`${m} adalah mahasiswa ke-${i+1}`);
}


//NodeList

const liNama = document.querySelectorAll('.nama');
console.log(liNama);

for (const li of liNama) {
    console.log(li.innerHTML);
    
}

// Arguments
// arguments adalah nilai yang di simpan di dalam sebuah objek ketika sebuah function tidak memiliki parameter

function jumlahkanAngka() {
    let jumlah =0;
    for (const a of arguments) {
        jumlah += a;
    }
    return jumlah;
}

console.log(jumlahkanAngka(1, 2, 3, 4, 5));

// for..in
const mhs1 = {
    nama: "Sandhika Galih",
    umur: 33,
    email: "email@gmail.com"
};

for (const m in mhs1) {
    //jika ingin mengambil nama propertinya
    console.log(m);

    //jika ingin mengambil isi propertinya
    console.log(mhs1[m]);
}