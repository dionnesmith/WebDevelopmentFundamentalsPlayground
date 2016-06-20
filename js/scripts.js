//JavaScript Review File

console.log ("Happy!");

var age = 17;
var birthYear = 1998;
var graduationYear = 2017;
var numBroSis = 3;
var numKids = 0;

console.log("I am " + age)
console.log("My birth Year is " + birthYear)
console.log("I will graduate in " + graduationYear)
console.log("I have " + numBroSis + " brothers and sisters." )
console.log("I have " + numKids + " kids.")

document.getElementById("my-age").innerHTML = age;
document.getElementById("my-birthYear").innerHTML = birthYear;
document.getElementById("my-graduationYear").innerHTML = graduationYear;
document.getElementById("my-numBroSis").innerHTML = numBroSis;
document.getElementById("my-numKids").innerHTML = numKids;

 
console.log(age);



var counter = 0;
while(counter < 10) {
	counter = counter + 1;
	console.log("The score is plus " + counter);
}

for (var i = 1; i < 20; i++) {
	console.log(i);
}

for (var i = 0; i < 31; i+= 5) {
	console.log(i);
}

for (var i = 0; i < 101; i+= 25) {
	if (i === 50) {
		console.log(i + " Half way there!")
	} else {
		console.log(i)
	}
	
}

for (var i = 1; i < 9; i++) {
		console.log(i) 
	} if (i === 9) {
		console.log("nine")
	} else if (i === 10) {
		console.log("	ten") 
	} else {
		console.log(i)
	}

for (var word = "word"; word.length < 8; word += "word") {
	console.log(word)
}
