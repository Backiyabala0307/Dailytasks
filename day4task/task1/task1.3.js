//Sum of all numbers in an array using anonymous function

let array = [2, 4, 6, 8, 10];
let total = 0;

let sum = function (item) {

   total += item;
}   

for (let i = 0; i < array.length; i++) {
    sum(array[i]) ;
}
console.log(total);



//Sum of all numbers in an array using IIFE function

let array = [2, 4, 6, 8, 10];
let total = 0;

for (let i = 0; i < array.length; i++) {
        (function(item) {
          total += item;
        })(array[i]);
}
console.log(total);