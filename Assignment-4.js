"use strict";
//  Create a function that takes an array, an index, and a value as parameters. Inside the function, use the splice method to insert the value at the specified index in the array. Return the modified array...
let arrayFunction = (array, index, param) => {
    let newArray = array;
    newArray.splice(index, 0, param);
    return newArray;
};
let arrayFuncResult = arrayFunction([0, 1, 2, 3, 4, 5], 3, 1000);
console.log("arrayFuncResult", arrayFuncResult);
//  Implement a simple shopping cart program using an array. Create functions to add items, remove items, and update quantities using the splice method. Print the cart's contents after each operation...
// Add Items Function...
let shoppingCart = ["Tomatoes", "Apples", "Grapes", "Dates", "Peaches"];
let addItems = (item) => {
    shoppingCart.splice(shoppingCart.length, 0, item);
    console.log(shoppingCart);
};
addItems("WaterMelon");
// Remove Items Function...
let shoppingCart2 = ["Tomatoes", "Apples", "Grapes", "Dates", "Peaches"];
let removeItems = (itemToBeRemoved) => {
    shoppingCart2.splice(itemToBeRemoved, 1);
    console.log("shoppingCart2", shoppingCart2);
};
removeItems(1);
// Write a program that uses a while loop to print the first 25 integers...
let i = 1;
while (i <= 25) {
    console.log("Integer Is", i);
    i++;
}
// Write a program that uses a while loop to print the first 10 even numbers...
// a Is Used As Loop Vaiable...
let a = 0;
while (a <= 10) {
    if (a % 2 == 0) {
        console.log("Even Number Is", a);
    }
    a++;
}
// Write a program to remove all the odd numbers from an array...
let removeOddNumbers = (array) => {
    const newArray = [];
    let i = 1;
    while (i < array.length) {
        if (array[i] % 2 == 0) {
            newArray.push(array[i]);
        }
        i++;
    }
    console.log("newArray", newArray);
};
removeOddNumbers([2, 3, 5, 7, 11, 13, 17, 16, 22]);
// Write a program having an array of numbers if the number is negative it should remove the negative number from the array...
let removeNum = (array) => {
    const newArray = [];
    let i = 1;
    while (i < array.length) {
        if (array[i] >= 0) {
            newArray.push(array[i]);
        }
        i++;
    }
    console.log("newArray", newArray);
};
removeNum([1, -1, 2, -2, 3, -3, -1988, -678]);
// Create a function that takes an array of numbers as parameter. Use a while loop to calculate and return the sum of all the numbers in the array...
let sumArray = (array) => {
    let sum = 0;
    let i = 0;
    while (i < array.length) {
        sum += array[i];
        i++;
    }
    return sum;
};
let sumArrayResult = sumArray([2, 3, 4, 5, 6, 7, 8]);
console.log("sumArrayResult", sumArrayResult);
// Implement a program that takes a list of temperatures in Celsius as input from the user. Convert each temperature to Fahrenheit using the formula F = (C * 9/5) + 32 and store the converted temperatures in an array. Use a while loop to perform the conversion for each temperature...
let cToFahrenheit = (arrayTemp) => {
    const newArray = [];
    let i = 0;
    while (i < arrayTemp.length) {
        let temp = (9 / 5 * arrayTemp[i]) + 32;
        newArray.push(temp);
        i++;
    }
    console.log("newArrayOfFahrenheit", newArray);
};
cToFahrenheit([100, 200, 300, 400]);
// Create a function that takes a positive integer as parameter and uses a while loop to calculate and return the factorial of that number...
let factorialNumber = (n) => {
    if (n === 0 || n === 1) {
        return 1;
    }
    else {
        let result = 1;
        for (let i = 2; i <= n; i++) {
            result *= i;
        }
        return result;
    }
};
let factorialResult = factorialNumber(10);
console.log("actorialResult", factorialResult);
