// Bubble Sort

// ASCENDING
// 1. Mulai dari first element, bandingin sama element selanjutnya
// 2. Jika current element > next element, swap
// 3. Jika current element < next element, skip/ move to next element
// 4. repeat

// [1, 5, 7, 2, 4]
// [1, 5, 2, 7, 4]
// [1, 2, 5, 7, 4]
// [1, 2, 5, 4, 7]
// [1, 2, 4, 5, 7]

// other version
// [8, 1, 2, 3, 4, 5, 6, 7]
// [1, 2, 3, 4, 5, 6, 7, 8]

function bubbleSort(arr) {
    let swap = (arr, currentIdx, nextIdx) =>
      ([arr[currentIdx], arr[nextIdx]] = [arr[nextIdx], arr[currentIdx]]);
  
    let noSwaps;
    for (let i = arr.length; i > 0; i--) {
      noSwaps = true;
      for (let j = 0; j < i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          swap(arr, j, j + 1);
          noSwaps = false;
        }
      }
      if (noSwaps) break;
    }
    return arr;
  }
  
  let sol = bubbleSort([1, 2, 7, 4, 5, 6, 3]);
  console.log(sol, "--sol");