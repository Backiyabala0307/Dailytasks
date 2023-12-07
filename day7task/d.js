// Print the total population of countries using reduce function

// require the library xhr2
let XMLHttpRequest = require('xhr2');

// create an object to the XMLHttpRequest class
let xhr = new XMLHttpRequest();

// open the connection
xhr.open('GET', 'https://restcountries.com/v3.1/all');

// handle the response data
xhr.onload = function () {
    let data = JSON.parse(xhr.responseText);
    let populations=[];
    for(let i in data){
    
        populations.push(data[i].population);
    }   
    let sumofpopulations=populations.reduce((a,b)=>{

          return a+b;
    });
    console.log(sumofpopulations);
    
};

// send the http request
xhr.send();