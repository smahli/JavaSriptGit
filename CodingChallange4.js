/**
 * CODING CHALLANGE 4
 * Shiw and gopal compared their BMI's (Body mass Index) Implement them using obejct
 * and functions.
 * 1. For each of them create an object with properties for their full name 
 * mass and height
 * 2.then add a method to each object to calculate the BMI. save the BMI to the object 
 * and also return it from the method
 * 3. in the end , log to the console who has highest BMI, Together with the full name 
 * and respective BMI. Don't forget they Might have same BMI
 * 
 * REMEMBER : BMI = mass/height*height
 */

var shiw ={
	FirstName: 'Shiwshankar',
	LastName: 'Mahli',
	Mass: 69,
	Height: 1.78,
	CalcBMIs: function(){
		this.BMI = this.Mass/(this.Height*this.Height);
		return this.BMI;
	}
}
var gopal={
	FirstName: 'Gopal',
	LastName: 'Lohra',
	Mass: 67,
	Height: 1.56,
	CalcBMIg: function(){
		this.BMI = this.Mass/(this.Height*this.Height);
		return this.BMI;
	}
}
if(gopal.CalcBMIg() > shiw.CalcBMIs()) {
	console.log('Gopal\'s BMI is greater than Shiw\'s BMI');
} else if (gopal.CalcBMIg()< shiw.CalcBMIs()){
	console.log('shiw\'s Bmi is greater than goapl\'s bmi');
} else{
	console.log('They have same BMI');
}
/*gopal.CalcBMIg();
shiw.CalcBMIs();
console.log(shiw);
console.log(gopal);*/