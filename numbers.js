// Numbers Section from https://github.com/karan/Projects#numbers

// 1. Find PI to the Nth Digit
function calculatePI(decimalPlace) {
  if (decimalPlace === undefined) {
    console.log("You must supply an integer.");
    return;
  } else if (decimalPlace > 20) {
    console.log(
      "JavaScript only returns PI to the 20th decimal place. Resetting your variable to 20..."
    );

    return Math.PI.toFixed(20);
  }
  return Math.PI.toFixed(decimalPlace);
}

console.log(calculatePI(10)); // Should return 3.1415926536

// 2. Find e to the Nth Digit
function calculateE(decimalPlace) {
  if (decimalPlace === undefined) {
    console.log("You must supply an integer.");
    return;
  } else if (decimalPlace > 20) {
    console.log(
      "The .toFixed function only takes arguments 0 - 20. Resetting your variable to 20..."
    );

    return Math.E.toFixed(20);
  }

  return Math.E.toFixed(decimalPlace);
}

console.log(calculateE(10)); // Should return 2.7182818285
