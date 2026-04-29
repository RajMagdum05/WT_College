/* 
1. diff between arrow function and simple function
2. What is "this" keyword why we use in arrow and simple function ,if not why?
3. Write a code for two arrow function with two example
4. write code for switch case in js
5. How to use truthy and falsy values in js
6. How to use ternary operator in js
7. Write code for how to use loops in array 
8. Diff between forIn and forOf 
9. How to use filter and map function in js
10. How to use reduce method or function in js
*/

// ================= ACTIVITY 1 =================
console.log("===== Activity 1 : Functions =====");
document.writeln("<h3>Activity 1 : Functions</h3>");

// Simple function
function add1(a, b) {
  return a + b;
}
console.log("5 + 2 =", add1(5, 2));
document.writeln("5 + 2 = " + add1(5, 2) + "<br>");

// Arrow function
const add2 = (a, b) => a + b;
console.log("10 + 20 =", add2(10, 20));
document.writeln("10 + 20 = " + add2(10, 20) + "<br><br>");

// ================= ACTIVITY 2 =================
console.log("\n===== Activity 2 : this Keyword =====");
document.writeln("<h3>Activity 2 : this Keyword</h3>");

// Regular function
const user1 = {
  name: "Tahir",
  greet: function () {
    console.log("Hello " + this.name);
    document.writeln("Regular Function → Hello " + this.name + "<br>");
  },
};
user1.greet();

// Arrow function
const user2 = {
  name: "Tahir",
  greet: () => {
    console.log("Hello " + this.name);
    document.writeln("Arrow Function → Hello " + this.name + "<br>");
  },
};
user2.greet();

document.writeln("<br>");

// ================= ACTIVITY 3 =================
console.log("\n===== Activity 3 : Arrow Functions =====");
document.writeln("<h3>Activity 3 : Arrow Functions</h3>");

const isEven = (num1) => {
  return num1 % 2 == 0;
};

console.log("Is 5 Even:", isEven(5));
console.log("Is 8 Even:", isEven(8));

document.writeln("Is 5 Even: " + isEven(5) + "<br>");
document.writeln("Is 8 Even: " + isEven(8) + "<br>");

const square = (num2) => {
  return num2 * num2;
};

console.log("Square of 2:", square(2));
console.log("Square of 7:", square(7));

document.writeln("Square of 2: " + square(2) + "<br>");
document.writeln("Square of 7: " + square(7) + "<br><br>");

// ================= ACTIVITY 4 =================
console.log("\n===== Activity 4 : Switch Case =====");
document.writeln("<h3>Activity 4 : Switch Case</h3>");

let day = 2;

switch (day) {
  case 1:
    console.log("Monday");
    document.writeln("Monday<br>");
    break;
  case 2:
    console.log("Tuesday");
    document.writeln("Tuesday<br>");
    break;
  case 3:
    console.log("Wednesday");
    document.writeln("Wednesday<br>");
    break;
  case 4:
    console.log("Thursday");
    document.writeln("Thursday<br>");
    break;
  case 5:
    console.log("Friday");
    document.writeln("Friday<br>");
    break;
  case 6:
    console.log("Saturday");
    document.writeln("Saturday<br>");
    break;
  case 7:
    console.log("Sunday");
    document.writeln("Sunday<br>");
    break;
  default:
    console.log("Invalid day");
    document.writeln("Invalid day<br>");
}
document.writeln("<br>");

// ================= ACTIVITY 5 =================
console.log("\n===== Activity 5 : Truthy & Falsy =====");
document.writeln("<h3>Activity 5 : Truthy & Falsy</h3>");

let name = "";

if (name) {
  console.log(name);
  document.writeln(name + "<br>");
} else {
  console.log("Name is empty");
  document.writeln("Name is empty<br>");
}

let value = null;
if (value) {
  console.log("Value exists");
  document.writeln("Value exists<br>");
} else {
  document.writeln("Value is null (Falsy)<br>");
}

document.writeln("<br>");

// ================= ACTIVITY 6 =================
console.log("\n===== Activity 6 : Ternary Operator =====");
document.writeln("<h3>Activity 6 : Ternary Operator</h3>");

let age = 18;
let result = age >= 18 ? "Adult" : "Minor";

console.log("Result:", result);
document.writeln("Result: " + result + "<br><br>");

// ================= ACTIVITY 7 =================
console.log("\n===== Activity 7 : Loop through Array =====");
document.writeln("<h3>Activity 7 : Loop through Array</h3>");

let fruits = ["Apple", "Banana", "Mango", "Watermelon"];

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
  document.writeln(fruits[i] + "<br>");
}
document.writeln("<br>");

// ================= ACTIVITY 8 =================
console.log("\n===== Activity 8 : for-in & for-of =====");
document.writeln("<h3>Activity 8 : for-in & for-of</h3>");

let colors = ["Red", "Blue", "Green"];

document.writeln("for-in (Index):<br>");
for (let index in colors) {
  console.log(index);
  document.writeln(index + "<br>");
}

document.writeln("for-of (Values):<br>");
for (let color of colors) {
  console.log(color);
  document.writeln(color + "<br>");
}

document.writeln("<br>");

// ================= ACTIVITY 9 =================
console.log("\n===== Activity 9 : map() & filter() =====");
document.writeln("<h3>Activity 9 : map() & filter()</h3>");

let numbers1 = [1, 2, 3, 4];
let result2 = numbers1.map((num) => num * 2);

console.log("Map Result:", result2);
document.writeln("Map Result: " + result2 + "<br>");

let numbers2 = [1, 2, 3, 4, 5, 6];
let evenNumbers = numbers2.filter((num) => num % 2 == 0);

console.log("Filtered Even Numbers:", evenNumbers);
document.writeln("Filtered Even Numbers: " + evenNumbers + "<br>");
