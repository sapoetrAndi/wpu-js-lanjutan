const mhs = [
    {
        nama: 'andi saputra',
        umur: '27',
        nrp: '202101239',
        email: 'andi@gmail.com',
    },
    {
        nama: 'dodi',
        umur: '27',
        nrp: '202101239',
        email: 'dodi@gmail.com',
    },
    {
        nama: 'erik',
        umur: '27',
        nrp: '202101239',
        email: 'erik@gmail.com',
    },

];

const el = `<div class="mhs">
${mhs.map(m => `<ul>
    <li>${m.nama}</li>
    <li>${m.email}</li>
</ul>`).join("")}
</div>`;

const lagu = {
    judul: 'Tetap dalam jiwa',
    penyanyi: 'Isyana Sarasvati',
    // feat: 'Rayi Putra',
}

const el2 = `<div class="lagu">
    <ul>
        <li>${lagu.penyanyi}</li>
        <li>${lagu.judul} ${lagu.feat ? `(feat. ${lagu.feat})` : ""}</li>
    </ul>
</div>`;

//4. nested
const mhs2 = {
    nama: 'Andi saputra',
    semester: 5,
    mataKuliah: [
        'rekayasa web', 
        'analisis dan perancangan sistem informasi',
        'pemrograman sistem interaktif',
        'perancangan sistem berorientasi object',
    ],
}

function cetakMataKuliah(mataKuliah){
    return `<ol>
        ${mataKuliah.map(mk => `<li>${mk}</li>`).join('')}
    </ol>
    `;
}

const el3 = `<div class="lagu">
    <h2>${mhs2.nama}</h2>
    <span class="semester">${mhs2.semester}</span>
    <h4>Mata Kuliah :</h4>
    ${cetakMataKuliah(mhs2.mataKuliah)}
</div>`;

document.body.innerHTML = el3;