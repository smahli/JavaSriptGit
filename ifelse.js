/** 
 * if else statment 
 */

 var HeightJohn = 1.69;
 var HeightMark= 1.78;

 var MassJohn = 75;
 var MassMark = 78;

 var BMIMark= MassMark/(HeightMark*HeightMark);
 var BMIJohn = MassJohn/ (HeightJohn*HeightJohn);

 if (BMIMark > BMIJohn){
	 console.log('Mark\'s BMI is higher than John\'s BMI');
 } else {
	 console.log('John\'s BMI is higher than the Mark\'s BMI');
 }