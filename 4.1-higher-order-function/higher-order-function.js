/*
4.1 Higher order function

"Function yang beroperasi pada function yang lain. baik itu digunakan dalam argument, maupun sebagai return value"
- https://eloquentjavascript.net

"javascript memperlakukan funciton sebagai object.
- sitepoint.com

Kenapa pakai Higher order function? 
1. Abstraksi (agar code yang di buat bisa lebih sederhana)
*/


// note: function yang disimpan sebagai argumen disebut callback sedangkan fucntion yang memeiliki callback sebagai argumen disebut higher order function
// function contohCallback(argumen, ini_adalah_callback){
// }

// contoh lain dari higher order function
setTimeout(function(){
    console.log("Hello World")
}, 1000)

function repeat(n, action){
    for (let index = 0; index < n; index++) {
        action(index);
    }
}

repeat(10, console.log)