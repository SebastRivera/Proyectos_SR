
window.onload = function () {


  
    document.getElementById('search').addEventListener('click', () => {
  
  
      let id = document.getElementById("form1").value
      let url = `https://www.fishwatch.gov/api/species/${id}`
  
      fetch(url)
        .then(response => response.json())
        .then( response => {
          let propiedades = response[0]
          
          if(propiedades == null){
            document.getElementById('respuesta').innerHTML = `
            <div class="card">
            That fish is not swimming here...
            </div>
          `
          }
          else{
          console.log(propiedades)
          inChol = propiedades["Cholesterol"].indexOf("m")-1
          inCar = propiedades["Carbohydrate"].indexOf("g")-1
          calorias = propiedades["Calories"]
          carbo = propiedades["Carbohydrate"].slice(0,inCar)
          coles = propiedades["Cholesterol"].slice(0,inChol)
          console.log(propiedades["Calories"])
          console.log(propiedades["Carbohydrate"].slice(0,inCar))
          console.log(propiedades["Cholesterol"].slice(0,inChol))
          // Inicio del procesamiento
          document.getElementById('respuesta').innerHTML = `
          <div class="fila1">
            <div class="card">
              <img src="${propiedades["Image Gallery"][0].src}" class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title">${propiedades["Species Name"]}</h5>
                <h2 class="card-subtitle">${propiedades["Scientific Name"]}</h2>
                <p class='description'>${propiedades["Quote"]}</p>
                <p class='population'>Population:</p><p class='pop_text'> ${propiedades["Population"]}</p>
                <p class='weight'>Calories: </p><p class='cal_text'> ${propiedades["Calories"]}</p>

              </div>
            </div>

            <div class="container-fluid">

            
              <!-- Content Row -->

                      <div class="grafico2">
                        <div class="shadow">
                            <!-- Card Header - Dropdown -->
                            <div
                                class="header-card">
                                <h6 class="tituloG">DATOS2</h6>
                                <div class="dropdown no-arrow">
                                        <a class="dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <i class="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
                                        </a>
                                        
                                 </div>
                                
                            </div>
                            <!-- Card Body -->
                            <div class="car-body">
                              <table class="charts-css column show-labels show-primary-axis show-4-secondary-axes" id="graph">
                              <caption> Nutritive Data </caption> <thead><tr><th scope="col"> Data </th> <th scope="col"> Progress </th></tr></thead> <tbody><tr><th scope="row"> Calories</th> <td style="--size:0.${calorias};"></td></tr> <tr><th scope="row"> Carbohydrate </th> <td style="--size:0.${carbo};"></td></tr> <tr><th scope="row"> Cholesterol</th> <td style="--size:0.${coles}"></td></tr></tbody>

                              </table>


                            </div>
                        </div>
                    </div>

                    <div class="grafico2">
                        <div class="shadow">
                            <!-- Card Header - Dropdown -->
                            <div
                                class="header-card">
                                <h6 class="tituloG">DATOS2</h6>
                                <div class="dropdown no-arrow">
                                        <a class="dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <i class="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
                                        </a>
                                        
                                 </div>
                                
                            </div>
                            <!-- Card Body -->
                            <div class="car-body">
                              <table class="charts-css bar multiple hide-data show-labels show-primary-axis" id="graph">
                              <caption> Nutritive Data </caption> <thead><tr><th scope="col"> Data </th> <th scope="col"> Progress </th></tr></thead> <tbody><tr><th scope="row"> Calories</th> <td style="--size:0.${calorias};"></td></tr> <tr><th scope="row"> Carbohydrate </th> <td style="--size:0.${carbo};"></td></tr> <tr><th scope="row"> Cholesterol</th> <td style="--size:0.${coles}"></td></tr></tbody>

                              </table>


                            </div>
                        </div>
                    </div>

    
            </div>
          </div>
        `




          }
          // Fin del procesamiento
          
        })
        .catch(error => {
          document.getElementById('response').innerHTML = JSON.stringify(error.message)
        })
  
    })
  
  }