// --- JavaScript Math Methods Example ---
// Demonstrates various Math methods using a given value

function mathMethods(value) {
  console.log("\n--- Value:", value, "---");

  // Round to nearest integer
  let rounded = Math.round(value);
  console.log("After round():", rounded);

  // Round up to next integer
  let ceiling = Math.ceil(value);
  console.log("After ceil():", ceiling);

  // Round down to previous integer
  let flooring = Math.floor(value);
  console.log("After floor():", flooring);

  // Random number between 0 and 10 (not including 10)
  let randomValue = Math.random();
  console.log("After random() * 10:", randomValue * 10);

  // Find maximum of values
  let maxValue = Math.max(5, 10, 15);
  console.log("After max(5, 10, 15):", maxValue);

  // Find minimum of values
  let minValue = Math.min(5, 10, 15);
  console.log("After min(5, 10, 15):", minValue);

  // Power: value raised to power 2
  let powerOfTwo = Math.pow(value, 2);
  console.log("After pow(value, 2):", powerOfTwo);

  // Square root of value
  let squareRoot = Math.sqrt(value);
  console.log("After sqrt():", squareRoot);
}

// --- Example Usage for Math Methods ---
mathMethods(4.45);
mathMethods(9);
mathMethods(25);


// 🧠 Key Math Methods Recap:
// Math.round() → Rounds to nearest integer

// Math.ceil() → Always rounds up

// Math.floor() → Always rounds down

// Math.random() → Returns a number between 0 and 1

// Math.max() / Math.min() → Returns the highest / lowest number

// Math.pow(a, b) → a raised to the power b

// Math.sqrt(x) → Returns the square root of x