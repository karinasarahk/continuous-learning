const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
/*
 * DON'T CHANGE
 * */

const data = [];
const randomNumber = Math.floor(Math.random() * 100);

function createArray() {
  for (let i = 0; i < randomNumber; i++) {
    data.push(createArrayElement());
  }

  // Recursive
  if (data.length == 0) {
    createArray();
  }
}

function createArrayElement() {
  let random = Math.floor(Math.random() * 1000);

  return [null, random][Math.floor(Math.random() * 2)];
}

createArray();
/*
 * Code Here!
 * */

console.log(data);


function clean(data) {
  // Code here
  let filtered = data.filter((noNull) => noNull != null);
  rl.question("Sort by : ", (option) => {
    switch (option) {
      case "ascending":
        for (let i = 0; i < filtered.length; i++) {
          for (let j = 0; j < filtered.length - i - 1; j++) {
            if (filtered[j] > filtered[j + 1]) {
              let temp = filtered[j];
              filtered[j] = filtered[j + 1];
              filtered[j + 1] = temp;
            }
          }
        } console.log(filtered);break;
      case "descending":
        for (let i = 0; i < filtered.length; i++) {
          for (let j = 0; j < filtered.length - i - 1; j++) {
            if (filtered[j] < filtered[j + 1]) {
              let temp = filtered[j];
              filtered[j] = filtered[j + 1];
              filtered[j + 1] = temp;
            }
          }
        }console.log(filtered);break;
        default:
            console.log("Tidak ada pilihan");
    }rl.close();
  });
  return filtered;
}

/*
 * DON'T CHANGE
 * */

if (process.argv.slice(2)[0] == "test") {
  try {
    clean(data).forEach((i) => {
      if (i == null) {
        throw new Error("Array still contains null");
      }
    });
  } catch (err) {
    console.error(err.message);
    
  }
}else {rl.close()}
