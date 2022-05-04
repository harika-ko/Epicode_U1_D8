// Additional assignments for Day 4

/* EXTRA 1
 Write a piece of code for reverting an array.
 es:
 [1, 3, 5] ==> [5, 3, 1]
*/

let array1 = [1, 3, 5]
array1.reverse()

console.log(array1)

/* EXTRA 2
 Write a piece of code for getting the maximum numerical value from an array.
*/

let maxArray = [54, 66, 21, 90, 39, 150, 13, 23]
let max = maxArray[0]

for (let i = 1; i < maxArray.length; i++) {
    if (maxArray[i] > max) {
        max = maxArray[i]
    }
}
console.log(max)

/* EXTRA 3
 Write a piece of code for getting the minimum numerical value from an array.
*/

let min = maxArray[0]

for (i = 1; i < maxArray[i]; i++) {
    if (maxArray[i] < min) {
        min = maxArray[i]
    }
}

console.log(min)

/* EXTRA 4
 Write a piece of code for getting only even numerical values from an array.
*/

for (i = 0; i < maxArray.length; i++) {
    if (maxArray[i] % 2 === 0) {
        console.log("The even numbers in the array are ", + maxArray[i])
    }
}

/* EXTRA 5
 Write a piece of code for deleting only even entries from an array.
*/

/* WRITE YOUR ANSWER HERE */

/* EXTRA 6
 Write a piece of code for removing all the vowels from a string.
*/

/* WRITE YOUR ANSWER HERE */

/* EXTRA 7
 Write a piece of code for increasing all the numerical values in a array by 1.
*/

/* WRITE YOUR ANSWER HERE */

/* EXTRA 8 
 Replace all the strings contained in an array with their length.
 es.: ["strive", "is", "great"] => [6, 2, 5]
*/

/* WRITE YOUR ANSWER HERE */

/* WHEN YOU ARE FINISHED
 Upload the .js file on Eduflow before 5PM CET. In the next days we'll also learn how to use GIT!
*/
