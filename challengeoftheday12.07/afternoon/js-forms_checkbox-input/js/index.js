console.clear();

const form = document.querySelector('[data-js="form"]');
const tosError = document.querySelector('[data-js="tos-error"]');

function hideTosError() {
  tosError.setAttribute("hidden", "");
}

function showTosError() {
  tosError.removeAttribute("hidden");
}

form.addEventListener("submit", (event) => {
  event.preventDefault();



  // --v-- write your code here --v--

  const form = event.target
    const formData = new FormData(form)
    const data = Object.fromEntries(formData)
    console.log(data)
    console.log(data.tos)

    if (data.tos === "on"){
      alert("Form submitted");
      showTosError()
    }
    else{
      alert("Click terms of use");
      hideTosError()
    }
  
    

  // --^-- write your code here --^--

  // eslint-disable-next-line no-alert
  
});
