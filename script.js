function add(x ,y, z) {
  return x + y + z
}
console.log("ADDITION: " + add(2, 5, 7))
console.log("ADDITION: " + add(3, 6, 8))
console.log("ADDITION: " + add(4, 7, 9))


//  1. Reduce the amount of code by writing 2 functions:  one that returns the result of multiplying 2 values, and the other returns the result of subtracting 2 values. Then, replace the relevant statements below with function calls.

function multiple(x, y) {
  return x * y
}
function subtract(x, y) {
  return x - y
}
// x = 1 & y = 3
console.log(multiple(1, 3))
console.log(subtract(1, 3))

// x = 2 && y = 10
console.log(multiple(2, 10))
console.log(subtract(2, 10))

// x = -9 && y = -6
console.log(multiple(-9, -6))
console.log(subtract(-9, -6))

// 2.  Write a function called calculateCircleArea that takes the radius of a circle as a parameter and returns the area of the circle, rounded to 2 decimal places.
function calculateCircleArea(radius) {
  return (Math.PI * (radius ** 2))
    .toFixed(2)
}
let ans = calculateCircleArea(5)
console.log("CIRCLE AREA: " + ans)


// 3. Create a function called reverseString that takes a string as input and returns the string reversed.
function reverseString(str){
   return str.split("").reverse().join("")
}
console.log("REVERSED STRING: " + reverseString("final fantasy"))


// 4. Write a function called countVowels that takes a string as input and returns the number of vowels (a, e, i, o, u) in the string.


let vowels = ["a", "e", "i", "o", "u"];
vowelCount = 0

function countVowels(input) {
  input.toLowerCase().split("").forEach((currentItem) => vowels.includes(currentItem) ? vowelCount++ : vowelCount+=0)
  return vowelCount
}
console.log("VOWEL COUNT: " + countVowels("Bacque-Attack!"))
// 5. Implement a function called randomInt that takes two parameters, min and max, representing the minimum and maximum range, and returns a random number within that range, exclusive (does not include the max as a possible value).
function randomInt(x, y) {
    return Math.floor(Math.random() * (y - x) + x)
}
// Sample Testing
for (let i = 0; i < 5; i++){
   let rand = randomInt(3, 6)
   console.log("RANDOM INT: " + rand);
}

// 6.  Create a function named isPalindrome that takes a string as input and returns true if the string is a palindrome (reads the same forwards and backwards), otherwise returns false.
function isPalindrome(input) {
  if (input.split("").reverse().join("") == input) {
    return true
  }
  return false;
}
console.log(isPalindrome("race car"))