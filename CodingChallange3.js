/**
 * Coding Challange 3
 * Shiw and his family went on holiday and went to three different restaurants.
 * the bills were 1024 , 480 and 2680.
 * To tip the waiter a fair amount, shiw created a simple tip calculator(as a function)
 * He likes to tip 20% of the bill when the bill is 500. 15% when the bill is 500 and 
 * 2000. 10 % if the bill amount is  more than 2000.
 * 
 * In the end John would like to have 2 arrays :
 * 1) containing all three tip(one for each bill)
 * 2) containing all three final paid amounts (bill + tip)
 * 
 * NOTE : to calculate 20% of a value simply multiply with 20/100=0.2
 * GOOD LUCK
 * 
 */

 var b1,b2,b3,t1,t2,t3, Bill;//b variable stores bills t stores tips
 function TipCalculator(BillAmount){
	 if(BillAmount<=500){
		 b1=BillAmount+ BillAmount*0.2;
		 return BillAmount*0.2;
	 }else if(BillAmount>500 && BillAmount<=2000){
		 b2=BillAmount+ BillAmount*0.15;
		 return BillAmount*0.15;
	 }else if(BillAmount>2000){
		 b3=BillAmount+ BillAmount*0.1;
		 return BillAmount*0.1

	 } else{
		 return 'Sorry ';
	 }
}
t1 = TipCalculator(500);
t2 = TipCalculator(600);
t3 =TipCalculator(2300);
var tips = [t1,t2,t3];
var bills =[b1,b2,b3];
console.log(tips);
console.log(bills);

/** Another way of doing this 
 * coding 
 */

 function tipcalculator(BILL){
	 var percentage;
	 if(BILL<500){
		 percentage=.2;
	 } else if(BILL>=500 &&BILL < 200){
		 percentage=.15;
	 } else{
		 percentage=.1;
	 }
	 return percentage*BILL;

 }
 var BILLS=[1240,480,2680];
 var TIPS=[tipcalculator(BILLS[0]),tipcalculator(BILLS[1]),tipcalculator(BILLS[2])];
 var FinalValues = [TIPS[0]+BILLS[0],TIPS[1]+BILLS[1],TIPS[2]+BILLS[2]];
 console.log(TIPS, FinalValues);