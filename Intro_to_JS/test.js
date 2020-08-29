// let myArray = new Array();
// myArray[0] = 8;
// myArray[1] = 'hello';

// this is how we create an object
// let myCar = new Object();
// myCar.maxSpeed = 50;
// myCar.driver = 'Fabiha';
// myCar.drive = function() { 
//     console.log('now driving');
// };


// myCar.drive(); // assigned properties and methods to the object

// the this keyword referes to the current object that currently owns that space

// this is a constructor function - we only declare the object once
// then we assign it to a variable and pass some arguments for it

let Car = function(maxSpeed, driver) {
    this.maxSpeed = maxSpeed;
    this.driver = driver;
    this.drive = function(speed, time) {
        console.log(speed * time);
    }
    this.logDriver = function() {
        console.log('The drivers name is ' + this.driver);
    };

}

let myCar = new Car(70, 'Ninja Man');
let myCar2 = new Car(40, 'The man next door');
let myCar3 = new Car(60, 'Naughty kid');
let myCar4 = new Car(30, 'James bond');

myCar.drive(30, 5);
myCar3.logDriver();

