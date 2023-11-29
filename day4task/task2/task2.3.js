//Sum of all numbers in an array using arrow function

let array = [2, 4, 6, 8, 10];
let total = 0;

let sum = (item)=> {

    total += item;
}

for (let i = 0; i < array.length; i++) {
    sum(array[i]);
}
console.log(total);