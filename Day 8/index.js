
// array methods

//1. Push
//2. Pop
//3. Shift
// 4.Unshift
// 5.Map

// Push;

// Push Example
var numberList = [1, 2, 3];
numberList.push(4);
numberList.push(5, 6);
console.log(numberList);

// Pop Example
var scoreList = [1, 2, 3, 4];
let removedLast = scoreList.pop();
let removedSecondLast = scoreList.pop();
console.log(scoreList, removedLast, removedSecondLast);

// Shift Example
const itemList = [1, 2, 3];
itemList.shift();
itemList.shift();
console.log(itemList);

// Unshift Example
const valueList = [2, 3, 4];
valueList.unshift("1");
console.log(valueList);

// Map Example
let productPrices = [100, 150, 200];
let pricesWithGST = productPrices.map((price) => price * 1.18);
console.log(pricesWithGST, "pricesWithGST");
console.log(productPrices, "originalPrices");

// Filter Example (Odd Numbers)
let numberArray = [1, 2, 3, 4, 5, 6];
let oddNumbers = numberArray.filter((num) => num % 2 === 1);
console.log(oddNumbers);

// Filter Example (Active Users)
var userList = [
  { name: "virat", active: true },
  { name: "virat", active: false },
  { name: "virat", active: false },
];
let filteredActiveUsers = userList.filter((user) => user.active);
console.log(filteredActiveUsers, "filteredActiveUsers");

// Reduce Example (Sum of Numbers)
let numberValues = [1, 2, 3, 4, 5];
const totalSum = numberValues.reduce((accumulator, currentValue) => accumulator + currentValue, 100);
console.log(totalSum);

// Reduce Example (Count Elements)
let mixedValues = [1, 2, 3, 4, 5, "true", false];
const totalCount = mixedValues.reduce((counter, current) => counter + 1, 0);
console.log(totalCount);

// Reduce Example (Find Max Number)
let numberSet = [1, 4, 10, 6, 12, 9];
let highestNumber = numberSet.reduce((max, current) => (current > max ? current : max), 0);
console.log(highestNumber);

// Object Example
const companyInfo = {
  name: "Awdiz",
  greet: (value) => {
    console.log("Hello everyone!");
    return value * 2;
  },
};

console.log(companyInfo.name, "companyInfo");
console.log(companyInfo.greet, "companyInfo");
console.log(companyInfo.greet(10), "companyInfo");