//funcion para manipular la data de la que obtuvimos respuesta
function handleResponse(data) {
    console.log('the ajax request has finished!');
    console.log(data);
    var dataPokemon = data.pokemon_entries;
    console.log(dataPokemon);
    dataPokemon.forEach(function(data) {
        var speciesPokemon = data.pokemon_species;
        var urlPokemons = speciesPokemon.url;
        var namePokemons = speciesPokemon.name;
        console.log(urlPokemons, namePokemons);
    });
};

//haciendo la peticion con ajax
$.ajax({
    url: `https://pokeapi.co/api/v2/pokedex/1/`
}).done(handleResponse); //haciendo el onload de la api