function factorial(n) {
    // Base case: if n is 0 or 1, return 1 (factorial of 0 and 1 is 1)
    if (n === 0 || n === 1) {
        return 1;
    } 
    // Recursive case: n * factorial(n - 1)
    // Here, we recursively call factorial with n - 1 until we reach the base case
    else {
        return n * factorial(n - 1);
    }
}

// Test the function with different inputs
const inputs = [0, 1, 2, 3, 4, 5];
for (const input of inputs) {
    console.log(`Factorial of ${input} is ${factorial(input)}`);
}