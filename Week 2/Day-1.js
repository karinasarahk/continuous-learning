// Array - indexing
// assignment
// manipulation

const beStudents = ["fikri", "karina", "darwin", ["amril", "yoga"], null];

// access array
console.log(beStudents[3][1]); // nested example

// manipulation
beStudents.push("kamal");
beStudents[0] = "jhorgi";
console.log(beStudents);
console.log(beStudents[beStudents.length - 1]); // last index

// Object - Key Value
const user = {
  name: "idrus",
  userName: "idrus",
  password: "idrus123",
  email: "idrus@gmail.com",
  phone: "082641682", // pattern check
  age: 16,
  isPremium: true,
  ktp: null,
  "gift code": 123,
  profilePhoto: ["photo1", "photo2", "photo3"],
};

const users = [
  {
    name: "idrus",
    userName: "idrus",
    password: "idrus123",
    email: "idrus@gmail.com",
    phone: "082641682", // pattern check
    age: 16,
    isPremium: true,
    ktp: null,
    "gift code": 123,
    profilePhoto: ["photo1", "photo2", "photo3"],
  },
  {
    name: "idrus",
    userName: "idrus",
    password: "idrus123",
    email: "idrus@gmail.com",
    phone: "082641682", // pattern check
    age: 16,
    isPremium: true,
    ktp: null,
    "gift code": 123,
    profilePhoto: ["photo1", "photo2", "photo3"],
  },
  {
    name: "idrus",
    userName: "idrus",
    password: "idrus123",
    email: "idrus@gmail.com",
    phone: "082641682", // pattern check
    age: 16,
    isPremium: true,
    ktp: null,
    "gift code": 123,
    profilePhoto: ["photo1", "photo2", "photo3"],
  },
];

// access value
console.log(user.name);
console.log(user["gift code"]);
let nameKey = "name";
console.log(user[nameKey]);
console.log(user.profilePhoto[0]);

// manipulation
user.name = "Yoga" + "Wibowo";
user.age = 17 + 1;
console.log(user);

// conditionals
// if else if else
let holiday = null;
if (holiday === true) {
  console.log("Libur men");
} else if (holiday === null) {
  console.log("belum ada info");
} else {
  console.log("ga libur ey");
}

// comparison / boolean operator
// == / ===
// value & data type
console.log(1 === "1");
console.log("true" == true);

// AND / OR Operator
console.log(true && true, "--and 1");
console.log(true && (false || true), "--and 2");
console.log(true || false, "--or 1");
console.log(false || false || false || true, "--or 2");

// Ternary Operator
// if (condition) {true} else {false}
// (condition) ? true : false
let isMonday = true;
if (isMonday === true) {
  console.log("Senin");
} else if (isMonday === null) {
  console.log("Not Found");
} else if (isMonday === undefined) {
  console.log("Ga tau senin itu apa");
} else {
  console.log("Bukan Senin");
}

isMonday === true
  ? console.log("Senin")
  : isMonday === null
  ? console.log("Not Found")
  : console.log("Bukan Senin");