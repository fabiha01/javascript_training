// let greet: Function;

// example 1
let greet: (a: string, b: string) => void;
greet = (name: string, greeting: string) => {
  console.log(`${name} says ${greeting}`);
};

// example 2
let calc: (a: number, b: number, c: string) => number;
calc = (numOne: number, numTwo: number, action: string) => {
  if (action === 'add') {
    return numOne + numTwo;
  } else {
    return numOne - numTwo;
  }
}

console.log(calc(5, 8, 'add'));

type person = {name: string, age: number};

// example 3
let logDetails: (obj: {name: string, age: number}) => void;
logDetails = (ninja: {name: string, age: number}) => {
  console.log(`${ninja.name} is ${ninja.age}`);
};

logDetails({
  name: 'jen',
  age: 50
});