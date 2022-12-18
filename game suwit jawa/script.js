 var tanya = true;
 while(tanya) {
	// menangkap pilihan player
	var p = prompt('pilih : gajah, semut, orang');

	// menangkap pilihan computer
	// membangkitkan bilangan random
	var comp = Math.random();
	console.log(comp)
	if(comp < 0.34) {
		comp = 'gajah';
	} else if (comp >= 0.34 && comp < 0.67) {
		comp = 'orang';
	} else {
		comp = 'semut';
	}
	console.log('0 - 0.33 = gajah \n 0.34 - 0.66 = orang \n 0.67 - 1 = semut');
	console.log(comp);

	var hasil = '';
	// menentukan rules
	 if (p == comp) {
	 	hasil = 'SERI';
	 } else if (p == 'gajah') {
	 	if (comp == 'orang') {
	 		hasil = 'MENANG';
	 	} else{
	 		hasil = 'KALAH';
	 	}
	 } else if ( p == 'orang') {
	 	// if ( comp == 'semut') {
	 	// 	hasil = 'MENANG';
	 	// }  else {
	 	// 	hasil = 'KALAH';
	 	// }
	 	hasil = ( comp =='semut') ? 'MENANG' : 'KALAH';

	 } else if (p == 'semut') {
	 	if (comp == 'semut') {
	 		hasil = 'SERI';
	 	} else if ( comp == 'gajah') {
	 		hasil = 'MENANG';
	 	} else if (comp == 'orang') {
	 		hasil = 'KALAH';
	 	}
	 } else {
	 	hasil ='anda memasukkan pilihan yang salah';
	 }

 	console.log('anda memilih = ' + p + ' dan Komputer memilih = ' + comp + ' \n maka anda ' + hasil);

 	tanya = confirm('apakah anda mau bermain lagi?');
}

console.log('\nterimakasih sudah bermain');