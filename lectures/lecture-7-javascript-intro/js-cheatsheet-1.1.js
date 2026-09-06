/**
 * ==========================================
 * JAVASCRIPT LOOPS CHEATSHEET
 * ==========================================
 * Topics covered:
 * 1. Traditional for Loop
 * 2. while & do...while Loops
 * 3. for...of Loop (Iterating over collections)
 * 4. for...in Loop (Iterating over object properties)
 * 5. Loop Control: break & continue
 * 6. Array Loop Helper Methods (forEach)
 */

// ==========================================
// 1. TRADITIONAL FOR LOOP
// ==========================================
// Best when you know the exact number of iterations in advance.

console.log("--- 1. Traditional for Loop ---");
for (let i = 0; i < 3; i++) {
  console.log(`Iteration ${i}`);
}

// ==========================================
// 2. WHILE & DO...WHILE LOOPS
// ==========================================

// while: Runs as long as the condition evaluates to true (0 or more times)
console.log("\n--- 2a. while Loop ---");
let count = 3;
while (count > 0) {
  console.log(`Count down: ${count}`);
  count--;
}

// do...while: Always executes AT LEAST ONCE before checking condition
console.log("\n--- 2b. do...while Loop ---");
let number = 5;
do {
  console.log(`Runs once even if condition is false (number = ${number})`);
  number++;
} while (number < 5);

// ==========================================
// 3. FOR...OF LOOP (ES6)
// ==========================================
// Best for iterating over values of iterable objects (Arrays, Strings, Sets, Maps).

console.log("\n--- 3. for...of Loop (Values) ---");
const frameworks = ["React", "Vue", "Svelte"];

for (const framework of frameworks) {
  console.log(`Framework: ${framework}`);
}

// Iterating over characters of a String
for (const char of "JS") {
  console.log(`Char: ${char}`);
}

// ==========================================
// 4. FOR...IN LOOP
// ==========================================
// Best for iterating over enumerable keys/properties of an Object.
// (Avoid using for...in for arrays because order isn't guaranteed).

console.log("\n--- 4. for...in Loop (Keys) ---");
const user = {
  name: "Alice",
  role: "Developer",
  experienceYears: 5,
};

for (const key in user) {
  // Use key to access object properties dynamically
  console.log(`${key}: ${user[key]}`);
}

// ==========================================
// 5. LOOP CONTROL STATEMENTS
// ==========================================

console.log("\n--- 5a. continue Statement ---");
// 'continue' skips the rest of the current iteration and jumps to the next
for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    console.log("Skipping 3...");
    continue;
  }
  console.log(`Number: ${i}`);
}

console.log("\n--- 5b. break Statement ---");
// 'break' terminates the loop immediately
for (let i = 1; i <= 5; i++) {
  if (i === 4) {
    console.log("Found 4! Exiting loop early.");
    break;
  }
  console.log(`Searching... ${i}`);
}

// ==========================================
// 6. ARRAY FUNCTIONAL ITERATION METHOD
// ==========================================
// Array.prototype.forEach() provides a clean functional alternative to loops

console.log("\n--- 6. Array .forEach() Method ---");
const colors = ["Red", "Green", "Blue"];

colors.forEach((color, index) => {
  console.log(`Index ${index}: ${color}`);
});
