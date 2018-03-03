//haciendo la peticion con ajax
$.ajax({
    url: `https://pokeapi.co/api/v2/pokedex/1/`,
    data: { limit: 10 }
}).done(handleResponse).fail(handleFailure); //haciendo el onload de la api,con funciones de respuesta positiva y negativa

//funcion con la respuesta positiva para manipular su data
function handleResponse(data) {
    console.log('the ajax request has finished!');
    //console.log(data);
    var dataPokemon = data.pokemon_entries;
    //console.log(dataPokemon);
    pokeInfo(dataPokemon)
};

// funcion con la respuesta negativa
function handleFailure() {
    console.log('Vuelve a intentar')
};

//función para obtener nombre y url de los pokemon
function pokeInfo(dataPokemon) {
    dataPokemon.forEach(function(data) {
        var speciesPokemon = data.pokemon_species;
        //var urlPokemons = speciesPokemon.url;
        var namePokemons = speciesPokemon.name;
        //console.log(urlPokemons, namePokemons);

        paintElements(namePokemons);

        // $.ajax({
        //     url: `https://pokeapi.co/api/v2/pokemon/${urlPokemons}`,
        // }).done(detailsPokemon).fail(handleFailure)

        //console.log(urlPokemons);
    });
}

function paintElements(namePokemons) {
    //crear elementos con sus clases y atributos
    var $divCard = $("<div />").addClass("card col-md-2");
    var $imgPokemon = $("<img />").addClass("card-img-top");
    var $cardPokemon = $("<div />").addClass("card-body");
    var $sectionIcons = $("<div />").addClass("icons");
    var $imgPokeball = $("<img />").addClass("style-icons");
    var $imgHeart = $("<img />").addClass("style-icons");
    var $imgData = $("<img />").addClass("style-icons");
    var $nameCard = $("<h5 />").addClass("card-title");
    $imgPokeball.attr("src", "assets/icon/pokeball_gray.png");
    $imgHeart.attr("src", "assets/icon/valentines-heart.png");
    $imgData.attr("src", "assets/icon/data.png");
    $nameCard.text(namePokemons);
    $imgPokemon.attr("src", "assets/img/267.png");
    $divCard.attr("style", "width: 18rem;");
    //var $urlCard = $("<a />").addClass("btn btn-primary");
    //$urlCard.text("URL");
    //$urlCard.attr("href", urlPokemons);
    //$cardPokemon.append($urlCard);

    //agregar elementos hijos a su padre
    $sectionIcons.append($imgPokeball);
    $sectionIcons.append($imgHeart);
    $sectionIcons.append($imgData);
    $cardPokemon.append($nameCard);
    $cardPokemon.append($sectionIcons);
    $divCard.append($cardPokemon);
    $divCard.append($imgPokemon);
    $("#section-all").append($divCard)

    console.log("si entra");
};

// function detailsPokemon() {
//     console.log("respuesta")
// }