/**
 * LOOPS AND ITERATION
 * 
 * *********** FOR LOOP ********
 */
for(var i=0; i<10;i++){
	console.log(i);
}


var john = ['John','Smith','Designer',1998,false];
for(var i =0; i<john.length;i++){
	console.log(john[i]);
}

/** WHILE LOOP
 * 
 */
var i=0;
while(i<john.length){
	console.log(john[i]);
	i++;
	
}

var john = ['John','Smith','Designer',1998,false];

for(var i =0; i<john.length;i++){
	if(typeof john[i]!=='string') continue;
	console.log(john[i]);
}

var john = ['John','Smith','Designer',1998,false];

for(var i =0; i<john.length;i++){
	if(typeof john[i]!=='string') break;
	console.log(john[i]);
}
console.log('Now Challange');
var john = ['John','Smith','Designer',1998,false];

for(var i =john.length-1; i>=0;i--){
	
	console.log(john[i]);
}