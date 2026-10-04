// A. Selecting elements
// Traditional ways to select elements
const mainHeading = document.getElementById("main-heading");
const allIntroClasses = document.getElementsByClassName("intro");
const allParagraphs = document.getElementsByTagName("p");
const userInputs = document.getElementsByName("email");

console.log(mainHeading);
console.log(allIntroClasses);
console.log(allParagraphs);
console.log(userInputs);

// Modern ways to select elements
const mainHeadingNew = document.querySelector("#main-heading");
const allIntroClassesNew = document.querySelectorAll(".intro");
const allParagraphsNew = document.querySelectorAll("p");
const userInputsNew = document.querySelectorAll("[name='email']");

console.log(mainHeadingNew);
console.log(allIntroClassesNew[0]);
console.log(allParagraphsNew[0]);
console.log(userInputsNew[0]);

// B. Manipulating content and attributes
const h1 = document.querySelector("#main-heading");

// 1. Setting safe text (HTML tags are treated as literal text)
h1.textContent = "Hello <strong>World</strong>!";
// Output on page: Hello <strong>World</strong>!

// 2. Rendering rich HTML markup
h1.innerHTML = "Hello <strong>World</strong>!";
// Output on page: Hello World! (with bold "World")

// 3. Content reset
h1.innerText = "Hello World!";

// Using get, set and remove Attribute methods
const link = document.querySelector("#mdn-link");

// Check if an attribute exists
if (link.hasAttribute("href")) {
  // Read attribute value
  console.log(link.getAttribute("href"));
}

// Set or modify an attribute
link.setAttribute(
  "href",
  "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
);
link.setAttribute("target", "_blank");

// Remove an attribute
link.removeAttribute("title");

// Direct property manipulation
link.href = "https://developer.mozilla.org/en-US/";
link.title = "Web Dev Documentation";
link.target = "_self";

// C. Working with CSS classes

// Add classes
link.classList.add("custom-link", "hidden");

// Remove classes
link.classList.remove("hidden");

// Toggle class (adds if missing, removes if present)
link.classList.toggle("hidden");

// Check if a class exists
if (link.classList.contains("hidden")) {
  console.log("hidden class is present!");
}

// Replace one class with another
link.classList.replace("hidden", "visible");

// Set individual inline styles
link.style.display = "block";
link.style.color = "#571fbd";
link.style.fontSize = "20px";

// Clear an inline style to revert to stylesheet rules
link.style = "";
