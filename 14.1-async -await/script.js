// Async Await

//cara buat promise
// const coba = new Promise(resolve => {
//     setTimeout(() => {
//         resolve('selesai');
//     }, 2000);
// })

// console.log(coba);
// coba.then(() => console.log(coba));

function cobaPromise() {
    return new Promise((resolve, reject) => {
        const waktu = 5000;
        if(waktu < 5000){
            setTimeout(() => {
                resolve('selesai');
            }, 2000);
        }else{
            reject('kelamaan!');
        }
    });
}

// jika tidak pakai asycn await
const coba = cobaPromise();
coba
 .then(res=> console.log(res))
 .catch(res => console.log(res));


// jika pakai asycn await kita bisa pakai try catch
async function cobaAsync() {
    try{
        const coba = await cobaPromise();
        console.log(coba);
    }catch (err){
        console.error(err);
    }
}

cobaAsync();