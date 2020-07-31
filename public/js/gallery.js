 fetch('http://localhost:3000/api/destinations') 
//  fetch('https://cprg210-travel.herokuapp.com/api/destinations')
  .then(function(response) {
    return response.json();
  })
  .then(function(destinations) {

   const imgList = destinations;

    // Variable where we will store our img tags
    let imgTemplate = ''; 

    // Flex container for images
    const gallery = document.querySelector('.gallery'); 

    // Loop through items using forEach (available on every array)
    imgList.forEach(function(item){
      imgTemplate += 
        `<figure>
        <a href="${item.id}">
        <img src="https://picsum.photos/id/${item.id}/350" alt="${item.title}">
        </a>
        <figcaption> Most popular destinations in ${item.title}!</figcaption>
        </figure>`;
});

    // Add HTML img string to gallery container
    gallery.innerHTML = imgTemplate;

});

  

// fetch('https:// https://travel-experts-prototype.herokuapp.com/api/************')
//   .then(function(response) {
//     return response.json();
//   })
//   .then(function(packages) {

//    const imgList = packages;

   
//     let imgTemplate = ''; 

   
//     const gallery = document.querySelector('.gallery'); 

   
//     imgList.forEach(function(item){
//       imgTemplate += 
//         `<figure>
//         <a href="${item.id}">
//         <img src="https://picsum.photos/id/${item.id}/350" alt="${item.title}">
//         </a>
//         <figcaption> Most popular destinations in ${item.title}!</figcaption>
//         </figure>`;
// });

//     gallery.innerHTML = imgTemplate;

// });
 