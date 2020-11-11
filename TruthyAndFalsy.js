/**
 * Truthy and Falsy values 
 * Truthy Value : NOT falsy value is truthy value;
 * Falsy value : Value which is false ,zero ,undefined and null
 * '' and not a number(NaN)
 * 
 * see the below example
 * height is declared but still it returns falsy values
 *
 * 
 */
var height ='23';
if(height || height ===0){
	console.log(' height is defined');
}else{
	console.log('height is NOT yet defined');
}

// equality operator 
// that's wh always use === for type coertion;
if(height==23){
	console.log('The == operator does the type coertion');
}