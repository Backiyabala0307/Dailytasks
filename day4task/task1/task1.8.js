//rortate an array by k times using anonymous function

let array = [1, 2, 3, 4, 5];
let key = 3;
let rotated_array;

let reverse = function () {
    let item = array.shift();
    array.push(item);
    return array;

}
for (let i = 1; i <= key; i++){
   rotated_array= reverse();
   
}
console.log(rotated_array);



////rortate an array by k times using IIFE function

let array = [1, 2, 3, 4, 5];
let key = 3;

for (let i = 1; i <= key; i++) {
    
    (function () {
        let item = array.shift();
        array.push(item);
        return array;

    })();
}
console.log(array);
