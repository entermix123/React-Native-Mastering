let array = [20, 5, 80, 100, 200, 6, 9];
let a = array.filter((a) => {
    return a <= 10;
});
console.log(a, array);
// result: [ 5, 6, 9 ] [
//    20, 5, 80, 100,
//   200, 6,  9
// ]
