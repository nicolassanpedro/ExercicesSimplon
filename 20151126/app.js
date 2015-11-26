/*
var foo = "je m'appelle nicolas" ;
var bar = foo.toUpperCase();
if (foo != bar ) {
alert(foo);
}

var toto = "LES BONNES BLAGUES";
var tata = toto.toUpperCase();
if (toto == tata) {
alert(toto);
}

*/
 
function comparChaine (str) {
	var maj = str.toUpperCase();
	var tag = "<br>"
	if (str == maj ) {
	document.writeln("ils sont égaux" + str + tag);
	}
}

var foo = "JDFH";
comparChaine("DDJVH");
comparChaine(foo);
