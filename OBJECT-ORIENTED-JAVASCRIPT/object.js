function User(email, name) {
    this.email = email;
    this.name = name;
    this.online = false;
}

// this is the prototype property of the new emulated user class
// the constructor function only has the prototypes property
User.prototype.login = function() {
    // 'this' refers to the function that we call the prototype on
    this.online = true;
    console.log(this.email, 'has logged in.')
}

User.prototype.logout = function() {
    // 'this' refers to the function that we call the prototype on
    this.online = false;
    console.log(this.email, 'has logged out¬.')
}

// the 3 dots are turning the instance into an array
// so that we can grab it in an array
function Admin(...args) {
    User.apply(this, args);
    this.role = 'super admin';

}

Admin.prototype = Object.create(User.prototype);

// this has only been applied to the admin prototype
Admin.prototype.deleteUser = function(u) {
    users = users.filter(user => {
        // if the emails match then we retun false
        // if we return false then we will filter the user out of the array
        return user.email !== u.email;
    })

}

// the intances do not have the prototype property
const userOne = new User('ryu@ninjas.com', 'Ryu');
const userTwo = new User('Yoshi@mariocorp.com', 'Yoshi');
const admin = new Admin('fabiha@ninjas.co.uk', 'Fabiha');

let users = [userOne, userTwo, admin];

console.log(admin);

// console.log(userOne);
// userTwo.login();



// the 'new' keyword
// - creates a new empty object {}
// - sets the value of 'this' to be the new empty object
// - calls the constructor method






// class User {
//     // this is now a class
//     // the constructor function that binds all of the 
//     // properties and values to the object when we create the class
//     constructor(email, name) {
//         this.email = email;
//         this.name = name;
//         this.score = 0;

//     }
//     login() {
//         console.log(this.email, 'just logged in');
//         return this;
//     }
//     logout() {
//         console.log(this.email, 'just logged out');
//         return this;
//     }
//     updateScore() {
//         this.score ++;
//         console.log(this.email, 'score is now', this.score);
//         // return this - the instance of the object
//         // that particular user
//         return this;

//     }

// }

// // use extends to be able to base the class from another class
// // it will still include the properties and methods as above
// // but you can add on top of it

// // created a new class called Admin
// // it has inherited the class from User
// class Admin extends User {
//     deleteUser(user) {
//         users = users.filter(u => {
//             // of the email of the array is not equal to
//             // the user that we passed in
//             // then we want to filter it out
//             return u.email !== user.email
//         });
//     }


// }

// const admin = new Admin('fabiha@ninjas.com', 'Fabiha');

// let users = [userOne, userTwo, admin];

// // admin.deleteUser(userOne);

// console.log(users);

// // chaining methods
// userOne.login().updateScore().updateScore().logout();