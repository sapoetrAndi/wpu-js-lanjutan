//tagged templates
// const nama = 'andi saputra';
// const umur = 27;

// function coba(strings, ...values) {
//     // let result = '';
//     // strings.forEach((str,i) => {
//     //     result += `${str}${values[i] || ''}`;
//     // });
//     // return result;

//     // kode diatas akan lebih simple jika pakai reduce
//     return strings.reduce((result, str, i) => `${result}${str}${values[i] || ''}`, '');
// }

// const str = coba`Halo, nama saya ${nama}, saya ${umur} tahun.`;
// console.log(str);


//highlight
const nama = 'andi saputra';
const umur = 27;

function highlight(strings, ...values) {
    // let result = '';
    // strings.forEach((str,i) => {
    //     result += `${str}${values[i] || ''}`;
    // });
    // return result;

    // kode diatas akan lebih simple jika pakai reduce
    return strings.reduce((result, str, i) => `${result}${str}<span class="hl">${values[i] || ''}</span>`, '');
}

const str = highlight`Halo, nama saya ${nama}, saya ${umur} tahun.`;

document.body.innerHTML = str;