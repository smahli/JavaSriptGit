/**
 * Regular function call the this keyword points at the global
 *  object(the window object , in the browser).
 * 
 * 
 * Method call: the this variable points to the object that is calling 
 * the method 
 * 
 * 
 * the this keyword is not assigned a value a function where it is
 * defined is actually called.
 * 
 */


//console.log(this);  // in this regular function call 'this ' keyword is window object .
  /* calcalutaAge(1996);

function calcalutaAge(year){
	console.log(2020-year);
	console.log(this);  // 'This ' keyword is is window object in this regular function call
}    */

var shiw ={
	name:'shiw',
	yearOfBirth: 1996,
	calcaluteAge: function(){
		console.log(this);
		console.log(2020- this.yearOfBirth);  // this function refers to shiw object

		function innerFunction(){
			console.log(this);
		}
		innerFunction();  // still a window object
	}

}
shiw.calcaluteAge();

var gopal ={
	name: ' Gopal',
	yearOfBirth: 1997,

}

gopal.calcaluteAge= shiw.calcaluteAge;  // This is called method borrowing ( we are borrowing calculate Age from shiw method)
gopal.calcaluteAge();