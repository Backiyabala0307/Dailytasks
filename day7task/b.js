//print the name of the countries which having the population of less than 2lakhs using filter function..


// require the library xhr2
let XMLHttpRequest = require('xhr2');

// create an object to the XMLHttpRequest class
let xhr = new XMLHttpRequest();

// open the connection
xhr.open('GET', 'https://restcountries.com/v3.1/all');

// handle the response data
xhr.onload = function () {
    let data=JSON.parse(xhr.responseText);
    let result=[];
    data.filter((value,index,data)=>{
        if(data[index].population < 200000)
        {
             result.push(data[index].name.common);
        }
    });console.log(result);

    
};

// send the http request
xhr.send();