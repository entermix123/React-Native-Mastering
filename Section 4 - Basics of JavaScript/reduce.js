// reduction method is most crutial 

let a = [10, 20, 4, 50]
// let b = a.reduce((int, curr) => {
//     return int, curr;
// });
// console.log(b);
// result: 50       // prints the last element of the array


// let c = a.reduce((int, curr) => {
//     return int + curr;
// });
// console.log(c);
// result: 84       // prints the sum of all elements


let d = a.reduce((int, curr) => {
    return int + curr;
}, 5);                              // additional value to the array
console.log(d);
// result: 89                       // prints the sum of all elements and the additional value of 5