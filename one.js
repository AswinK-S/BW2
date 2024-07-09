class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    introduceYourself() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

module.exports = Person; // Export the Person class
