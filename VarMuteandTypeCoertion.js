/* In this lecture we are gonna learn variable mutation and type coercion 
type coercion is a process in a java script in which data types automatically
gets converted in desired data type
here you find the example 

*/

var FirstName,LastName,Job,Age,IsMarried;  // variables declared 
FirstName = 'Shiwshankar ';// variables defined 
Job='Software Developer';
Age=24;
IsMarried=false;
console.log('Hello Guys My name is  '+ FirstName +' I am a senior '
+ Job + ' I am '+ Age +' years old..  Is he married?? '+IsMarried);

/* Now we gonna look at some variable mutation
variable mutation is a process of changing the variables value
*/ 
Job='Driver' ;
Age=29;
IsMarried=true;
alert('Hello guys My name is '+ FirstName + 'I am a senior '+ Job +
' I am '+ Age + ' years old... Is he married??  '+ IsMarried);
LastName=prompt(' What is his last name ???')

console.log('Hello Guys My name is  '+ FirstName , LastName +' I am a senior '
+ Job + ' I am '+ Age +' years old..  Is he married?? '+IsMarried);