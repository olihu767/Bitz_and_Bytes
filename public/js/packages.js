// Fetch the data from the packages database in MongoDB

fetch('http://localhost:3000/api/packages') 
// fetch('https:// https://travel-experts-prototype.herokuapp.com/api/packages')
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {

    const packagesList = data;

    let packagesTemplate = ''; 

    const packages = document.querySelector('.packages');
     
    const pkgDate = parseInt((new Date(`${item.PkgStartDate}`).getTime() / 1000).toFixed(0));
    const currentDate = moment().unix();
        if (currentDate < pkgDate){
            className = "goodDate"}
        else {}; 

    packagesList.forEach(function(item){
     

      packagesTemplate += 
        `<figure>
          ${item.PkgName}
          <img src="https://picsum.photos/id/${item.ImgId}/300" alt="${item.PkgName}">
          </a>
          <ul>
            <li>${item.PkgDesc}</li>
            <li>Promotion Start Date: ${item.PkgStartDate}</li>
            <li>Promotion End Date: ${item.PkgEndDate}</li>
            <li>Book today starting from only: $${item.PkgBasePrice}CAD</li>
            <button><a href = "/${item.PkgPage}">Book Now!</a></button>
          </ul>
        </figure>`;
   
    packages.innerHTML = packagesTemplate;  
  });
});
    