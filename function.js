// var a = 8;
// var b = 3;
// var hasil;

// hasil = (a*a*a) + (b*b*b);
// console.log(hasil);





// function jumlahVolumeDuaKubus(a, b) {
// 	var total, volumeA, volumeB;

// 	volumeA = a * a * a;
// 	volumeB = b * b * b;
// 	total = volumeA + volumeB;

// 	return total;
// }

// var hasil = jumlahVolumeDuaKubus(8,3);
// console.log(hasil);


  


// function tambah(a, b) {
// 	return a + b;
// }

// var a = parseInt(prompt('Masukkan nilai 1 :'));
// var b = parseInt(prompt('Masukkan nilai 2 :'));
// var hasil = tambah(a,b);
// console.log(hasil);




// function tambah(a,b) {
// 	return a + b;
// }

// function kali(a,b) {
// 	return a * b;
// }


// var hasil = kali(tambah(1,2), tambah(3,4));
// console.log(hasil);






// function tambah() {
// 	return arguments;
// }

// var coba = tambah(5,10,20,"hi",false);
// console.log(coba);







// function tambah(){
// 	var hasil = 0;
// 	for( var i = 0; i < arguments.length; i++ ) {
// 		hasil += arguments[i];
// 	}

// 	return hasil;
// }

// console.log(tambah(1,2,3,4,5));







// global scope / window scope

// var a = 1;
// function tes(a) {
//  	console.log(a);
// }
// tes(a);
// console.log(a);







// rekursif

// function tes(n){
// 	// if (n === 0) return;
// 	if (n === 0) {
// 		// var a = 1;
// 		// return console.log(a);
// 		return;
// 	}

// 	console.log(n);
// 	tes(n - 1);

// }

// tes(10);


// function faktorial(n) {
// 	if ( n === 0 ) return 1;
// 	return n * faktorial(n - 1);
// }

// var hasil = faktorial(5);
// console.log(hasil);




















