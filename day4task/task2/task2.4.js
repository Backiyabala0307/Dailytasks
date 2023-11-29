
//Return all the prime numbers in an array using arrow function

let array = [4, 6, 2, 3, 7, 10, 13];
let nonprime = [];
let prime_number = (item)=> {
    for (let j = 2; j < item; j++) {
        if (item % j == 0) {
            return nonprime.push(item);
        }
    }

}

for (let i = 0; i < array.length; i++) {
    prime_number(array[i]);

}
console.log(array.filter(n => !nonprime.includes(n)));