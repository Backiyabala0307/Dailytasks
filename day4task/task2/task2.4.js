
//Return all the prime numbers in an array using arrow function

let array = [4, 6, 2, 3, 7, 10, 13];

let prime = (item)=> {
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