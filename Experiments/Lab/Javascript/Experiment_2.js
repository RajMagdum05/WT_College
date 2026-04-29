// 1. declare one array, object,string and function
// 2. find largest number in array
// 3. reverse number in string
// 4. check palindrome in string
// 5. write code for phibonacy series
// 6. count vowels in string
// 7. remove duplicate number from array
// 8. function to find even or odd
// 9. write code for sum of array

// ================= ACTIVITY 1 =================
console.log("===== Activity 1 : Basic Types & Functions =====");
document.writeln("<h3>Activity 1 : Basic Types & Functions</h3>");

let myArray = [11, 22, 33, 44];
console.log("Array:", myArray);
document.writeln("Array: " + myArray + "<br>");

let myString1 = "Tahir";
let myString2 = new String("abcd");

console.log("String1:", myString1);
console.log("String2:", myString2);

document.writeln("String1: " + myString1 + "<br>");
document.writeln("String2: " + myString2 + "<br>");

function myFun() {
  console.log("My function called");
  document.writeln("My function called<br>");
}

function add(num1, num2) {
  return num1 + num2;
}

myFun();

console.log("Add 5 + 7 =", add(5, 7));
document.writeln("Add 5 + 7 = " + add(5, 7) + "<br><br>");

// ================= ACTIVITY 2 =================
console.log("\n===== Activity 2 : Max in Array =====");
document.writeln("<h3>Activity 2 : Max in Array</h3>");

let array = [21, 15, 25, 30, 8];
let max = array[0];

for (let i = 1; i < array.length; i++) {
  if (max < array[i]) {
    max = array[i];
  }
}

console.log("Array:", array);
console.log("Max:", max);

document.writeln("Array: " + array + "<br>");
document.writeln("Max value: " + max + "<br><br>");

// ================= ACTIVITY 3 =================
console.log("\n===== Activity 3 : Reverse String =====");
document.writeln("<h3>Activity 3 : Reverse String</h3>");

let str = "1234567";
let revStr = "";

for (let i = str.length - 1; i >= 0; i--) {
  revStr += str[i];
}

console.log("Original:", str);
console.log("Reversed:", revStr);

document.writeln("Original: " + str + "<br>");
document.writeln("Reversed: " + revStr + "<br><br>");

// ================= ACTIVITY 4 =================
console.log("\n===== Activity 4 : Palindrome Check =====");
document.writeln("<h3>Activity 4 : Palindrome Check</h3>");

let str2 = "abcba";
let revStr2 = "";

for (let i = str2.length - 1; i >= 0; i--) {
  revStr2 += str2[i];
}

console.log("String:", str2);

document.writeln("String: " + str2 + "<br>");

if (str2 === revStr2) {
  console.log("Palindrome");
  document.writeln("Palindrome<br><br>");
} else {
  console.log("Not Palindrome");
  document.writeln("Not Palindrome<br><br>");
}

// ================= ACTIVITY 5 =================
console.log("\n===== Activity 5 : Fibonacci Series =====");
document.writeln("<h3>Activity 5 : Fibonacci Series</h3>");

let n = 10;
let previous = 0,
  current = 1;

for (let i = 0; i < n; i++) {
  console.log(previous);
  document.writeln(previous + " ");

  let sum = previous + current;
  previous = current;
  current = sum;
}
document.writeln("<br><br>");

// ================= ACTIVITY 6 =================
console.log("\n===== Activity 6 : Count Vowels =====");
document.writeln("<h3>Activity 6 : Count Vowels</h3>");

let str3 = "azezizoz";
let vowels = "aeiouAEIOU";
let countV = 0;

for (let i = 0; i < str3.length; i++) {
  if (vowels.includes(str3[i])) {
    countV++;
  }
}

console.log("String:", str3);
console.log("Vowels:", countV);

document.writeln("String: " + str3 + "<br>");
document.writeln("No. of vowels: " + countV + "<br><br>");

// ================= ACTIVITY 7 =================
console.log("\n===== Activity 7 : Unique Array =====");
document.writeln("<h3>Activity 7 : Unique Array</h3>");

const numbers = [10, 20, 20, 10, 40];
let unique = [];

for (let i = 0; i < numbers.length; i++) {
  if (!unique.includes(numbers[i])) {
    unique.push(numbers[i]);
  }
}

console.log("Original:", numbers);
console.log("Unique:", unique);

document.writeln("Original: " + numbers + "<br>");
document.writeln("Unique: " + unique + "<br><br>");

// ================= ACTIVITY 8 =================
console.log("\n===== Activity 8 : Even or Odd =====");
document.writeln("<h3>Activity 8 : Even or Odd</h3>");

function findEvenOrOdd(num) {
  if (num % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
}

console.log("7 is", findEvenOrOdd(7));
document.writeln("7 is " + findEvenOrOdd(7) + "<br><br>");

// ================= ACTIVITY 9 =================
console.log("\n===== Activity 9 : Sum of Array =====");
document.writeln("<h3>Activity 9 : Sum of Array</h3>");

const numbers2 = [15, 10, 5, 20];
let sum = 0;

for (let num of numbers2) {
  sum += num;
}

console.log("Array:", numbers2);
console.log("Sum:", sum);

document.writeln("Array: " + numbers2 + "<br>");
document.writeln("Sum: " + sum + "<br>");
