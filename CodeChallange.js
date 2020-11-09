/*coding challange 1


Q:  john and mark trying to compare each others BMI(BODY MASS INDEX) which is calculated 
using the formula
BMI=mass/Height^2;(mass in kg and height in meters)
1. store the john and marks mass and height in variables.
2.calculate both their BMIs
3.calculate the boolean variable conataining information about whether mark has higher 
BMI than the john
4. Print the string to the console contaning the variable from step 3
(something like is Johns BMI is greater than Mark)


Thats it Lets go!!!

*/

var HeightMark, heightJohn,MassJohn,MassMark,IsGreater;
MassJohn=80;
MassMark=70;
heightJohn=1.68;
HeightMark=1.97;
var BMIjohn= MassJohn/(heightJohn*heightJohn);
var BMImark= MassMark/(HeightMark*HeightMark);
console.log(BMIjohn,BMImark);
IsGreater= BMIjohn>BMImark;
console.log('Is Johns BMI is greater than Marks', IsGreater);
