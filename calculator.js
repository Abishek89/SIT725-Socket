// calculator.js

// This is the function to evaluate mathematical expressions
function evaluate(expression) {
    try {
        return eval(expression);
    } catch (error) {
        return 'Invalid Expression';
    }
}

// Exporting the function to use it in other files
module.exports = evaluate;

