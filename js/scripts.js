//JavaScript Review File

console.log ("Happy!");

var age = 17;
var birthYear = 1998;
var graduationYear = 2017;
var numBroSis = 3;
var numKids = 0;

//String Concatenation
console.log("I am " + age)
console.log("My birth Year is " + birthYear)
console.log("I will graduate in " + graduationYear)
console.log("I have " + numBroSis + " brothers and sisters." )
console.log("I have " + numKids + " kids.")

//Manipulatiing the DOM(Document Object Model)
document.getElementById("my-age").innerHTML = age;
document.getElementById("my-birthYear").innerHTML = birthYear;
document.getElementById("my-graduationYear").innerHTML = graduationYear;
document.getElementById("my-numBroSis").innerHTML = numBroSis;
document.getElementById("my-numKids").innerHTML = numKids;

 
console.log(age);


//While and For Loops
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
		console.log("ten") 
	} else {
		console.log(i)
	}



//Arrays

var abc = "abcdefghijklmnopqrstuvwxyz"
var abcArray = ["a", "b", "c", "d", "e"]
var NumberArray = [1, 2, 3, 4, 5]

console.log(abc.charAt(3))
console.log(abcArray[2])

//Another way to create Arrays
var typesOfSoda = new Array()
typesOfSoda[0] = "Red Cream Soda"
typesOfSoda[1] = "Sprite"
typesOfSoda[2] = "Mountain Dew"
typesOfSoda[3] = "Pepsi"

console.log(typesOfSoda)

var worstSoda = new Array()
worstSoda[0] = "Coke Zero"
worstSoda[1] = "Diet Mountain Dew"
worstSoda[2] = "Diet Pepsi"

console.log(worstSoda)

//Mixed Arrays
var mixedArray = [1, "Bill Gates", 5 > 1]
console.log

//For Loops pracrice
for (var i = 0; i < 21; i += 2) {
	console.log(i)
}

for (var i = 0; i < 51; i += 5) {
	if (i === 50) {
		console.log(i + " I'm rich")
	} else {
		console.log(i)
	}
}


var friends = ["Darmaris", "Patience", "Dionne", "Joshua", "Bryce", "Daniel"]
for (var i = 0; i < friends.length; i++) {
	if (friends[i].charAt(0)=="D") {
		console.log(friends[i])
	}
}

//Objects
var beachBag = {
	numBottles		: 3,
	colorOfTowel	: "Green",
	isWet			: false,

	zipUp			: function() {
		console.log("zipper sound")
	}
}

console.log(beachBag)
console.log(beachBag.isWet)
beachBag.zipUp()



var nerd = {
	numGlassses		: 2,
	numBooks		: 6,
	numSuspenders	: 10,
	bullies			: "Jocs",
	grades			: "A",

	loser			: function() {
		console.log("You are a major loser.")
	}
}

console.log(nerd)
console.log(nerd.bullies)
nerd.loser()

/*
var player = {
	name 				: "Dionne",
	life				: 100,
	damage				: 10,
	hasSword			: true,
	hasSniperRifle		: false,
	hasArmor			: true,


	attack				: function(target) {
		console.log(this.name + " attacks " + target + this.damage)
	},

	swatWithSword 		: function(target) {
		var damage = 25 * this.damage
		console.log(this.name + " did " + damage + " damage to " + target)
	},

	magicPotion			: function(target) {
		var life = 10 * this.life
		console.log(this.name + " gave " + life " more life point to " + target)
	}
}
*/

var animal = {
	living			: true,
	eats			: true,
	run				: true,
	jumps			: true,
	numEye			: 2,
	cute 			: true,
	legs			: 4,

	breath 			: function() {
		console.log("It breaths quietly to stalk its prey.")
	} 
}
//Inheretence
console.log(animal)
animal.breath()

var snake = Object.create(animal)
console.log(snake.numEye)
snake.legs = 0
console.log(snake.legs)
snake.breath = function() {
	console.log("Hissssss")
}

var rabbit = Object.create(animal)
rabbit.ears = "Huge"
console.log(rabbit.ears)

var cow = Object.create(animal)
cowSpots = 45
cowBell = 1
cow.breath = function() {
	console.log("Mooooo")
}

console.log(cow)

