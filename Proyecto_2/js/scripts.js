
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
          
          if (propiedades["Image Gallery"][1].src === null || propiedades["Image Gallery"][1].src === ""){
              imagen = "https://imgs.search.brave.com/5Y4zHvjKUmHZPCaeYHYalEBo5gAaevYDvuX582IUCqA/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9waWN0/dXJlc29mbWFpZGVu/aGVhZC5maWxlcy53/b3JkcHJlc3MuY29t/LzIwMTkvMDEvaW1h/Z2Utbm90LWZvdW5k/LmpwZw"
          }
          else{
            imagen = propiedades["Image Gallery"][1].src
          }
          if(propiedades["Species Name"] === null){
            nombre = "Sin definir"
          }
          else{
            nombre = propiedades["Species Name"]
          }
          if(propiedades["Scientific Name"] === null){
            nombreC = "Sin definir"
          }
          else{
            nombreC = propiedades["Scientific Name"]
          }
          if(propiedades["Quote"] === null){
            desc = "Sin descripción"
          }
          else{
            desc = propiedades["Quote"]
          }
          if(propiedades["Population"] === null){
            pop = "Sin especificar"
          }
          else{
            pop = propiedades["Population"]
          }
          if(propiedades["Color"] === null){
            color = "Sin especificar"
          }
          else{
            color = propiedades["Color"]
          }
          if (propiedades["Calories"] === null){
            calorias = "0"
          }
          else{
            calorias = propiedades["Calories"]
          }
          if(propiedades["Carbohydrate"] === null){
            carbo = "0"
          }
          else{
            inCar = propiedades["Carbohydrate"].indexOf("g")-1
            carbo = propiedades["Carbohydrate"].slice(0,inCar)
          }
          if(propiedades["Cholesterol"] === null){
            coles = "0"
          }
          else{
            inChol = propiedades["Cholesterol"].indexOf("m")-1
            coles = propiedades["Cholesterol"].slice(0,inChol)
          }
          if(propiedades["Serving Weight"] === null){
            serv = "0"
          }
          else{
            inServ = propiedades["Serving Weight"].indexOf(" ")
            serv = propiedades["Serving Weight"].slice(0,inServ)
            console.log(serv)
          }
          if(propiedades["Servings"] === null){
            servs = "0"
          }
          else{
            servs = propiedades["Servings"]
            console.log(servs)
          }





          // Inicio del procesamiento
          document.getElementById('respuesta').innerHTML = `
          <div class="fila1">
            <div class="card">
              <img src="${imagen}" class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title">${nombre}</h5>
                <h2 class="card-subtitle">${nombreC}</h2>
                <p class='description'>${desc}</p>
                <p class='population'>Population:</p><p class='pop_text'> ${pop}</p>
                <p class='weight'>Color: </p><p class='cal_text'> ${color}</p>

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
                              <caption> Nutritive Data </caption> <thead><tr><th scope="col"> Data </th> <th scope="col"> Progress </th></tr></thead> <tbody><tr><th scope="row"> Calories</th> <td style="--size:0.${calorias};"><span class="data">${calorias}</span></td></tr> <tr><th scope="row"> Carbohydrate </th> <td style="--size:0.${carbo};"><span class="data">${carbo}</span></td></tr> <tr><th scope="row"> Cholesterol</th> <td style="--size:0.${coles}"><span class="data">${coles}</span></td></tr></tbody>

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
                              <table class="charts-css bar multiple show-labels show-primary-axis data-spacing-10" id="graph2">
                              <caption> Nutritive Data </caption> <thead><tr><th scope="col"> Data </th> <th scope="col"> Progress </th></tr></thead> <tbody><tr><th scope="row"> Serving Weight</th> <td style="--size:0.${serv};"><span class="data2">${serv}</span></td></tr> <tr><th scope="row"> Serving Size </th> <td style="--size:0.0${servs};"><span class="data2">${servs}</span></td></tr></tbody>

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