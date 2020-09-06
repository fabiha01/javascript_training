class User {
    // this is now a class
    constructor(email, name) {
        this.email = email;
        this.name = name;
        this.score = 0;

    }
    login() {
        console.log(this.email, 'just logged in');
        return this;
    }
    logout() {
        console.log(this.email, 'just logged out');
        return this;
    }
    updateScore() {
        this.score ++;
        console.log(this.email, 'score is now', this.score);
        // return this - the instance of the object
        // that particular user
        return this;

    }

}

const userOne = new User('ryu@ninjas.com', 'Ryu');
const userTwo = new User('Yoshi@mariocorp.com', 'Yoshi');

// chaining methods
userOne.login().updateScore().updateScore().logout();


// the 'new' keyword
// - creates a new empty object {}
// - sets the value of 'this' to be the new empty object
// - calls the constructor method