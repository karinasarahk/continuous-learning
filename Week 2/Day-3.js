// algorithm and problem solving pattern

// Write a function which takes two numbers and return their sum

// Understand the problem
// - restate with your own words - sum of two numbers
// - what are the inputs? - is an integer? float? positive numbers? -Infinity - Infinity?
// - what are the outputs? - integer

// - extra cases for the inputs
// - label the important steps

// Explore examples
// - simple examples - sum(1,2) should return 3
// - more complex - sum(Infinity, 2) should return Infinity
// - empty inputs - sum() ? - "Please provide numbers"
// - invalid inputs - sum("a", true) - "Please input valid data"

// Break it Down
function sum(num1, num2) {
    // validate empty input
    if (!num1 || !num2) {
      return "Please provide the numbers";
    }
    // validate invalid input (CORE)
    if (typeof num1 != number || typeof num2 != number) {
      return "Please input valid numbers";
    }
  
    // store the inputs
    let number1 = num1;
    let number2 = num2;
    // operate the sum
    let result = number1 + number2;
    // return the output
    return result;
  }
  
  // Simplify
  // - Find the core difficulty
  // - Temporary ignore the difficulty
  // - Write a simplified solution
  // - Then incorporate that difficulty back in
  
  // Look back and Refactor
  // - Can you check the result?
  // - Can you improve the performance?
  // - How have other people solved this problem?