//Convert all the strings to title caps in a string array using arrow function

let array = ["backiya", "lakshmi", "kavya", "yazhini"];

let titleCaps=(item)=> {
    console.log(item[0].toUpperCase() + item.slice(1));

}

for (let i = 0; i < array.length; i++) {
    titleCaps(array[i]);
}