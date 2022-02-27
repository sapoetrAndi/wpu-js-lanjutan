// Destructuring Variabels / Assignment

// Destructuring array
const perkenalan = ['halo', 'nama', 'saya', 'Andi Saputra'];
const perkenalan2 = ['halo', 'nama', 'saya', 'Andi Saputra'];

const [salam, satu, dua, nama] = perkenalan;

//jika ingin melompati indexnya
const [salam2, , , nama2] = perkenalan2;
console.log(salam);
console.log(nama2);

// jika ingin menukar nilai dari sebuah variabel
let a = 1;
let b = 2;
console.log(a);
console.log(b);

[a, b] = [b , a];
console.log(a);
console.log(b);

// return value pada function
function coba() {
    return [1, 2];
}

const [keSatu, keDua] = coba();
console.log(`isi index ke - ${keSatu}`);

//destructuring dengan rest parameter
const [one, ...values] = [1, 2, 3, 4, 5];
console.log(one);
console.log(values);


// Destructuring objek
const mhs = {
    nama02: "andi saputra",
    umur02: 27
}
const {nama02, umur02} = mhs;

const mhs2 = {
    nama2: "andi saputra",
    umur2: 27
}

// jika kita mau mengganti nama properti di dalam destructuring dengan cara "namaProperti: namaAlias" (seperti AS di Mysql)
const {nama2: namanya, umur2: age} = mhs2;
console.log(nama);
console.log(namanya);

//Assignment tanpa deklarasi objek
({nama03, umur03} = {
    nama: "andi saputra",
    umur: 27
});
console.log(nama);



//memberikan default value
const mhs3 = {
    nama3: "andi saputra",
    umur3: 27
}

const {nama3, umur3, email3= "emaildefault@gmail.com"} = mhs3;

// nilai default + alias nama variabel
const{nama3: nm3, umur3: um3, email3: em3 = "emaildefault@gmail.com"} = mhs3;
console.log(em3);


//rest parameter di object destruct
const mhs4 = {
    nama4: "andi saputra",
    umur4: 27
}

const {nama4, ...values1} = mhs4;
console.log(nama4);
console.log(values1);

//mengambil field pada object, setelah dikirim sebagai parameter untuk function
const fromApi = {
    id: 123,
    nama: "andi saputra",
    umur: 27,
    email: "andi@email.com"
}

function getIdMhs({id, nama}){
    return {id, nama};
}

const result = getIdMhs(fromApi);
console.log(result);