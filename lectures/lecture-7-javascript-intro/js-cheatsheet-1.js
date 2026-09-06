/**
 * ==========================================
 * JAVASCRIPT CORE CHEATSHEET - 1
 * ==========================================
 * Topics covered:
 * 1. Keywords & Statements
 * 2. Data Types & Primitive Types
 * 3. Operators
 * 4. Conditional Statements
 */

// ==========================================
// 1. STATEMENTS & KEYWORDS
// ==========================================
// Keywords: reserved words with special meanings (let, const, var, function, if, etc.)
// Statements: instructions executed by the JavaScript engine (ending with semicolons)

let variableStatement = "This is a statement."; // Declaration & assignment statement
const MAX_VALUE = 100; // Constant declaration keyword

function demonstrateKeywords() {
  var globalScopedVariable = "Older ES5 variable keyword";
  return globalScopedVariable; // 'return' keyword exits a function
}

// ==========================================
// 2. DATA TYPES & PRIMITIVE TYPES
// ==========================================
// JavaScript has 7 Primitive types (immutable, passed by value) and 1 Reference type (Objects).

// --- Primitive Types ---
let numberPrimitive = 42; // Number (handles integers and floats like 3.14)
let stringPrimitive = "Hello, JS!"; // String
let booleanPrimitive = true; // Boolean (true or false)
let undefinedPrimitive; // Undefined (variable declared but not assigned)
let nullPrimitive = null; // Null (intentional absence of value)
let symbolPrimitive = Symbol("uniqueId"); // Symbol (unique identifier)
let bigIntPrimitive = 9007199254740991n; // BigInt (integers beyond Number limits)

// --- Non-Primitive / Reference Type ---
let objectType = {
  // Object
  name: "JavaScript",
  yearCreated: 1995,
  isAwesome: true,
};

let arrayType = ["HTML", "CSS", "JS"]; // Array (special type of Object)

// ==========================================
// 3. OPERATORS
// ==========================================

// --- Arithmetic Operators ---
let sum = 10 + 5; // Addition: 15
let product = 4 * 3; // Multiplication: 12
let remainder = 10 % 3; // Modulus (Remainder): 1
let exponent = 2 ** 3; // Exponentiation: 8

// --- Assignment & Unary Operators ---
let score = 10;
score += 5; // Compound addition (score = score + 5): 15
score++; // Increment (score = score + 1): 16

// --- Comparison Operators ---
let isEqualLoose = 5 == "5"; // Strict vs Loose equality (true: converts types)
let isEqualStrict = 5 === "5"; // Strict equality (false: checks value AND type)
let isGreater = 10 > 5; // Greater than: true

// --- Logical Operators ---
let hasAccess = true;
let isAdmin = false;

let fullAuth = hasAccess && isAdmin; // Logical AND (both must be true): false
let anyAuth = hasAccess || isAdmin; // Logical OR (at least one true): true
let deniedAuth = !hasAccess; // Logical NOT (inverts boolean): false

// --- Ternary Operator (Conditional Operator) ---
let userAge = 20;
let canVote = userAge >= 18 ? "Eligible to vote" : "Too young to vote";

// ==========================================
// 4. JAVASCRIPT CONDITIONAL STATEMENTS
// ==========================================

// --- if...else if...else ---
let temperature = 25;

if (temperature > 30) {
  console.log("It's a hot day!");
} else if (temperature >= 20 && temperature <= 30) {
  console.log("Weather is pleasant.");
} else {
  console.log("It's cold outside.");
}

// --- switch Statement ---
let userRole = "editor";

switch (userRole) {
  case "admin":
    console.log("Access Granted: Full administrative controls.");
    break; // Exits the switch statement
  case "editor":
    console.log("Access Granted: Edit and publish content.");
    break;
  case "viewer":
    console.log("Access Granted: Read-only access.");
    break;
  default:
    console.log("Access Denied: Invalid role.");
    break;
}

// ==========================================
// CONSOLE VERIFICATION OUTPUT
// ==========================================
console.log("\n--- Primitive Types Output ---");
console.log("Number:", numberPrimitive, "| Type:", typeof numberPrimitive);
console.log("String:", stringPrimitive, "| Type:", typeof stringPrimitive);
console.log("Boolean:", booleanPrimitive, "| Type:", typeof booleanPrimitive);
console.log(
  "Undefined:",
  undefinedPrimitive,
  "| Type:",
  typeof undefinedPrimitive,
);
console.log("Null:", nullPrimitive, "| Type:", typeof nullPrimitive); // Note: returns 'object' due to legacy JS behavior

console.log("\n--- Comparison Output ---");
console.log("5 == '5':", isEqualLoose);
console.log("5 === '5':", isEqualStrict);
console.log("Ternary Result:", canVote);
