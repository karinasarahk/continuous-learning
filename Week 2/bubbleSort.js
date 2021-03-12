// Bubble Sort

// ASCENDING
// 1. Mulai dari first element, bandingin sama element selanjutnya
// 2. Jika current element > next element, swap
// 3. Jika current element < next element, skip/ move to next element
// 4. repeat

// e.g. [3,1,2,4,5] > [1,3,2,4,5] > [1,2,3,4,6,5] > [1,2,3,4,5,6]

function bubbleSort(arr) {
    let len = arr.length;
  
    for (let i = 0; i < len; i++) {
      for (let j = 0; j < len; j++) {
        //   currentElement > arr[j];
        //   nextElement > arr[j + 1];
        if (arr[j] > arr[j + 1]) {
          // SWAP
          let temp = arr[j];
          // console.log(temp, "--temp");
          arr[j] = arr[j + 1];
          // arr[j + 1] = arr[j];
          arr[j + 1] = temp;
        }
      }
    }
  
    return arr;
  }
  
  // [2,1,5,4,7]
  // 2 > 1, swap
  // temp = 2
  // [1,2,5,4,7]
  // temp = 5
  // [1,2,4,5,7]
  
  let sol = bubbleSort([2, 1, 5, 4, 7]);
  console.log(sol, "--sol");
  