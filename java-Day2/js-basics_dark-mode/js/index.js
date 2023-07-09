console.clear();
const darkButton = document.querySelector('[data-js="dark-mode-button"]');
const lightButton = document.querySelector('[data-js="light-mode-button"]');
const toggleButton = document.querySelector('[data-js="toggle-button"]');
const bodyElement = document.querySelector('[data-js="body"]');

console.log(darkButton);
console.log(bodyElement);
console.log(toggleButton)

darkButton.addEventListener("click", function(){
    bodyElement.classList.add("dark");
    darkButton.textContent = "Darkmode on";
})

lightButton.addEventListener("click", function(){
    bodyElement.classList.remove("dark");
})

toggleButton.addEventListener("click", function(){
    bodyElement.classList.toggle("dark");
})




