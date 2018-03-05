//funcion con la respuesta positiva para manipular su data
const handleResponse = (data) => {
    console.log('the ajax request has finished!');
    //console.log(data);
    let dataPokemon = data.pokemon_entries;
    //console.log(dataPokemon);
    pokeInfo(dataPokemon);
};

// funcion con la respuesta negativa
const handleFailure = () => {
    console.log('Vuelve a intentar')
};

//funcion para jalar informacion detallada de cada pokemon, de acuerdo al request de la api
const detailsPokemon = (dataDetail) => {
    console.log('the ajax request has finished!url');
    //console.log(data);
    let name = dataDetail.name;
    console.log(name);
    let weight = dataDetail.weight;
    console.log(weight);
    let height = dataDetail.height;
    console.log(height);

    modal(name, weight, height);

    // //traer elementos del html
    // let modalName = document.getElementById("modal-name");
    // let modalHeight = document.getElementById("modal.height");
    // let modalWeight = document.getElementById("modal-weight");

    // //agregarles info a los elementos
    // modalName.innerHTML = name;
    // consolelog("modalname", modalName)
    // modalHeight.textContent = height;
    // modalWeight.innerHTML = weight;
};

//funcion para agregar datos de la api al modal
const modal = (name, weight, height) => {
    //traer elementos del html
    let modalName = document.getElementById("modal-name");
    let modalWeight = document.getElementById("modal-weight");
    let modalHeight = document.getElementById("modal.height");

    //agregarles info a los elementos
    modalName.innerHTML = name;
    modalWeight.innerHTML = weight;
    modalHeight.innerHTML = height;

    //detailsPokemon(name, weight, height);
};

//función para obtener nombre y url de los pokemon
const pokeInfo = (dataPokemon) => {
    dataPokemon.forEach(function(data) {
        let speciesPokemon = data.pokemon_species;
        let namePokemons = speciesPokemon.name;
        //console.log(namePokemons);
        $.ajax({
            url: `https://pokeapi.co/api/v2/pokemon/${namePokemons}`,
        }).done(detailsPokemon).fail(handleFailure);
        paintElements(namePokemons);

        //infoOfEachPokemon(dataPokemon)
    });


};

//funcion para pintar las cards de los pokemon
const paintElements = (namePokemons) => {
    //crear elementos con sus clases y atributos
    let $divCard = $("<div />").addClass("card col-md-2");
    let $imgPokemon = $("<img />").addClass("card-img-top");
    let $cardPokemon = $("<div />").addClass("card-body");
    let $sectionIcons = $("<div />").addClass("icons");
    let $imgPokeball = $("<img />").addClass("style-icons");
    let $imgHeart = $("<img />").addClass("style-icons");
    let $imgData = $("<img />").addClass("style-icons");
    let $linkModal = $("<a />").attr("href", "#modal");
    let $nameCard = $("<h5 />").addClass("card-title");
    $imgPokeball.attr("src", "assets/icon/pokeball_gray.png");
    $imgHeart.attr("src", "assets/icon/valentines-heart.png");
    $imgData.attr("src", "assets/icon/data.png");
    $linkModal.attr("data-toggle", "modal");
    $nameCard.text(namePokemons);
    $imgPokemon.attr("src", "assets/img/267.png");
    $divCard.attr("style", "width: 18rem;");
    //var $urlCard = $("<a />").addClass("btn btn-primary");
    //$urlCard.text("URL");
    //$urlCard.attr("href", urlPokemons);
    //$cardPokemon.append($urlCard);

    //agregar elementos hijos a su padre
    $divCard.append($imgPokemon);
    $sectionIcons.append($imgPokeball);
    $sectionIcons.append($imgHeart);
    $linkModal.append($imgData);
    $sectionIcons.append($linkModal);
    $cardPokemon.append($sectionIcons);
    $cardPokemon.append($nameCard);
    $divCard.append($cardPokemon);
    $("#section-all").append($divCard)

    console.log("si entra");
    //modal(name, weight, height);
    //detailsPokemon(name)
};

//haciendo la peticion con ajax
$.ajax({
        url: `https://pokeapi.co/api/v2/pokedex/1/`,
        data: { limit: 10 }
    }).done(handleResponse) //.fail(handleFailure); //haciendo el onload de la api,con funciones de respuesta positiva y negativa