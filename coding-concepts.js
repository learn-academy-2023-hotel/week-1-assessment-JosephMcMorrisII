// ASSESSMENT 1: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.
// There is no need to change any of the code.

// --------------------INSTRUCTOR EXAMPLE: What will this log?
const colors = ["tangerine", "magenta", "lilac", "daffodil"]
console.log(colors.push("indigo"))

// a) Your answer: Return ["tangerine", "magenta", "lilac", "daffodil", "indigo"]
// b) Verify and explain: Return 5
// This returned 5 because its a mutator which is just informing of which index it placed the new data

// --------------------1) What will this log?

const cohort = "LEARN 2023"
//console.log(cohort.length)

// a) Your answer: Return 9
// b) Verify and explain: The command cohort.legnth returns the number of characters inside the """
// The reason it's 10 instead of 9 is that it counts the space as a character too

// --------------------2) What will this log?

const greeting = "Hello World!"
//console.log(greeting[4])

// a) Your answer: l
// b) Verify and explain: Return o
// Because o is the 4th position of the index
// It goes 0 , 1 , 2 , 3 , 4 which its techincally the 5th letter if youre looking at it

// --------------------3) What will this log?

const languages = ["JavaScript", "Ruby", "Python", "C++"]
const index = 1
// console.log(languages[index])

// a) Your answer: Return Ruby
// b) Verify and explain: The code is asking out of the listed languages in the array which one falls in the index 1 position

// --------------------4) What will this log?

const weekendDays = ["saturday", "sunday"]
//console.log(weekendDays.toUpperCase())

// a) Your answer: SATURDAY , SUNDAY
// b) Verify and explain: "SATURDAY , SUNDAY"
// The code toUpperCase means to capitalize whatever is inside the string
// Saturday , Sunday are the listed strings inside the array

// --------------------5) What will this log?

const dataTypes = ["number", "string", "Boolean", "undefined"]
console.log(typeof dataTypes.length)

// a) Your answer: 4
// b) Verify and explain: number
// not really sure why it returned number.
