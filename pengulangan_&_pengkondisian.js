var s = '';

for( var i = 0; i < 5;  i++) {
	for( var j = 0; j <= i; j++) {
		s += '*';
		
	}
	s += '\n'
}

console.log(s);



var a = '';

for (var b = 5; b > 0; b--) {
	for (var c = b; c > 0; c--) {
		a += '*';
	}
	a += '\n';
}

console.log(a);



var d = '';

for( var e = 5; e > 0;  e--) {
	for( var f = 0; f < e; f++) {
		d += '*';
		
	}
	d += '\n'
}

console.log(d);




var g = '';

for (h = 5; h > 0; h-- ){
	for ( var i = 0; i <= 5; i++) {
		if (i >= h) {
			g += "*";
		} else {
			g += " ";
		}
	}
	g += "\n";
}

console.log(g);



var s = "";
for (i = 5; i > 0; i--) {
  for (j = 0; j <= 5; j++) {
    if (j >= i) {
      s += "* ";
    } else {
      s += " ";
    }
  }
  s += "\n";
}
console.log(s);





var s ="";
for (var i = 5; i > 0; i--) {
  for (var j = 5; j > 0; j--) {
    if (j <= i) {
      s += "* ";
    } else {
      s += " ";
    }
  }
  s += "\n";
}

console.log(s);




var s ="";
for (var i = 5; i > 0; i--) {
  for (var j = 5; j > 0; j--) {
    if (j <= i) {
      s += "*";
    } else {
      s += " ";
    }
  }
  s += "\n";
}

console.log(s);




var s = "";
for (var i = 0; i < 6; i++) {
  if (i % 2 == 0) {
    for (var j = 0; j < 6; j++) {
      if (j % 2 == 0) {
        s += "#";
      } else {
        s += " ";
      }
    }
    s += "\n";
  } else {
    for (var j = 0; j < 6; j++) {
      if (j % 2 == 0) {
        s += " ";
      } else {
        s += "#";
      }
    }
    s += "\n";
  }
}

console.log(s);