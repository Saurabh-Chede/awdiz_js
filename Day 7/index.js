
// function

// syntax

// function nameoffunction(para1, para2, para3){
//     multiple lines of code
// }

var number1 = 234;
var number2 = 456;

function addition(number1, number2) {
  //   console.log(number1, "value1", number2, "value2");
  //   console.log("Inside addition function");
  //   console.log(number1 + number2); // calculation and printing
  return number1 + number2;
}

const output = addition(number1, number2);
console.log(output);


const subtraction = function () {
  console.log("Hello");
};
subtraction()


const mulitplication = (num1, num2) => {
  return num1 * num2;
  console.log("hi")
};
const output2 = mulitplication(12, 23);
console.log(output2, "output");



// Q by using function return the given number is even or odd

let number = 233;

const checkOddEven = (number) => {
  if (number % 2 == 0) {
    return "its even number.";
  } else {
    return "its odd number";
  }
};
const output3 = checkOddEven(number);
console.log(output3, "output");