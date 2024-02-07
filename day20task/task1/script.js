// task using fetch()
// create a webpage that fetches and displays chuck norris jokes from the "Chuck Norris jokes api". users can click a button to get a new random chuck norris joke.
let fetchJoke = () => {
    fetch('https://api.chucknorris.io/jokes/random')
        .then(response => response.json())
        .then(data => {
            jokeText.textContent = data.value;
        })
        .catch((error) => {
            console.log(error);
        });
}

let getJokeButton = document.querySelector('.getJokeButton');
let jokeText = document.querySelector('.jokeText');

getJokeButton.addEventListener('click', fetchJoke);

fetchJoke();