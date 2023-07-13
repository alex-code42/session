console.clear();

const input = document.querySelector('[data-js="toUpperCase"]');


input.addEventListener("input", (event) =>{
    // console.log("yes")
    // console.log(event)
    console.log(input.value)
    input.value = input.value.toUpperCase()
  
 
  })