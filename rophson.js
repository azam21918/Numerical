// given Function: f(x) = x^3 - x - 2 for rophson method 
function f(x) {
    return x * x * x - x - 2;
}

// Derivative of the function: f'(x) = 3x^2 - 1
function df(x) {
    return 3 * x * x - 1;
}

// Newton-Raphson Method using a for loop
function newtonRaphson(x) {
    let newX;

    // Run the loop for a maximum of 20 iterations
    for (let i = 1; i <= 20; i++) {
        // Calculate the new value using Newton-Raphson formula
        newX = x - f(x) / df(x);

        // Show the current iteration number and estimated root value
        console.log("Iteration", i, "Root =", newX.toFixed(6));

        // Check if the difference between old and new value is small enough (tolerance = 0.0001)
        if (Math.abs(newX - x) < 0.0001) {
            // If so, print the final root and stop the loop
            console.log("\nFinal Root is:", newX.toFixed(6));
            break;
        }

        // Update the old value with the new one for the next iteration
        x = newX;
    }
}

// Call the function with an initial guess (starting value)
newtonRaphson(1.5);
