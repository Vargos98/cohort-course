// --- JavaScript JSON Methods Example ---
// Demonstrates how to parse a JSON string and convert a JS object back to a string

function jsonMethods(jsonString) {
  // Print the original JSON string
  console.log("Original JSON String:", jsonString);

  // --- Parse JSON string into JavaScript object ---
  let parsedObject = JSON.parse(jsonString);
  console.log("After JSON.parse():", parsedObject);

  // Accessing a nested property (optional)
  console.log("Access nested value:", parsedObject.nested.nestedKey);

  // --- Convert JavaScript object back into a JSON string ---
  let jsonStringified = JSON.stringify(parsedObject);
  console.log("After JSON.stringify():", jsonStringified);
}

// --- Example Usage ---
const sampleJSONString =
  '{"key": "value", "number": 42, "nested": {"nestedKey": "nestedValue"}}';

jsonMethods(sampleJSONString);


// ✅ Key Concepts Covered:
// JSON.parse(): Converts a JSON-formatted string into a usable JavaScript object.

// JSON.stringify(): Converts a JavaScript object back into a JSON string.

// Access nested values: You can access properties using dot notation like obj.nested.key.