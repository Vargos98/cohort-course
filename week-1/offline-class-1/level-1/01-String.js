// // 📘 String Handbook – Play and Learn by Doing!

// // Method: length
// // Description: Returns the number of characters in a string.
// // Requires: 1 string
// // Output Example: "Hello World" → Length: 11
// function getLength(str) {
//   console.log("Original String:", str);
//   console.log("Length:", str.length); // 11
// }
// getLength("Hello World");

// // Method: indexOf()
// // Description: Returns the index of the first occurrence of a substring. Returns -1 if not found.
// // Requires: 1 string to search in, 1 target substring
// // Output Example: "Hello World", "World" → Index: 6
// function findIndexOf(str, target) {
//   console.log("Original String:", str);
//   console.log("Index:", str.indexOf(target)); // 6
// }
// findIndexOf("Hello World", "World");

// // Method: lastIndexOf()
// // Description: Returns the index of the last occurrence of a substring. Returns -1 if not found.
// // Requires: 1 string to search in, 1 target substring
// // Output Example: "Hello World World", "World" → Index: 12
// function findLastIndexOf(str, target) {
//   console.log("Original String:", str);
//   console.log("Index:", str.lastIndexOf(target)); // 12
// }
// findLastIndexOf("Hello World World", "World");

// // Method: slice()
// // Description: Extracts part of a string from 'start' to 'end' (end not included).
// // Requires: 1 string, start index, end index
// // Output Example: "Hello World", 0, 5 → "Hello"
// function getSlice(str, start, end) {
//   console.log("Original String:", str);
//   console.log("After slice:", str.slice(start, end)); // "Hello"
// }
// getSlice("Hello World", 0, 5);

// // Method: substring()
// // Description: Similar to slice but does not support negative indices.
// // Requires: 1 string, start index, end index
// // Output Example: "Hello World", 0, 5 → "Hello"
// function getSubstring(str, start, end) {
//   console.log("Original String:", str);
//   console.log("After substring:", str.substring(start, end)); // "Hello"
// }
// getSubstring("Hello World", 0, 5);

// // Method: replace()
// // Description: Replaces the first occurrence of a substring with another string.
// // Requires: 1 string, target substring, replacement string
// // Output Example: "Hello World", "World", "JavaScript" → "Hello JavaScript"
// function replaceString(str, target, replacement) {
//   console.log("Original String:", str);
//   console.log("After replace:", str.replace(target, replacement)); // "Hello JavaScript"
// }
// replaceString("Hello World", "World", "JavaScript");

// // Method: split()
// // Description: Splits a string into an array of substrings using the separator.
// // Requires: 1 string, separator (string or character)
// // Output Example: "Hello World", " " → ["Hello", "World"]
// function splitString(str, separator) {
//   console.log("Original String:", str);
//   console.log("After split:", str.split(separator)); // ["Hello", "World"]
// }
// splitString("Hello World", " ");

// // Method: trim()
// // Description: Removes whitespace from both ends of a string.
// // Requires: 1 string
// // Output Example: " Hello World " → "Hello World"
// function trimString(str) {
//   console.log("Original String:", str);
//   console.log("After trim:", str.trim()); // "Hello World"
// }
// trimString(" Hello World ");

// // Method: toUpperCase()
// // Description: Converts the entire string to uppercase.
// // Requires: 1 string
// // Output Example: "Hello World" → "HELLO WORLD"
// function toUpper(str) {
//   console.log("Original String:", str);
//   console.log("After toUpperCase:", str.toUpperCase()); // "HELLO WORLD"
// }
// toUpper("Hello World");

// // Method: toLowerCase()
// // Description: Converts the entire string to lowercase.
// // Requires: 1 string
// // Output Example: "Hello World" → "hello world"
// function toLower(str) {
//   console.log("Original String:", str);
//   console.log("After toLowerCase:", str.toLowerCase()); // "hello world"
// }
// toLower("Hello World");

let numbers = [1, 2, 3, 4, 5];
let sum = 0;

numbers.forEach(num =>{
  if(num%2 === 0){
    sum +=num;
}})

console.log(sum)
