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

// use extends to be able to base the class from another class
// it will still include the properties and methods as above
// but you can add on top of it

// created a new class called Admin
// it has inherited the class from User
class Admin extends User {
    deleteUser(user) {
        users = users.filter(u => {
            // of the email of the array is not equal to
            // the user that we passed in
            // then we want to filter it out
            return u.email !== user.email
        });
    }


}

const userOne = new User('ryu@ninjas.com', 'Ryu');
const userTwo = new User('Yoshi@mariocorp.com', 'Yoshi');
const admin = new Admin('fabiha@ninjas.com', 'Fabiha');

let users = [userOne, userTwo, admin];

// admin.deleteUser(userOne);

console.log(users);

// chaining methods
userOne.login().updateScore().updateScore().logout();


// the 'new' keyword
// - creates a new empty object {}
// - sets the value of 'this' to be the new empty object
// - calls the constructor method