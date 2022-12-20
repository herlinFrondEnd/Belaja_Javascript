// Manipulasi Array

// 1. Menambahkan Isi Array
// var arr = ["a", 1, true];
// console.log(typeof(arr));
// // console.log(arr);
// console.log(arr[1]);




// var arr = [];
// arr[0] = "sandhika";
// arr[1] = "galih";
// arr[2] = "nofa";

// console.log(arr);



// 2. Menghapus Isi Array
// var arr = ["sandhika", "galih", "nofa"];
// 	arr[1] = undefined;
// console.log(arr);



// 3.Menampilkan isi array 
// var arr = ["sandhika", "galih", "nofa"];

// for (var i = 0; i < arr.length; i++) {
// 	console.log(arr[i]);
// }






// method pada array 
// 1. join = mengubah isi array menjadi string
// var arr = ["sandhika", "galih", "nofa"];
// console.log(arr.join(' - '));



// push, pop, shift, unshift
// 2. push = menambah elemen baru diakhir arraynya
// var arr = ["sandhika", "galih", "nofa"];
// 	arr.push('herlin', 'yudi');
// console.log(arr);
// console.log(arr.join(' - '));


// 3. pop = menghilangkan elemen terakhir pada array
// var arr = ["sandhika", "galih", "nofa"];
// 	arr.pop();
// console.log(arr.join(' - '));




// 4. unshift = menambah elemen baru di awal arraynya
// var arr = ["sandhika", "galih", "nofa"];
// 	arr.unshift("herlin");
// console.log(arr);
// console.log(arr.join());   



// 5. shift = menghilangkan eleman diawal arraynya
// var arr = ["sandhika", "galih", "nofa"];
// 	arr.shift();
// console.log(arr);



// 6. splice = menyisipkan elemen array di tengah
// splice(indexAwal, mauDihapusBerapa, elemenBaru1, elemenBaru2, ...)
// var arr = ["sandhika", "galih", "nofa"];
// // 	arr.splice(2, 0, 'Doddy', 'herlin');
// // console.log(arr);

// arr.splice(1, 2, 'herlin');
// console.log(arr);




// 7. slice = mengiris sebuah array menjadi array baru
// slice(indexAwal, indexAkhir)
// var arr = ["sandhika", "galih", "nofa", "Doddy", "fitri"];
// var	arrBaru = arr.slice(1, 3);
// console.log(arr);
// console.log(arrBaru);




// forEach & map = melakukan looping pada array
// 8. forEach
// var angka = [1,2,3,4,5,6,7,8];
// for (var i = 0; i < angka.length; i++) {
// 	console.log(angka[i]);
// }


// var angka = [1,2,3,4,5,6,7,8];
// var nama = ["sandhika", "galih", "nofa"];
// angka.forEach(function(e) {
// 	console.log(e);
// });

// nama.forEach(function(e, i) {
// 	console.log('mahasiswa ke ' + (i + 1) + ' adalah ' + e );
// });



// 9. map = melakukan looping pada array dan mengembalikan array baru
// var angka = [1,4,3,9,5,6,2,8];
// var angka2 = angka.map(function(e) {
// 	console.log(e);
// 	return e * 2;
// }) 

// console.log(angka2);
// console.log(angka2.join(' - '));




// 10. sort = mengurutkan isi array 
// var angka = [4, 10, 3, 20, 9, 5, 6, 2, 8];
// console.log(angka);
// angka.sort(function(a, b) {
// 	return a-b;
// });
// console.log(angka);
// console.log(angka.join(' - '));



// filter & find = mencari elemen pada array
 // find = mengembalikan satu nilai
 // filter = mengembalikan banyak nilai
 // 11. filter = mencari nilai pada array dan mengembalikannya dalam bentuk array 
var angka = [4, 10, 3, 20, 9, 5, 6, 2, 8, 5];
var angka2 = angka.filter(function(x) {
	// return x == 5;
	return x > 5;
});

console.log(angka2);
console.log(angka2.join(' - '));


// 12. find = hanya mengembalikan satu nilai dalam bentuk angka dan bukan dalam bentuk array, sehingga kita tidak bisa menggunakan method join()
var angka = [4, 10, 3, 20, 9, 5, 6, 2, 8, 5];
var angka3 = angka.find(function(x) {
	return x > 5;
});

console.log(angka3);









































