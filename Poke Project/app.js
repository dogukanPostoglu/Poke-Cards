const obj = [
  {
    pokeImg:
      "https://static.pokemonpets.com/images/monsters-images-800-800/1-Bulbasaur.webp",
    pokeName: "Bulbasaur",
  },
  {
    pokeImg: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/002.png",
    pokeName: "Ivysaur",
  },
  {
    pokeImg: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png",
    pokeName: "Charmander",
  },
  {
    pokeImg:
      "https://upload.wikimedia.org/wikipedia/tr/3/35/Charmeleon_Artwork.png",
    pokeName: "Charmeleon",
  },
  {
    pokeImg: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png",
    pokeName: "Charizard",
  },
  {
    pokeImg: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png",
    pokeName: "Squirtle",
  },
  {
    pokeImg: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/008.png",
    pokeName: "Wartortle",
  },
  {
    pokeImg: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/009.png",
    pokeName: "Blastoise",
  },
];

// DOM ELEMENTS
const pokeContainer = document.getElementById("poke-container");
function addNewCards() {
  for (let i = 0; i < obj.length; i++) {
    var div = document.createElement("div");
    div.setAttribute("class", "poke-box");
    div.innerHTML = ` <img src="${obj[i].pokeImg}" alt="">
        <div class="poke-body">
            <h2 class = "hidden">${obj[i].pokeName}</h2>
        </div>`;
    pokeContainer.appendChild(div);
  }
}

// Calling the function
addNewCards();

// Adjusting the clicking event
const allPokeCards = document.querySelectorAll(".poke-box");

allPokeCards.forEach(function (pokeCard) {
  pokeCard.addEventListener("click", function () {
    pokeCard.classList.toggle("rotate");
    pokeCard.classList.toggle("show");
  });
});
