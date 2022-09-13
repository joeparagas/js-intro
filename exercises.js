// Comments are text that will not be executed in your code. Rather comments are for other programmers to read. 
// Single line comments start with //
/* Multiple line comments start with*/ /* and end with */ 

/* All of the exercises below are commented out. Write your Javascript code after each exercise. */

/* Variables and Data Types */
/*Console.log each variable and test your code in the terminal using the Node REPL*/

/*i.e.*/

let fruit = 'banana';
console.log(fruit);  // <= this should print out 'banana'

/*
* #1
* Variables with a STRING value
Declare the following variables and assign your own string values for each variable. Console.log each variable to check your work.
  firstName
  lastName
  birthPlace
  favColor
  favFood
*/

let firstName = 'joe';
let lastName = 'paragas';
let birthPlace = 'honolulu';
let favColor = 'blue';
let favFood = 'apple pie';

console.log(firstName,lastName,birthPlace, favColor, favFood);


/*
* #2
* Variables with a Number value
Declare the following variables and assign your own number values for each variable. Console.log each variable to check your work.
  age
  shoeSize
  mcdonaldsInHi
  abcStoresInHi
  princeSong
*/

let age = 25;
let shoeSize = 10; 
let mcdonaldsInHi = 1000000000000; 
let abcStoresInHi = 1000000000000;
let princeSong = 1;

console.log(age, shoeSize, mcdonaldsInHi, abcStoresInHi, princeSong);


/*
* #3
* Variables with a BOOLEAN value
Declare the following variables and assign your own boolean values for each variable. Console.log each variable to check your work.
  lovesMcdonalds
  isVegan
  olderThan21
  hasNetFlix
  beenToParis
*/

let lovesMcdonalds = false;
let isVegan = false;
let olderThan21 = true;
let hasNetFlix = true;
let beenToParis = false; 

console.log(lovesMcdonalds, isVegan, olderThan21, hasNetFlix, beenToParis);

console.log('\n');

/*
* #4
* Variables with an ARRAY value
Declare a variable named plateLunch and assign it an array containing five of your favorite lunch items.
Declare a variable named `candyBox` and assign it an array containing five candies of your choosing.
Declare a variable named `westSiiiiide` and assign it an array containing states found on the west coast of the US.
Declare a variable named `lotteryResult and assign it an array containing 5 random numbers.
Declare a variable named `hamajang` and assign it an array containing 6 different data types.
Declare a variable named `tagTeam` and assign it an array containing 3 arrays, with each array containing items that complement with one another.
Console.log each variable to check your work
*/

let plateLunch = ['french fries', 'lettuce wraps', 'quesadillas', 'chicken tenders', 'chicken katsu' ];
let candyBox = ['m & ms' , 'resses', 'snickers', 'almond joy', 'crunch'];
let westSiiiiide = ['california', 'arizona', 'washington', 'oregon'];
let lotteryResult = [12, 8, 24, 999, 2];
let hamajang = ['int', 'byte', 'string', 'float', 'boolean', 'char'];
let tagTeam = [['music', 'late night'], ['fall', 'football'], ['waffles' , 'syrup']];

console.log(plateLunch);
console.log(candyBox); 
console.log(westSiiiiide);
console.log(lotteryResult); 
console.log(hamajang); 
console.log(tagTeam[0], tagTeam[1], tagTeam[2]);

console.log('\n');

/*
* #5
* Accessing values in ARRAYS
let partyMenu = ['steak nachos', 'fried rice', 'bbq ribs', 'sweet potato fries', 'chicken wings', 'carrot cake', 'chi chi dango'];
Console.log the entire array.
Console.log the length of this array.
Console.log 'sweet potato fries' from this array.
Console.log 'steak nachos' from this array.
*/

let partyMenu = ['steak nachos', 'fried rice', 'bbq ribs', 'sweet potato fries', 'chicken wings', 'carrot cake', 'chi chi dango'];
console.log(partyMenu);
console.log(partyMenu.length);
console.log(partyMenu[3], partyMenu[0]);

/*
#6
* Concatenation 
Concatenate the variables `firstName` and `lastName` from exercise 1 and store them into a new variable called `fullName` (don't forget to include a space between the firstName and lastName).
Using the fullName and birthPlace variables, console.log the following:
"Hi my name is fullName and I was born in birthPlace." 
*/

let fullName = firstName + ' ' + lastName;
console.log('Hi my name is ' + fullName + ' ' + 'and I was born in ' + birthPlace);

console.log('\n');
/*
* #7
* Variables with an OBJECT value
Declare the following variables and add your own values to each name to complete the properties for each object. Console.log each variable to check your work.
  kicks
    - brand
    - size
    - color
    
  car
    - brand
    - model
    - color
    
  bank
    - name
    - branch
    - location
    - rating
    - helpful
*/

const kicks = {
  brand: 'jordan',
  size: '11',
  color: 'white and blue'
}

const car = {
  brand: 'lamborghini',
  model: 'aventador',
  color: 'blue'
}

const bank = {
  name: 'central pacific bank' ,
  branch: 'pearl city',
  location: '1030 Makolu Street',
  rating: '5 stars',
  helpful: 'really'
}

console.log(kicks); 
console.log(car); 
console.log(bank);


