
// Conditional Statement
// 1. if else
// 2. switch


console.log(1 == 1);

let conditions = 'true'

if( conditions ){
//    true  statement
console.log(`true`)
} else {
//    false statement
console.log(`false`);

}


var num1 = 21234;
var num2 = 3455;
console.log(num1 > num2);

if( num1 > num2 ){ // true or false  , false
    console.log("num 1 is grater than num 2.")
} else {
    console.log("num 1 is lesser than num 2")
}


// Driving lisence

// var age = 18
// 18 > DL
// 18 < NL

var age = 15;
var maxAgeLimit = 80; // 19 80

if (age == 18) {
  console.log("You are eligible for LL.");
} else if (age > 18 && age < 81) { //  19 - 80
  console.log("You are eligible for DL.");
} else if (age < 18 || age > 80) {// 0 - 17   81 200
  console.log("You are NOT eligible for DL.");
}

// switch case statements

let value = 'grapes'

switch (value) {
  case 'value1':
    console.log("case 1");
    break;
  case 'value2':
    console.log("case 2");
    break;
  case 'value3':
    console.log("case 3");
    break;
  default:
    console.log("default");
}



var fruitName = "hjbjhbdaw";

switch (fruitName) {
  case "apple":
    console.log("its apple.");
    break;
  case "strawberry":
    console.log("its strawberry");
    break;
  case "banana":
    console.log("its banana");
    break;
  default:
    console.log("No fruit found.");
}