// Print the country that uses US dollars as currency.

// require the library xhr2
let XMLHttpRequest = require('xhr2');

// create an object to the XMLHttpRequest class
let xhr = new XMLHttpRequest();

// open the connection
xhr.open('GET', 'https://restcountries.com/v3.1/all');

// handle the response data
xhr.onload = function () {
   let data = JSON.parse(xhr.responseText);
   data.forEach(country => {
      for (let key in country.currencies) {
         
         if (key == "USD") {
            console.log(country.name.common);
         }
     }
   })
    

    
};

// send the http request
xhr.send();