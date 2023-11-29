//Print odd numbers in an array using arrow function
let array = [21, 24, 31, 50, 46, 45];

let odd=(item)=> {
    if (item % 2 != 0) {
        console.log(item);
    }
}
for (let i = 0; i < array.length; i++) {
     odd(array[i]);
}