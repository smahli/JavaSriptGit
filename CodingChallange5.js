/** CODING CHALLANGE 5  FIRST PART
 * Shiwshankar and his family went to five different restraunts. the bills were 
 * 1240 , 480 , 2680,1800 and 420 rupees 
 * shiwshankar likes to tip 20% of the bill when the bill is less than 500 rs.
 * 15% when the bill is between 50 aand 200 rs.
 * 10% if the bill is more than 2000 rs.
 * 
 * Implement a tip calculator using loops and objects :
 * 1. create an object with an array for the bill values
 * 2.add a method to calculate tip
 * 3.this method should include a loop iterate over all the paid bills and 
 * do the tip calculations
 * 4. As an output 1.)  create a new array containing all tips 
 *         			2.) an array containing final paid amount( Bill+ Tip)
 * 
 * HINT : Start with two empty arrays and then fil them up in the loop
*/

var shiw = {
	FullName: ' shiwshankar',
	bills: [1280 , 480, 2680, 1800, 420],
	CalcTip: function(){
		this.tips=[]; // two empty array
		this.FinalValue=[];
		for(var i=0;i<this.bills.length;i++){
			// determine the percentage 
			var percentage
			if(this.bills[i]<500){
				percentage=.2;
			} else if(this.bills[i]>= 500 && this.bills[i]<=2000){
				percentage=.15;
			} else{
				percentage=.1;
			}
			this.tips[i]=percentage*this.bills[i]; 
			this.FinalValue[i]= this.tips[i]+this.bills[i];
		}
		}

	}
	shiw.CalcTip();
	console.log(shiw);



	/**
	 *  CODING CHALLAGE 4 SECOND PART
	 * 
	 * Gopal's fammily also went on holiday, going to 4 different restraunts
	 * the bills were 770 , 3750 ,1100 and 450 rs.
	 * gopal likes to tip 20% of the bill when the bill is less than 1000rs . 10% when the bill is 
	 * between 1000 and 3000 and 25 % when the bill is more than 3000 rs
	 * 
	 * 5. Implement the same functionalities as before , this time using gopal's tipping
	 * method
	 * 6. create a function to calculate the average array of tips
	 * 7. calculate the average tip for each family
	 * 8. log to the console which family paid highest tip  on average
	 */

	 var gopal = {
		 FirstName : 'Gopal',
		 billsg:[770,3750,1100,450],
		 CalcTipg:function(){
			 this.tipg=[];
			 this.FinalValuesg=[];
			 var percentage;
			 for(i=0;i<this.billsg.length;i++){
				if(this.billsg[i]< 1000){
					 percentage=.2;
				}else if(this.billsg[i]>=1000 && this.billsg[i]<=3000){
					 percentage=.1;
				}else{
					percentage=.25;

					}
				this.tipg[i]= this.billsg[i]*percentage;
				this.FinalValuesg[i]= this.tipg[i]+this.billsg[i];

			 }
		 }
	 }

	 gopal.CalcTipg();
	 console.log(gopal);

	 /// Average tip  function  for each family
	function CalcAverage(tips){
		var sum=0;
		for(var i=0; i<tips.length;i++){
			sum=sum+tips[i];
		}
		return sum/4;

	}
	// creating average object and calling the calcaverage function
	shiw.average=CalcAverage(shiw.tips);
	gopal.average=CalcAverage(gopal.tipg);
	console.log(shiw,gopal);


	// comparing between shiwshankar and gopal average tips 

	if(shiw.average>gopal.average){
		console.log('shiwshankar\'s family has the highest tip than gopal = >', shiw.average);
	}else if(gopal.average>shiw.average){
		console.log('Gopal\'s family has the highest tip => ', gopal.average);
	} else{
		console.log('they have same tips ');
	}

