// function to determine if input is even or odd

function isEvenOrOdd(num) {
    if (num % 2 == 0) {
        return "Even";
    } else {
        return "Odd";
    }
}

    // with tenary

function isEvenOrOddTenary(num) {
    return num % 2 == 0 ? "Even" : "Odd";
}


// Loop Over Array

let arr = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
for (;et i = 0; i < arr.length; i++) {
    if (arr[i] > 5){
        console.log(arr[i] * 2, "index", i);
    }
}

// For Of usage
for (let el of arr) {
    console.log(el);
}



arr = [1, 2, 3]


