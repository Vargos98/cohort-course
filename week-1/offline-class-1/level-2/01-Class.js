// --- Animal Class Example ---
// Demonstrates the use of classes and constructors in JavaScript

class Animal {
  // Constructor runs when a new object is created using the class
  constructor(name, legCount) {
    this.name = name;           // Sets the animal's name (e.g., "Dog")
    this.legCount = legCount;   // Sets how many legs the animal has (e.g., 4)
  }

  // Method to describe the animal
  describe() {
    // Returns a string like "Dog has 4 legs"
    return `${this.name} has ${this.legCount} legs`;
  }
}

// --- Example Usage ---
const dog = new Animal("Dog", 4);
console.log(dog.describe()); // Output: Dog has 4 legs

const spider = new Animal("Spider", 8);
console.log(spider.describe()); // Output: Spider has 8 legs


// 🧠 Concepts Covered:
// class: ES6 syntax to define blueprints for objects.

// constructor(): Special method used for initializing new objects.

// this: Refers to the current instance.

// Method describe(): Attached to the prototype, reusable for all instances.