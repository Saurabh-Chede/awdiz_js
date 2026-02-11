let fruit = 'apple'

switch (fruit) {
    case 'apple':
        console.log('apple')
        break;
    case 'banana':
        console.log('banana')
        break;
    case 'orange':
        console.log('orange')
        break;
    default:
        console.log('not found')

}

// let age = 18

// switch (age) {
//     case '20':
//         console.log('20')
//         break;
//     case '14':
//         console.log('18')
//         break;
//     default:
//         console.log('not found')

// }

let num = 10

if (num > 0 || num <= 9) {
    console.log('age is verified');
}
else console.log('not verified')


function myName(){
    console.log(`reurn`)
    return myName
}

myName()

// let db = {
//     name : 'saurabh',
//     age : 18,
//     email: '@gmail.com'
// }

// const {name:userName, age:UserAGE} = db

// console.log(UserAGE)

let db = {
  name: 'saurabh',
  age: 18,
  email: '@gmail.com'
}

const { name, age, email } = db;

console.log(name, age, email);


