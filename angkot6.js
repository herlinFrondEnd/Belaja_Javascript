var noAngkot = 1;
var jmlAngkot = 10;
var angkotBeroperasi = 6;
for(noAngkot; noAngkot <= jmlAngkot; noAngkot++) {

	if(noAngkot <= angkotBeroperasi && noAngkot !==5) {
		console.log('Angkot No.' + noAngkot + ' beroperasi dengan baik');
	} else if (noAngkot === 5 || noAngkot === 8 || noAngkot === 10 ) {
		console.log('angkot No.' + noAngkot + ' sedang lembur');
	} else  {
		console.log('angkot No.' + noAngkot + ' sedang tidak beroperasi');
	}

}