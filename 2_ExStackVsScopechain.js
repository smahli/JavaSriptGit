var a='hello';
first();
function first(){
	var b='hi';
	second();
	function second(){
		var c='hey';
		third();
	}
}

function third(){
	var d='john';
	console.log(a+b+c+d);
}

// variable a and d will be accessible to function third