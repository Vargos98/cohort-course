// --- JavaScript Object Methods Example ---
// Demonstrates useful built-in object methods in JavaScript

function objectMethods(obj) {
  console.log("\n--- Working with Object:", obj, "---");

  // Get all keys of the object
  let keys = Object.keys(obj);
  console.log("After Object.keys():", keys);

  // Get all values of the object
  let values = Object.values(obj);
  console.log("After Object.values():", values);

  // Get all key-value pairs as arrays
  let entries = Object.entries(obj);
  console.log("After Object.entries():", entries);

  // Check if object has a property named "property"
  let hasProp = obj.hasOwnProperty("property");
  console.log("After hasOwnProperty('property'):", hasProp);

  // Create a new object by copying and adding a new property
  let newObj = Object.assign({}, obj, { newProperty: "newValue" });
  console.log("After Object.assign():", newObj);
}

// --- Example Usage ---
const sampleObject = {
  key1: "value1",
  key2: "value2",
  key3: "value3",
};

objectMethods(sampleObject);

// 🧠 Summary of Methods:
// Object.keys(obj) → Returns an array of all keys.

// Object.values(obj) → Returns an array of all values.

// Object.entries(obj) → Returns an array of [key, value] pairs.

// obj.hasOwnProperty('key') → Checks if the key exists directly on the object.

// Object.assign({}, obj, newProps) → Creates a shallow copy of the object and adds/overwrites properties.
