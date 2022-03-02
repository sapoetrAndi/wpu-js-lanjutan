// Destructuring function argumen

const mhs1 = {
    nama: "andi saputra",
    umur: 27,
    email: "andi@gmail.com",
    nilai: {
        tugas: 100,
        uts: 90,
        uas: 95
    }
}

//destructuring pada parameter dengan cara seperti ini {nama, umur}. sedangkan nilai: {tugas, uts, uas} adalah cara men-destructuring didalam destructuring (destructuring bersarang)
function cetakMhs({nama, umur, nilai: {tugas, uts, uas}}){
    return `Halo nama saya ${nama}, saya berumur ${umur} tahun. Dan nilai uas saya adalah ${uas}`
}

console.log(cetakMhs(mhs1));