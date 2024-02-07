// to estimate the age by using firstname
let card = document.querySelector('.card');
let nameinput = document.querySelector('.input');
let Button = document.querySelector('.btn');

let fetchage = (name) => {
    fetch(`https://api.agify.io/?name=${name}`)
        .then(res => res.json())
        .then(res => {
            let h5 = document.createElement('h5');
            h5.innerText =`Your Age: ${ res.age }`;
            card.appendChild(h5);
        })
        .catch((error) => {
            console.log(error);
        })
    
}

Button.addEventListener('click', ()=>{
    let name = nameinput.value;
    fetchage(name);
});


