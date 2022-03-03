// interfaces
// interface IsPerson {
//   name: string;
//   age: number;
//   speak(a: string): void;
//   spend(a: number): number;
// }
// const me: IsPerson = {
//   name: 'Fabiha', 
//   age: 27, 
//   speak(text: string): void {
//   console.log(text);
//   },
//   spend(amount:number): number {
//     console.log('I spent a lot of money', amount);
//     return amount;
//   }
// };
// const greetPerson = (person: IsPerson) => {
//   console.log(person.name);
// };
// greetPerson(me);
import { Invoice } from './classes/invoice.js';
import { ListTemplate } from './classes/ListTemplate.js';
import { Payment } from './classes/Payment.js';
// let docOne: HasFormatter;
// let docTwo: HasFormatter;
// docOne = new Invoice('Mark', 'web work', 250);
// docTwo = new Payment('Jane', 'work on app', 800);
// let docs: HasFormatter[] = [];
// docs.push(docOne);
// docs.push(docTwo);
// console.log(docs);
// const inv1 = new Invoice('Matt', 'work on the website', 400);
// const inv2 = new Invoice('Jane', 'work on app', 800);
// let invoices: Invoice[] = [];
// invoices.push(inv1);
// invoices.push(inv2);
// invoices.forEach(inv => {
//   console.log(inv.client, inv.amount, inv.format());
// });
const form = document.querySelector('.new-item-form');
// console.log(form.children);
// inputs
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
// list template instance
const ul = document.querySelector('ul');
const list = new ListTemplate(ul);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let values;
    values = [tofrom.value, details.value, amount.valueAsNumber];
    let doc;
    if (type.value === 'invoice') {
        doc = new Invoice(...values);
    }
    else {
        doc = new Payment(...values);
    }
    list.render(doc, type.value, 'end');
});
// tuples
let arr = ['Ryan', 25, true];
arr[0] = false;
arr[1] = 'Jane Doe';
arr = [30, false, 'Jane'];
let tup = ['Smith', 40, true];
tup[0] = 'Ken';
tup[1] = 98;
let student;
student = ['li', 987];
// GENERICS
// const addUID = <T extends {name: string}>(obj: T) => {
//   let uid = Math.floor(Math.random() * 100);
//   return {...obj, uid};
// }
// let docOne = addUID({name: 'John', age: 38});
// console.log(docOne.name);
// // with interfaces
// interface Resource<T> {
//   uid: number;
//   resourceName: string;
//   data: T;
// }
// const docThree: Resource<object> = {
//   uid: 1,
//   resourceName: 'person',
//   data: { name: 'Matt'}
// };
// const docFour: Resource<string[]> = {
//   uid: 2,
//   resourceName: 'shoppingList',
//   data: ['bread', 'milk', 'eggs']
// };
// console.log(docFour);
// ENUMS
// enum ResourceType { BOOK, AUTHOR, MOVIE, DIRECTOR, PERSON}
// interface Resource<T> {
//   uid: number;
//   resourceType: ResourceType;
//   data: T;
// }
// const docThree: Resource<object> = {
//   uid: 1,
//   resourceType: ResourceType.BOOK,
//   data: { title: 'name of the wind'}
// };
// const docFour: Resource<object> = {
//   uid: 10,
//   resourceType: ResourceType.PERSON,
//   data: {name: 'Yellow'} 
// }
// console.log(docThree, docFour);
