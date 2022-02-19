"use strict";

let number = 5;
const leftBorderWidth = 1;
number = 10;
console.log(number);
console.log(leftBorderWidth);
const rightBorderWidth = "Alex";
const obj = {
    name: "John",
    age: "25",
    isMarried: false
};
console.log(obj.name);

let arr = ['plum.png', 'orange.jpg', 'apple.bmp', 6, 4, {}];
console.log(arr[5]);

const answers = [];
answers[0] = prompt("What is your name", "");
answers[1] = + prompt("What is your age?", "");
answers[2] = prompt("What is your last name", "");
console.log(typeof(answers));

const category = "toys";
console.log(`https://www.someurl.com/${category}/${category}/ /5`);