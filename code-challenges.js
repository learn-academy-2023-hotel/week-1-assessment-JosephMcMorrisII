// ASSESSMENT 1: Coding Practical Questions

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, leave comments to help us understand your thought process

// Reminder: Ensure you are in the correct directory
// Run the file with the following command: $ node code - challenges.js

// --------------------INSTRUCTOR EXAMPLE: Create a conditional statement that evaluates two strings and determines which of the strings has more characters. Use the two sets of test variables provided.

// Set one:
const fruit1 = "apple"
const fruit2 = "banana"
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
// Expected output: 9

// Pseudo code: First we would make a new const and call it CombinedRuns or WorldSeriesRuns
// const CombinedRuns = [2, 5, 2, 2, 4, 6, 3, 5, 3]
// const WorldSeriesRuns = [2, 5, 2, 2, 4, 6, 3, 5, 3]
// Since we know the expected output is 9 we know they want the arrays to show all in one
// console.log(CombinedRuns)
// console.log(WorldSeriesRuns)
// Either one should return 9
// Can also use console.log(padres1984WorldSeriesRuns.concat(padres1998WorldSeriesRuns)

// --------------------2) Create the code that will reverse the letters of a string using the test variable provided below.

const currentCohort = "Golf 2023"
// Expected output: "3202 floG"

// Pseudo code: I am guessing its console.log(currentCohort.reverse)
//console.log(currentCohort.reverse())
//Failed
//CharsReversed?
// var stringToArray = currentCohort.split()
// ["Golf 2023"]
// var stringToArray = currentCohort.split("")
// var stringToArray.reverse()
// var arrayToString = stringToArray.join()
// var arrayToString = stringToArray.join("")
//??


// --------------------3) Create the code that will log only the odd numbers from the array using the test variable provided below.

const stockExchange = [13, 34, -4, 42, 5, -5, 10, 27, 42, 10]
// Expected output: 13 5 -5 27

// Pseudo code: 
