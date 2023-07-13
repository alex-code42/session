console.clear();

const form = document.querySelector('[data-js="form"]');
const firstName = document.querySelector('[data-js="firstName"]');
const lastName = document.querySelector('[data-js="lastName"]');
const age = document.querySelector('[data-js="age"]');

console.log(firstName)

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);

  console.log(data);
  console.log(data.firstName);
  console.log(data.tos);

  if (data.tos === "on"){
    console.log("Nice done")
  }
  else{
    alert("You need to agree")
  }
});


firstName.addEventListener("input", (event) =>{
  // console.log("yes")
  // console.log(event)
  // console.log(firstName.value)

  if (firstName.value.length > 3 && firstName.value.length< 30){
    console.log("Nice First Name!!!")
  }
})

lastName.addEventListener("input", (event) =>{
  // console.log("yes")
  // console.log(event)
  // console.log(lastName.value)

  if (lastName.value.length > 3 && lastName.value.length< 30){
    console.log("Nice Last Name!!!")
  }
})

age.addEventListener("input", (event) =>{
  // console.log("yes")
  // console.log(event)
  console.log(age.value)

  if (age.value >= 14){
    console.log("old enough")
  }


  
})

























console.log("%cSpiced is nice", "color: yellow; font-style: italic; background-color: blue;padding: 2px");

