// Promise

// contoh1
let ditepati = false;
const janji1 = new Promise((resolve, reject) => {
    if(ditepati){
        resolve('Janji telah ditepati!');
    }else{
        reject('Ingkar janji..');
    }
});

janji1
 .then(res => console.log("OK! : " + res))
 .catch(res => console.log("Not OK! : " + res));


// contoh1
let ditepati2 = false;
const janji2 = new Promise((resolve, reject) => {
    if(ditepati){
        setTimeout(() => {
            resolve('ditepati setelah beberapa waktu!');
        }, 2000);
    }else{
        setTimeout(() => {
            reject('tidak ditepati setelah beberapa waktu!');
        }, 2000);
    }
});

console.log("mulai");
// console.log(janji2.then(() => console.log(janji2)));
janji2
 .finally(() => console.log('selesai menunggu!'))
 .then(res => console.log("OK! : " + res))
 .catch(res => console.log("Not OK! : " + res));
console.log("selesai");

// Promise.all() berfungsi ketika kita punya banyak promise dan ingin menjalankannya sekaligus

const film = new Promise( resolve => {
    setTimeout(() => {
        resolve([{
            judul: 'Avengers',
            sutradara: 'Sandhika Galih',
            pemeran: 'Doddy, Erik',
        }])
    }, 1000);
})

const cuaca = new Promise( resolve => {
    setTimeout(() => {
        resolve([{
            kota: 'Bandung',
            temp: 26,
            kondisi: 'Cerah Berawan',
        }])
    }, 500);
})

// film.then(response => console.log(response));
// cuaca.then(response => console.log(response));

// jika mau menjalankan promise sekaligus
Promise.all([film, cuaca])
    // .then(response => console.log(response));
    .then(response => {
        const [film, cuaca] = response;
        console.log(film);
        console.log(cuaca);
    });