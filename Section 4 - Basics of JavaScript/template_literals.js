// template literals allow us to embed expressions with variables inside the string

// let a = "John";
// let b = `Hello ${a}`;

// console.log(b);
// result: Hello John


const price = 20;
let rate = 0.3
var total_price = `The total price is $${price * (1 + rate)}`;
console.log(total_price);
// result: The total price is $26

