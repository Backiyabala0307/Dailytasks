//Convert all the strings to title caps in a string array using anonymous function

let array = ["backiya", "lakshmi", "kavya", "yazhini"];

let titleCaps = function (item) {
 console.log(item[0].toUpperCase()+item.slice(1));

}

for (let i = 0; i < array.length; i++){
   titleCaps(array[i]);
}


//Convert all the strings to title caps in a string array using IIFE function

let array = ["backiya", "lakshmi", "kavya", "yazhini"];

for (let i = 0; i < array.length; i++) {
        (function (item) {
            console.log(item[0].toUpperCase()+item.slice(1));

            }) (array[i]);
   
}