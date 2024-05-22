// Write a program that uses filter to remove all negative numbers from an array of numbers...

let nums1: number [] = [1 , -10 , 19 , -22 , -45 , 23 , 34 , -43 , -1 , -4 , -6 , -32];
let nums1Result: number [] = nums1.filter((element: number): boolean  => element >= 0);
console.log("nums1Result" , nums1Result);

// Given an array of numbers [1, 2, 3, 4, 5], use the map method to create a new array where each number is multiplied by 2...

let nums2: number [] = [1 , 2 , 3 , 4 , 5];
let nums2Result: number [] = nums2.map((element: number): number => element * 2);
console.log("nums2Result" , nums2Result);

// Given an array of strings ["apple", "banana", "cherry", "date", "grape"], use the filter method to create a new array containing only the fruits with more than 5 characters...

let fruits: string [] = ["apple" , "banana" , "cherry" , "date" , "grape"];
let fruitsResult: string [] = fruits.filter((element: string , index: number): boolean => element.length > 5);
console.log("fruitsResult" , fruitsResult);

// Given an array of names ["Alice", "Bob", "Charlie", "David", "Emily"], use the forEach method to log each name with an exclamation mark at the end, e.g., "Alice!"...

let names: string [] = ["Alice", "Bob", "Charlie", "David", "Emily"];
names.forEach((element: string) => {
    let modifiedName: string = element + "!";
    console.log("modifiedName" , modifiedName);
});

// Given an array of temperatures in Celsius [0, 10, 20, 30, 40], use the map method to create a new array where each temperature is converted to Fahrenheit using the formula (Celsius * 9/5) + 32...

let temperatures: number [] = [0 , 10 , 20 , 30 , 40];
let newTemperature: number [] = temperatures.map((element: number): number => (element * 9 / 5) + 32);
console.log("newTemperature" , newTemperature);

// Given an array of numbers [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], use the map and filter methods together to create a new array containing the squares of even numbers...

let nums3: number [] = [1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10];
let squareOfNumbers: number [] = nums3.filter((element: number): boolean => element %2 == 0) .map((element: number): number => element * element);
console.log(squareOfNumbers);

// Given an array of numbers [3, 6, 9, 12, 15, 18], use the map and filter methods together to create a new array containing the doubled values of odd numbers...

let nums4: number [] = [3 , 6 , 9 , 12 , 15 , 18];
let oddNumbers: number [] = nums4.filter((element: number): boolean => element %2 != 0) .map((element: number): number => element * 2);
console.log("oddNumbers" , oddNumbers);
