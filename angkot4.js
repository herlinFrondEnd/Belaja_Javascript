var noAngkot = 1;
var jmlAngkot = 10;
var angkotBeroperasi = 6;
for(noAngkot; noAngkot <= jmlAngkot; noAngkot++) {
	if(noAngkot <= angkotBeroperasi) {
		console.log('Angkot No.' + noAngkot + ' beroperasi dengan baik');
	} else if (noAngkot == 8) {
		console.log('angkot No.' + noAngkot + ' sedang lembur');
	} else  {
		console.log('angkot No' + noAngkot + ' sedang tidak beroperasi');
	}
}