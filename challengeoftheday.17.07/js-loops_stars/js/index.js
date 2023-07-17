console.clear();

const starContainer = document.querySelector('[data-js="star-container"]');

console.log(starContainer)

starContainer.addEventListener("click", (event)=>{
  
  console.log(event.target.id)
  let id = event.target.id
  console.log(id)
  renderStars(id);

});

function renderStars(filledStars) {
  // reset the star container before rerendering stars
  starContainer.innerHTML = "";

  //--v-- your code here --v--
   
    
    for (let i = 1; i <= 5; i++)  {
      if (filledStars >= i) {
        const newImg = document.createElement("img");
        newImg.setAttribute("src", "assets/star-filled.svg");
        newImg.setAttribute("id", i);
        starContainer.append(newImg)
      }
      else{
        const newImg = document.createElement("img");
        newImg.setAttribute("src", "assets/star-empty.svg");
        newImg.setAttribute("id", i);
        starContainer.append(newImg)
      }
      
    }  
    

  //--^-- your code here --^--
}

renderStars(3);


// ### Part 1: Render Stars

// Start by rendering 5 empty stars in the `starContainer`. For that, switch to [`index.js`](./js/index.js) and write the function `renderStars`:

// - Use a for loop inside the function to repeat the following code five times.
//   💡 Start the loop with the value 1, not with 0
// - Inside the for loop, create an image element and set the "src" attribute to the path of the empty star image ("assets/star-empty.svg")
// - append the star to the `starContainer`.

// Now we want to render a certain number of filled stars, depending on the argument given to the function:

// - Add a new parameter to the `renderStars` function, named `filledStars`. Expect its value to be a number.
// - Inside the loop, as you create each star, use the value of `filledStars` to decide if a filled or an empty star should be created.
//   💡 Use the counter variable of the for loop to check which star is currently being created (the first, second, third...)
// - Depending on whether a filled or an empty star should be created, set the `src` of the image element to the filled or empty star image URL.
// - Change the code that calls `renderStars`: pass in a number between 0 and 5 as an argument, and see if it works as expected!