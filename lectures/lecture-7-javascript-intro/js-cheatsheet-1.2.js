/**
 * ==========================================
 * JAVASCRIPT STRINGS CHEATSHEET
 * ==========================================
 * Topics covered:
 * 1. String Creation & Template Literals
 * 2. String Length & Accessing Characters
 * 3. Searching & Checking Substrings
 * 4. Slicing & Extracting Substrings
 * 5. Transforming Strings (Case, Trim, Replace, Split)
 * 6. Pad, Repeat & Immutability
 */

// ==========================================
// 1. CREATION & TEMPLATE LITERALS
// ==========================================
const singleQuotes = "Hello";
const doubleQuotes = "World";

// Template Literals (ES6) allow string interpolation and multi-line strings
const user = "Alex";
const points = 250;
const greeting = `Welcome back, ${user}! You have ${points * 2} bonus points.`;

const multiLine = `This is line 1.
This is line 2.`;

// --- Console Verification: Section 1 ---
console.log("--- 1. Creation & Template Literals ---");
console.log(greeting);
console.log(multiLine);

// ==========================================
// 2. LENGTH & ACCESSING CHARACTERS
// ==========================================
const str = "JavaScript";

const length = str.length; // 10
const firstChar = str[0]; // "J"
const characterAt = str.charAt(4); // "S"

// Relative indexing with .at() (allows negative values from the end)
const lastChar = str.at(-1); // "t"

// --- Console Verification: Section 2 ---
console.log("\n--- 2. Length & Accessing Characters ---");
console.log("Length:", length);
console.log("First Char:", firstChar);
console.log("Character at index 4:", characterAt);
console.log("Last Char:", lastChar);

// ==========================================
// 3. SEARCHING & CHECKING SUBSTRINGS
// ==========================================
const sentence = "The quick brown fox jumps over the lazy dog";

// Boolean checks
const includesFox = sentence.includes("fox"); // true
const startsWithThe = sentence.startsWith("The"); // true
const endsWithDog = sentence.endsWith("dog"); // true

// Index searching
const indexJumps = sentence.indexOf("jumps"); // 20
const missingIndex = sentence.indexOf("cat"); // -1 (not found)

// --- Console Verification: Section 3 ---
console.log("\n--- 3. Searching & Checking Substrings ---");
console.log("Contains 'fox':", includesFox);
console.log("Starts with 'The':", startsWithThe);
console.log("Ends with 'dog':", endsWithDog);
console.log("Index of 'jumps':", indexJumps);
console.log("Index of 'cat':", missingIndex);

// ==========================================
// 4. SLICING & EXTRACTING SUBSTRINGS
// ==========================================
const phrase = "Frontend Development";

// slice(start, end) — end index is non-inclusive
const part1 = phrase.slice(0, 8); // "Frontend"
const part2 = phrase.slice(9); // "Development" (slices to end)
const fromEnd = phrase.slice(-11); // "Development" (counts back from end)

// substring(start, end) — similar to slice, but handles negative args differently
const sub = phrase.substring(0, 8); // "Frontend"

// --- Console Verification: Section 4 ---
console.log("\n--- 4. Slicing & Extracting Substrings ---");
console.log("Slice (0, 8):", part1);
console.log("Slice (9 to end):", part2);
console.log("Slice from end (-11):", fromEnd);
console.log("Substring (0, 8):", sub);

// ==========================================
// 5. TRANSFORMING STRINGS
// ==========================================

// Changing Case
const upper = "hello".toUpperCase(); // "HELLO"
const lower = "WORLD".toLowerCase(); // "world"

// Trimming Whitespace
const padded = "   clean me up   ";
const trimmed = padded.trim(); // "clean me up"

// Replacing Content
const original = "Java is fun. Java is powerful.";
const replaceFirst = original.replace("Java", "JS"); // "JS is fun. Java is powerful."
const replaceAll = original.replaceAll("Java", "JS"); // "JS is fun. JS is powerful."

// Splitting String into an Array
const csvData = "Apple,Banana,Cherry";
const fruitsArray = csvData.split(","); // ["Apple", "Banana", "Cherry"]

// --- Console Verification: Section 5 ---
console.log("\n--- 5. Transforming Strings ---");
console.log("Upper Case:", upper);
console.log("Lower Case:", lower);
console.log("Trimmed:", `"${trimmed}"`);
console.log("Replace First:", replaceFirst);
console.log("Replace All:", replaceAll);
console.log("Split Array:", fruitsArray);

// ==========================================
// 6. PADDING, REPEATING & IMMUTABILITY
// ==========================================

// Padding (great for formatting numbers/dates)
const minute = "5";
const paddedMinute = minute.padStart(2, "0"); // "05"

// Repeat
const wave = "Bye! ".repeat(3); // "Bye! Bye! Bye! "

// IMMUTABILITY NOTE: String methods never modify the original string;
// they always return a NEW string.
let word = "hello";
word.toUpperCase(); // Unassigned call

let reassignedWord = word.toUpperCase(); // Assigned call

// --- Console Verification: Section 6 ---
console.log("\n--- 6. Padding, Repeating & Immutability ---");
console.log("Padded Minute:", paddedMinute);
console.log("Repeated String:", wave);
console.log("Original 'word' after unassigned call:", word); // "hello"
console.log("Reassigned 'word':", reassignedWord); // "HELLO"
