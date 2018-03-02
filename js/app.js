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
        //console.log(urlPokemons, namePokemons);

        paintElements(namePokemons, urlPokemons);
    });
   
};

function paintElements(namePokemons, urlPokemons){
   //crear elementos con sus clases y atributos
   //<div class="card" style="width: 18rem;">
     //<img class="card-img-top" src="assets/img/267.png" alt="Card image cap">
     //<div class="card-body">
      //<h5 class="card-title">Card title</h5>
       //<a href="#" class="btn btn-primary">URL</a>
     //</div> 
   //</div>
   var $divCard = $("<div />").addClass("card col-md-3");
   var $cardPokemon = $("<div />").addClass("card-body");
   var $imgPokemon = $("<img />").addClass("card-img-top");
   var $nameCard = $("<h5 />").addClass("card-title");
   var $urlCard = $("<a />").addClass("btn btn-primary");
   $imgPokemon.attr("src","assets/img/267.png");
   $nameCard.text(namePokemons);
   $urlCard.text("URL");
   $urlCard.attr("href", urlPokemons);
   $divCard.attr("style", "width: 18rem;");

   //agregar elementos hijos a su padre
   $cardPokemon.append($nameCard);
   $cardPokemon.append($urlCard);
   $divCard.append($cardPokemon);
   $divCard.append($imgPokemon);
   $("#section-all").append($divCard)

   console.log("si entra");
};

//haciendo la peticion con ajax
$.ajax({
    url: `https://pokeapi.co/api/v2/pokedex/1/`,
    data:{limit:100}
}).done(handleResponse); //haciendo el onload de la api