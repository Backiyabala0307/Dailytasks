// //Return all the prime numbers in an array using anonymous function
let array = [4, 6, 2, 3, 7, 10, 13];

let prime = function (item) {
    for (let j = 2; j < item; j++) {
        if (item % j === 0) {
            return false;
        }
    } return item;
}


for (let i in array) {
    prime(array[i]);
}
console.log(array.filter(prime));



// //Return all the prime numbers in an array using IIFE function

let array = [4, 6, 2, 3, 7, 10, 13];
let prime = [];
for (let i in array) {
    
    (function (item) {
        for (let j = 2; j < item; j++) {
           
            if (item % j === 0) {
                return false;
            }
        }
        return prime.push(item);
    })(array[i]); 

}

console.log(prime);

