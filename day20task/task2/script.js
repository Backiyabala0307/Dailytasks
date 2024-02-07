// https://api.thecatapi.com/v1/images/search
// task using fetch()
// create a webpage that fetches and displays the cat images from the cat api. users can click a button to get a new random chuck norris joke.
let fetchCat = () => {
    fetch("https://api.thecatapi.com/v1/images/search")
        .then(response => response.json())
        .then(data => {
            Catimage.src = data[0].url;
        })
        .catch((error) => {
            console.log(error);
        })
}

let getCatButton = document.querySelector('.getCatButton');
let Catimage = document.querySelector('.Catimage');

getCatButton.addEventListener('click', fetchCat);

fetchCat();