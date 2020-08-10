// Fetch the data from the packages database in MongoDB
// use local 3000 for testing
// fetch('http://localhost:3000/api/packages')

  fetch('https://bitzandbytes.herokuapp.com/api/packages')
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {

    const packagesList = data;

    let packagesTemplate = '';

    const packages = document.querySelector('.packages');

//     This is our attempt at creating a way to compare our package start date with the actual current date.
// Since we are doing this on the front end, we are using Date.now which provides a unix time stamp of the current 
// date in seconds, we then compare it to our package start date converted into an integer, and then into seconds. An "if" 
// statement then would use the outcome of the comparison to change a class of css to make a change that the user would
// see as defining the package date as no longer selectable. This broke our packages page, whether placed inside or outside
// the loop. If we had used .Find instead of a loop to call our packages we are speculating that we may have been able to get it
// to work. 

// var pkgDate = parseInt((new Date('${item.PkgStartDate}').getTime() / 1000).toFixed(0));
// var currentDate = Math.floor(Date.now()/1000);
//     if (currentDate < pkgDate){
//         className = goodDate};
//         else{
//             className = badDate
//      

    packagesList.forEach(function (item) {
      packagesTemplate +=
        `<figure>
          <div class="label">${item.PkgName}</div>
          <img src="https://picsum.photos/id/${item.ImgId}/300" alt="${item.PkgName}">
          </a>
          <ul>
            <li>${item.PkgDesc}</li><br>
            <li>Promotion Start Date: ${item.PkgStartDate}</li>
            <li>Promotion End Date: ${item.PkgEndDate}</li><br>
            <li>Book today starting from only: $${item.PkgBasePrice} CAD</li>
            <button class="order_btn"><a href ="/${item.PkgPage}">Book Now!</a></button>
          </ul>
        </figure>`;
      packages.innerHTML = packagesTemplate;
    });
  });
  