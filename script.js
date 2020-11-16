/**
 * ***************    HOISTING WITH FUNCTIONS  *****************
 * 
 */


 /**
  * 
  *@This_is_normal_way_of_doing_this
  */
function calculateAge(year){
	console.log(2020-year);
}
calculateAge(1996);

/**
 * @Now_This_is_HOISTING (This will only work in function declaration not in 
 * function expression)
 */
calculateAge(1998);
function calculateAge(year){
	console.log(2020-year);
}

/**
 * @With_function_Expression (This is working)
 */
  /* var Retirement = function(year){
	console.log(60-(2020-year));
}
   Retirement(1996);  */

 /** 
  * @With_function_Expression (This will  not be working)
  */
    /* Retirement(1996);
 var Retirement = function(year){
	console.log(60-(2020-year));    
}  */

/*************  HOISTING WITH VARIABLES   *************
 * **********/


/**
 * @THis_Is_Normal_of_doing_This
 */
 var age =23;
 console.log(age);

 /**
  * Hoisting
  */

  console.log(amount);    // we will get undefined 
  var amount=5000;

/**
 * Another example
 */
 console.log(age); // we will get undefinded
 var age =23;    // This 'age' is global varibale 
 function foo(){
   var age =65;  // This 'age' is local to foo function
   console.log(age);
 }

 foo();    // this 'foo()' function will only print the age 65
 console.log(age);  // but this concole.log will print the golbal 'age' varibale .
 

