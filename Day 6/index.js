
// binaray and linear approach

var numbers = [1, 2, 3, 4, 5, 6];
var target = 6;

//  linear approach
let i = 0;
while (i <= numbers.length - 1) {
  console.log(i);
  if (numbers[i] == target) {
    // console.log(i, "- output");
  }
  i++;
}

var numbers = [1, 2, 3, 4, 5, 6];
var target = 1;

// binaray + pointers approach

// console.log(Math.floor((numbers.length - 1) / 2), "index");
// console.log(numbers[Math.floor((numbers.length - 1) / 2)], "element");

// let middleIndex = Math.floor((numbers.length - 1) / 2);
// console.log(middleIndex, "middleIndex");
// let middleElement = numbers[middleIndex];
// console.log(middleElement == target);
// console.log(middleElement > target);
// console.log(middleElement < target);

// let left = 0;
// let right = numbers.length - 1;
// 5;
// console.log(left, "left");
// console.log(right, "right");
// console.log(Math.floor((left + right) / 2));
// console.log(numbers[Math.floor((left + right) / 2)]);
// if (middleElement > target) {
//   right = Math.floor((left + right) / 2) - 1;
// //   console.log(right, "right");
//   middleElement = numbers[Math.floor((left + right) / 2)];
//   console.log(middleElement,"middleElement")
//   console.log(middleElement == target);
//   console.log(middleElement > target);
//   console.log(middleElement < target);
// }




var numbers = [1, 2, 3, 4, 5, 6];
var target = 6;

let left = 0;
let right = numbers.length - 1;

while (left <= right) {
  console.log("hi");
  let middleIndex = Math.floor((left + right) / 2);
  let middleElement = numbers[middleIndex];
  // console.log(left, right, middleIndex, middleElement);
  if (target == middleElement) {
    console.log(middleIndex, "index");
    break;
  } else if (middleElement > target) {
    right = middleIndex - 1;
  } else if (middleElement < target) {
    left = middleIndex + 1;
  }
}



// Iteration 1 :
// left = 0
// right = 5
// left <= right 0 <= 5 true
// middleIndex 2
// middleElement 3
// target == middleElement 6 == 3 false
// middleElement > target 3 > 6 false
// middleElement < target 3 < 6 true
// left = middleIndex + 1;  2 + 1 = 3

// Iteration 2 :
// left = 3
// right = 5
// middleIndex = 4
// middleElement = 5
// target == middleElement 6 == 5 false
// middleElement > target 5 > 6 false
// middleElement < target 5 < 6 true
// left = middleIndex + 1;  4 + 1 = 5

// Iteration 3rd :
// left = 5
// right = 5
// middleIndex = 5
// middleElement  = 6
// target == middleElement 6 == 6 true  5

// Object;

var numbers = [1, 2, 3];

// var data = { key1: value1, key2: value2, key3: value3 };

var instituteDetails = {
  name: "Awdiz",
  age: 11,
  isOpen: true,
  courses: ["FSD", "Cloud", "Devops"],
  student: { FSD: 20, CLOUD: 30, DEVOPS: 10 },
};

console.log(instituteDetails.name);
console.log(instituteDetails.age);
console.log(instituteDetails.isOpen);
console.log(instituteDetails.courses);
console.log(instituteDetails.student);
console.log(instituteDetails.student.DEVOPS);
console.log(instituteDetails["name"]);
console.log(instituteDetails["age"]);
console.log(instituteDetails["isOpen"]);
console.log(instituteDetails["courses"]);
console.log(instituteDetails["student"]);
instituteDetails.location = "vashi";
console.log(instituteDetails, "instituteDetails");