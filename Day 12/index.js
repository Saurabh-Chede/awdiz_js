// Async await
// setTimeout, fetch = async task = return promise = resolve reject pending
async function getPosts() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/20"); // 2 sec
    const data = await response.json()
    console.log(data, "response from api "); // 0.1 sec
  } catch (error) {
    console.log(error);
  }
}

getPosts();


// Template literals

var username = "ROhit";

var number = "345";

console.log("Hello", username);

console.log(`Hello ${username} - ${number} `);


// OBject destructing

var data = { name: "awdiz", data: { age: { current: 11 } } };
// console.log(data.name);
console.log(data.data.age.current);



var data = { name: "Awdiz", age: { current: 11 } };

const { name, age } = data;
const { current } = age;

console.log(data.age.current);
console.log(current);



const nums = [10, 20, 30];
console.log(nums[0]);

const [firstValue, secondValue] = nums;
console.log(firstValue, secondValue);