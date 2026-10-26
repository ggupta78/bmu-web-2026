// ==========================================
// 1. A JSON String (Raw Data)
// ==========================================
// JSON keys must use double quotes ("key"), and the entire JSON
// payload is treated as a string in JavaScript.
const jsonString = `{
  "id": 101,
  "name": "Jane Doe",
  "isSubscriber": true,
  "skills": ["JavaScript", "HTML", "CSS"],
  "profile": {
    "role": "Developer",
    "location": "San Francisco"
  }
}`;

console.log("Raw JSON string type:", typeof jsonString); // "string"
console.log(jsonString);

// ==========================================
// 2. Deserialization: JSON.parse()
// ==========================================
// Convert the JSON string into a usable JavaScript Object.
const userObject = JSON.parse(jsonString);

console.log("Parsed JS object type:", typeof userObject); // "object"

// You can now access properties directly using dot or bracket notation:
console.log("User Name:", userObject.name); // "Jane Doe"
console.log("First Skill:", userObject.skills[0]); // "JavaScript"
console.log("Role:", userObject.profile.role); // "Developer"

// Modifying the JavaScript object
userObject.skills.push("JSON");
userObject.isSubscriber = false;
userObject.email = "jane@doe.org";

// ==========================================
// 3. Serialization: JSON.stringify()
// ==========================================
// Convert the modified JavaScript object back into a JSON string
// (e.g., to send over a network API or save to LocalStorage).

// Optional: The second parameter (null) is for replacer functions,
// and the third parameter (2) adds indentation/formatting for readability.
const updatedJsonString = JSON.stringify(userObject, null, 2);

console.log("Updated JSON String:\n", updatedJsonString);
