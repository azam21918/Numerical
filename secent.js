// Function: f(x) = x^3 - x - 2
function f(x) {
    return x * x * x - x - 2;
}

// Secant Method function
function secantMethod(x0, x1) {
    let x2;

    // Run the loop for a maximum of 20 iterations
    for (let i = 1; i <= 20; i++) {
        // Calculate the next approximation using the Secant method formula
        x2 = x1 - (f(x1) * (x1 - x0)) / (f(x1) - f(x0));

        // Show the current iteration number and the new root estimate
        console.log("Iteration", i, "Root =", x2.toFixed(6));

        // Check if the difference between the new and previous value is small enough (tolerance = 0.0001)
        if (Math.abs(x2 - x1) < 0.0001) {
            // If so, print the final root and stop the loop
            console.log("\nFinal Root is:", x2.toFixed(6));
            break;
        }

        // Update the previous values for the next iteration
        x0 = x1;
        x1 = x2;
    }
}

// Call the function with two initial guesses (starting values)
secantMethod(1.5, 2.0);
