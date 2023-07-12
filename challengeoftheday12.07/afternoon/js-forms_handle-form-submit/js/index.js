console.clear();

const form = document.querySelector('[data-js="form"]');

form.addEventListener("submit", (event) => {
    event.preventDefault()
})


form.addEventListener('submit', handleSubmit)

function handleSubmit(event){
    event.preventDefault()
    const form = event.target
    const formData = new FormData(form)
    const data = Object.fromEntries(formData)
    console.log(data)
    console.log(data.age)

    const agebadnesssum = Number(data.age) + Number(data.badness)
    
    console.log("agebadnesssum", agebadnesssum)

    console.log(`The age-badness-sum of ${data.firstName} is ${agebadnesssum}`)
    return data
    
}



// event is an object with properties
