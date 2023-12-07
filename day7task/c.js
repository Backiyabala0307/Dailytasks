// Print the following details name, capital, flag using forEach function.

// require the library xhr2
let XMLHttpRequest = require('xhr2');

// create an object to the XMLHttpRequest class
let xhr = new XMLHttpRequest();

// open the connection
xhr.open('GET', 'https://restcountries.com/v3.1/all');

// handle the response data
xhr.onload = function () {
    let data = JSON.parse(xhr.responseText);
    data.forEach((value,index,data)=>{
        console.log(data[index].name.common,data[index].capital,
            data[index].flag);
    })
};

// send the http request
xhr.send();