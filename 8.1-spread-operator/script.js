// Spread Operator

// memecah iterables menjadi single Element

const mhs = ["sandhika", "doddy", "erik"];
console.log(...mhs[1]);


//menggabungkan 2 array
const mhs1 = ["sandhika", "doddy", "erik"];
const dosen = ["ade", "hendra", "wanda"];
const orang = [...mhs1, "aji" ,...dosen];

console.log(orang);


// mengcopy array
const mhs2 = ["sandhika", "doddy", "erik"];
const mhs3 = [...mhs2];
mhs3[0] = "fajar";
console.log(mhs2);
console.log(mhs3);

const liMhs = document.querySelectorAll('li');

const mhs4 = [...liMhs].map(m => m.textContent);
console.log(mhs4);

const nama = document.querySelector('.nama');
const cap = [...nama.textContent];
const huruf = [...nama.textContent].map(h => h === ' ' ? ` ` : `<span>${h}</span>`).join('');
nama.innerHTML = huruf;
console.log(huruf);
console.log(cap);
