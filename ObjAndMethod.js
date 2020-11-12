/** Objects and Methods 
 * When functions are included in objects then it is called method
 */

var shiw = {
	FirstName:'Shiwshankar',
	LastName :'Mahli',
	BirthYear: 1996,
	Job :'Software Developer',
	IsMarried : false,
	CalcAge: function(BirthYear){
			return 2020-BirthYear;
	}
};
console.log(shiw.CalcAge(1996));

/**
 * 'This' keyword or method  works on current object see the below example 
 *  
 */
var shiw = {
	FirstName:'Shiwshankar',
	LastName :'Mahli',
	BirthYear : 1996,
	Job :'Software Developer',
	IsMarried : false,
	CalcAge: function(){
				this.age = 2020-this.BirthYear; // this keyword work on current object only
	}
};
shiw.CalcAge();
console.log(shiw);