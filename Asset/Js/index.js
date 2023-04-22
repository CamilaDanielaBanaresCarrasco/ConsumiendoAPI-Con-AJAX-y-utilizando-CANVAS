   //intrucciones 

//-----------------------Consumiendo API FORMA DEL PROFE----------------------------
var respuestaBoton = document.querySelector("#btnConsulta")
respuestaBoton.addEventListener(`click`,function(){
    var txtNombrePokemon = document.querySelector("#nombrePokemon").value; // el valor de lo que contiene la etiqueta con el id nombrePokemon
    console.log(txtNombrePokemon); //Verifico
    $.ajax({ 
        type: "get",
        url: "https://pokeapi.co/api/v2/pokemon/"+ txtNombrePokemon,
        dataType: "json",
        success: function (response) {
            console.log(response); //Verifico
            //---------------------Trabajando con canvas---------------------------------------


 // window.onload = function () { Cada vez que se cargue la pagina hace esta funcion

    var chart = new CanvasJS.Chart("chartContainer", { //instanciar un objeto de tipo CanvasJS
        theme: "dark1", // "light2", "dark1", "dark2"
        animationEnabled: true, // change to true		
        title:{
            text: response.name
        },
        data: [
        {
            type: "column",
            dataPoints: [
                { label: "Hp",  y: response.stats[0].base_stat  },
                { label: "Attack", y: response.stats[1].base_stat  },
                { label: "Defense", y: response.stats[2].base_stat  },
                { label: "Ataque ataque", y: response.stats[3].base_stat  },
                { label: "Ataque especial",  y: response.stats[4].base_stat  },
                { label: "Defenza",  y: response.stats[5].base_stat  }
            ]
        }
        ]
    });
    chart.render();
    
     // }


//--------------------------------------------------------


        }
    });
});


//--------------------

