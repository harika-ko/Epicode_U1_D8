/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- You can Google / use StackOverflow BUT only when you think you need something we didn't cover during lessons yet
- You can test your code in a separate file or de-commenting the single exercises in this one.
- You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
- The solution must be available for the tutors by the end of the day (5PM CET)
*/

/* EXERCISE 1
 Create a variable and assign to it an array containing the first 5 positive numbers.
*/

let numbers = [1, 2, 3, 4, 5]

/* EXERCISE 2
 Create a variable and assign to it an object containing your name, surname, email address and age.
*/

let details = {
    name: "Harika",
    surname: "Kommuri",
    email: "harikakommuri35@gmail.com",
    age: 25
}

console.log(details)

/* EXERCISE 3
 Add to the previously created object a property with a boolean value to rappresent wheter you have or not a driving license.
*/

details.haveDrivingLicense = false

console.log(details)

/* EXERCISE 4
 Remove from the previously created object the age property.
*/

delete details.age

console.log(details)

/* EXERCISE 5
 Create a second object with another name, surname, email address and verify that this object has a different email address than the previous one.
*/

let details1 = {
    name: "Maninadh",
    surname: "Podapaka",
    email: "maninadh@gmail.com"
}

if (details.email === details1.email) {
    console.log("Email addresses are same")
} else {
    console.log("Email Addresses are different")
}

/* EXERCISE 6
 You are working on an e-commerce website. In the variable totalShoppingCart you are storing the total amount spent by the current user.
 Currently you have a promotion: if the customer's shopping cart total is more than 50, the user is eligible for free shipping (otherwise it costs 10).
 Write an algorithm that calculates the total cost to charge the user with.
*/

let totalShoppingCart = 22

if (totalShoppingCart > 50) {
    console.log("Congrats! You are eligible for free Shipping. So, the total amount to be paid is " + totalShoppingCart)
} else {
    totalShoppingCart = totalShoppingCart + 10
    console.log("The total amount to be paid including Shipping is " + totalShoppingCart)
}

/* EXERCISE 7
 You are working on an e-commerce website. Today is Black Friday and everything has a 20% discount at the end of the purchase.
 Modify the previous answer inserting this information and, applying the same rules for the shipping cost, calculate the totalCost.
*/


let discount = (totalShoppingCart * 0.2)
let totalCost = totalShoppingCart - discount

if (totalShoppingCart > 50) {
    totalShoppingCart = totalShoppingCart - discount
    console.log("Congrats! You are eligible for free Shipping and 20% discount. So, the total amount to be paid is " + totalShoppingCart)
} else {
    totalShoppingCart = totalCost + 10
    console.log("The total amount to be paid after 20% discount and including Shipping is " + totalShoppingCart)
}

/* EXERCISE 8
 Create a variable and assign to it an object representing a car, with properties like brand, model and licensePlate.
 Then clone it 5 times, and change the licensePlate for each cloned car without affecting the original one.
*/

let car = {
    brand: "Audi",
    model: "Audi A8",
    licensePlate: "DE 12345"
}
console.log(car)

let car1 = {}
Object.assign(car1, car)
car1.licensePlate = "DE 23456"
console.log(car1)

let car2 = {}
Object.assign(car2, car1)
car2.licensePlate = "DE 34567"
console.log(car2)

let car3 = {}
Object.assign(car3, car2)
car3.licensePlate = "DE 45678"
console.log(car3)

let car4 = {}
Object.assign(car4, car3)
car4.licensePlate = "DE 56789"
console.log(car4)

let car5 = {}
Object.assign(car5, car4)
car5.licensePlate = "DE 01234"
console.log(car5)

/* EXERCISE 9
 Create a variable called carsForRent and assign to it an array containing all the cars from the previous exercise.
*/

let carsForRent = ["car", "car1", "car2", "car3", "car4", "car5"]

/* EXERCISE 10
 Remove the first and the last car from the carsForRent array.
*/

/* WRITE YOUR ANSWER HERE */

/* EXERCISE 11
 Print to the console the type of the car variable you created before, as well as the types of its licensePlate and brand properties.
*/

/* WRITE YOUR ANSWER HERE */

/* EXERCISE 12
 Create a new variable called carsForSale assigning to it an empty array, and then insert 3 cars into it.
 Create a new variable called totalCars and assign to it the total number of cars present in the carsForSale and carsForRent arrays.
*/

/* WRITE YOUR ANSWER HERE */

/* EXERCISE 13
 Using a loop, print to the console all the data for each car in the carsForSale array.
*/

/* WRITE YOUR ANSWER HERE */

/* WHEN YOU ARE FINISHED
 Upload the .js file on Eduflow before 5PM CET. In the next days we'll also learn how to use GIT!
*/
