
// 17. Write a program which tells the number of days in a month.
let year = parseInt(prompt("Enter the year:"));
let month = parseInt(prompt("Enter a month in integer:"));
let firstDayOfMonth = new Date(year, month-1, 1);
let firstDayOfNextMonth = new Date(year, month, 1);
let differenceInMs = firstDayOfNextMonth - firstDayOfMonth;
let daysInMonth = Math.round(differenceInMs / (1000 * 60 * 60 * 24));
console.log(`There are ${daysInMonth} days in the month of ${month}:${year}.`);
