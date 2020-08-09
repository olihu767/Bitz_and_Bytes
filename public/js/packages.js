// Fetch the data from the packages database in MongoDB

// fetch('http://localhost:3000/api/packages')
  fetch('https:// https://bitzandbytes.herokuapp.com/api/packages')
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {

    const packagesList = data;

    let packagesTemplate = '';

    const packages = document.querySelector('.packages');

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
  