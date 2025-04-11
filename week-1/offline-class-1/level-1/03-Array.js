// Array handbook with explanations

// Array methods: push(), pop(), shift(), unshift(), splice(), slice(),
// concat(), forEach(), map(), filter(), reduce(), find(), sort()

// --- push() ---
// Adds an element to the end of the array
function pushExample(arr, element) {
  console.log("Original Array:", arr); // [1, 2, 3]

  arr.push(element); // Adds 4 to the end
  console.log("After push:", arr); // [1, 2, 3, 4]
}
pushExample([1, 2, 3], 4);

// --- pop() ---
// Removes the last element of the array
function popExample(arr) {
  console.log("Original Array:", arr); // [1, 2, 3]

  arr.pop(); // Removes 3
  console.log("After pop:", arr); // [1, 2]
}
popExample([1, 2, 3]);

// --- shift() ---
// Removes the first element of the array
function shiftExample(arr) {
  console.log("Original Array:", arr); // [1, 2, 3]

  arr.shift(); // Removes 1
  console.log("After shift:", arr); // [2, 3]
}
shiftExample([1, 2, 3]);

// --- unshift() ---
// Adds an element at the beginning of the array
function unshiftExample(arr, element) {
  console.log("Original Array:", arr); // [1, 2, 3]

  arr.unshift(element); // Adds 0 to the front
  console.log("After unshift:", arr); // [0, 1, 2, 3]
}
unshiftExample([1, 2, 3], 0);

// --- concat() ---
// Merges two arrays and returns a new array (originals not mutated)
function concatExample(arr1, arr2) {
  console.log("Original Arrays:", arr1, arr2); // [1, 2, 3] and [4, 5, 6]

  let arr3 = arr1.concat(arr2); // New array: [1, 2, 3, 4, 5, 6]
  console.log("After concat:", arr3);
}
concatExample([1, 2, 3], [4, 5, 6]);

// --- forEach() ---
// Executes a function on each array element (does not return a new array)
function forEachExample(arr) {
  console.log("Original Array:", arr); // [1, 2, 3]

  arr.forEach(function(item, index) {
    console.log("Item:", item, "Index:", index);
    // Logs: 1 0
    //       2 1
    //       3 2
  });
}
forEachExample([1, 2, 3]);

// --- map() ---
// Returns a new array with the results of applying a function to each element
function mapExample(arr) {
  console.log("Original Array:", arr); // [1, 2, 3]

  let newArr = arr.map(function(item) {
    return item * 2; // Each element multiplied by 2
  });
  console.log("After map:", newArr); // [2, 4, 6]
}
mapExample([1, 2, 3]);

// --- filter() ---
// Returns a new array with only elements that pass the test
function filterExample(arr) {
  console.log("Original Array:", arr); // [1, 2, 3, 4, 5]

  let newArr = arr.filter(function(item) {
    return item > 3; // Keep items > 3
  });
  console.log("After filter:", newArr); // [4, 5]
}
filterExample([1, 2, 3, 4, 5]);

// --- find() ---
// Returns the first element that matches the condition
function findExample(arr) {
  console.log("Original Array:", arr); // [1, 2, 3, 4, 5]

  let found = arr.find(function(item) {
    return item > 3; // Find first item > 3
  });
  console.log("After find:", found); // 4
}
findExample([1, 2, 3, 4, 5]);

// --- sort() ---
// Sorts the array (by default lexicographically, so provide compare function for numbers)
function sortExample(arr) {
  console.log("Original Array:", arr); // [5, 2, 3, 4, 1]

  arr.sort(function(a, b) {
    return a - b; // Ascending numerical sort
  });
  console.log("After sort:", arr); // [1, 2, 3, 4, 5]
}
sortExample([5, 2, 3, 4, 1]);
