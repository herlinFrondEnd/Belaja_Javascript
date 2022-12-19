// var a = 8;
// var b = 3;
// var hasil;

// hasil = (a*a*a) + (b*b*b);
// console.log(hasil);




function jumlahVolumeDuaKubus(a, b) {
	var total, volumeA, volumeB;

	volumeA = a * a * a;
	volumeB = b * b * b;
	total = volumeA + volumeB;

	return total;
}

var hasil = jumlahVolumeDuaKubus(8,3);
console.log(hasil);