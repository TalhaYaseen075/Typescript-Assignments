"use strict";
// Checking Number Is Even Or Odd.........
var num1 = 7;
if (num1 % 2 == 0) {
    console.log("This Particular Number Is Positive");
}
else {
    console.log("This Particular Number Is Odd");
}
// Checking Number Is Positive , Negative Or Zero...........
var num1 = 0;
if (num1 > 0) {
    console.log(`This Particular Number Is Positive ${num1}`);
}
else if (num1 < 0) {
    console.log('This Particular Number Is Negative', num1);
}
else {
    console.log("This Particular Number Is Negative", num1);
}
// System That Checks User's Age And Divide Them Into Different Categories........
var age = 11;
if (age <= 12) {
    console.log("You Are A Child");
}
else if (age >= 13 && age <= 19) {
    console.log('You Are A Teenager');
}
else if (age >= 20 && age <= 59) {
    console.log("You Are An Adult");
}
else {
    console.log("You Are A Senior Citizen Of Our Community");
}
// Vote Checking System.........
var _age = 12;
var nationality = "Pakistani";
if (_age >= 18 && nationality == "Pakistani") {
    console.log("Congrats , You Are Eligible For Vote");
}
else {
    console.log("Please Obtain A Valid ID To Vote");
}
// Divisible By Both 2 and 3 Or Anyone Of Them Or Not Divisible By Both..........
var num = 10;
if (num % 2 == 0 && num % 3 == 0) {
    console.log("This Number Is Divisible By Both 2 and 3");
}
else if (num % 2 == 0 && num % 3 != 0) {
    console.log("This Number Is Divisible By 2 But Not By 3");
}
else if (num % 2 != 0 && num % 3 == 0) {
    console.log("This Number Is Divisible By 3 But Not By 2");
}
else {
    console.log("This Number Is Not Divisible By Either Two Or Three");
}
// Check If A Year Is A Leap Year Or Not..........
const year = 2024;
if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
    console.log(year, "This Is A  Leap year");
}
else {
    console.log(year, "This Is Not A Leap year");
}
