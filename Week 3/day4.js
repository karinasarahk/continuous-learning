// arrow function

// hoisting
// func1();

// function declaration
function func1() {
    console.log("func1");
  }
  
  // function expression
  let func2 = function () {
    console.log("func2");
  };
  
  // func2();
  
  let func3 = () => (x == 1 ? console.log("fun3") : console.log("func3"));
  // let func3 = (x) => console.log(x);
  let func4 = (x, y) => console.log(x, y);
  let func5 = (x, y, z) => {
    let sum = x + y + z;
    return sum;
  };
  
  // asynchronous > run time
  // asynchronous handler
  // callback, promise,  (async await)
  
  // setTimeout(function () {
  //   console.log("Register Failure!");
  // }, 1000);
  
  // setTimeout(function () {
  //   console.log("Success Register!");
  // }, 2000);
  
  // Promise
  function prom(x) {
    return new Promise((resolve, reject) => {
      if (x > 10) {
        resolve("Yeahh");
      } else {
        reject("Nooo");
      }
    });
  }
  
  prom(10)
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
  
  new Promise((resolve, reject) => {
    throw "Errorr";
    resolve("Bisaa");
    reject("Hehe");
  })
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
  
  // Error
  // Runtime Error/ Error server. Status 500
  // Syntax Error
  // Logical Error
  
  // == , ===
  // ++i, i++