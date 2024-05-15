"use strict";
// Calculate Age Based On Current Year And Your Birth Year.........
let ageCalculate = (currentYear, birthYear) => {
    let age = currentYear - birthYear;
    return age;
};
let newage = ageCalculate(2024, 2003);
console.log(newage);
// Percentage Calculation............
let percentageCalculate = (numerator, denominator) => {
    let percentage = (numerator / denominator) * 100;
    return percentage;
};
let percentage$ = percentageCalculate(976, 1100);
console.log(percentage$);
// Calculate Area Of Rectangle Using Length And Width............
let areaRec = (length, width) => {
    var areaOfRectangle = length * width;
    return areaOfRectangle;
};
let areaOfRectangle$ = areaRec(15, 14);
console.log(areaOfRectangle$);
// Convert Minutes Into Seconds..........
let mToSec = (minutes) => {
    let mToSeconds = minutes * 60;
    return mToSeconds;
};
let mToSeconds$ = mToSec(60);
console.log(mToSeconds$);
// Convert Seconds Into Minutes............
let sToMin = (seconds) => {
    var sToMinutes = seconds / 60;
    return sToMinutes;
};
let sToMinutes$ = sToMin(3600);
console.log(sToMinutes$);
// Calculate Area Of Circle............
let areaOfCircle = (radius) => {
    let areaOfC = 3.14 * radius * radius;
    return areaOfC;
};
let areaOfCircle$ = areaOfCircle(14);
console.log(areaOfCircle$);
// Calculate Area Of Cube............
let areaOfCube = (lengthOfOneSide) => {
    let areaOfC = 6 * (lengthOfOneSide) ** 2;
    return areaOfC;
};
let areaOfCube$ = (15);
console.log(areaOfCircle$);
// Convert Celsius To Fahrenheit...........
let cToF = (temperature) => {
    let temp_ = (9 / 5 * temperature) + 32;
    return temp_;
};
let cToFah = cToF(100);
console.log(cToFah);
// Convert Fahrenheit To Celsius............
let fToC = (temperatureF) => {
    let temp$ = 5 / 9 * (temperatureF - 32);
    return temp$;
};
let fToCel = fToC(100);
console.log(fToCel);
// Vote Casting System...........
var vote = (nationality, age) => {
    if (nationality == "pakistani" && age >= 18) {
        console.log("You Are Eligible For Vote");
    }
    else {
        console.log("You Are Not Eligible For Vote");
    }
};
vote("pakistani", 22);
// Checking Number Positive , Negative Or Zero..........
var numberCheck = (num1) => {
    if (num1 > 0) {
        console.log("Given Number Is Positive");
    }
    else if (num1 < 0) {
        console.log("Given Number Is Negative");
    }
    else {
        console.log("Given Number Is Equal To Zero");
    }
};
numberCheck(-1);
// Age Checking System..........
var ageCheck = (age) => {
    if (age <= 12) {
        console.log("You Are A Child");
    }
    else if (age <= 13 && age >= 19) {
        console.log("You Are A Teenager");
    }
    else if (age >= 19 && age <= 59) {
        console.log("You Are An Adult");
    }
    else {
        console.log("You Are A Senior Citizen");
    }
};
ageCheck(60);
// Checking Leap Year..........
var yearCheck = (year) => {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        console.log("This Is A Leap Year");
    }
    else {
        console.log("This Is Not A Leap Year");
    }
};
yearCheck(1900);
