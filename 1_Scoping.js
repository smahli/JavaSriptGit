/* Scoping answers the questions where can we access a certain
variable ?

Each new function creates a scope the space environment
in which the variable it defines are accessible

lexical scoping  : a function that is lexically within another function
gets access to the scope of the outer function.(parent function)
*/
var a = 'Hello';
first();
function first(){
	var b='hi';
	sceond();
	function sceond (){
		var c= 'hey';
		console.log(a+b+c);
	}
}

