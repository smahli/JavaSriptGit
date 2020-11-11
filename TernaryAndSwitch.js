/** 
 * Ternary operator and switch statement
 * 
 * ternary Operator : ternary operator in nothing but easiest way to write the code of 
 *  if else statement
 * 
 * see the below example
 *  */
var Name = ' Raju';
var Age=22;
Age>18? console.log(Name + ' takes beer')
:console.log(Name + ' takes juice');


var drink = Age>18 ? 'beer':'juice';
console.log(drink);


// Switch statement

var job = 'teacher';
switch(job){
	case 'teacher':
	case 'instructor'	:
		console.log(Name, ' Teaches how to code...');
		break;

	case 'driver':
		console.log(Name,' Drives Uber In Hydrabad');
		break;

	case 'Designer':
		console.log(Name, ' Designs a beautifull website')	;
		break;

	default:
		console.log(Name,'Simply does nothing')	;
}