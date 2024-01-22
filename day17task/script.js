

    async function getCountries() {
        let response = await fetch('https://restcountries.com/v3.1/all');
        let countries = await response.json();
        return countries;
        }



    async function displayCountryCards() {
        let countries = await getCountries();

        let countriesContainer = document.getElementById('countriesContainer');
        countriesContainer.classList.add('linear-gradient');
        countries.forEach(country => {
            // create a div with class card
            // for every country create a card
            // append the card to the countriesContainer
            let card = document.createElement('div');
            card.classList.add('card', 'col-lg-3', 'col-sm-12','linear-gradient');

            let cardheader = document.createElement('h1');
            cardheader.classList.add('card-header');
            cardheader.innerText = country.name.common;

            let cardBody = document.createElement('div');
            cardBody.classList.add('card-body');
            // let cardTitle = document.createElement('h5');
            // cardTitle.classList.add('card-title');
            // cardTitle.innerText = country.name.common;

            let flagImage = document.createElement('img');
            flagImage.classList.add('card-img-top');
            flagImage.src = country.flags.svg;
        
            let cardtext = document.createElement('div');
            cardtext.classList.add('card-text');
            
            let capital = document.createElement('p');
            capital.innerText = `Capital : ${country.capital}`;
            cardtext.append(capital);

            let region = document.createElement('p');
            region.innerText = `Region : ${country.region}`;
            cardtext.append(region);

            let countrycode = document.createElement('p');
            countrycode.innerText = `Country Code : ${country.cca3}`;
            cardtext.append(countrycode);
            
            let button = document.createElement('button');
            button.classList.add('btn', 'btn-primary');
            button.innerText = 'Click for Weather';
            button.addEventListener('Click', getweather());

            async function getweather(){
               
                let result = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${country.latlng[0]}&lon=${country.latlng[1]}&appid=c50c4772b33fb778de22991eb102dccb`);
                let weatherdata = await result.json();
                // preventdefault();
                button.innerText = weatherdata.weather[0].main;
                
            }
            
            
        cardBody.append(flagImage,cardtext,button);   
        card.append(cardheader,cardBody);  
        countriesContainer.appendChild(card);
    
    });
}

    displayCountryCards();
