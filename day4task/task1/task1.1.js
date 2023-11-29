//Print odd numbers in an array using anonymous function

let array = [21, 24, 31, 50, 46, 45];

let odd = function (item) {
    if (item % 2 != 0) {
        console.log(item);
    }
}
for (let i = 0; i < array.length; i++){
    odd(array[i]);
}



//Print odd numbers in an array using IIFE function

let array = [21, 24, 31, 50, 46, 45];

for (let i = 0; i < array.length; i++){
    (function (item) {
        if (item % 2 != 0) {
            console.log(item);
        }
    })(array[i]);
}




