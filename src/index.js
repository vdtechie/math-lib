// index.js

/**
 * Basic Arithmetic Operations Library
 */

const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => {
    if (b === 0) {
        throw new Error("Arithmetic Error: Division by zero is not allowed.");
    }
    return a / b;
};

// Exporting the functions so they can be consumed by other apps
module.exports = {
    add,
    subtract,
    multiply,
    divide
};