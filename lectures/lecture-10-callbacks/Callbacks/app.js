// 1. Synchronous Callbacks
function processUser(name, callback) {
  console.log(`Processing ${name}...`);
  callback(name);
}

//callback function
const logGVar = function logGreeting(user) {
  console.log(`Hello, ${user}!`);
};

// Passing logGreeting as a callback
processUser("Alice", logGVar);

// 1.1 Built-in Callbacks
const numbers = [1, 2, 3, 4];

// Arrow function used as an inline callback
const doubled = numbers.map((num) => num * 2);
console.log(doubled); // [2, 4, 6, 8]

const squared = (num) => num * num;
console.log(numbers.map(squared));

// 2. Asynchronous Callbacks

console.log("Sending request to server!");

const asyncCallback = () => {
  console.log("Here is your data from the server...");
};

setTimeout(asyncCallback, 3000);

console.log("I AM AT THE END OF THE FILE!");
