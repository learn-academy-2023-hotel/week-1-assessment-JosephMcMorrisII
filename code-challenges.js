// ASSESSMENT 1: Coding Practical Questions

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, leave comments to help us understand your thought process

// Reminder: Ensure you are in the correct directory
// Run the file with the following command: $ node code - challenges.js

// --------------------INSTRUCTOR EXAMPLE: Create a conditional statement that evaluates two strings and determines which of the strings has more characters. Use the two sets of test variables provided.

// Set one:
// const fruit1 = "apple"
// const fruit2 = "banana"
// Expected outcome: "banana"

// Set two:
// const fruit1 = "cherry"
// const fruit2 = "kiwi"
// Expected outcome: "cherry"

// Pseudo code: Use console.log because that is the command for javascript
// tell js what variable you want returned which would be fruit1
// console.log(fruit1) should return "cherry"


// --------------------1) Create the code that will combine the two arrays and return the length using the test variables provided below.

const padres1984WorldSeriesRuns = [2, 5, 2, 2, 4]
const padres1998WorldSeriesRuns = [6, 3, 5, 3]
const combinedRuns = padres1984WorldSeriesRuns.concat(padres1998WorldSeriesRuns)
console.log(combinedRuns.length)
// Expected output: 9

// Pseudo code: Input orginal arrays
// Output length of combined arrays (9)
// Use concat to combine arrays
// Run the new variable combinedRuns with .length

// --------------------2) Create the code that will reverse the letters of a string using the test variable provided below.

// const currentCohort = "Golf 2023"
// var reverseCohort = currentCohort.split("")
// console.log(reverseCohort.reverse().join(""))
// Expected output: "3202 floG"

// Pseudo code: Input the string currentCohort
// Output the Orginal string reversed
//Make a new variable for the reversed string
//We need to make the string into a array using .split
//Once the string is in an array we can use built methods to adjust the orginal string into desired string
//Used .reverse and .join


// --------------------3) Create the code that will log only the odd numbers from the array using the test variable provided below.

// const stockExchange = [13, 34, -4, 42, 5, -5, 10, 27, 42, 10]
// for (let i = 0; i < stockExchange.length; i++) {
//     if (stockExchange[i] % 2 !== 0) {
// console.log(stockExchange[i])
//     }
// }
// Expected output: 13 5 -5 27

// Pseudo code: input is array called stockExchange
// output odd numbers
// Create a for loop using the orginal array 
// Make a conditional statement to divide each value in the array by 2 to determine its a odd number
// Console.log stockExchange to return the odd values