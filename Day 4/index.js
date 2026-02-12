


// loops - for

// for( starting; ending ; sequence ){
//     multiple lines of code
// }

 1 - 3

//  var number = 1;
//  console.log(number);
//  number++;
//  console.log(number);
//  number++;
//  console.log(number)

 for(  var number = 1; number <= 3  ;  number++ ){
   console.log(number) // 1 2 3
}

// Iteration 1 :
// number = 1;
// number <= 3000 ; 1 <= 3 : true
// block execute, log(number) 1
// number++ 1 => 2

// Iteration 2nd :
// number = 2
// number <= 3 ; 2 <= 3 ture
// block execute, log(number) 2
// number++; 2=: 3

// Iteration 3rd :

// number = 3
// number <= 3; 3 <= 3 true
// block execute log(number) 3
// number++; 3 => 4

// Iteration 4th
// number = 4;
// number <= 3; 4 <= 3 ; false


// var num1 = 1;
// console.log(num1);
// num1++;
// num1++;
// num1++;
// num1++;
// num1 = num1 + 1;
// num1 = num1 + 34;
// num1 += 34;
// console.log(num1);
// num1--;
// num1--;
// num1 = num1 - 1;
// num1 = num1 - 12;
// num1 -= 23;
// console.log(num1);

// Q. Print number from  1 to 100 with gap fo 2 ;

for(let i = 1; i <= 100; i+= 2 ){
    console.log(i)
}

// Q. Print numbers from 100 to 200 with gap of 10;

for (let i = 100; i <= 200; i += 10) {
  console.log(i);
}

// 10 / 2 = 5
// 10 % 2 = 0
// 11 % 2 = 1

//      ____ 9 Quotient
//   2 /  19
//        18
//         1 remainder



// Q. Find all even number from give Range, 0 - 200

// var num = 35;
// var output = num % 2;
// console.log(output, "- output", output == 1);

for (let i = 0; i <= 200; i++) {
  if (i % 2 == 0) {
    console.log(i, "- is even number");
  } else {
    console.log(i, "- is odd number");
  }
}


// Q. Find Count of all even number from give Range, 0 - 200

// count the event number 
let count = 0
for ( let i=0; i<=200; i++){
    if(i%2==0){
        count++
    }
}
console.log('total count of even', count)