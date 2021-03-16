// Class, property, method, this, public/private, constructor, static property/method

let fish1 = {
    name: "Cupang",
    age: 10,
    breed: "Halfmoon",
    gender: "male",
  };
  
  let fish2 = {
    name: "Cupang",
    age: 10,
    breed: "Plakat",
  };
  
  let fish3 = {
    name: "Cupang",
    age: 10,
    breed: "Giant",
  };
  
  class Animal {
    #password; // private property
  
    constructor(
      name,
      age,
      password = "user123",
      breed = "Original",
      pin = "123456"
    ) {
      // property
      this.name = name; // public
      this.age = age;
      this.breed = breed;
      this.#password = password; // private
      this.pin = pin;
      this.greetPub = function () {
        console.log("Dorr Public");
      };
      this.forgetPassword = function () {
        // public mehthod to get password
        return this.#password;
      };
  
      this.createFullName = function () {
        return this.name + this.age;
      };
    }
  
    greet() {
      // method
      console.log("Dorr");
    }
  }
  
  let fish = new Animal("Koi", 100, "koi1234");
  
  console.log(fish);
  // fish.greet();
  console.log(fish.createFullName()); // 61875cty4b239656bn3201974326548573t6523563746837f54
  
  // ----FUNCTION--------
  function createFish(name, age, breed) {
    return {
      name: name,
      age: age,
      breed: breed,
    };
  }
  
  let fishTest = createFish("Ikann", 10, "bebas");
  let fishTes2 = createFish("Ikann", 10, "bebas");
  
  let str1 = "dagfhujsa";