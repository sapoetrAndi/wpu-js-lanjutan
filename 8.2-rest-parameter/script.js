// Rest Parameter (sisa parameter)

function myFunc(...params) {
    return params.reduce((a, b) => a + b);
}

console.log(myFunc(1, 5, 6, 7, 3));


// array destructuring
const kelompok1 = ["Sandhika", "doddy", "erik", "hendra", "gugun"];

const [ketua, wakil, ...anggota] = kelompok1;
console.log(ketua);
console.log(wakil);
console.log(anggota);

// object destructuring

const team = {
    pm : "Andi SAputra",
    frontend1 : "Sandhika",
    frontend2 : "Erik",
    backend : "Alif",
    ux : "Galih",
    devOps : "Doddy"
}

const {pm, ...myTeam} = team;

console.log(pm);
console.log(myTeam);

//filtering
function filterBy(type, ...values) {
    return values.filter(v => typeof v === type);
}

console.log(filterBy('number', 1, 2, 'Sandhika', false, 10, true, 'Doddy'));