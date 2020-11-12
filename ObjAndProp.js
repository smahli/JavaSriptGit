/**
 * Objects and its properties
 * 
 */
var shiw = {
	FirstName:'Shiwshankar',
	LastName:'Mahli',
	BirthYear: 1996,
	IsMarried : false,
	Job:'Developer',
	Friends: ['Gurpreet','Gopal', 'Hopson','Deep']
};

console.log(shiw);
console.log(shiw.IsMarried); // retrieve the data using Dot notation
console.log(shiw['FirstName']); 
var x = 'LastName';
console.log(shiw[x]);

// Mutate(Change the data ) the data using Dot operator 
shiw.IsMarried = true;
shiw.Job= ' Designer';
shiw['IsMarried']= 'true';  // either way works
console.log(shiw);


/** Another way of creating objects like array */
var gopal = new Object()
gopal.FirstName = 'Gopal';
gopal.LastName='Lohra';
gopal.BirthYear=1998;
gopal['IsMarried'] = true;  // either way we can put the value
console.log(gopal);