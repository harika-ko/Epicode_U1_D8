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

let arr = [15, 34, 56, 73, 99, 23]

for (i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 1) {
        console.log(arr[i])
    }
}



/* EXTRA 6
 Write a piece of code for removing all the vowels from a string.
*/

let string = "iamajavascriptprogrammer"
let result = ""
for (i = 0; i < string.length; i++) {
    switch (string[i]) {
        case "a":
        case "e":
        case "i":
        case "o":
        case "u":
            break
        default: result = result + string[i]
    }
}

console.log(result)


/* EXTRA 7
 Write a piece of code for increasing all the numerical values in a array by 1.
*/

for (i = 0; i < maxArray.length; i++) {
    maxArray[i] = maxArray[i] + 1
}
console.log(maxArray)

/* EXTRA 8 
 Replace all the strings contained in an array with their length.
 es.: ["strive", "is", "great"] => [6, 2, 5]
*/

let stringArray = ["Epicode", "is", "great"]

for (i = 0; i < stringArray.length; i++) {
    let newArray = (stringArray[i].length)
    console.log(newArray)
}
/* WHEN YOU ARE FINISHED
 Upload the .js file on Eduflow before 5PM CET. In the next days we'll also learn how to use GIT!
*/
