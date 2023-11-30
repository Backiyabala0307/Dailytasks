//return all the palindromes in an array using arrow  function
let array = ["racecar", "radar", "123", "989"];
reverse_array = [];
result = [];

function reverse(item) {

    reverse_array.push(item.split('').reverse().join(''));
}

let palindrome = (item1, item2)=> {


    if (item1 == item2) {
        result.push(item1);
    }

}

for (let i in array) {
    reverse(array[i]);
    palindrome(array[i], reverse_array[i]);
}

console.log(result);