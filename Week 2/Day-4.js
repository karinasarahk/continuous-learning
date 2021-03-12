// array method
// map, filter
// includes, indexOf, find, forEach
// slice, splice
// push pop, unshift shift

// map
// looping, add operations

let arr = [1, 2, 3, 4];
let arr2 = [...arr]; // proper duplicate array

let arrMap = [];
for (let el of arr) {
  arrMap.push(el * 2);
}

for (let i = 0; i < arr.length; i++) {
  console.log(i, "--index");
}

let arrMap2 = arr.map((el, index) => el * 2);
let arrMap3 = arr.map((el, index) => {
  //   console.log(index, "--index dalam map");
  if (index > 1) return el * 2;
});

console.log(arrMap, "--arrMap");
console.log(arrMap2, "--arrMap 2");
console.log(arrMap3, "--arrMap 3");

// filter
console.log(arr, "--arr");
console.log(arr2, "--arr2");

let arrFilter = [];
for (let el of arr) {
  if (el > 2) arrFilter.push(el);
}

let arrFilter2 = arr.filter((el) => el > 2);

console.log(arrFilter, "--arr filter");
console.log(arrFilter2, "--arr filter 2");

// chain
let arrChain = arr
  .filter((el) => el > 2)
  .map((el) => el * 10)
  .splice(0, 1);

console.log(arrChain, "--arr chain");