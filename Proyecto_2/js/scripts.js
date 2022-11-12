
window.onload = function () {


  
    document.getElementById('search').addEventListener('click', () => {
  
  
      let id = document.getElementById("form1").value
      let url = `https://www.fishwatch.gov/api/species/${id}`
  
      fetch(url)
        .then(response => response.json())
        .then( response => {
          let propiedades = response[0]
          console.log(propiedades)
          
          
          if(propiedades == null){
            document.getElementById('respuesta').innerHTML = `
            <div class="card">
            That fish is not swimming here...
            </div>
          `
          }
          else{
          // Inicio del procesamiento
          document.getElementById('respuesta').innerHTML = `
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
          `
          }
          // Fin del procesamiento
          
        })
        .catch(error => {
          document.getElementById('response').innerHTML = JSON.stringify(error.message)
        })
  
    })
  
  }