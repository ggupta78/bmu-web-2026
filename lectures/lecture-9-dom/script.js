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
