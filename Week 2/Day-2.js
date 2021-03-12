// Looping

// print angka 1-5
// console.log(1);
// console.log(2);
// console.log(3);
// console.log(4);
// console.log(5);

// for (start;stop/condition;step) {}
for (let i = 1; i <= 10; i++) {
    if (i % 2 != 0) {
      // console.log(i);
    }
  }
  
  // loop over array, object
  let arr = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 5 && arr[i] != 7 && arr[i] != 8) {
      console.log(arr[i], "index", i);
    }
  }
  
  // for of
  for (let el of arr) {
    //   console.log(el);
  }
  
  // while
  let i = 2;
  let isMonday = false;
  while (isMonday == false) {
    if (i == 2) isMonday = true;
  }
  
  // console.log(process.argv[2], process.argv[3]);
  
  function areaOfSquare(s) {
    //   console.log(typeof s);
    return Number(s) + 2;
  }
  
  let input = process.argv[2];
  // console.log(input);
  
  // console.log(areaOfSquare(input));
  
  // exercise 1 : function to determine if the input is even or odd
  // isEvenOrOdd(2) should return "Even"
  // isEvenOrOdd(3) should return "Odd"
  // if else, ternary
  
  function isEvenOrOdd(num) {
    if (num % 2 == 0) {
      return "Even";
    } else {
      return "Odd";
    }
  }
  
  function isEvenOrOddTernary(num) {
    return num % 2 == 0 ? "Even" : "Odd";
  }
  
  // exercise 2 - invertValues - change the sign of numbers
  // invert([1,2,3]) return [-1,-2,-3]
  // invert([-1,-2,-3]) return [1,2,3]
  
  function invert(arr) {
    // container
    let invertedArr = [];
    for (let i = 0; i < arr.length; i++) {
      invertedArr.push(-arr[i]);
    }
    return invertedArr;
  }
  
  // sum of arrays
  function sumArr(arr) {
    // container
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      // console.log(sum);
      sum = sum + arr[i];
    }
    return sum;
  }
  
  // console.log(sumArr([1, 2, 3]));
  
  // array map
  function invertMap(arr) {
    return arr.map((el) => el * 10);
  }
  
  console.log(invertMap([1, 2, 3, 4]));