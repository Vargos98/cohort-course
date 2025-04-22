// 📘 JavaScript Array Handbook – with Examples & Explanations

// Array methods covered: 
// push(), pop(), shift(), unshift(), splice(), slice(), 
// concat(), forEach(), map(), filter(), reduce(), find(), sort()

// --- push() ---
// Purpose: Adds one or more elements to the end of an array
// Mutates original array ✅
function pushExample(arr, element) {
  console.log("Original Array:", arr); // e.g., [1, 2, 3]

  arr.push(element); // Adds element at the end
  console.log("After push:", arr); // e.g., [1, 2, 3, 4]
}
pushExample([1, 2, 3], 4);


// --- pop() ---
// Purpose: Removes the last element from the array
// Mutates original array ✅
function popExample(arr) {
  console.log("Original Array:", arr); // e.g., [1, 2, 3]

  arr.pop(); // Removes last item
  console.log("After pop:", arr); // e.g., [1, 2]
}
popExample([1, 2, 3]);


// --- shift() ---
// Purpose: Removes the first element from the array
// Mutates original array ✅
function shiftExample(arr) {
  console.log("Original Array:", arr); // e.g., [1, 2, 3]

  arr.shift(); // Removes first item
  console.log("After shift:", arr); // e.g., [2, 3]
}
shiftExample([1, 2, 3]);


// --- unshift() ---
// Purpose: Adds one or more elements to the beginning of the array
// Mutates original array ✅
function unshiftExample(arr, element) {
  console.log("Original Array:", arr); // e.g., [1, 2, 3]

  arr.unshift(element); // Adds element at the start
  console.log("After unshift:", arr); // e.g., [0, 1, 2, 3]
}
unshiftExample([1, 2, 3], 0);


// --- concat() ---
// Purpose: Merges two or more arrays into a new array
// Does NOT mutate original array ❌
function concatExample(arr1, arr2) {
  console.log("Original Arrays:", arr1, arr2); // e.g., [1, 2, 3], [4, 5, 6]

  let arr3 = arr1.concat(arr2); // Combines both arrays
  console.log("After concat:", arr3); // [1, 2, 3, 4, 5, 6]
}
concatExample([1, 2, 3], [4, 5, 6]);


// --- forEach() ---
// Purpose: Executes a provided function once for each array element
// No return value, does not create a new array
function forEachExample(arr) {
  console.log("Original Array:", arr); // e.g., [1, 2, 3]

  arr.forEach(function(item, index) {
    console.log("Item:", item, "Index:", index);
    // Logs each item with its index
  });
}
forEachExample([1, 2, 3]);


// --- map() ---
// Purpose: Returns a new array with the result of applying a function to each element
// Does NOT mutate original array ❌
function mapExample(arr) {
  console.log("Original Array:", arr); // e.g., [1, 2, 3]

  let newArr = arr.map(function(item) {
    return item * 2; // Transform logic
  });
  console.log("After map:", newArr); // [2, 4, 6]
}
mapExample([1, 2, 3]);


// --- filter() ---
// Purpose: Creates a new array with elements that pass a given condition
// Does NOT mutate original array ❌
function filterExample(arr) {
  console.log("Original Array:", arr); // e.g., [1, 2, 3, 4, 5]

  let newArr = arr.filter(function(item) {
    return item > 3; // Condition
  });
  console.log("After filter:", newArr); // [4, 5]
}
filterExample([1, 2, 3, 4, 5]);


// --- find() ---
// Purpose: Returns the first element that satisfies the provided testing function
// Stops after finding first match
function findExample(arr) {
  console.log("Original Array:", arr); // e.g., [1, 2, 3, 4, 5]

  let found = arr.find(function(item) {
    return item > 3; // First match > 3
  });
  console.log("After find:", found); // 4
}
findExample([1, 2, 3, 4, 5]);


// --- sort() ---
// Purpose: Sorts array elements in place
// Mutates original array ✅
// ⚠️ Default sort is lexicographical (alphabetical for strings)
function sortExample(arr) {
  console.log("Original Array:", arr); // e.g., [5, 2, 3, 4, 1]

  arr.sort(function(a, b) {
    return a - b; // Numeric ascending sort
  });
  console.log("After sort:", arr); // [1, 2, 3, 4, 5]
}
sortExample([5, 2, 3, 4, 1]);
