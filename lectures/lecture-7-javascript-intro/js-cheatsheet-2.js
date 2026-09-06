/**
 * ==========================================
 * JAVASCRIPT ARRAYS CHEATSHEET
 * ==========================================
 * Topics covered:
 * 1. Array Creation & Accessing Elements
 * 2. Basic Mutation Methods (Push, Pop, Shift, Unshift)
 * 3. Search & Inspection Methods
 * 4. Transformation Methods (Slice, Splice, Concat, Flat)
 * 5. Iteration & Higher-Order Methods (Map, Filter, Reduce)
 * 6. ES6+ Features (Destructuring, Spread Operator)
 */

// ==========================================
// 1. CREATION & ACCESS
// ==========================================
const fruits = ["Apple", "Banana", "Cherry"];

// Accessing by index (0-indexed)
const firstFruit = fruits[0]; // "Apple"
const totalCount = fruits.length; // 3

// Modern relative indexing (.at() allows negative indexes from the end)
const lastFruit = fruits.at(-1); // "Cherry"

console.log("--- Creation & Indexing ---");
console.log("First:", firstFruit, "| Last:", lastFruit);

// ==========================================
// 2. ADDING / REMOVING ELEMENTS (MUTATING)
// ==========================================
const stack = ["A", "B"];

stack.push("C"); // Adds to END: ["A", "B", "C"]
stack.pop(); // Removes from END: returns "C" -> ["A", "B"]

stack.unshift("Z"); // Adds to START: ["Z", "A", "B"]
stack.shift(); // Removes from START: returns "Z" -> ["A", "B"]

// ==========================================
// 3. SEARCHING & INSPECTION
// ==========================================
const numbers = [10, 20, 30, 40, 50];

// Basic searching
const containsThirty = numbers.includes(30); // true
const indexOfForty = numbers.indexOf(40); // 3

// Condition-based searching
const firstLargeNumber = numbers.find((num) => num > 25); // Returns 30 (first match)
const indexLargeNumber = numbers.findIndex((num) => num > 25); // Returns 2

// Testing conditions
const hasEven = numbers.some((num) => num % 2 === 0); // true (at least one matches)
const allEven = numbers.every((num) => num % 2 === 0); // true (all match)

console.log("\n--- Searching ---");
console.log("Found > 25:", firstLargeNumber);
console.log("All numbers even?:", allEven);

// ==========================================
// 4. TRANSFORMATION & SPLICING
// ==========================================

// slice(start, end): Non-mutating slice (end index is non-inclusive)
const letters = ["a", "b", "c", "d", "e"];
const middleSlice = letters.slice(1, 4); // ["b", "c", "d"]

// splice(start, deleteCount, item1, item2): Mutating insert/delete
const items = ["a", "b", "d"];
items.splice(2, 0, "c"); // Inserts "c" at index 2 without deleting -> ["a", "b", "c", "d"]

// Flattening nested arrays
const nested = [1, [2, 3], [[4]]];
const flatOneLevel = nested.flat(2); // [1, 2, 3, 4]

// ==========================================
// 5. HIGHER-ORDER ITERATION METHODS (CORE)
// ==========================================
const inventory = [
  { id: 1, name: "Laptop", price: 1000, category: "Electronics" },
  { id: 2, name: "Book", price: 20, category: "Media" },
  { id: 3, name: "Phone", price: 500, category: "Electronics" },
];

// forEach: Simple iteration (no return value)
inventory.forEach((item) => console.log(`Item: ${item.name}`));

// map: Transforms each element into a NEW array
const productNames = inventory.map((item) => item.name);
// Result: ["Laptop", "Book", "Phone"]

// filter: Returns NEW array with elements that pass a test
const electronicsOnly = inventory.filter(
  (item) => item.category === "Electronics",
);
// Result: Objects for Laptop & Phone

// reduce: Accumulates array values into a SINGLE result (number, object, array, etc.)
const totalPrice = inventory.reduce(
  (accumulator, item) => accumulator + item.price,
  0,
);
// Result: 1520

console.log("\n--- Functional Methods ---");
console.log("Product Names (map):", productNames);
console.log("Electronics (filter):", electronicsOnly.length, "items found");
console.log("Total Cart Price (reduce):", `$${totalPrice}`);

// ==========================================
// 6. ES6+ DESTRUCTURING & SPREAD
// ==========================================

// Array Destructuring
const colors = ["Red", "Green", "Blue"];
const [primary, secondary] = colors; // primary = "Red", secondary = "Green"

// Spread Operator (...)
const group1 = [1, 2];
const group2 = [3, 4];
const combined = [...group1, ...group2, 5]; // [1, 2, 3, 4, 5]

// ==========================================
// CONSOLE VERIFICATION OUTPUT
// ==========================================
console.log("\n--- Destructuring & Spread ---");
console.log("Destructure:", primary, secondary);
console.log("Spread Combine:", combined);
