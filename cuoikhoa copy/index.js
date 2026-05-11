fetch ("https://pokeapi.co/api/v2/pokemon?limit=20")
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.log(err))

const API_URL = "https://pokeapi.co/api/v2/pokemon?limit=20";
const pokemonListEl = document.getElementById("pokemon-list");

fetch("https://pokeapi.co/api/v2/pokemon?limit=20")
  .then((res) => res.json())
  .then((data) => {
    data.results.forEach(function (item, index) {
      const id = index + 1;
      const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

      const card = document.createElement("article");
      card.className = "pokemon-card";

      card.innerHTML = `
          <div class="pokemon-image-wrapper">
            <img src="${imageUrl}" alt="${item.name}" class="pokemon-image" />
          </div>
          <h2 class="pokemon-name">${item.name}</h2>
        `;

      pokemonListEl.appendChild(card);
    });
  })
  .catch((err) => console.log(err));
