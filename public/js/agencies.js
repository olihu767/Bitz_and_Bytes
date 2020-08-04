// Fetch the data from the packages database in MongoDB

fetch('http://localhost:3000/api/agencies') 

// fetch('https:// https://travel-experts-prototype.herokuapp.com/api/agencies')
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {

   const agenciesList = data;

    let agenciesTemplate = ''; 

    const agencies = document.querySelector('.agencies'); 

    agenciesList.forEach(function(item){
      agenciesTemplate += 
        `<figure>
        <ul>
          <li>${item.AgncyCity}</li>   
          <li>${item.AgncyAddress}</li>
          <li>${item.AgncyProv}</li> 
          <li>${item.AgncyPostal}</li>   
          <li>${item.AgncyCountry}</li>  
          <li>Office:${item.AgncyPhone}</li>    
          <li>Fax:${item.AgncyFax}</li>      
        </ul>
        </figure>`;
});
    agencies.innerHTML = agenciesTemplate;  
});

