// this with traditional functions
const btnTraditional = document.querySelector("#btnTraditional");

btnTraditional.addEventListener("click", function (event) {
  console.log(this); // Logs: <button id="btnTraditional">
  console.log(event); // Logs the event object

  // Modifying element directly via 'this'
  this.style.backgroundColor = "blue";
  this.style.color = "white";
  this.textContent = "Clicked Traditional!";
});

// this with Arrow function and event object
const btnArrow = document.querySelector("#btnArrow");

btnArrow.addEventListener("click", (event) => {
  console.log(this); // Logs: Window (or undefined in strict mode / modules)

  // 'this.style' will throw an error!
  // Use event.currentTarget instead:
  event.currentTarget.style.backgroundColor = "green";
  event.currentTarget.style.color = "white";
});

//event.currentTarget vs event.target
const list = document.querySelector("ul");

list.addEventListener("click", function (event) {
  console.log(this); // <ul> (element with the listener)

  console.log(event.currentTarget); // <ul> (element with the listener)
  console.log(event.target); // <li> (the specific item that was clicked)
  console.log(event); // This will show event.currentTarget as null as it only
  // has a value while event is active, so use the below code to store it

  // const ul = event.currentTarget;
  // console.log(ul);
});
