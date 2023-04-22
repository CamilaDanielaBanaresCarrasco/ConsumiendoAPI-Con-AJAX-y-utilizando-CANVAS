   //intrucciones 


var respuestaBoton = document.querySelector("#btnConsulta")
respuestaBoton.addEventListener(`click`,function(){
    var txtNombrePokemon = document.querySelector("#nombrePokemon").value; // el valor de lo que contiene la etiqueta con el id nombrePokemon
    console.log(txtNombrePokemon); //Verifico
    $.ajax({ 
        type: "get",
        url: "https://pokeapi.co/api/v2/pokemon/"+ txtNombrePokemon,
        dataType: "json",
        success: function (response) {
            console.log(response);
        }
    });
});





