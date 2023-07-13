console.clear();

const toastContainer = document.querySelector('[data-js="toast-container"]');
const addButton = document.querySelector('[data-js="add-button"]');
const clearButton = document.querySelector('[data-js="clear-button"]');

addButton.addEventListener("click", () => {
  // Exercise: Append a new entry to the toast messages container
  const listItem = document.createElement('li')
  // listItem.setAttribute('class', "toast-container__message");
  // listItem.className = "toast-container__message"
  listItem.classList.add("toast-container__message")
  listItem.innerHTML = "I'm a toast message.";
 toastContainer.append(listItem);
});

clearButton.addEventListener("click", () => {
  // Exercise: Clear the stack of toast messages
  console.log('toastContainer: ', toastContainer);
  toastContainer.innerHTML='';
 
});
