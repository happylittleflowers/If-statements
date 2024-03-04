//4 Booleans:
//let x = 10, y = 0, z = "pop", w = "POP"
//console.log(x > y) // true
//console.log(x != y) // true
//onsole.log(x < y) // false
//console.log(z == w) // false
//console.log(z.toUpperCase() == w) // true

// Example. Surfs Up.
//var surfHeight = +prompt("How tall are the waves?");

//if (surfHeight >= 6) {
// alert("Great day for surfing!")
// }

// Example. Comics.
// var comicChar = prompt("Enter a comic book character");
//if (comicChar.toLowerCase() = "batman") {
//alert(`${comicChar} is from DC Comics`);
//}

//if (comicChar.toLowerCase() = "wonder woman") {
//alert(`${comicChar} is from DC Comics`);
//}
//if (comicChar.toLowerCase() = "captain america") {
//alert(`${comicChar} is from Marvel`);
//}
//if (comicChar.toLowerCase() = "spiderman") {
//alert(`${comicChar} is from Marvel`);
//}
// Example Secret Number
//const SECRET_NUMBER = Math.floor( Math.random()* 11);
//let guess = +prompt("Guess a number between 1 and 10");

//if ((guess == SECRET_NUMBER)) {
//alert("You guessed it!");
//} else {
//alert("INCORRECT");
//}

// Example. Surfs Up Part 2.
//var surfHeight = +prompt("How tall are the waves?");

//if (surfHeight >= 6) {
//alert("Great day for surfing!");
//} else {
//alert("Go body boarding!");
//}
// Example. Circle Area.
//let rad = +prompt("Enter circle radius");
// radius entered was good
//f (rad > 0) {
//let area = Math.PI * rad ** 2;
//alert("The area of circle with radius " + rad + " is " + area.toFixed(2));
//} else {
// radius was negative
// alert("You cannot enter a negative #");
//}

// Example Secret Number Part 2.
//const SECRET_NUMBER = Math.floor(Math.random() * 11);
//console.log(SECRET_NUMBER);
//let guess = +prompt("Guess a number between 1 and 10");

//if (guess == SECRET_NUMBER) {
//alert("You guessed it!");
//} else {
//alert("INCORRECT");
//}
// after getting it wrong
// tell them more info
//if (guess > SECRET_NUMBER) {
//alert("Your guess was too high");
//} else {
//alert("Your guess was too low");

//alert(`The secret # was ${SECRET_NUMBER}`);
//}
// Example. Even or Odd.
//var num = +prompt("Enter a # greater than 100");
//if (num >= 100) {
// now say if it is even or odd
//if (remainder == 1) {
//alert("Your # is odd");
//} else {
//alert("Your # is even");
//}
//} else {
// tell them they didnt enter a good number
//}
// Example. Surfs Up Part 3.
//var surfHeight = +prompt("Enter wave height");
//if (surfHeight >= 6) {
//alert("Great day for surfing!");
//} else if (surfHeight >= 3) {
//alert("Go body boarding");
//} else if (surfHeight >= 0); {
//alert("Go for a swim");
//} else {
//alert("Whoa! what kind of surf is that?");
//}

// Excerise 1
//let numCopies;
//let pricePerCopy;
//let totalcost;
// Input
//numCopies = +prompt("How many copies?");

// Process
//if (numCopies < 0) {
//alert("Can't order that amount");
///} else if (numCopies <= 99) {
///pricePerCopy = 0.3;
/////} else if (numCopies <= 499) {
//pricePerCopy = 0.28;
//} else if (numCopies <= 749) {
// pricePerCopy = 0.27;
//} else if (numCopies <= 1000) {
//pricePerCopy = 0.26;
////} else {
//pricePerCopy = 0.25;
//}
// Output
//totalcost = pricePerCopy * numCopies;
//alert(
//`Price per copy is $${pricePerCopy.toFixed(2
// )}/nTotal cost is $${totalcost.toFixed(2)}}`);

// Excerise 5
let grade;
let lettergrade;
let finalgrade;
// Input
grade = +prompt("What is your grade?");

// Process
if (grade < 0) {
  alert("Can't show grade");
} else if (grade <= 100) {
  lettergrade = A;
} else if (grade <= 89) {
  lettergrade = B;
} else if (grade <= 79) {
  lettergrade = C;
} else if (grade <= 69) {
  lettergrade = D;
} else if (grade <= 60) {
  lettergrade = F;
}
// Output
finalgrade = grade * lettergrade;

// Excerise 2
