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

// For Of usage --> prints the whole of el array content
for (let el of arr) {
    console.log(el);
}

// While Loop
let i = 1;
while (i <= 10) {
    console.log(i);
    i++;
}

// console.log(process.argv[2], process.argv[3]);
function areOfSquare(s) {
    console.log(typeof s);
    return s == 2;
}

let input = process.argv;
console.log(input);
.log(areaOfSquare(input));


// Using Modulo
// remember: For (start; stop/condition; step) {}

for (let i = 1; i <= 10; i++) {
    if (i % 2 != 0) {
        console.log(i);
    }
}



arr = [1, 2, 3]


