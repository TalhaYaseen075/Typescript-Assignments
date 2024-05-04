// Calculate Age Based On Current Year And Your Birth Year.........

let ageCalculate = (currentYear: number , birthYear: number): number => {
    let age: number = currentYear - birthYear;
    return age;
}
let newage: number = ageCalculate(2024 , 2003);
console.log(newage);

// Percentage Calculation............

let percentageCalculate = (numerator: number , denominator: number): number => {
    let percentage: number = (numerator / denominator)* 100;
    return percentage;
}
let percentage$: number = percentageCalculate(976 , 1100);
console.log(percentage$);

// Calculate Area Of Rectangle Using Length And Width............

let areaRec = (length: number , width: number): number => {
    var areaOfRectangle: number = length * width;
    return areaOfRectangle;
}
let areaOfRectangle$: number = areaRec(15 , 14);
console.log(areaOfRectangle$);

// Convert Minutes Into Seconds..........

let mToSec = (minutes: number): number => {
    let mToSeconds: number = minutes * 60;
    return mToSeconds;
}
let mToSeconds$: number = mToSec(60);
console.log(mToSeconds$);

// Convert Seconds Into Minutes............

let sToMin = (seconds: number): number => {
    var sToMinutes: number = seconds / 60;
    return sToMinutes;
}
let sToMinutes$: number = sToMin(3600);
console.log(sToMinutes$);

// Calculate Area Of Circle............

let areaOfCircle = (radius: number): number => {
    let areaOfC: number = 3.14 *radius * radius;
    return areaOfC;
}
let areaOfCircle$: number = areaOfCircle(14);
console.log(areaOfCircle$);

// Calculate Area Of Cube............

let areaOfCube = (lengthOfOneSide: number): number => {
    let areaOfC: number = 6 * (lengthOfOneSide ) ** 2;
    return areaOfC;
}
let areaOfCube$: number = (15);
console.log(areaOfCircle$);

// Convert Celsius To Fahrenheit...........

let cToF = (temperature: number): number => {
    let temp_: number = ( 9 / 5 * temperature) + 32;
    return temp_;
}
let cToFah: number = cToF(100);
console.log(cToFah);

// Convert Fahrenheit To Celsius............

let fToC = (temperatureF: number): number => {
    let temp$: number = 5 / 9 * (temperatureF - 32);
    return temp$;
}
let fToCel: number = fToC(100);
console.log(fToCel);

// Vote Casting System...........

var vote = (nationality: string , age: number) => {
    if (nationality == "pakistani" && age >= 18) {
        console.log("You Are Eligible For Vote")
    }
    else {
        console.log("You Are Not Eligible For Vote");
        
    }
}
vote("pakistani" , 22);

// Checking Number Positive , Negative Or Zero..........

var numberCheck = (num1: number) => {
    if(num1 > 0){
        console.log("Given Number Is Positive")
    }
    else if (num1 < 0){
        console.log("Given Number Is Negative")
    }
    else{
        console.log("Given Number Is Equal To Zero")
    }
}
numberCheck(-1);

// Age Checking System..........

var ageCheck = (age: number) => {
    if(age <= 12){
        console.log("You Are A Child"); 
    }
    else if(age <= 13 && age >= 19){
        console.log("You Are A Teenager");
    }
    else if(age >= 19 && age <= 59){
        console.log("You Are An Adult")
    }
    else{
        console.log("You Are A Senior Citizen");
    }
}
ageCheck(60);

// Checking Leap Year..........

var yearCheck = (year: number) => {
    if((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)){
        console.log("This Is A Leap Year");
    }
    else{
        console.log("This Is Not A Leap Year");
    }
}
yearCheck(1900);
