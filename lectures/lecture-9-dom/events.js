const logBox = document.querySelector("#log");

// Helper function to update output screen
function logMessage(text) {
  logBox.textContent = text;
}

// =========================================================
// Method 1: Inline Event Handler
// Note: logMessage must remain in global scope so the
// onclick="logMessage(...)" attribute in HTML can access it.
// =========================================================

// =========================================================
// Method 2: DOM Element Property (Function Assignment)
// =========================================================
const propertyBtn = document.querySelector("#propertyBtn");

// Assigning a function directly to the element's onclick property
propertyBtn.onclick = function () {
  logMessage("Triggered by: element.onclick property handler");
};

// NOTE: Overwriting this property will replace the handler above!
// propertyBtn.onclick = function() { console.log('Replaced!'); };

// =========================================================
// Method 3: addEventListener() Method (Recommended)
// =========================================================
const listenerBtn = document.querySelector("#listenerBtn");

// First event listener
listenerBtn.addEventListener("click", () => {
  logMessage("Triggered by: addEventListener() [Listener 1]");
});

// Second event listener attached to the SAME element and event
listenerBtn.addEventListener("click", () => {
  console.log(
    "addEventListener allows attaching multiple handlers to one event! [Listener 2]",
  );
});
