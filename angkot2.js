var noAngkot = 1;
var jmlAngkot = 10;
var angkotBeroperasi = 6;

while(noAngkot <= angkotBeroperasi ) {
	console.log('Angkot No. ' + noAngkot + ' beroperasi dengan baik');
	noAngkot++;
}

// for(angkotBeroperasi += 1 ; angkotBeroperasi <= jmlAngkot; angkotBeroperasi++) {
// 	console.log('Angkot No.' + angkotBeroperasi + ' sedang tidak beroperasi .' );
// }


for(noAngkot = angkotBeroperasi + 1 ; noAngkot <= jmlAngkot; noAngkot++) {
	console.log('Angkot No.' + noAngkot + ' sedang tidak beroperasi .' );
}