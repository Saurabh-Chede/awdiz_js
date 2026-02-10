
// hositing , scopes

// Operators types

// 1. Comparision == , ===, > < >= <= != !==
// 2. Logical  $$ ||


var age;
console.log(age, typeof age, "age");
age = 20;
console.log(age, "age");

age = 20;
console.log(age, "age");
// const age;
// let age ;
// var age ;

// Operators - 1. Comparision == , ===, > < >= <= != !==

// = -> assign
// == -> to compare left side data with right side data
// === -> to compare  data and datatypes

console.log(2 == 4);
console.log(2 == 2); 

var userInputValue1 = 10;
var userInputValue2 = "10";
console.log(userInputValue1 == userInputValue2);


var userInputValue1 = 10;
var userInputValue2 = "10";
console.log(userInputValue1 === userInputValue2);


var num1 = 3453456;
var num2 = 3456765;
console.log(num1 > num2); // is left side is greter than right side ?
console.log(num1 < num2); //is right side is gretar than left side ?


var value1 = 20;
var value2 = 20;
console.log(value1 > value2);
console.log(value1 < value2);
console.log(value1 <= value2);
console.log(value1 >= value2);


console.log(2 == 2); // is left side is same to right side ?
console.log(2 != 2); //is left side is NOT same to right side ?
console.log(2 != 3);


console.log(2 !== 2); // false
console.log(2 !== 3); // true
console.log("3" !== "3"); // false
console.log(4 !== "4"); // true
console.log(4 != "4"); // true


// 2. Logical Operator  &&  ||

// && - if all conditions are true then only it'll return true
//     if even single condition is false then it'll return false

var a = 20;
var b = 20;
var c = 20;

console.log(a == b && b == c && a == c);

// || if even single condition is true then it'll return true 
// if all condition are false then only it'll return false 

console.log(1 == 1 || 2 == 7 || 234 == 345);
            // true     false      false