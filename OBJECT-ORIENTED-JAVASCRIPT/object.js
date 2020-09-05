class User {
    // this is now a class
    constructor(email, name) {
        this.email = email;
        this.name = name;

    }
}

const userOne = new User('ryu@ninjas.com', 'Ryu');
const userTwo = new User('Yoshi@mariocorp.com', 'Yoshi');

console.log(userOne);
console.log(userTwo);

// the 'new' keyword
// - creates a new empty object {}
// - sets the value of 'this' to be the new empty object
// - calls the constructor method