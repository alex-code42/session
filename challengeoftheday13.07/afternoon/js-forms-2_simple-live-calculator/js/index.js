console.clear();

const firstInput = document.querySelector('[data-js="firstValue"]');
const secondInput = document.querySelector('[data-js="secondValue"]');
const result = document.querySelector('[data-js="result"]');



firstInput.addEventListener("input", (event) =>{
    // console.log("yes")
    // console.log(event)
    
    result.innerHTML= +secondInput.value * +firstInput.value

  })

  secondInput.addEventListener("input", (event) =>{
    // console.log("yes")
    // console.log(event)
    
    result.innerHTML= +secondInput.value * +firstInput.value
    
  })