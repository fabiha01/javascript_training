// // explicit types
// let character: string;
// let age: number;
// let isLoggedIn: boolean;

// // arrays

// let ninjas: string[] = [];

// ninjas.push('Mi');

// // union types
// let mixed: (string|number|boolean)[] = [];
// mixed.push('Hello');
// mixed.push(false);
// console.log(mixed);

// let uid: string|number;
// uid = 123;
// uid = '123';

// console.log(uid);

// // objects
// let personOne: object;

// personOne = {name: 'smith', age: 40};
// let personTwo: {
//   name: string,
//   age: number
// };

// personTwo = {name: 'John', age: 34 };

// console.log(personTwo);

let age: any = 25;

age = 'yo';
console.log(age);

let mixed: any[] = [];
mixed.push(5)
mixed.push('Doe');
console.log(mixed);

let ninja: {name: any, age: any};
ninja = {
  name: 40,
  age: 'Meh'
};

console.log(ninja);


