/**
 * John and Mike both play basketball in different teams. In the latest three games
 * John's team scored 89, 120 and 103 points. While mike's team scored 116 , 94
 * and 123 points.
 * 
 * 1.calculate the average score for each team
 * 2.decide which teams wins in the average (highest average score) and print the 
 * winner to the console.Also include the average score to the output.
 * 3.then change the scores to show different winners. don't forget to take into 
 * account there might be draw ( the same average score).
 * 4. Mary also plays basketball and her team scored 97, 134 and 105 points. like before
 * log the average winner to the console. you will need the && operator 
 */
var JohnTeamAvg; var MikeTeamAvg; var JohnGame1 ; var JohnGame2; var JohnGame3;
var MikeGame1 ; var MikeGame2;
var MikeGame3, MarryGame1,MarryGame2,MarryGame3,MarryTeamAvg;
MarryGame1=97;
MarryGame2=134;
MarryGame3=105;
var JohnGame1=90;
var JohnGame2=120;
var JohnGame3=130;
var MikeGame1=120;
var MikeGame2=100;
var MikeGame3=126;
 var JohnTeamAvg=(JohnGame1+JohnGame2+JohnGame3)/3;
 var MikeTeamAvg=(MikeGame1+MikeGame2+MikeGame3)/3;
 MarryTeamAvg= (MarryGame1+MarryGame2+MarryGame3)/3;

 console.log('John\'s teams average score =='+ JohnTeamAvg);
 console.log('Mike\'s team average score == '+ MikeTeamAvg);
 console.log('Marry\' s team average score =='+ MarryTeamAvg);
if(JohnTeamAvg>MikeTeamAvg && MarryTeamAvg<JohnTeamAvg){
	console.log('John\'s team wins');
}else if(MikeTeamAvg>JohnTeamAvg&& MarryTeamAvg<MikeTeamAvg) {
	console.log('Mike\'s team wins');
}else if(MarryTeamAvg>JohnTeamAvg&&MikeTeamAvg<MarryTeamAvg){
	console.log('Marry\'s team wins');

}else{
	console.log('There is a draw');
}
