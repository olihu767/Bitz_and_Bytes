fetch('http://localhost:3000/api/agents') 

// fetch('https:// https://travel-experts-prototype.herokuapp.com/api/agents')
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {

   const agentsList = data;

    let agentsTemplate = ''; 

    const agents = document.querySelector('.agents'); 

    agentsList.forEach(function(item){
      agentsTemplate += 
        `<figure>
        <ul>
        <legend>Travel Agent:</legend>
          <li>${item.AgtFirstName}</li>   
          <li>${item.AgtLastName}</li>
          <li>Office:${item.AgtBusPhone}</li> 
          <li>Email: ${item.AgtEmail}</li>  
        </ul>
        </figure>`;
});
    agents.innerHTML = agentsTemplate;  
});

