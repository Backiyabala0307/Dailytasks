
let XMLHttpRequest = require('xhr2');

let xhr = new XMLHttpRequest();

xhr.open('GET', 'https://restcountries.com/v3.1/all');

xhr.onload = function () {

    let data = JSON.parse(xhr.responseText);
    let country_name = [];
    let country_region = [];
    let country_subregion = [];
    let country_population = [];

    for (let i in data) {
        country_name.push(data[i].name.common);
        country_region.push(data[i].region);
        country_subregion.push(data[i].subregion);
        country_population.push(data[i].population);

    }
 
    console.log(country_name,country_region,country_subregion,country_population)
}
xhr.send();
