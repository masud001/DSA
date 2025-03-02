var maximumValue = function (strs) {
  let maxVal = 0;

  for (let str of strs) {
    let isNumeric = true;
    let numValue = 0;

    // Check if the string is purely numeric
    for (let i = 0; i < str.length; i++) {
      if (str[i] < "0" || str[i] > "9") {
        isNumeric = false;
        break;
      }
    }

    if (isNumeric) {
      // Convert string to a number manually (avoiding parseInt or Number)
      for (let i = 0; i < str.length; i++) {
        numValue = numValue * 10 + (str[i] - "0");
      }
    } else {
      numValue = str.length; // If not numeric, take string length
    }

    // Manual max comparison
    if (numValue > maxVal) {
      maxVal = numValue;
    }
  }

  return maxVal;
};

// Example usage:
console.log(maximumValue(["alic3", "bob", "3", "4", "00000"])); // Output: 5
console.log(maximumValue(["10", "2", "abcd", "123"])); // Output: 123
console.log(maximumValue(["abc", "de", "fghij"])); // Output: 5
