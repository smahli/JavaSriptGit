function CalculateAge(Birthyear){
	return 2020 - Birthyear;
}
var AgeShiw=CalculateAge(1996);
console.log(AgeShiw);
var AgeGopal=CalculateAge(1998);
console.log(AgeGopal);


function yearsUntillRetire(year, firstname){
	var age = CalculateAge(year);
	var retirement= 65 - age;
	if(retirement>0){
	console.log(firstname +' Retires in '+ retirement +' years')
	} else{
		console.log(firstname+ ' already retired...');
	}

}
 yearsUntillRetire(1996,'Shiwshankar');
 yearsUntillRetire(1998,'Gopal');
 yearsUntillRetire(1948,'Bindesh');