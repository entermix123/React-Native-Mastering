// map function create an array from another array

let arr = [20, 30, 50];
// console.log(arr);


let b = arr.map((value) => {            // similar to forEach()
    console.log(value)
    return value + 1                // return is mandatory because nothing is going to be printed or saved in variable b
});
console.log(b)
// result:
// 20
// 30
// 50
// [ 21, 31, 51 ]