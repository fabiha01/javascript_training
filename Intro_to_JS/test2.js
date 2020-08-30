// Javascript has a built in date object

// let myDate = new Date(); // this will give you the exact date and time
// console.log(myDate);

// let myPastDate = new Date(1545, 11, 2, 10, 30, 15);
// let myFutureDate = new Date(2515, 0, 31, 10, 30, 15);

// console.log(myPastDate);
// console.log(myFutureDate);

let birthday = new Date(1985, 0, 15, 11, 15, 25);
let birthday2 = new Date(1985, 0, 15, 11, 15, 25);
// console.log(birthday);

// get the month of the date (0-11)
console.log(birthday.getMonth());

// get the full year (YYYY)
console.log(birthday.getFullYear());

// get the date of the month (1 - 31)
// this will return the day of the month that was spoecified on birthday
console.log(birthday.getDate());

// get the day of the week (0-7)
console.log(birthday.getDay());

// get the hour of the date (0-23)
console.log(birthday.getHours());

// get the number of milliseconds since 1st Jan 1970
// we would use this number to compare 2 dates
console.log(birthday.getTime());


// it is not looking at the values of the objects
// the get time is useful when comparing dates!!
if (birthday.getTime() == birthday2.getTime()) {
    console.log('Birthdays are equal!!');
} else { 
    console.log('Birthdays are not equal');
}