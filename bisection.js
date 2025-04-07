// bisection method for this equation
// Example function: x^3 - x - 2 
// find the root for this function


function f(x) {
    return x * x * x - x - 2;
}
// Bisection Method function using for loop
function bisection(a, b) {
    // Using a for loop
    for (let i = 0; (b - a) >= 0.01; i++) {
        // Find the middle point
        let c = (a + b) / 2;
        // Decide which side to continue with
        if (f(c) * f(a) < 0) { b = c; }
        else { a = c; }
        // Print the current estimate of the root after each iteration
        console.log("Iteration", i + 1, "Root estimate =", c.toFixed(4));
    }
    // Final root value after convergence
    console.log("The value of root is:", ((a + b) / 2).toFixed(4));
    return;

}
// Driver code for a larger range
let a = -50, b = 150; // Larger interval for the function
bisection(a, b);

