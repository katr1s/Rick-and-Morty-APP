let character = document.querySelector(".character");
let info = document.querySelector(".info");
let next = document.querySelector(".next");

let id = 1;
let url = `https://rickandmortyapi.com/api/character/${id}`;


const charapter = fetch(url)
.then(response => response.json())
.then(data => {
    character.innerHTML= `
    <img src="${data.image}" alt="${data.name}" title="${data.name}"/>
    `;

    info.innerHTML = `
    <h1>${data.name}</h1>
    <h2>Specie: ${data.species}</h2>
    <h2>Status: ${data.status}</h2>`
});

function nextCharapter() {
    id = id + 1;
    let url = `https://rickandmortyapi.com/api/character/${id}`;
    const charapter = fetch(url)
    .then(response => response.json())
    .then(data => {
    character.innerHTML= `
    <img src="${data.image}" alt="${data.name}" title="${data.name}"/>
    `;

    info.innerHTML = `
    <h1>${data.name}</h1>
    <h2>Especie: ${data.species}</h2>
    <h2>Status: ${data.status}</h2>`
});
}

next.addEventListener('click', function (){
    nextCharapter()
})
