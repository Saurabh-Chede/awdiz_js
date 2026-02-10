// 1. Data types

// String | Number | boolean



console.log(123 - 100); // print , calculation


console.log("hello", typeof "hello");
console.log("hello", typeof "hello");
console.log(`hello`, typeof `hello`);
console.log(123, typeof 123);
console.log(true, typeof true);
console.log(false, typeof false);
console.log("false", typeof "false");


// 2. Varibles - store data with any data type

// var , let , const

//  = assign operator

var name = "Awdiz"
var surname = "Institute"
var age = 11
var isOpen = true

var age1 = true;
var age1 = 30;
var age1 = "30";
console.log(age1, typeof age1, "age1");


var age = 10;
//assign;
console.log(age, "age old");
age = "hello"; //re assign
// console.log(age, "age new");

var age = 20; // re declare
// console.log(age, "age new 2");



//         1. Re assign      2. Re declare    3. scope     4. hoisting
// var         yes                yes           global           yes
// let         yes                no            block            no
// const       no                 no            block            no


{
  const age = 50;
//   inside the block
}
console.log(age);



let a = 20; 
{
  var b = 30;
  {
    console.log(a); // 20
    const c = 40;
  }
//   console.log(c);
}
console.log(b); // 30