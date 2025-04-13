// Function: f(x) = x^3 - x - 2
function f(x) {
    return x * x * x - x - 2;
}

// False Position Method function
function falsePosition(a, b) {
    let xr;

    // Run the loop for a maximum of 20 iterations
    for (let i = 1; i <= 20; i++) {
        // Calculate the root approximation using False Position method formula
        xr = (a * f(b) - b * f(a)) / (f(b) - f(a));

        // Show the current iteration number and the root estimate
        console.log("Iteration", i, "Root =", xr.toFixed(6));

        // Check if the difference between new root and previous guess is small enough (tolerance = 0.0001)
        if (Math.abs(f(xr)) < 0.0001) {
            // If so, print the final root and stop the loop
            console.log("\nFinal Root is:", xr.toFixed(6));
            break;
        }

        // Decide which side to keep for the next iteration
        if (f(a) * f(xr) < 0) {
            b = xr;  // The root lies between a and xr, so we update b
        } else {
            a = xr;  // The root lies between xr and b, so we update a
        }
    }
}

// Call the function with two initial guesses (starting values)
falsePosition(1, 2);
