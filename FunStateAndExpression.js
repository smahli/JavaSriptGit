/**
 * Functions statements and Function expressions 
 
**************function declaration******************
function WhatDoYouDo(job, firstName){


}

********** function Expression********
var WhatDoYouDo = function(job,firstName){

}
The above piece of code explains the difference between the function declration and 
the function Expression 


*/

var WhatDoYouDo = function(job,firstName){
	switch(job){
		case 'teacher':
			return firstName + ' teaches kids how to code' ;
		case 'driver':
			return firstName+ ' Drives ola in kolkata';
		case 'designer'	:
			return firstName+ 'Designs a beautifull website';
		default:
			return firstName+' does something else'	;
	}
}
console.log(WhatDoYouDo('teacher','Shiwshankar'));
console.log(WhatDoYouDo('designer','Gurpreet'));