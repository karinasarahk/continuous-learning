// Four Pillars

// Inheritance
class Animal {
    constructor(name, gender) {
      this.name = name;
      this.gender = gender;
      this.talk = function () {
        return "Auu";
      };
    }
  
    greet() {
      return "Greetnya Animal";
    }
  }
  
  class Fish extends Animal {
    constructor(name, gender, species) {
      super(name, gender);
      this.species = species;
    }
  
    // overriding
    //   greet() {
    //     return "Greetnya Fish" + nama;
    //   }
  
    // overloading
    greet(nama) {
      super.greet();
      return "Greetnya Fish" + nama;
    }
  }
  
  let fish = new Fish("koi", "male", "gold");
  // console.log(fish.greet("mas"));
  
  // encapsulation
  class User {
    #password;
    #atm;
    constructor(username, password, atm) {
      this.username = username;
      this.#password = password;
      this.#atm = atm;
    }
  
    forgetPassword() {
      return this.#password;
    }
  
    //   #privateMethod = function() {
    //     return "aaaa";
    //   }
  }
  
  let user1 = new User("amril", "amril123", "06352956");
  // console.log(user1.forgetPassword()); // ctrl + /
  
  // Abstraction
  class Ongkir {
    constructor(berat) {
      this.berat = berat;
      this.totalOngkir = function () {
        return this.berat * 100;
      };
    }
  
    static totalOngkirParent() {
      return "Total Ongkir Parent";
    }
  }
  
  let ongkirJakarta = new Ongkir(2);
  // console.log(ongkirJakarta.totalOngkir());
  // console.log(Ongkir.totalOngkirParent());
  
  // Polymorphism
  class People {
    constructor(name) {
      this.name = name;
    }
  
    greet() {
      return `Hello ${this.name}`;
    }
  }
  
  class Person extends People {
    constructor(name) {
      super(name);
    }
  
    greet() {
      return `Hello person ${this.name}`;
    }
  }
  
  let people1 = new Person("kamal");
  console.log(people1.greet());
  