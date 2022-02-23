// Template Literals / Template String

const nama = 'ANDI SAPUTRA';
const umur = 27;
console.log(`halo, nama saya ${nama}, dan saya ${umur} tahun`);


//Embedded Expression
console.log(`${1 + 1}`);
// console.log(`${alert("halo")}`);

const x = 10;
console.log(`${x % 2 == 0 ? "genap" : "ganjil"}`);

//HTML fragments
const mhs = {
    nama: 'Andi Saputra',
    umur: 33,
    nik: '202101239',
    email: 'email@gmail.com',
}

const el = `<div class="mhs">
    <h2>${mhs.nama}</h2>
    <span class="nik">${mhs.nik}</span>
    
</div>
`;

console.log(el);