// let dan const berfungsi untuk membuat variable. variable yang digunnakan menggunakan let akan menganut block scope bukan lagi function scope sehingga tidak dinakikan (hositing). maka kita disarankan menggunakan let ketika kita membuat variable.

// note: block scope artinya ruanglingkupnya berdasarkan tanda {}. sedangkan function scope artinya ruang lingkupnya berdasarkan function


// SIAF
// (function(){}()) agar function langsung di jalankan . contohnya seperti dibawah ini
//berfungsi juga agar variable tidak berisi nilai undifiend sehingga variabel akan menjadi error ketika diakses dari luar block {} (cara lama). namun semenjak ada ES6 maka kita tidak perlu menuliskan variabel dan kode di dalam (function(){}()) melainkan kita menggunakan let & const saja.
(function(){
    // simpan kode js disini agar variabel dan function tidak menyimpan nilai undifined
}())