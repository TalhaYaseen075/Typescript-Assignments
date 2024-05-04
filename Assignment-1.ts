// Calculation Of Your Current Age Based On  Your Current Year And Birthday Year........

var curretYear: number = 2024;
var birthYear: number = 2005;
var currentAge: number = curretYear - birthYear;
console.log("You Are" , currentAge , "Years Old");

// Calculating The Area Of Rectangle..........

var height: number = 50;
var width: number = 7;
var area: number = height * width;
console.log("The Area Of Rectangle Is :" , area);

// Calculating The Area Of Circle.........

var radius: number = 102;
var pi: number = Math.PI;
var areaOfCircle1: number = pi * radius * radius;
console.log("The Area Of Circle Is :" , areaOfCircle1);

// Calculating The Area Of Cube...........

var lengthOfOneSide: number = 10;
var areaOfCube1: number = 6 * lengthOfOneSide**2;
console.log("The Area Of Cube Is :" , areaOfCube1);

// Temperature Conversion.........
// From Celsius To Fahrenheit...........

var temperature: number = 230;
var tempInFahren: number = 9 / 5 * (temperature + 32);
console.log("The Temperature In Fahrenheit Is" , tempInFahren);

// From Fahrenheit To Celsius...........

var _temperature: number = 230;
var _tempInCel: number = 5 / 9 * (_temperature - 32);
console.log("The Temperature In Celsius Is" , _tempInCel);

// Time Conversion........
//  Convert Seconds Into Minutes........

var $seconds: number = 1009;
var minute: number = $seconds / 60;
console.log("This Time Periond Contains" , minute , "minutes");

// Minutes Into Seconds.........

var _minute: number = 60;
var _seconds: number = _minute * 60;
console.log("This Time Period Contains" , _seconds , "seconds");

// Calculating The Percentage............

var obtainMarks: number = 976;
var totalMarks: number = 1100;
var percentage: number = (obtainMarks / totalMarks) * 100;
console.log("Congratulations Your Percentage Is" , percentage);
