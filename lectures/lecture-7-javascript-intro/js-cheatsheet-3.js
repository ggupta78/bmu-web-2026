/**
 * ==========================================
 * JAVASCRIPT FUNCTIONS CHEATSHEET
 * ==========================================
 * Topics covered:
 * 1. Declarations vs Expressions
 * 2. Arrow Functions
 * 3. Parameters (Default, Rest)
 * 4. Scope & Closures
 * 5. High-Order Functions & Callbacks
 * 6. Async / Await Functions
 */

// ==========================================
// 1. DECLARATIONS VS EXPRESSIONS
// ==========================================

// Function Declaration (Hoisted: Can be called before it's defined in code)
console.log("--- Basic Operations ---");
console.log("Add:", add(5, 3)); // 8

function add(a, b) {
  return a + b;
}

console.log("Add:", add(4, 5)); // 9

// Function Expression (Not Hoisted: Stored in a variable)
const subtract = function (a, b) {
  return a - b;
};

console.log("Subtract: ", subtract(6, 7));

// ==========================================
// 2. ARROW FUNCTIONS (ES6)
// ==========================================
// Shorter syntax; does NOT bind its own 'this' context.

// Standard Arrow Function
const multiply = (a, b) => {
  return a * b;
};

console.log("Multiply: ", multiply(4, 5));

// Concise Implicit Return (single expression, no braces needed)
const divide = (a, b) => a / b;

console.log("Divide:", divide(10, 2)); // 5

// Single parameter (parentheses are optional)
const square = (x) => x * x;

console.log("Square:", square(4)); // 16

// ==========================================
// 3. PARAMETERS (DEFAULT & REST)
// ==========================================

// Default Parameters (used if argument is omitted or undefined)
function greet(name = "Guest", greeting = "Hello") {
  return `${greeting}, ${name}!`;
}

// Rest Parameters (...args collects remaining arguments into an array)
function sumAll(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

console.log("\n--- Parameters ---");
console.log(greet()); // "Hello, Guest!"
console.log("Sum All:", sumAll(1, 2, 3, 4, 5)); // 15

// ==========================================
// 4. CLOSURES & SCOPE
// ==========================================
// A closure gives an inner function access to an outer function's scope.

function createCounter() {
  let count = 0; // Private variable trapped inside closure

  return {
    increment: () => ++count,
    decrement: () => --count,
    getCount: () => count,
  };
}

const counter = createCounter();

console.log("\n--- Closure Test ---");
console.log("Counter initial:", counter.getCount()); // 0
counter.increment();
counter.increment();
console.log("Counter after increments:", counter.getCount()); // 2

// ==========================================
// 5. HIGHER-ORDER FUNCTIONS & CALLBACKS
// ==========================================
// Functions can be passed as arguments or returned from other functions.

function processArray(arr, callback) {
  const result = [];
  for (let item of arr) {
    result.push(callback(item));
  }
  return result;
}

const numbers = [1, 2, 3, 4];
const doubled = processArray(numbers, (num) => num * 2);

console.log("\n--- Higher-Order Function ---");
console.log("Doubled Array:", doubled); // [2, 4, 6, 8]

// ==========================================
// 6. ASYNCHRONOUS FUNCTIONS (Promises & Async/Await)
// ==========================================

// Simulated async operation returning a Promise
function fetchData(success = true) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (success) {
        resolve({ data: "User payload loaded" });
      } else {
        reject(new Error("Network error"));
      }
    }, 100);
  });
}

// Async/Await syntax
async function loadUserData() {
  try {
    const response = await fetchData(true);
    return response.data;
  } catch (error) {
    console.error("Failed to load:", error.message);
  }
}

// ==========================================
// CONSOLE VERIFICATION OUTPUT
// ==========================================
console.log("\n--- Async Operation ---");
loadUserData().then((result) => console.log("Async Result:", result));
